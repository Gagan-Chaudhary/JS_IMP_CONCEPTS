// Javascript map 
// Javascript map 

let a = [1, 2, 3, 4];
let a2 = a.map((x) => {
  return x + 5;
});

console.log(a2);


// Javascript filter 
// Javascript filter 

let a3 = a.filter((val)=>{
    return val>3;
})
console.log(a3)

// Javascript Reduce 
// Javascript Reduce 

let a4=a.reduce((val1,val2)=>{
        return val1+val2;
})
console.log(a4);
// 3,3,4
// 6,4
// 10