let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn =document.getElementById('stopbtn');
let startbtn =document.getElementById('startbtn');
let resetbtn =document.getElementById('resetbtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerid = null;

startbtn.addEventListener('click',function(){
    if(timerid !== null){
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer,10);
});

stopbtn.addEventListener('click',function(){
       clearInterval(timerid);
});

resetbtn.addEventListener('click',function(){
    clearInterval(timerid);
    timerdisplay.innerHTML= '00 : 00 : 00';
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec=0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}` ;

//i want that the when someone clicked on reset buttton it will be pause the stop watch if he/she want to reset it he/she most be double click on the reset button but i have logic but don't have represent the logiic in code
}