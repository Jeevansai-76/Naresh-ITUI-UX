//JS-Engine: call stack,Execution content,Task Queue-Event loop( It checks whether the call stack is empty or not)

console.log("before timer");
let count = 0;
setTimeout(()=>
{
    count++;
    document.getElementById('heading').textContent = count;
},5000)

// console.log("after timer");
// for(let i=0;i<10000;i++)
// {
//     console.log("after timer");
// }
// setInterval(()=>{
//     console.log("Hello World")
// },1000)

let c = setInterval(()=>
{
    count++;
    document.getElementById('heading').textContent = count;
    if(count == 20)
    {
        clearInterval(c);
    }
},100)
