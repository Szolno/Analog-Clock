setInterval(setClock, 1000)

const hourHand = document.querySelector('.hand.hour')
const minuteHand = document.querySelector('.hand.minute')
const secondsHand = document.querySelector('.hand.second')
const clock = document.querySelector('.clock')

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondsHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}


let acc = 0;
clock.addEventListener('click', function(){
    const paragraph = document.querySelector('p');
    paragraph.innerHTML = `${new Date()}`
});

setClock();