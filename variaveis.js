// Existem três tipos de variáveis, var, let e const
// Var pode ser alterado!
var nome = 'Eduardo' // String
nome = 'Pedro'

console.log(nome)

// Também pode ser alterado, mas é mais recomendado que o var
let idade = 20 // Números inteiros ou decimais
idade = 30

// Não pode ser alterado!
const cidade = 'Florianópolis'

var maior_idade = false // Booleano

// JavaScript não é tipado 

const paises = ['Brasil', 'Argentina', 'Alemanha', 12] // Array

let devices = {
    nome: 'iPhone 14',
    preco: 8000,
    cores: {
        cor1: 'vermelho',
        cor2: 'azul',
    }
} // Objeto

// Função