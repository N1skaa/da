// 1
let x;
console.log(typeof x); 

// 2
console.log(typeof 10);    
console.log(typeof "10");  

// 3
console.log(typeof true);  
console.log(typeof false); 

// 4
//  object

// 5
console.log("15" + 1); 

// 6
console.log("12" - 1); 

// 7
console.log(Boolean("")); 

// 8
console.log(Boolean(" ")); 

// 9
const num = Number(" 13 ");
console.log(num); 

// 10
function isNumber(v) {
  return typeof v === "number" && !Number.isNaN(v);
}

