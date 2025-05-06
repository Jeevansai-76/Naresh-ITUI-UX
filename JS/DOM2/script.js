

// function changeText()
// {
//     let ele = document.getElementById('heading');
//     ele.textContent = "Javascript";
//     ele.style.color = "red";
//     ele.style.fontSize = "20px";
//     document.body.classList.toggle("dark");
// }


// document.getElementById("para").innerHTML = `
//     <h1>Hello world<h1>
//     <p>Modifying Html in JS<p>
// `

function reverseTxt()
{
   const val = document.getElementById('inp').value;
   const rev = val.split('').reverse().join('');
   document.getElementById('revOutput').textContent = rev;
}

