var maximumWealth = function(accounts) {
    const myArray = [];
    let total;
    let max = 0;
    for(let i = 0;i<accounts.length;i++){
        total = 0;
        for(let j = 0;j<accounts[i].length;j++){
            total += accounts[i][j];
        }
        if(total > max){
            max = total
        }
    }
    return max;
};