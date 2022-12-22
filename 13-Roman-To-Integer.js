/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let n = 0;
    var map = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
    }
    if(s.indexOf("CM") !=-1)
    n-=200;
    if(s.indexOf("CD") != -1)
    n-=200;
    if(s.indexOf("XL") != -1)
    n-=20;
    if(s.indexOf("XC") != -1)
    n-=20;
    if(s.indexOf("IV") != -1)
    n-=2;
    if(s.indexOf("IX") != -1)
    n-=2;
    for(let i = 0;i<s.length;i++){
        n += map[s[i]];
    }
    return n;
};