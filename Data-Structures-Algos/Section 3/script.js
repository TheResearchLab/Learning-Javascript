const nemo = ['nemo'];
const everyone = ['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank']
const large = new Array(10000).fill('marlin')
large.push('nemo')


function findNemo(array) {
    let t0 = performance.now();
    for (let i=0;i<array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('found nemo!');
        } 
    }
    let t1 = performance.now();
    console.log(`The call to find Nemo took ${t1-t0} milliseconds`)
}

findNemo(nemo);
findNemo(large);