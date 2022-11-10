console.log("Olá Mundo!") 
console.log(2+2)
console.log (2*2)
console.log(10/2)
console.log(10-8)
console.log(10*2)
console.log(30+1)
console.log(100/2)
console.log(35.7*3.8)
console.log(99+21+125)
console.log(32-3/4.5)
console.log(4+4+4+4/4)
console.log(127.75 + 53.82)
console.log(355 - 22.7)

/* comentario 
de várias linhas*/ 

//comentário de uma linha

/*váriavel*/
/* -variavel é um espaço reservado na memoria para armmazenar um valor
- toda variavel tem um nome e um tipo
- a variavel deve ter um nome significativo, exemplo: 
-uma variavel que vai armazenar a informação idade ppode  ter o nome de IDADE, uma variavel que vai armazenar 
o preço venda de um produto, pode ter o nome de PRECOVENDA
- a recomendação é que o nome da variavel seja simples e significatrivas, sem caracteres, sem acento, sem especiais

*/
//var nome
let nome = 'duda'
let idade = 17
let nota1 = 10
let fumante =false
//nome

console.log(nome)
console.log(idade, nota1, fumante)
console.log('Sua nota é' + nota1)

/*Tipos */ 
console.log (typeof nome)// 'duda' é string
console.log (typeof idade) //17 é number
console.log (typeof nota1) // 10 é  number
console.log(typeof fumante) //false é boolen

let veiculos = [carro, moto, avião]
console.log (veiuculos)
console.log(typeof veiuculos) 

let cliente = { 
    nome: 'duda'
    idade: 17
}
console.log (clientes)
console.log(typeof clientes) 

let salvar = function (){

}
console.log (typeof salvar)

/* operadores relacionais*/ 
console.log (10>3)// maior 
console.log (5<3)// menor
console.log (15 >=10)//maior ou igual
console.log (15 <=10)// menor ou igual
console.log (10==10)//igual
console.log( 10!=10)// diferente

/* operadores lógicos*/
console.log('==========')
console.log(10>3 && 10>15 && 10>8)// Operador E (AND)- com operador E todas as expressões devem ser verdadeira para o resultado ser verdadeiro

console.log(10>3 || 10>15 || 10>8)// Operador OU (OR)- com operador E todas as expressões devem ser verdadeira para o resultado ser verdadeiro

console.log(!10>3 )// Operador NÃO (NOT)- O IMPERADOR NOT inverte o resultado da expressão 
                                     




