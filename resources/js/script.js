console.log("Script connected");


var screen = 0;
var screenText = document.querySelector('#screen-text');

document.getElementById('button-9').addEventListener('click',()=>{
    screenText.innerText += 9;
})

document.getElementById('button-8').addEventListener('click',()=>{
    screenText.innerText += 8;
})

document.getElementById('button-7').addEventListener('click',()=>{
    screenText.innerText += 7;
})

document.getElementById('button-6').addEventListener('click',()=>{
    screenText.innerText += 6;
})

document.getElementById('button-5').addEventListener('click',()=>{
    screenText.innerText += 5;
})

document.getElementById('button-4').addEventListener('click',()=>{
    screenText.innerText += 4;
})

document.getElementById('button-3').addEventListener('click',()=>{
    screenText.innerText += 3;
})

document.getElementById('button-2').addEventListener('click',()=>{
    screenText.innerText += 2;
})

document.getElementById('button-1').addEventListener('click',()=>{
    screenText.innerText += 1;
})

document.getElementById('button-0').addEventListener('click',()=>{
    screenText.innerText += 0;
})

document.getElementById('button-add').addEventListener('click',()=>{
    screenText.innerText += '+';
})

document.getElementById('button-minus').addEventListener('click',()=>{
    screenText.innerText += '-';
})

document.getElementById('button-multiply').addEventListener('click',()=>{
    screenText.innerText += '*';
})

document.getElementById('button-divide').addEventListener('click',()=>{
    screenText.innerText += '/';
})

document.getElementById('button-dot').addEventListener('click',()=>{
    screenText.innerText += '.';
})

document.getElementById('button-equals').addEventListener('click',()=>{
    screenEquals = eval(screenText.innerText);
    screenText.innerText = screenEquals;
})


document.getElementById('button-reset').addEventListener('click',()=>{
    screenText.innerText = '';
})
