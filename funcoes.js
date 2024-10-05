// Funções

// Precisa chamar
// Pode ou não receber parâmetros
// Pode ou não retornar dados

function gerarNome(nome, sobrenome) {
    return('Nome: ' + nome + ' ' + sobrenome)
}

const nomeGerado = gerarNome('Luiz', ' da Silva')
console.log(nomeGerado)

// gerarNome('Fernando', ' Ferreira', 45)