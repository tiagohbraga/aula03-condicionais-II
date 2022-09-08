//swift case

let ramalTelefonico = Number(prompt(`Opções de escolha:
1 para "Facil"
2 para "Black"
3 para "Platinum"
4 para "Master Gold"`))

switch(ramalTelefonico){
    case 1:
        console.log('facil');
    break
    case 2:
        console.log('Black');
    break
    case 3:
        console.log('Platinum');
    break
    case 4:
        console.log('Master Gold');
    break
    default :
    console.log('Escolha uma das quatro opções disponíveis!');
    break
}
console.log(ramalTelefonico)