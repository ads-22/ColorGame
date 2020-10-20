var numSq=6;
var colors=randomColors(numSq);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.querySelector("#ColorDisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetB=document.querySelector("#reset");
var modes=document.querySelectorAll(".mode");
var pickedColor=pickColor();


for(var i=0;i<modes.length;i++){
    modes[i].addEventListener("click",function(){
        modes[0].classList.remove("selected");
        modes[1].classList.remove("selected");
        this.classList.add("selector");
        
//        this.textContent==="Easy"?numSq=3:numSq=6;
        if(this.textContent=="Easy"){
            numSq=3;
        }else{
            numSq=6;
        }
        reset(); 
    });
}

function reset(){
    colors=randomColors(numSq);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }    
    h1.style.backgroundColor="steelblue";
    message.textContent="";
    resetB.textContent="New Colors";
};

// easy.addEventListener("click",function(){
//     easy.classList.add("selected");
//     hard.classList.remove("selected");
//     numSq=3
//     colors=randomColors(numSq);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;

//     for(var i=0;i<squares.length;i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor=colors[i];
//         }else{
//             squares[i].style.display="none";
//         }
//     }
//     message.textContent="";
// })
// hard.addEventListener("click",function(){
//     easy.classList.remove("selected");
//     hard.classList.add("selected");   
//     numSq=6;
//     colors=randomColors(numSq);
//     pickedColor=pickColor();
//     colorDisplay.textContent=pickedColor;

//     for(var i=0;i<squares.length;i++){
//         squares[i].style.backgroundColor=colors[i];
//         squares[i].style.display="block";
//     }
//     message.textContent="";
// })

resetB.addEventListener("click",function(){
reset();
})

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];

    //add click listeners
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if (clickedColor===pickedColor) {
            message.textContent="Correct";
            resetB.textContent="Play Again";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }else{
            this.style.backgroundColor= "#232323";
            message.textContent="Try Again";
        }
    })        
};

function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
};

function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function randomColors(num){
    //make an array
    var arr=[];
    for(var i=0;i<num;i++){
        //get random color
        arr[i]=randomColor();
    }
    return arr;
}

function randomColor(){
    //pick a red blue green from 0  to 255

    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r +", "+ g +", "+ b +")";
}