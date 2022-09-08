let idadeDoDependente = Number(prompt('Digite a idade do seu dependente')
)
//com if aninhado

// if(idadeDoDependente >=13){
//     if(idadeDoDependente <= 17){
//         alert('Seu dependente já pode ter um cartão vinculado ao seu')
//         //console.log('Seu dependete já pode ter um cartão vinculado ao seu')
//     }else{
//         alert('Consulte outras possibilidade do Labank')
//         //console.log('Consulte outras possibilidade do Labank')
//     }   
// }else{
//     alert('Consulte outras possibilidade do Labank')
//     //console.log('Consulte outras possibilidade do Labank')
// }

//com operador logico
// if(idadeDoDependente>=13 && idadeDoDependente <=17){
//     alert('Seu dependente já pode ter um cartão vinculado ao seu')
//     //console.log('Seu dependete já pode ter um cartão vinculado ao seu')
// }else{
//     alert('Consulte outras possibilidade do Labank')
//    //console.log('Consulte outras possibilidade do Labank')
// }

//utilizando if ternario (não usa if, é uma outra forma de escrever)
idadeDoDependente === 13 ? alert(`A idadde é ${idadeDoDependente} e seu dependente já pode ter um cartão vinculado ao seu`): alert(`verifique nossas outras opções`)
    
