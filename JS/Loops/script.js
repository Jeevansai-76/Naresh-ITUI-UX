
// loops
// let i=1
//  while (i < 10) {
//      console.log(i);
//      i++;
// }
 
// do while
// let j = 123;
// do
// {
//     console.log(j);
//     j++;
// } while (j < 10);



// i = 25;
// while (i >= 1) {
//     if (i % 2 == 0)
//     {
//         console.log(i)
//     }
// 	i--
// }


//print all letters in reverse order without space

// let s = "I love Js"
// let len = s.length-1;
// let res='';
// while(len>=0)
// {
//     if(s[len]!=' ')
//        res+=s[len];
//     len--;   
// }
// console.log(res);


//print star pattern like
// *
// * *
// * * *
// * * * *
// console.log("*")
// console.log("* *")
// console.log("* * *")
// console.log("* * * *")

// let k = 4;
// let i = 1;
// while(i<=k)
// {
//     let s='';
//     for(let j=1;j<=i;j++)
//     {
//         s+="* "
//     }
//     console.log(s);
//     i++;
// }


//for loop

// //print numbers from 10 to 1 using for
// for (let i = 10; i >= 1; i--)
// {
//     console.log(i)
// }

let arr = [5, 4, 9, 8, 1];
for (let i = 0; i <= arr.length-1; i++) {
	console.log(arr[i])
}

//variations of for
// for of
for(let val of arr) //val is element
{
    console.log(val);
}


// for in
for(let ind in arr) //ind is index/key(object concept)
{
    console.log(ind,arr[ind]);
}
