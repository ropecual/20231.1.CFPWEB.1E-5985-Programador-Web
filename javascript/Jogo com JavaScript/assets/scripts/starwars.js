// Busca o elemento que demos a tag body e adicionamos-o a constante tela
const tela = document.getElementsByTagName('body')[0]

// Instanciamos o objeto game da classe Game
const game = new Game()

// Criamos uma variavel vazia chamada nave
let nave;

// Definimos a "velocidade" do movimento para esquerda ou direita, em resumo, qntos pixels serao adicionados ou
// subtraidos
const velocidade_movimento = 5

// Qntidade de naves inimigas
const max_inimigas = 10

// Lista de naves inimigas
const inimigas = []

// Intervalo de atualizacao para as naves andarem
let intervalo


// Adiciona um EventListener de "keyup" a tela. criamos uma funçao anonima que captura o evento do teclado
//  Se foi o "enter" a ser apertado, executa uma verificacao utilizando o metodo "isPausado()" do objeto game.
// essa verificacao e um if ternario que, caso esteja pausado, executa o metodo "start()" que inicia o jogo, caso
// contrario, executa o metodo "pausar()" que pausa o jogo
tela.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        // se o jogo nao esta pausado ele inicia, caso contrario pausa
        (game.isPausado()) ? game.start() : game.pausar()
    }
    if (!game.isPausado()) {
        if (event.key == ' ') {
            nave.atirar()
        }
        if ((event.key === 'ArrowLeft') || (event.key === 'ArrowRight') || (event.key === 'ArrowUp') || (event.key === 'ArrowDown')) {
            nave.parar()
        }

    }
})

// Adicionamos um evento que eh ativado ao apertar alguma tecla, se ela for para direita ou para esquerda, move a nave
// desde que o jogo nao esteja pausado
// ela move acionando a funcao setXY da nave alterando a posicao para + ou para -
tela.addEventListener('keydown', function (event) {
    if (!game.isPausado()) {
        //nave.aparecer()
        if (event.key === 'ArrowLeft') {
            // Nao esquecer dos () qndo invocar funcoes anonimas ou normais
            nave.ir_esquerda()
        } else if (event.key === 'ArrowRight') {
            nave.ir_direita()
        }else if (event.key === 'ArrowUp') {
            nave.ir_cima()
        } else if (event.key === 'ArrowDown') {
            nave.ir_baixo()
        }
    } else {
        //nave.esconder()
    }
})


// Aqui eh criada a classe Game. Ela possui tres atributos, todas constantes:
// .painel = relacionada ao elemento html com id painel
// .placar = relacionada ao elemento html com id placar
// . mensagem = relacionada ao elemento html com classe mensagem em sua primeira ocorrencia

// tambem possui um atributo definido como  pausado, definido como "true" inicialmente

// Possui 5 metodos:

// isPausado = retorna, em uma funcao anonima o valor de pausado

// start = "inicia o jogo", alterando o display do painel para none e o placar para flex, define ainda a variavel
// pausado para false

