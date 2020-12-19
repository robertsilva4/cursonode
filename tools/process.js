require('./subdirectory/sub')

console.log("---------------------------------")
console.log(`Nome do Arquivo: `, __filename)
console.log(`Diretório do arquivo: `, __dirname)
console.log(`Diretório em que foi invocado: `, process.cwd())
console.log(`Sistema Operacional: `, process.env.OS)
console.log(`Usuario no SO: `, process.env.USERNAME)
console.log(`Idioma: `, process.env.PROCESSOR_IDENTIFIER)
console.log(`Nom do Server: `, process.env.COMPUTERNAME)
switch (process.argv[2]) {
    case '-a':
        console.log(`Execute rotina principal`)
        break;
    case '-i':
        console.log(`Execute instalação`)
        break;
    case '-q':
        console.log(`Encerrando Aplicação`)
        process.exit(); //interromope imediatamente o código
        break;
    default:
        console.log(`Parâmetro inválido`)
        break;

}
console.log(`Ambiente do Servidor: `, process.platform)