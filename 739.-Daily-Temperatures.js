/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    var myArray = [];
    for(let i = 0; i < temperatures.length; i++){
        for(let j = i+1; j<temperatures.length; j++){
            if(temperatures[i] < temperatures[j]){
                myArray.push(j-i);
                break;
            }
            else if(j=== temperatures.length -1){
                myArray.push(0);
            }
        }
    }  
    myArray.push(0);
    return myArray;
}