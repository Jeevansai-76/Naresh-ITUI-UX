
document.getElementById('btn').addEventListener('click',display);

function display()
{
    console.log("hello world");
}

document.getElementById('btn').addEventListener('dblclick',display2);
function display2()
{
    alert("mouse hovered..");
}

document.getElementById('btn').addEventListener('mouseover',change);

function change()
{
    const r1 = Math.round(Math.random()*100);
    const r2 = Math.round(Math.random()*100);
    document.getElementById('btn').style.position = "";
    document.getElementById('btn').style.top = r1 + "%";
    document.getElementById('btn').style.left = r2 + "%";
}

document.addEventListener('keypress',function(e){
    if(e.key == 'a')
    {
        change();
    }
});

document.getElementById('inp1').addEventListener('input',bgChange);

function bgChange(e)
{
    console.log(e.target.value);
    document.body.style.background = e.target.value;
}

document.getElementById('clr').addEventListener('change',bgChange);