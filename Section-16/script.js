'use strict';


const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError =  function(msg) {
    countriesContainer.insertAdjacentText('beforeend',msg)
    //countriesContainer.style.opacity = 1
}

const renderCountry = function (data, className = '') {
    
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.official}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${[Object.keys(data.languages).slice(0,3)]}</p>
        <p class="country__row"><span>💰</span>${[Object.keys(data.currencies)]}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };




///////////////////////////////////////
// https://restcountries.com/v2/

/*

// const request = new XMLHttpRequest(); // old school way
// //request.open('GET','https://countryapi.io/api/name/United States?apikey=VPpAoYRG7u4fgF5PqYpqeP5EzjTDb1edl4QuFW96');
// request.send();

// request.addEventListener('load', function() {
//     console.log(this.responseText);

//     const data = JSON.parse(this.responseText);
//     console.log(data);


//     const html = `
//     <article class="country">
//           <img class="country__img" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" />
//           <div class="country__data">
//             <h3 class="country__name">United States</h3>
//             <h4 class="country__region">REGION</h4>
//             <p class="country__row"><span>👫</span>330 mil people</p>
//             <p class="country__row"><span>🗣️</span>ENG</p>
//             <p class="country__row"><span>💰</span>USD</p>
//           </div>
//         </article>`
//     countriesContainer.insertAdjacentHTML('beforeend',html);
//     countriesContainer.style.opacity = 1;
// });

const country = JSON.parse(`{"us":{"name":"United States","official_name":"United States of America","topLevelDomain":[".us"],"alpha2Code":"US","alpha3Code":"USA","cioc":"USA","numericCode":"840","callingCode":"+1201","capital":"Washington, D.C.","altSpellings":["US","USA","United States of America"],"region":"Americas","subregion":"North America","population":329484123,"latLng":{"country":[38,-97],"capital":[38.89,-77.05]},"demonyms":{"eng":{"f":"American","m":"American"},"fra":{"f":"Am\u00e9ricaine","m":"Am\u00e9ricain"}},"area":9372610,"gini":{"2018":41.4},"timezones":["UTC-12:00","UTC-11:00","UTC-10:00","UTC-09:00","UTC-08:00","UTC-07:00","UTC-06:00","UTC-05:00","UTC-04:00","UTC+10:00","UTC+12:00"],"borders":["CAN","MEX"],"nativeNames":{"eng":{"official":"United States of America","common":"United States"}},"currencies":{"USD":{"name":"United States dollar","symbol":"$"}},"languages":{"eng":"English"},"translations":{"ara":"\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629","ces":"Spojen\u00e9 st\u00e1ty","cym":"United States","deu":"Vereinigte Staaten","est":"Ameerika \u00dchendriigid","fin":"Yhdysvallat","fra":"\u00c9tats-Unis","hrv":"Sjedinjene Ameri\u010dke Dr\u017eave","hun":"Amerikai Egyes\u00fclt \u00c1llamok","ita":"Stati Uniti d'America","jpn":"\u30a2\u30e1\u30ea\u30ab\u5408\u8846\u56fd","kor":"\ubbf8\uad6d","nld":"Verenigde Staten","per":"\u0627\u06cc\u0627\u0644\u0627\u062a \u0645\u062a\u062d\u062f\u0647 \u0622\u0645\u0631\u06cc\u06a9\u0627","pol":"Stany Zjednoczone","por":"Estados Unidos","rus":"\u0421\u043e\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u0435 \u0428\u0442\u0430\u0442\u044b \u0410\u043c\u0435\u0440\u0438\u043a\u0438","slk":"Spojen\u00e9 \u0161t\u00e1ty americk\u00e9","spa":"Estados Unidos","swe":"USA","urd":"\u0631\u06cc\u0627\u0633\u062a\u06c1\u0627\u0626\u06d2 \u0645\u062a\u062d\u062f\u06c1","zho":"\u7f8e\u56fd"},"flag":{"small":"https:\/\/flagcdn.com\/24x18\/us.png","medium":"https:\/\/flagcdn.com\/96x72\/us.png","large":"https:\/\/flagcdn.com\/256x192\/us.png"},"regionalBlocs":[{"acronym":"NAFTA","name":"North American Free Trade Agreement","otherNames":["Tratado de Libre Comercio de Am\u00e9rica del Norte","Accord de Libre-\u00e9change Nord-Am\u00e9ricain"]}]}}`)


const usa = 'United States'
const portugal = 'Portugal'

const getCountryAndNeighbor = function (country) {
    

    //  //  Promises #1 - smaller and nicer code
    //  const request = fetch(`https://countryapi.io/api/name/${country}?apikey=hTexwsi7E5LOUIJMHSb1RmDBUtYAfYgQAcyiJU67`).then(response => response.json())  // returns another promise, resolved value of this promise is actual data
    //  .then(data => {
    //    let countryAbr = Object.keys(data)[0]
    //    renderCountry(data[countryAbr]);
    // })

    //  request.addEventListener('load', function() {
    //      console.log(this.responseText)
    //      let data = JSON.parse(this.responseText);
    //      let countryAbr = Object.keys(data)[0]
    //      data = data[countryAbr]
    //      // Render country 1
    //      renderCountry(data); 
    //      // Get neighbour country 2 
    //         const request2 = new XMLHttpRequest();
    //      request2.open('GET',`https://countryapi.io/api/all?apikey=hTexwsi7E5LOUIJMHSb1RmDBUtYAfYgQAcyiJU67`)
    //      request2.send(); 
    //      const request2 = fetch(`https://countryapi.io/api/all?apikey=hTexwsi7E5LOUIJMHSb1RmDBUtYAfYgQAcyiJU67`)
    //      request2.addEventListener('load',function(){
    //      const [neighbour] = data.borders
    //          data = JSON.parse(this.responseText)[alpha2code[neighbour]]
    //          renderCountry(data, 'neighbour')
    //      })

    //     })
    
}

//getCountryAndNeighbor(usa);
//getCountryAndNeighbor(portugal);


// Callback Hell
// setTimeout(() => {
//     console.log('1 second past');
//     setTimeout(() => {
//         console.log('2 second past');
//         setTimeout(() => {
//             console.log('3 second past');
//             setTimeout(() => {
//                 console.log('4 second past');
//             },1000)
            
//         },1000)
        
//     },1000)
    
// },1000)


let neighbour;

// const getJSON = function(url,errorMsg='Something went wrong'){
//     return fetch(url).then(response => {
//         //console.log(response);
//         if(!response.ok)
//             throw new Error(`${errorMsg} ${response.status}`)
//         return response.json() // returns another promise, resolved value of this promise is actual data
//     }); 
// };

// Video 253 - Chaining Promises



// const getCountryData = function(country) {
//      //  Promises #1 - smaller and nicer code
//      getJSON(`https://countryapi.io/api/name/${country}?apikey=hTexwsi7E5LOUIJMHSb1RmDBUtYAfYgQAcyiJU67`,'Country not found')
//      .then(data => {
//              let countryAbr = Object.keys(data)[0]
//              renderCountry(data[countryAbr]);
//              [neighbour] = data[countryAbr]?.borders
//              neighbour = 'shdfajk'
//               //  Country 2
//              return getJSON(`https://countryapi.io/api/all?apikey=hTexwsi7E5LOUIJMHSb1RmDBUtYAfYgQAcyiJU67`,'Neighbour country not found');
//               })
//              .then(data => {
//                     if(!alpha2code[neighbour])
//                         throw new Error(`neighbour not available`) 
//                     renderCountry(data[alpha2code[neighbour]],'neighbour')       
//                     })
//             .catch(err => { //catches error from chain
//                 //console.error(`${err} 🤬🤬🤬`)
//                 renderError(`Something went wrong 🤦‍♂️🤦 ${err.message}. Try Again`)
//             })
//             .finally(()=> {
//                 countriesContainer.style.opacity = 1;
//             }) // finally executes no matter what
// }


// btn.addEventListener('click', function() {
//     getCountryData(usa);
// })

//getCountryData('safdsafadsfa');


// Video 256 - Coding Challenge #1



const renderCountry2 = function (data, className = '') {
    
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.official}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${[Object.keys(data.languages).slice(0,3)]}</p>
        <p class="country__row"><span>💰</span>${[Object.keys(data.currencies)]}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

  const getCountryData = function(country_name) {
    fetch(`https://restcountries.com/v3.1/name/${country_name}`)
    .then(response=>{
        if(!response.ok)
            console.log(`something went wrong`);
        return response.json()
    })
    .then(data=>{
        return renderCountry2(data[0])
    })
    .catch(err=>console.log(err))
}


const whereAmI = function(lat,lng) {
    fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
    .then(response=>{
        if(!response.ok)
             throw new Error(`error# ${response.status}`)
        return response.json()
    })
    .then(data => getCountryData(data.address.country.toLowerCase()))
    .catch(err=>console.log(err))
};


// whereAmI(52.508,13.381);
// whereAmI(19.037,72.873);
// whereAmI(-33.933,18.474);
//whereAmI('fsad','fasdfa');





// Video 258 - The Event Loop in Practice
// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'),0); // after 0 seconds heads to callback queue

// Promise.resolve('resolved promise 1').then(res=> console.log(res));
// console.log('Test End')



// Video 259 - Building a simple promise

const lotteryPromise = new Promise(function(resolve,reject) {
    console.log('Lottery draw is happening')
    setTimeout(function(){
        if(Math.random()>=0.5) {
            resolve('You Win!') // sets promise as fulfilled or resolved promise
        } else {
            reject(new Error('You lost  your money 🤬'));
        } 
    }, 2000)
});
lotteryPromise.then(res => console.log(res)).catch(err=>console.error(err))

// promisifying setTimeout
const wait = function(secs) {
    return new Promise(function(resolve) { // will never fail
        setTimeout(resolve,secs*1000);
    })
}

wait(1).then(() => {
    console.log(`I waited for 1 seconds`);
    return wait(2);
}).then(()=>console.log('I waited for 2 second'))

Promise.resolve('abc').then(res =>console.log(res));
Promise.reject(new Error('abc')).catch(err =>console.error(err));

// Video 260 - Promisfying the Geolocation API
const renderCountry2 = function (data, className = '') {
    
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.official}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${[Object.keys(data.languages).slice(0,3)]}</p>
        <p class="country__row"><span>💰</span>${[Object.keys(data.currencies)]}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

  const getCountryData = function(country_name) {
    fetch(`https://restcountries.com/v3.1/name/${country_name}`)
    .then(response=>{
        if(!response.ok)
            console.log(`something went wrong`);
        return response.json()
    })
    .then(data=>{
        return renderCountry2(data[0])
    })
    .catch(err=>console.log(err))
}


const whereAmI = function() {
    getPosition().then(pos=>{
        const {latitude:lat,longitude:lng} = pos.coords;
        console.log(lat,lng)
        return  fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`)
    })
    .then(response=>{
        if(!response.ok)
             throw new Error(`error# ${response.status}`)
        return response.json()
    })
    .then(data => getCountryData(data.address.country.toLowerCase()))
    .catch(err=>console.log(err))
};


// whereAmI(52.508,13.381);
// whereAmI(19.037,72.873);
// whereAmI(-33.933,18.474);

const getPosition= function() {
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject); // resolve and reject are the callbacks that get returned with params
    });
}

getPosition().then(res=>console.log(res)).catch(err=>console.log(err))

btn.addEventListener('click',whereAmI)

// Video 261 - Coding Challenge #2

const imgContainer = document.querySelector('.images')

const createImg = function(path) {
    return new Promise(function(resolve,reject){
        const img = document.createElement('img');
        //console.log(Boolean(img));
        img.src = path
        currentImg = img;
        
        img.addEventListener('load', function() {
            imgContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error',function() {
            resolve(new Error('Image Path Wrong'));
        })
    })
}



const wait = function(secs) {
    return new Promise(function(resolve) { // will never fail
        setTimeout(resolve,secs*1000);
    })
}

let currentImg;

createImg('img/img-1.jpg')
.then(()=>wait(2))
.then(()=>{
    currentImg.style.display='none'
    return createImg('img/img-2.jpg')
})
.then((img)=>{
    currentImg = img
    return wait(2)
})
.then(()=>currentImg.style.display='none')
.catch(err=>console.error(err))

// Video 262 - Async/Await

const whereAmI = async function() {

   try {const country = await geoLocate();
   const res = await fetch(`https://restcountries.com/v3.1/alpha/${country}`);
   if(!res.ok)
        throw new Error('problem getting valid country')
   const data = await res.json();
   //console.log(data);
   renderCountry(data[0])
    return ` you are in ${country}` 
    } 
    catch(err) {
    console.log(err);
    renderError(`Something went wrong ${err.message}`);
   }
}

const getPosition= function() {
    return new Promise(function(resolve,reject){
        navigator.geolocation.getCurrentPosition(resolve,reject); // resolve and reject are the callbacks that get returned with params
    });
}

// whereAmI('portugal')
// whereAmI('united states')
// console.log('First')

const geoLocate = async function(){
    const pos = await getPosition()
    const {latitude:lat,longitude:lng} = pos.coords;
    const res = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lng}`);
    if(!res.ok)
        throw new Error('problem getting location data')
    const data = await res.json();
    //console.log(data);
    return data.address.country_code;
}

// whereAmI().then(stmt=>console.log(stmt))
//console.log(myLoco);

; // this semicolon was necessary for things to not break
(async function () {
    try {
       const loco= await whereAmI();
        console.log(loco);
    } catch(err) {
        console.error(`2: ${err.message}`);
    }
})();

// Video 265 - Running Promises in Parallel


const getJSON = function(url,errorMsg='Something went wrong'){
    return fetch(url).then(response => {
        //console.log(response);
        if(!response.ok)
            throw new Error(`${errorMsg} ${response.status}`)
        return response.json() // returns another promise, resolved value of this promise is actual data
    }); 
};


const get3Countries = async function(c1,c2,c3) {
    try {
        // const [data1] = await getJSON(`https://restcountries.com/v3.1/alpha/${c1}`)
        // const [data2] = await getJSON(`https://restcountries.com/v3.1/alpha/${c2}`)
        // const [data3] = await getJSON(`https://restcountries.com/v3.1/alpha/${c3}`)
        
        const data = await Promise.all([ 
        getJSON(`https://restcountries.com/v3.1/alpha/${c1}`),
         getJSON(`https://restcountries.com/v3.1/alpha/${c2}`),
         getJSON(`https://restcountries.com/v3.1/alpha/${c3}`)
        ])
        
        //console.log([data1.capital,data2.capital,data3.capital])
        console.log(data.map(d=>d[0].capital[0]));

    } catch(err) {
        console.log(err)
    }
}

get3Countries('us','ca','mx')


// Video 268 - Other Promise Combinators (race, allSettled,any)

const getJSON = function(url,errorMsg='Something went wrong'){
    return fetch(url).then(response => {
        //console.log(response);
        if(!response.ok)
            throw new Error(`${errorMsg} ${response.status}`)
        return response.json() // returns another promise, resolved value of this promise is actual data
    }); 
};


;(async function() {
    const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/alpha/al`),
    getJSON(`https://restcountries.com/v3.1/alpha/us`),
    getJSON(`https://restcountries.com/v3.1/alpha/nl`)])

    //console.log(res[0]);
})()

const timeout = function(secs) {
    return new Promise(function(_,reject){
        setTimeout(function() {
            reject(new Error('request took too long'))
        },secs*1000)
    })
}

// promise race
Promise.race([getJSON(`https://restcountries.com/v3.1/alpha/al`),timeout(0.03)])
.then(res=>console.log(res)).catch(err=>console.log(err))

// all settled promises
Promise.allSettled([
    Promise.resolve('resolved'),
    Promise.reject('reject'),
    Promise.resolve('another resolve')
]).then(res=>console.log(res)).catch(err=>console.log(err));

// promise all
Promise.all([
    Promise.resolve('resolved'),
    Promise.reject('rejected'),
    Promise.resolve('another resolve')
]).then(res=>console.log(res)).catch(err=>console.log(err));

// promise any
Promise.any([
    Promise.resolve('resolved'),
    Promise.reject('rejected'),
    Promise.resolve('another resolve')
]).then(res=>console.log(res)).catch(err=>console.log(err));
*/

