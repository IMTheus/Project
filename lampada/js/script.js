const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');



function isLanpBroken() {
    return lamp.src.indexOf('quebrada') > -1
}


function lampOn() {
    if (!isLanpBroken ()){
    lamp.src = './img/ligada (1).jpg';
 }
}

function lampOff() {
    if (!isLanpBroken ()){
    lamp.src = './img/desligada (1).jpg';
 }
}
function lampBroken() {
    lamp.src = './img/quebrada (1).jpg';
}




//addEventListener click = clicar na lampada ela acender ou apagar 

//ddEventListener mouseover = passar o mouse em cima a lampada ligar

//addEventListener mouseleave = tiar o mouse de cima a lampada desliga

//addEventListener dblclick = dois clicks a lampada quebra


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


