
// // About var   

// function display()
// {
//     if(true)
//     {
//         console.log(a); //can be used before initialiization
//         var a = 25; //var is functional scope 
//         var a = 50; // redeclaring
//         a = 75;//reassigning
//     }
//     console.log(a);
// }
// // console.log(a);  
// display();


// function display2()
// {
//     if(true)
//     {
//        //console.log(a); //cant be used before initialiization
//        let a = 25; // block scope
//        //let a = 50; //cant redeclare
//        a = 50; // can reassign
//        console.log(a);
//     }
//     //console.log(a);
// }
// // console.log(a);  
// display2();


// function display3()
// {
//     if(true)
//     {
//        //console.log(a); //cant be used before initialiization
//        const a = 25; // block scope
//        //const a = 50; //cant redeclare
//        //a = 50; // can't reassign
//        console.log(a);
//     }
//     //console.log(a);
// }
// // console.log(a);  
// display3();


//simple addition code
let a = 10;
let b= 20;
let c = (a+b);
console.log("Addition: "+c);

//square of a number
let d = 4;
console.log("Square of a number: "+d*d);