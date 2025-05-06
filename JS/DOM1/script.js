
// // let a = document.getElementsByTagName('p');
// // console.log(a);

// // let b = document.getElementsByClassName('bujji');
// // console.log(b);

// // let c = document.getElementById('main');
// // console.log(c);


// // let d = document.querySelector('.bujji');
// // console.log(d);

// // let e = document.querySelectorAll('.bujji');
// // console.log(e);

// // function changeText()
// // {
// //     let ele = document.getElementById('main');
// //     console.log(ele.textContent);
// //     ele.textContent = "Hello Javascript";
// // }

// let value = 0;
// let val = document.getElementById('para');

// function incr()
// {   
//     value++;
//     val.textContent = value;
// }

// function decr()
// {
//     value--;
//     val.textContent = val.textContent - 1;
// }

// function reset()
// {
//     value = 0;
//     val.textContent =  value;
// }


let h = document.getElementById('heading');
let p = document.getElementById('para')
value = 0;
function incr()
{
    value++;
    p.textContent = value;
    if(!(value%2)){
        h.textContent = "Count is Even";
    }
    else{
        h.textContent = "Count is Odd";
    }
}

function decr()
{
    if(value>0){
        value--;
    }
    p.textContent = value;
    if(!(value%2)){
        h.textContent = "Count is Even";
    }
    else{
        h.textContent = "Count is Odd";
    }
}

function reset()
{
    value = 0;
    p.textContent = value;
    h.textContent = "Count is Even";
}

