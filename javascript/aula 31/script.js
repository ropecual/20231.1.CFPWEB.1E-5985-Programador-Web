//console.log(h3.textContent)
// Alterando o texto do elemento
// h3.textContent = 'Roni'
// Alterando HTML
// h3.innerHTML = "<img src='success.png'/> Roni"

//<h3 className="msg"><img src="success.png">
//    <div>msg</div>
//</h3>
//<h3 className="msg error"><img src="error.png">
//    <div>msg</div>
//</h3>

//let msgs = document.getElementById('msgs')
let h1 = document.getElementsByTagName('h1')[0]

function createAlert(mensagem, tipo = 'sucesso') {
    // Acrescentei um verificador para apagar o alert caso ele ja exista, para n ficar poluindo a cada clique
    const myElement = document.querySelector("h3")
    if(myElement){
        myElement.remove();
    }
    let h3 = document.createElement('h3'); // Cria um elemento
    h3.classList.add('msg')
    let img = document.createElement('img')
    img.src = 'success.png'
    if (tipo == 'erro') {
        img.src = 'error.png'
        h3.classList.add('error')
    }
    let text = document.createElement('div')
    text.textContent = mensagem
    // tem que por em ordem pois eh como sera construido o html
    h3.appendChild(img)
    h3.appendChild(text) // Adiciona dentro do elemento
    h1.insertAdjacentElement('beforebegin', h3) // Adiciona ou antes ou depois do elemento
    setTimeout(
        function () { // Aqui temos uma funçao anonima... para usar junto ao setTimeout, que remove o elemento
            h3.remove();
        }, 5000
    );
    return h3
}

function alertSucesso(texto) {
    return createAlert(texto)
}


function alertError(texto) {
    return createAlert(texto, 'erro')
}

let login = document.getElementById('login')
let senha = document.querySelector(('input[name="senha"]'))

function bloquearLogin(bloquear = true) {
    login.disabled = bloquear;
    senha.disabled = bloquear;
}

function logar() {
    if (login.value == "") {
        login.style.borderColor = 'red';
    }
    if (senha.value == "") {
        senha.style.borderColor = 'red';
    }

    if (login.value != 'Roni' || senha.value != '123') {
        alertError('Senha Invalida');
    } else {
        alertSucesso("Bem vindo Roni");
    }

}

// pequena funcao para demonstrar manipulacao do atributo ao click
// Aqui, adicionamos um atributo chamado cor, para podermos usar na manipulacao
// Caso exista a cor nós removemos o atributo e também removemos a cor (o atributo poderia se charmar qualquer coisa
// Caso contrário, significa que ele não tem cor atribuida, dai atribuimos e marcamos com o atributo
function mudarCor(elemento, cor = 'red') {
    if (elemento.getAttribute('cor') == cor){
        elemento.style.backgroundColor = '';
        elemento.setAttribute('cor','');
    }else {
        elemento.style.backgroundColor = cor;
        elemento.setAttribute('cor',cor)
    }

}