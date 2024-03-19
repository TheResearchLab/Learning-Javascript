// 1431. Kids With the Greatest Number of Candies
var kidsWithCandies = function(candies, extraCandies) {
    // find the max value
    const result = candies.slice()
    const largestPileSize = candies.sort(function(a,b){return a-b})[candies.length -1]
    console.log(largestPileSize)
    // create an empty array
    

    // loop through the array
    for (let i=0;i<result.length;i++) {
        // if the value at position i > than the max value then update the array at pos i with the true else false
        const mostCandyBool = (result[i] + extraCandies) > largestPileSize 
        result[i] = Boolean(mostCandyBool)
    }

    return result
};

//console.log(kidsWithCandies([1,100,2],3))

// 605 Can Place Flowers
var canPlaceFlowers = function(flowerbed, n) {
    var available = 0;
    
    for (let i=1;i<flowerbed.length-1;i++) {
        if (!flowerbed.slice(i-1,i+2).includes(1)) {
            
            available +=1
            flowerbed[i] = 1;
            
            if (available === n) {
                return true
            }
 
        }
    }
    return false

};

console.log(canPlaceFlowers([1,0,0,0,1],5))
