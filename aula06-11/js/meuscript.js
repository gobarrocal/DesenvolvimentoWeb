function ligar(){
    document.getElementById('lamp').src = 'img/pic_bulbon.gif';
}

function desligar(){
    document.getElementById('lamp').src = 'img/pic_bulboff.gif';
}

function onOff() {
  const lamp = document.getElementById('lamp2');
  lamp.src = lamp.src.includes('off')
    ? 'img/pic_bulbon.gif'
    : 'img/pic_bulboff.gif';
}
