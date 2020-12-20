const { writeFile } = require('fs');


writeFile("arquivo.txt", 'criando arquivo de texto com writeFile', err => {
    if (err) throw err
    console.log('Arquivo Criado com Sucesso!')
})