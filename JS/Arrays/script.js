// // let arr = [1,2,3,4,5];
// // console.log(arr);

// // //Array Methods
// // console.log(arr.length); //5
// // arr.push(6,7,8,9,10); // Adds elements to the end of the array
// // console.log(arr); // [1,2,3,4,5,6,7,8,9,10]

// // arr.pop(); // Removes the last element of the array
// // console.log(arr); // [1,2,3,4,5,6,7,8,9]

// // arr.unshift(0); // Adds elements to the beginning of the array
// // console.log(arr); // [0,1,2,3,4,5,6,7,8,9]

// // arr.shift(); // Removes the first element of the array
// // console.log(arr); // [1,2,3,4,5,6,7,8,9]

// // let arr2 = [11,12,13,14,15];
// // arr2.splice(2);
// // console.log(arr2);

// // arr2.splice(1,1);
// // console.log(arr2);

// // arr2.splice(1,0,12,13,14,15);
// // console.log(arr2);


// // let arr3 = [1,2,3,4,5];
// // arr3.reverse();
// // console.log(arr3); // [5,4,3,2,1]

// // console.log(arr3.indexOf(3)); // Returns the index of the first occurrence of the specified value in the array, or -1 if it is not present.
// // console.log(arr3.lastIndexOf(3)); // Returns the index of the last occurrence of the specified value in the array, or -1 if it is not present.

// //forEach
// // let arr3 = [1,2,3,4,5];
// // arr3.forEach((element,index) => {
// //     console.log(element,index); // Prints each element of the array
// // })

// // let sum = 0;
// // arr3.forEach((element) => {
// //     sum += element; // Adds each element of the array to the sum variable
// // }
// // );
// // console.log(sum); // Prints the sum of all elements of the array

// // let arr = [[10,20],[30,40]];
// // let res= [];

// // arr.forEach((element) => {
// //     let sum = 0;
// //     element.forEach((ele) => {
// //        sum += ele; // Adds each element of the array to the sum variable
// //     });
// //     res.push(sum); // Pushes the sum of each sub-array to the result array
// // });

// // console.log(res); // Prints the sum of each sub-array



// // let arr = [1,2,3,4,5];
// // const arr1= arr.forEach((v,i) => {
// //     return v*2;
// // })

// // console.log(arr1); // undefined - forEach does not return a new array, it returns undefined


// //map
// // let arr = [1,2,3,4,5];
// // const arr1= arr.map((v,i) => {
// //     return v*2;
// // })

// // console.log(arr1); // [2,4,6,8,10]


// //filter
// // let arr = [1,2,3,4,5];
// // const arr1= arr.filter((v,i) => {
// //     return v%2==0;
// // })

// // console.log(arr1); 

// // let arr = [1,2,3,4,5];
// // const arr1= arr.some((v,i) => {
// //     return v%2==0;
// // })

// // console.log(arr1); // true - some returns true if at least one element in the array passes the test implemented by the provided function

// let arr = [1,2,3,4,5];
// const arr1= arr.every((v,i) => {
//     return v%2==0;
// })

// console.log(arr1); // false - every returns true if all elements in the array pass the test implemented by the provided function

//sort();
let arr = [10,13,2,7,11,8];
console.log(arr.sort()); // [1,2,3,7,8,10] - sorts the array in ascending order wiht string comparison

console.log(arr.sort((a,b) => a-b)); // [1,2,3,7,8,10] - sorts the array in ascending order with number comparison
console.log(arr.sort((a,b) => b-a)); // [10,8,7,3,2,1] - sorts the array in descending order with number comparison


//reduce-cumulative value
let arr1 = [1,2,3,4,5];
console.log(arr1.reduce((prev,curr) => prev+curr,0)); // 15 - reduces the array to a single value by applying the provided function to each element in the array, from left to right, and returns the final value. The second argument is the initial value of the accumulator.

//flattening an array
let arr2 = [[4,5],[6,7]];
console.log(arr2.reduce((prev,curr) => prev.concat(curr),[]));// [4,5,6,7] - reduces the array to a single value by applying the provided function to each element in the array, from left to right, and returns the final value. The second argument is the initial value of the accumulator.

