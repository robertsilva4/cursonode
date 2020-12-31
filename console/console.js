console.log("Exibindo uma mensagem no console")

//erro

console.error(new Error('Mensagem de erro, Temos problemas'))


const carros = ['GM', 'FIAT', 'FORD', 'VW', 'RENAULT', 'HONDA', 'HYUNDAI'];

console.table(carros)

const dados = { name: 'Robert Silva', empresa: 'Esportes.co' }

console.table(dados)

console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando o processo')
console.countReset('processo')

console.count('processo')

console.time('contador')
for (let index = 0; index < 100; index++) {
    // console.log('-')

}
console.timeEnd('contador')

console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Ih Rapaz %s, que pena!', 'Não funcionou')

// console.clear() - limpa todos os dados do cosole