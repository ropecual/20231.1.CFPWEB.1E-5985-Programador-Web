function gerarCorAleatoria() {
    // Gere valores aleatórios para os componentes RGB
    var r = Math.floor(Math.random() * 256); // Valor de 0 a 255
    var g = Math.floor(Math.random() * 256); // Valor de 0 a 255
    var b = Math.floor(Math.random() * 256); // Valor de 0 a 255

    // Crie uma string no formato RGB
    var cor = 'rgb(' + r + ',' + g + ',' + b + ')';

    return cor;
}

function inverterCor(cor) {
    // A função espera uma string no formato "rgb(r, g, b)"
    var partes = cor.match(/\d+/g); // Extrai os valores de r, g e b
    var r = 255 - parseInt(partes[0]);
    var g = 255 - parseInt(partes[1]);
    var b = 255 - parseInt(partes[2]);

    var corInvertida = 'rgb(' + r + ',' + g + ',' + b + ')';
    return corInvertida;
}

// Exemplo de uso
var corOriginal = 'rgb(100, 100, 100)';
var corInvertida = inverterCor(corOriginal);
console.log(corInvertida);

function teclado(event) {
    var bola = document.getElementById('bola');

    if (event.keyCode == 98) {
        // Apertou a tecla B
        // Vamos mudar a cor da bola para preto
        mudarCor(bola, ' black');
    } else {
        mudarCor(bola)
    }
    // Para brincar um pouco mais, vamos ao teclar colocar a cor inversa ao da bola no background da pagina
    // Obtenha o estilo computado da div
    var estiloComputado = window.getComputedStyle(bola);

    // Obtenha a cor de fundo da div
    var cor_da_bola = estiloComputado.backgroundColor;

    var body_id = document.getElementById('body')
    mudarCor(body_id, inverterCor(cor_da_bola))

}

function mudarCor(elemento, cor = '') {
    if (cor === '') {
        cor = gerarCorAleatoria()

    }

    elemento.style.backgroundColor = cor;


}

function block(block = true) {
    const caixa = document.getElementsByClassName('block')[0]
    // Usamos aqui um ternario, caso a variavel block seja true, ele muda o css para block, caso contrario, none
    caixa.style.display = (block) ? 'block' : 'none';
}

function teste () {
    nome = 99;
}


// Pegamos o evento, no caso o mover do mouse
// Então pegamos as coordenadas X e Y
function mover(event) {
    const coord = document.getElementById('coord')
    coord.textContent = `${event.x},${event.y}`
    // Aqui pegamos a bola que criamos e manipulamos com as coordenadas do mouse
    const bola = document.querySelector('.bola');
    bola.style.top = event.y + 'px';
    bola.style.left = event.x + 'px';
}