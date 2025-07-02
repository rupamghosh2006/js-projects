const hex = "0123456789ABCDEF";

let generateRandomColor = function(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
   return color;
}

const body = document.querySelector('body');

const changeBGcolor = function(){
    const newColor = generateRandomColor();
    body.style.backgroundColor = newColor;
}

let intervalID;

document.querySelector('#start').addEventListener('click', function(){
    if(!intervalID){
        intervalID = setInterval(changeBGcolor, 1000)
    }
});

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(intervalID)
    intervalID = null
});