// Video 267 - Coding Challenge #3

// Part 1

let currentImg;
const imgContainer = document.querySelector('.images')

const createImg = function(path) {
    return new Promise(function(resolve,reject){
        const img = document.createElement('img');
        //console.log(Boolean(img));
        img.src = path
        currentImg = img;
        
        img.addEventListener('load', function() {
            imgContainer.append(img)
            resolve(img)
        })

        img.addEventListener('error',function() {
            resolve(new Error('Image Path Wrong'));
        })
    })
}

const wait = function(secs) {
    return new Promise(function(resolve) { // will never fail
        setTimeout(resolve,secs*1000);
    })
}

const loadNPause = async function() {
    try{
        const img1 = await createImg('img/img-1.jpg');
        await wait(2);
        img1.style.display='none'
        await wait(2);
        const img2 = await createImg('img/img-2.jpg');
        await wait(2);
        img2.style.display='none'

    } catch(err) {
        console.error(err);
    }
}

// console.log(loadNPause()); // this returns a promise


// Part 2

const loadAll = async function(imgArr) {
    try {
        const imgs = await imgArr.map(async img=> await createImg(img)) // returned a promise if not await
        //console.log(imgs); // returns array of three promises
        //return imgs
        const imgsEl = await Promise.all(imgs)
       // console.log(imgsEl);
        imgsEl.forEach(img=>img.classList.add('parallel'));
    } catch(err) {
        console.error(err);
    }
}

loadAll(['img/img-1.jpg','img/img-2.jpg','img/img-3.jpg'])