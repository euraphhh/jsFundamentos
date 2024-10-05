// Exercício 1 - Estrutura de repetição

// Percorrer uma lista de nome, contendo os nomes:
// Eduardo, Maria, Fernando, João e Francisco
// Número da execução, começando em 1 e nome
// Separadores

// Execução: 1
// Nome: Eduardo
// -------------------


const nomes = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco']

// Primeira possibilidade
nomes.forEach((nome, index) => {
    console.log('Execução número: ' + (index + 1))
    console.log('Nome: ' + nome)
    console.log('-------------------')
})