// pausar = "pausa" o jogo. define o display do painel para block, altera a variavel pausado para true
function Game() {
    const painel = document.getElementById('painel')
    const placar = document.getElementById('placar')
    const msg = document.getElementsByClassName('mensagem')[0]
    let pontuacao = 0

    // Inicia o jogo pausado
    let pausado = true
    // Retorna true ou false
    this.isPausado = () => pausado;
    // funcoes anonimas que recebem o valor do elemento correspondente da div
    this.largura = () => tela.getBoundingClientRect().width;
    this.altura = () => tela.getBoundingClientRect().height;

    this.start = () => {
        // Ao iniciar, remove o painel e exibe o placar
        painel.style.display = 'none';
        placar.style.display = 'flex';
        // muda a variavel pausado para false
        pausado = false

        if (nave === undefined) {
            nave = new NaveAliada()

            // Crio um loop que conta qntas naves inimigas eu quero e vou adicionando na nossa lista
            // Sorteio, tambem as imagens que elas terao
            for (let count = 0; count < max_inimigas; count++) {
                let imagem = 'cp1'
                switch (Math.round(Math.random() * 2)) {
                    case 1:
                        imagem = 'iba';
                        break;
                    case 2:
                        imagem = 'iy'
                        break;
                }
                inimigas.push(new Inimigo(imagem))
            }
        }
        intervalo = setInterval(() => {
            nave.animacao()
            inimigas.forEach(inimigo => {
                inimigo.animacao()
            });
            gerenciarLasers(laser_aliado);
            gerenciarLasers(laser_inimigos);
            let sorteio = Math.round(Math.random() * delay_laser_inimigo);
            if (sorteio < inimigas.length) {
                if (inimigas[sorteio].posicaoY() > 0) {
                    inimigas[sorteio].atirar()
                }
            }
            gerenciarColisoes()
        }, 100)
    };

    this.pausar = (mensagem) => {
        if (mensagem) {
            msg.textContent = "Game Over"
        }
        // metodo que exibe a tela de bloqueio
        painel.style.display = 'block';
        // muda a variavel pausado para false
        pausado = true
        clearInterval(intervalo)
    }

    this.gameOver = () => {
        this.pausar('Game Over');
        tela.addEventListener('keyup', function (event) {
            if (event.key === 'Enter') {
                location.reload()
            }
        })
    }

    this.pontuar = () => {
        pontuacao++
        placar.querySelector('span').textContent = pontuacao
    }
}


// funcao para nao ficar reescrevendo codigo
function elemento(tag, classe) {
    let elemento = document.createElement(tag);
    elemento.classList.add(classe)
    tela.appendChild(elemento)
    return elemento
}

// Variavel para armazenar os lasers
const laser_aliado = [];
const laser_inimigos = [];
const aceleracao_laser = 3;
const delay_laser_inimigo = 10;

function Ovni(elemento) {

    // funcoes anonimas que recebem o valor do elemento correspondente da div
    this.largura = () => elemento.getBoundingClientRect().width;
    this.altura = () => elemento.getBoundingClientRect().height;
    // funcoes anonimas que recebem o valor do elemento correspondente da div, no caso a posicao de X e Y
    this.posicaoX = () => elemento.getBoundingClientRect().x;
    this.posicaoY = () => elemento.getBoundingClientRect().y;

    // Funcao que seta a posicao da div os IFs impedem que a nave estoure a tela (saia para fora)
    this.setXY = (x, y) => {
        if (x < 0) {
            x = 0
        } else if (x > (game.largura() - this.largura())) {
            x = (game.largura() - this.largura())
        }
        elemento.style.left = `${x}px`
        elemento.style.top = `${y}px`

    }

    this.sobe_desce = (x, y) => {
        elemento.style.left = `${y}px`
        elemento.style.top = `${x}px`

    }
    this.colisao = () => elemento.remove()

    this.remove = () => elemento.remove()

}

function Nave(imagem = 'wt') {
    // <div className="nave">
    //    <img src="assets/images/mf.png">
    //</div>
    let div = elemento('div', 'nave')
    Ovni.call(this, div)
    let img = document.createElement('img')
    img.src = `assets/images/${imagem}.png`
    div.appendChild(img)

    // Eu crio uma funcao para chamar o onload e substituir o seu valor pela chamada de outra funcao
    // Isso sera usado para as naves inimigas que heram esses atributos e metodos
    this.ao_carregar = (fn) => img.onload = fn


}

function NaveAliada(imagem = 'wt') {
    Nave.call(this, imagem);
    let deslocamentoY = 0
    let deslocamentoX = 0
    // Variavel que recebe u funcao anonima para setar a posicao da nave
    let posicao_inicial = () => {
        this.setXY(
            game.largura() / 2 - this.largura() / 2,
            game.altura() - this.altura() - 10)
    }

    this.ao_carregar(posicao_inicial)

    this.atirar = () => {
        laser = new Laser()
        laser.setXY(
            this.posicaoX() + (this.largura() / 2) - (laser.largura() / 2),
            this.posicaoY() - laser.altura() - 1
        )
        laser_aliado.push(laser)
    }

    this.parar = () =>  {
        deslocamentoX = 0;
        deslocamentoY = 0;
    }
    this.ir_direita = () => {
        deslocamentoY = 0
        deslocamentoX = 1
    }
    this.ir_esquerda = () => {
        deslocamentoY = 0
        deslocamentoX = -1
    }
    this.ir_cima = () => {
        deslocamentoY = -1
        deslocamentoX = 0
    }
    this.ir_baixo = () => {
        deslocamentoY = 1
        deslocamentoX = 0

    }

    this.animacao = () => {
        this.setXY(
            this.posicaoX() + velocidade_movimento * deslocamentoX * 5,
            this.posicaoY() + velocidade_movimento * deslocamentoY * 5
        )

    }

    this.colisao = () => game.gameOver()


}

