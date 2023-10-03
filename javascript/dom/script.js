// selecionar elemento pela tag (retorna uma lista, dai tem que selecionar o indice)
//let img = document.getElementsByTagName('img')[0]

// selecionar elemento pela classe (retorna uma lista...)
//let img = document.getElementsByClassName('loading')[0]

// selecionar elemento pelo ID
let img = document.getElementById('loading')

// selecionar elemento por query - Igual a utilizada no css <- apenas um elemento
//let img = document.querySelector('img[src="load.png"]')


// selecionar elemento por query - Igual a utilizada no css <- varios elementos
//let img = document.querySelectorAll('img[src="load.png"]')


let grau = 0

function girar() {
    grau++;
    if (grau >= 360) {
        grau = 0;
    }
    img.style.transform = `rotate(${grau}deg)`;
    setTimeout(girar, 10)
}


console.log(img)