var btnClick = document.querySelector('.btn');
var btnClick1 = document.querySelector('.btn1');
var btnClick2 = document.querySelector('.btn2');
var boxElement = document.querySelector('.box');
var animateMe;
var moveValue = 5;
var counter = 1;
btnClick.addEventListener('click', actionForClick);
btnClick1.addEventListener('click', stopMeFromMoving);
btnClick2.addEventListener('click', function(){
    moveValue=moveValue*-1;
});

function actionForClick(e){
    var x = boxElement.offsetLeft;
    var y = boxElement.offsetTop;
    counter++;
    boxElement.style.left = (x + moveValue)+ 'px';
    boxElement.style.top = (y + moveValue)+ 'px';
    if(counter < 100){
    animateMe = window.requestAnimationFrame(actionForClick);
    }else{
        cancelAnimationFrame(animateMe);
    }
}


function stopMeFromMoving(){
    counter = 10;
    cancelAnimationFrame(animateMe);
}

function ranReturn(num){
    return Math.ceil(Math.random()*num);
}

function ranColor(){
    function c(){
        var hex = ranReturn(256).toString(16);
        return (String(hex)).substr(-6);
    }

    return '#'+ c()+c()+c();
}