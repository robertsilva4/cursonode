const { writeFile } = require('fs')

function criarArquivo(name, content) {
    return new Promise((res, rej) => {
        writeFile(name, content, err => {
            if (err) return rej(err)
            res();
        })
    })
}

criarArquivo('promiseArquivo.txt', 'Criando um arquivo utilizando promises')
    .then(() => { console.log('Arquivo promiseArquivo.txt criado com sucesso') })
    .catch(err => console.log(err))