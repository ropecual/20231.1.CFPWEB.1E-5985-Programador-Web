//EMCAScript vs TypeScript


// pessoa  | funcionario | cliente


function Pessoa(nome, cpf, nascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento;

}


let lalinha = new Pessoa('lala', '1111.1.111', new Date(1992, 9, 7))

lalinha.nome = 'boboa'
console.log(lalinha)


let poke = new Pessoa('nau', '2323,22,22', new Date(1981, 11, 1))

console.log(poke)


// Trabalhando com a Heranca

function Funcionario(nome, cpf, nascimento, salario) {
    Pessoa.call(this, nome, cpf, nascimento)
    this.salario = salario
}


let baba = new Funcionario('baba', '2323,22,22', new Date(1981, 11, 1), 1000)
console.log(baba)


function Cliente(nome, cpf, nascimento, limite) {
    Pessoa.call(this, nome, cpf, nascimento)
    this.limite = limite
    this.saldo = 0;
    this.depositar = function (valor) {
        if (valor < 0) {
            console.log('Valor incorreto')
        } else {
            this.saldo += valor
        }
    }
    this.sacar = function (valor) {
        if (this.saldo + this.limite > valor) {
            this.saldo -= valor;
            console.log('Retire seu dinheiro')

        } else {
            console.log('Saldo insuficiente')
        }
    }
    // Uma funcao anonima /arrow function aqui
    this.extrato = () => console.log('Saldo: ', this.saldo)
}

let cliente1 = new Cliente('cliente1', '2323,22,22', new Date(1981, 11, 1), 1000)
cliente1.depositar(500)
cliente1.sacar(10000)
cliente1.sacar(10)
cliente1.depositar(-143)
cliente1.depositar(432)
cliente1.extrato()
console.log(cliente1)