function Inimigo(imagem = 'cp1') {
    // Herdando os atributos de Nave, enviando o valor de imagem
    Nave.call(this, imagem);

    // Funcao especifica da classe Inimigo, que define, aleatoriamente, onde a nave vai ficar
    this.setPosicaoInicial = () => {
        let posicaoX = Math.round(Math.random() * (game.largura() - this.largura()))
        let posicaoY = Math.round(-this.altura() - 10 - (Math.random() * 2600))
        this.setXY(posicaoX, posicaoY)

    }
    this.ao_carregar(this.setPosicaoInicial);
    // Aqui fazemos a animacao, onde a nave vai se movendo no eixo Y, qndo ela chegar ao final do eixo Y, invocamos
    // a funcao setPosicaoInicial() para definir um novo ponto de origem para ela
    this.animacao = () => {
        this.setXY(this.posicaoX(), this.posicaoY() + velocidade_movimento)
        if (this.posicaoY() > game.altura() + 20) {
            this.setPosicaoInicial()
        }
    }

    this.atirar = () => {
        laser = new Laser(true);
        let x = this.posicaoX() + this.largura() / 2 - laser.largura() / 2
        let y = this.posicaoY() + this.altura() + 1
        laser.setXY(x, y)
        laser_inimigos.push(laser)
    }

    this.colisao = () => {
        game.pontuar()
        let explosao = elemento('img', 'explosao')
        explosao.src = 'assets/images/explosao.gif'
        explosao = new Ovni(explosao)
        explosao.setXY(this.posicaoX(), this.posicaoY())
        this.setPosicaoInicial()
        setTimeout(() => {
            explosao.remove()
        }, 1000)
    }
}


function Laser(inimigo = false) {
    // <div className="laser"> </div>
    let div = elemento('div', 'laser')
    let deslocamento = -1
    Ovni.call(this, div)
    if (inimigo) {
        div.classList.add('inimigo')
        deslocamento = 1
    }

    this.animacao = () => {
        this.setXY(this.posicaoX(), this.posicaoY() + velocidade_movimento * aceleracao_laser * deslocamento)
    }


}

function gerenciarLasers(lasers) {
    lasers.forEach((laser, index, list) => {
        laser.animacao()
        if ((laser.posicaoY() > game.altura() + 10 || laser.posicaoY() + laser.altura() + 10 < 0)) {
            laser.remove()
            list.splice(index, 1)
        }
    })
}

function gerenciarColisoes() {
    let colisao = (objeto1, objeto2) => {
        let x = objeto1.posicaoX() <= objeto2.posicaoX() + objeto2.largura()
            && objeto1.posicaoX() + objeto1.largura() >= objeto2.posicaoX()
        let y = objeto1.posicaoY() <= objeto2.posicaoY() + objeto2.altura()
            && objeto1.posicaoY() + objeto1.altura() >= objeto2.posicaoY()
        if (x && y) {
            objeto1.colisao();
            objeto2.colisao()
            return true
        }
        return false
    }
    inimigas.forEach((inimigo, indice_inimigo, lista_inimigas) => {
        laser_aliado.forEach((laser, index_laser, lista_lasers) => {
            if (colisao(inimigo, laser)) {
                lista_lasers.splice(index_laser, 1);
            }
        })
        colisao(nave, inimigo);
    })
    laser_inimigos.forEach((laser) => {
        colisao(nave, laser);
    })


}