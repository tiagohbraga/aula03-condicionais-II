// Crie um código que receba um número por prompt e verifique se um número é divisível por 2 e por 3. Faça isso:
//  Utilizando ifs aninhados
// Utilizando um operador lógico para unir duas operações relacionais

let num = Number(prompt('Digite um numero'))

if (num % 2 === 0) {

    num === 30 ? console.log('UFA ACERTEI') : console.log('não foi dessa vez')

    console.log(`O numero ${num} é divisivel por 2`)

} else if (num % 3 === 0) {

        console.log(`O numero ${num} é divisivel por 3`)
}
else {
    console.log('Digite um numero valido!')
}

// num === 30? console.log('UFA ACERTEI'):console.log('não foi dessa vez');

// 3. Ainda dentro do if do exercício anterior, crie estrutura de switch case que verifique se o número é 6, 12, 18, 24 ou 30 e imprima uma mensagem diferente para cada número

// Caso não seja nenhum deles, imprima “o número é maior que 30 ou menor que 6”


switch(num){
    case 6 : 
    console.log('é o numero 6')
    break
    case 12 :
    console.log('é o numero 12')
    break
    case 18 : 
    console.log('é o numero 18')
    break
    case 24 : 
    console.log('é o numero 24')
    break
    default: 
    console.log('Não entra no switch case!')
    break
}