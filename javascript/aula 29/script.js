const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


function rotacionarPonteiro(ponteiro, angulo) {
    ponteiro.style.transform = `rotate(${angulo}deg)`
}

function relogio() {
    let date = new Date();
    let s = date.getSeconds() * 6;
    let m = date.getMinutes() * 6 + (s / 12);
    let h = date.getHours() * 30 + (m / 12);

    rotacionarPonteiro(segundos, s);
    rotacionarPonteiro(minutos, m);
    rotacionarPonteiro(horas, h);


}

setInterval(relogio,1000) // Executar indefinidamente, no intervalo escolhido




