const promp = require('prompt-sync')()

for (let dia = 1; dia <= 10; dia++){
    let quant = prompt(`quantas maçãs joão colheu no dia ${dia}`)
    
    console.log(`no dia ${dia}, joão colheu ${quant} maçãs`);

}