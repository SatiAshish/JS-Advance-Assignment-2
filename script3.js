let second = 00;
let tens = 00;
let outputSecond = document.getElementById('second');
let outputTens = document.getElementById('tens');
let buttonStart =  document.getElementById('btn-start');
let buttonStop =  document.getElementById('btn-stop');
let buttonReset =  document.getElementById('btn-reset');
let Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
})

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
})

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens ="00";
    second = "00";
    outputSecond.innerHTML = second;
    outputTens.innerHTML = tens;
})

function startTime(){
    tens++;
    if(tens <= 9){
        outputTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        outputTens.innerHTML = tens;
    }

    if(tens > 99){
        second++;
        outputSecond.innerHTML = "0" + second;
        tens = 0;
        outputTens.innerHTML = "0" + tens;
    }

    if(second > 9){
        outputSecond.innerHTML = second;
    }
}