
// 1.number
let x = 45.233,k=25;
console.log(typeof x);
let y = k.toString(2); //convert into string (2 is base like 2,8,16 etc 2 means binary)
console.log(y);
console.log(typeof y);
console.log(typeof x);  // x is immutable so primitivie data types are immutable
let z = x.toFixed(2); //getting till 2 decimal points then roundof()
console.log(z); 

//math methods
let a=64,b=27;
console.log(Math.sqrt(a));
console.log(Math.cbrt(a));
console.log(Math.max(1,23,433,23,121,3233));
console.log(Math.min(1,23,433,23,121,3233));
console.log(Math.round(5.24));
console.log(Math.ceil(-2.45));
console.log(Math.floor(2.45));
console.log(Math.ceil(Math.random()*6));
console.log(Math.abs(-2.34));