// Remember, we're gonna use strict mode in all scripts now!
/*


// Video 59 - Coding Challenege
const temp = [3,-2,-6,-1,'error',9,13,17,15,14,9,5];

function maxValue (temp,currentMax) {
    if (temp>currentMax){
        return true;
    }
    else{
        return false;
    }
}

function minValue (temp,currentMin){
    if (temp<currentMin){
        return true;
    }
    else {
        return false;
    }
}



function calcAmplitude (t1,t2){
    let tempMax = -100;
    let tempMin = 100;
    let temp = t1.concat(t2);

    for (let i=0;i<temp.length;i++){
        if(typeof temp[i] === 'number' && maxValue(temp[i],tempMax)){
            tempMax = temp[i];
        }
        if(typeof temp[i] === 'number' && minValue(temp[i],tempMin)){
            tempMin = temp[i];
        }
    }
    console.log(tempMax, tempMin);
    return tempMax - tempMin;
} 

const amplitude = calcAmplitude(temp,[]); // still works with one variable
console.log(amplitude);

// 1) What is the temp amplitude? Difference between highest and lowest values

// 2) Understanding the problem. Using 2 arrays


//Video 61 - Debugging with the console


const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: 10
        //value: prompt('Degrees Celcius')
    }
    const kelvin = Number(measurement.value) + 273;
    console.table(measurement) // gives a nice formatted table
    return kelvin;
}

function maxValue (temp,currentMax) {
    if (temp>currentMax){
        return true;
    }
    else{
        return false;
    }
}

function minValue (temp,currentMin){
    if (temp<currentMin){
        return true;
    }
    else {
        return false;
    }
}


function calcAmplitudeBug (t1,t2){
    let tempMax = -100;
    let tempMin = 100;
    let temp = t1.concat(t2);

    for (let i=0;i<temp.length;i++){
        if(typeof temp[i] === 'number' && maxValue(temp[i],tempMax)){
            tempMax = temp[i];
        }
        if(typeof temp[i] === 'number' && minValue(temp[i],tempMin)){
            tempMin = temp[i];
        }
    }
    //debugger
    console.log(tempMax, tempMin);
    return tempMax - tempMin;
} 

const amplitudeBug = calcAmplitudeBug([3,5,1],[2,3,9]);
console.log(amplitudeBug);

'use strict';
// Video 62 Coding Challenge 1


const printForecast = function (arr){
    let str = '';
    for (let i=0;i<arr.length;i++){
        if (!isNaN(Number(arr[i]))){
            str = str + `...${arr[i]} ℃ in ${i+1} days`;
        }
    }
    console.log(str)
}

printForecast([17,21,23]);
printForecast([12,5,-5,0,4]);

*/