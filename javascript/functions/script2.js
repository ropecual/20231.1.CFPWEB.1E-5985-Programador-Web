//Em JavaScript, var, let e const são três palavras-chave usadas para declarar
// variáveis. A principal diferença entre elas é o escopo e a redefinição.

//    Var é a palavra-chave mais antiga e tem o escopo global ou de função.
//    Isso significa que uma variável declarada com var pode ser acessada em
//    to do o código, ou apenas dentro da função em que foi declarada.
//    Além disso, uma variável var pode ser redefinida a qualquer momento.

//Let é uma palavra-chave introduzida no ECMAScript 6. Tem o escopo de bloco,
// o que significa que uma variável declarada com let só pode ser acessada dentro
// do bloco de código em que foi declarada. Além disso, uma variável let não pode ser redefinida.

//Const é outra palavra-chave introduzida no ECMAScript 6. Também tem o escopo de bloco,
// mas uma variável declarada com const não pode ser redefinida nem declarada novamente.


// var
var nome = "João";
console.log(nome); // João
nome = "Maria";
console.log(nome); // Maria

// let
let idade = 20;
console.log(idade); // 20
idade = 21; // Erro: Variável let não pode ser redefinida
console.log(idade);

// const
const PI = 3.14159;
console.log(PI); // 3.14159
//PI = 3.1416 // Erro: Variável const não pode ser redefinida
// const nome = "João"; // Erro: Variável const não pode ser declarada novamente



// escopo entre let e var

// Se eu colocar um let dentro de um escopo qualquer, por exemplo um if, um for, uma funcao,
// essa variavel so funcionara dentro desse escopo:


let x;

function escopo() {
    let x = 9
    if (1 == 1) {
        let x = 8;
        console.log(x); // 8
        if (2 == 2){
            let x = 7
            console.log(x)
        }
    }
    console.log(x) // 9
}
// Observe que, ao executar a funcao escopo(), temos o X definido na funcao,
escopo()
console.log(x)