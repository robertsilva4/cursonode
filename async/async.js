function sum(x) {
    return new Promise((resolve, reject) => {
        if (Number(x) == NaN || x == undefined || typeof x != 'number') {
            reject(`Ta de brincadeira`)
        }
        setTimeout(() => {
            resolve(x + 5000);
        }, 3000)
    })

}

async function main(params) {
    try {
        const resultado = await sum("#")
        console.log(`Resultado com Async/Await: ${resultado}`)
    } catch (error) {
        console.log(`Temos problemas: ${error}`)
        console.log(process.env.USERNAME)
    }
}

main()