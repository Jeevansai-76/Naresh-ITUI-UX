
let p = new Promise((resolve,reject)=>
{
    let n = 21;
    if(n%2==0)
    {
        setTimeout(()=>{
            resolve("I got a job");
        },5000);
    }
    else
    {
        reject("I did not get any job");
    }
})


p.then((res)=>console.log(res)).catch((err)=>console.log(err));

