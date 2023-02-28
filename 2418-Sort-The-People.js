var sortPeople = function(names, heights) {
    let length = names.length;
    const myArray = []
    const anotherArray =[]
    for(let i = 0;i<length;i++){
       myArray.push({name: names[i], height: heights[i]});
    }
    let sortedArray = myArray.sort((person1,person2) =>(person1.height > person2.height) ? -1 : (person1.height < person2.height) ? 1 : 0); 
    for(let i = 0;i<length;i++){
        anotherArray.push(myArray[i].name);
    }
    return anotherArray;
};