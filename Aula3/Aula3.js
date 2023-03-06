/*
Tipos de variaveis

var = permite executar a variavel dentro do bloco e fora no qual foi declarado.
let = so permite o acesso da variavel dentro do bloco em que e declarada.
const = é uma constante que nao muda dentro do programa.
*/

function testeVar(){
    if (true){
        var nome = "Bruno"
        console.log('Nome1: ',nome)
    }
    console.log('Nome2: ',nome)
}

function testeLet(){
    if (true){
        let nome = "Bruno"
        console.log('Nome3: ',nome)
    }
    //console.log('Nome2: ',nome) variavel tipo let e declarada no bloco if portanto so funcionará dentro do memso.
}

function testeConst(){
    const nome = 'Bruno'
    console.log('Nome4: ',nome)
}

testeVar()
testeConst()
testeLet()