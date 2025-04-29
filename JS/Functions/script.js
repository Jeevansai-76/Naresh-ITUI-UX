
// //Normal function
// function display()
// {
//     console.log('function executed')
// }
// display();

// //function with parameter values
// function sum(a,b)
// {
//     console.log(a+b);
// }
// sum(10,20);
// sum(50,60);


// //default parameter value
// function printVal(a=30)
// {
//     console.log(a);
// }
// printVal();

// //rest operator(...)

// function add(...b)
// {
//     let sum=0;
//     for(let i of b)
//     {
//         sum+=i;
//     }
//     console.log(sum);
// }
// add(1,2,3,4,5,6,7,8,9,10);


// function product(...b)
// {
//     let prod=1;
//     for(let i of b)
//     {
//         prod*=i;
//     }
//     console.log(prod);
// }
// product(1,2,3,4,5,6,7,8,9,10);


// //spread operator
// let arr=[1,2,3],arr1=[4,5,6]
// let arr2=[...arr,...arr1];
// for(let i of arr2)
// {
//     console.log(i);
// }


function function_name()
{
    return "Hello World";
}
let str = function_name();
console.log(str);

//arrow functions;

//function expressions
const exp = function()
{
    console.log("Hello World");
}
console.log(exp);
exp();

//arrow functions

const exp1 = () => console.log("Hello World");
exp1();


//another examples
// function strLength(s)
// {
//     return s.length;
// }
// console.log(strLength("Hello"));

// const strLength =  function(s)
// {
//     return s.length;
// }
// console.log(strLength("Hello"));

// const strLength = (s)=> s.length;
// console.log(strLength("Hello"));

//we can pass functions as arguments;
function x()
{
    console.log("I'm X");
}
function doPrint(a)
{
     a();
}


doPrint(x);


//function closures
function outer()
{
    let x = 10;
    function inner()
    {
        x++;
        console.log(x);
    }
    return inner;
}

x = outer();
x();
x();
x();