// Spread operator and destructing
// Spread operator and destructing

arr = [1, 2, 3, 4, 5];

function avg(a, b, c) {
  return (a + b + c) / 3;
}

let a = [3, 4, ...arr, 0, ...arr];

console.log(avg(...arr));
console.log(...(arr + 9));
console.log(a);

obj1 = {
  name: "Gagan",
  lang: "Javascript",
};
let obj2 = { ...obj1 };
obj2.name = "Paaji";
console.log(obj2);

// Destructing
// Destructing
// unpack values from arrays, or properties from objects, into distinct variables data can be extracted from arrays, objects, nested objects and assigning to variables.
let n1 = obj1.name;
let l1 = obj1.lang;

let { name, lang } = obj1;
console.log(n1, l1);
console.log(name, lang);
