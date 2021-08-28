let { readFile, writeFile } = require('fs')

readFile('arquiv.txt', 'utf8', (error, texto)=> {
    if(erro){
        throw error
    }else {
        console.log(texto)
    }
})


let novoTexto = "Pense bem"

writeFile("arquivo.txt", novoTexto, (erro) => {
    if(error){
        throw error
    }else {
        console.log("Deu certo ")
    }
})