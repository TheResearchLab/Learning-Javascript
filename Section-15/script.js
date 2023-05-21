'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

let map;  
let mapEvent;

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

class App {
    #map;
    #mapEvent;

    constructor() {
        this._getPosition();
    }

    _getPosition() {
        if(navigator.geolocation)
        // two function params (success and failure)
        navigator.geolocation.getCurrentPosition(this._loadMap.bind(this),function(){
            alert('could not get your current position');
        })
    }

    _loadMap(position) {
        
            console.log(position);
            const coords = [position.coords.latitude,position.coords.longitude]
            //console.log(`https://www.google.com/maps/@${latitude},${longitude},17z`);
            this.#map = L.map('map').setView(coords, 13);
            console.log(map);
            
            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(this.#map);
    
            
            // Handling clicks on map
            this.#map.on('click', function(mapE) {
                this.#mapEvent = mapE;
                form.classList.remove('hidden'); // show log form
                inputDistance.focus() // focus on the input distance on load  
            })
    }
    _showForm() {}
    _toggleElevationField() {}
    _newWorkout() {}
}

const app = new App();
console.log(app);

