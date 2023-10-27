
// Definindo um objeto
let pessoa = {
    nome: 'Lala',
    cpf: '111,111,111',
    nascimento: new Date(1990,11,1),

    // Metodos
    idade: function (){
        const hoje = new Date();
        return hoje.getFullYear() - this.nascimento.getFullYear();
    },

    alterar_nome: function (novonome) {
        this.nome = novonome
    },
}

// Alterando atributos de um objeto

pessoa.nome ='Lele'
pessoa.alterar_nome('Lalinha')

console.log(pessoa)