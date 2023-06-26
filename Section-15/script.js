'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];




// Video 232 - Geolocation API- 
/*
if(navigator.geolocation)
    // two function params (success and failure)
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
        const coords = [position.coords.latitude,position.coords.longitude]
        //console.log(`https://www.google.com/maps/@${latitude},${longitude},17z`);
        map = L.map('map').setView(coords, 13);
        console.log(map);
        
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

        
        // Handling clicks on map
        map.on('click', function(mapE) {
            mapEvent = mapE;
            form.classList.remove('hidden'); // show log form
            inputDistance.focus() // focus on the input distance on load
            
        })
        
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        const marker = L.marker(coords).addTo(map);

        marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    
        
    
    },function(){
        alert('could not get your current position');
    });

form.addEventListener('submit',function(e){
    e.preventDefault();

    //Clear input
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    
    // Display Marker
    const {lat,lng} = mapEvent.latlng;
    console.log(lat,lng);

    const marker = L.marker([lat,lng]).addTo(map);

    marker.bindPopup(L.popup({
                                maxWidth:250,
                                minWidth:100,
                                autoClose:false,
                                closeOnClick:false,
                                className:'running-popup'}))
                                .setPopupContent('Workout')
                                .openPopup();
})


inputType.addEventListener('change',function() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})

    // Video 233 - Displaying Map (Leaflet Library)
// added to above code
*/

// Video 237 - Refactor for project architecture

class Workout {
    date = new Date();
    id = (Date.now()+'').slice(-10);
    clicks = 0;
    
    constructor(coords,distance,duration){
        //this.date = ...
        //this.id = ...
        this.coords = coords; //[lat,lng]
        this.distance = distance; // in km
        this.duration = duration; // in minutes
    }

    _setDescription() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        this.description = `${this.type[0].toUpperCase()+this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDay()} `

    }

    click() {
        this.clicks++;
    }
}

class Running extends Workout {
    type='running'

    constructor(coords,distance,duration,cadence) {
        super(coords, distance, duration);
        this.cadence = cadence;
        this.calcPace();
        this._setDescription(); // this will have access to parent class method and child class type property
    }

    calcPace() {
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace
    }
}

class Cycling extends Workout {
    type='cycling'

    constructor(coords,distance,duration,elevationGain) {
        super(coords, distance, duration);
        this.elevationGain = elevationGain;
        this.calcSpeed()
        this._setDescription(); // this will have access to parent class method and child class type
    }

    calcSpeed() {
        // speed 
        this.speed = this.distance/(this.duration/60);
        return this.speed; 
    }

    
}

const run1 = new Running([42,-85],100,120,178);
const cycling1 = new Cycling([39,-12],27,95,523);
//console.log(run1,cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Application Architecture
class App {
    #map;
    #mapZoomLevel = 13;
    #mapEvent;
    #workouts = [];

    constructor() {
        // Get users position
        this._getPosition();

        // Get local storage
        this._getLocalStorage();

        // attach event handlers
        form.addEventListener('submit',this._newWorkout.bind(this))
        inputType.addEventListener('change',this._toggleElevationField)
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))
    }

    _getPosition() {
        if(navigator.geolocation)
        // two function params (success and failure)
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
            alert('could not get your current position');
        })
    }

    _loadMap(position) {
        
            //console.log(position);
            const coords = [position.coords.latitude,position.coords.longitude]
            //console.log(`https://www.google.com/maps/@${latitude},${longitude},17z`);
            //console.log(this);
            this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
            //console.log(this.#map);
            
            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(this.#map);
    
            
            // Handling clicks on map listener
            this.#map.on('click', this._showForm.bind(this));

            // Load map only after the map object has been created
            this.#workouts.forEach(work => {
                this._renderWorkoutMarker(work);
            })
    }
    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden'); // show log form
        inputDistance.focus() // focus on the input distance on load  
    }

    _hideForm() { // Video 240 - 22:00
        // Empty inputs
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => form.style.display = 'grid',1000)
    }

    _toggleElevationField() {
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
        
    }

    _newWorkout(e) {
        
        // Validator helper functions
        const allNumbers = (...inputs) => 
            inputs.every(inp => Number.isFinite(inp))
        const allPositive = (...inputs) =>
            inputs.every(inp => +inp >= 0)
        
        // Prevent default
        e.preventDefault();

        // Get data from the form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const {lat,lng} = this.#mapEvent.latlng;
        let workout;
        //console.log(lat,lng);


        // If running, create running.
        if(type === 'running') {
            const cadence = +inputCadence.value;
            // Check if data is valid
            if(
                !allNumbers(distance,duration,cadence) || 
                !allPositive(distance,duration,cadence)
                ) return alert('inputs have to be positive number');

            workout = new Running([lat,lng],distance,duration,cadence);
           // console.log(workout);
                
        }

        // If running, create running.
        if(type === 'cycling') {
            const elevation = +inputElevation.value;
            // check if data is valid
            if(
                !allNumbers(distance,duration,elevation) || 
                !allPositive(distance,duration)
                ) return alert('inputs have to be positive number');
                
            workout = new Cycling([lat,lng],distance,duration,elevation);
                
        }

        //console.log(type);

        // Add new object to workout array
        this.#workouts.push(workout);
        //console.log(workout);

        // Render workout on map as marker
        this._renderWorkoutMarker(workout);

        // Render workout on list
        this._renderWorkout(workout)

        // Hide form + clear input fields
        this._hideForm();

        // set local storage to all workouts
        this._setLocalStorage();
        
    
        
    }

    _renderWorkoutMarker(workout) {
       // console.log(workout);
        
        const marker = L.marker(workout.coords).addTo(this.#map);
    
        marker.bindPopup(L.popup({
                                    maxWidth:250,
                                    minWidth:100,
                                    autoClose:false,
                                    closeOnClick:false,
                                    className:`${workout.type}-popup`}))
                                    .setPopupContent(`${workout.type === 'running' ? '🏃‍♂️':'🚴‍♀️'} ${workout.description}`)
                                    .openPopup();
    }

    _renderWorkout(workout) {
        let html = `
        <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${workout.type === 'running' ? '🏃‍♂️':'🚴‍♀️'}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
        `;

        if(workout.type === 'running')
            html += 
                `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
            </div>
            <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
            </div>
            </li>`
        
        if(workout.type === 'cycling')
            html += 
                `<div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.speed.toFixed(1)}</span>
                <span class="workout__unit">km/h</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">⛰</span>
                <span class="workout__value">${workout.elevationGain}</span>
                <span class="workout__unit">m</span>
              </div>
              </li>`;

              form.insertAdjacentHTML('afterend',html);
    }

    _moveToPopup(e) { 
        const workoutEl = e.target.closest('.workout')
        
        if(!workoutEl) return;

        const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);
        //console.log(workout);

        // zooms map to focus on specific area
        this.#map.setView(workout.coords,this.#mapZoomLevel, {
            animate:true,
            pan:{
                duration: 1,
            }
        } )

        // increase click count... public method interface example
        //workout.click();
    }

    _setLocalStorage() {
        localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    }

    _getLocalStorage() {
        const data = JSON.parse(localStorage.getItem('workouts'));
        //console.log(data);

        if(!data) return;
        this.#workouts = data;

        this.#workouts.forEach(work => {
            this._renderWorkout(work);
        })
      //  console.log(this.#workouts);
    }

    reset() {
        localStorage.removeItem('workouts');
        location.reload();
    }

}

const app = new App();
//console.log(app);

