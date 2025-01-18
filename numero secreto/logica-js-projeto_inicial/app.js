let numeroMaximo;
let maximoChance;
let numeroSecreto;
let numeroEscolhido;
let chances = 0;

alert('Olá, tudo bem ?\nBoas vindas ao jogo do número secreto !!!');

numeroMaximo = prompt('Primeiro, digite um número maior ou igual a 10 para ser o valor máximo do intervalo \nExemplo: Se vocẽ escolher 10, vou pensar em um número entre 1 e 10:');

while(numeroMaximo < 10){
    numeroMaximo = prompt('Lembre-se este número deve ser maior ou igual a 10. \nDigite um número >= 10:');
}

if (numeroMaximo <= 75){
    maximoChance = 5;

} else if (numeroMaximo <= 225){
    maximoChance = 7;

} else{    
    maximoChance = 10;
}
            
alert(`Você tem ${maximoChance} chances para acertar o número que vou escolher entre 1 e ${numeroMaximo}. Vamos lá ?\n\nVou pensar em um número...`);

numeroSecreto = parseInt((Math.random() * numeroMaximo) + 1);

numeroEscolhido = prompt(`Ok, ja escolhi meu número. Agora é sua vez.\n\nSua ${chances + 1}ª. chance, digite um número entre 1 e ${numeroMaximo}:`);

while (chances < maximoChance){
    if (numeroEscolhido != numeroSecreto){
        chances += 1;
        if (chances == maximoChance){
            alert(`Que pena, você errou.\n\nO número secreto é ${numeroSecreto}.`);
            break;
        } else {
            if (numeroEscolhido > numeroSecreto){
                numeroEscolhido = prompt(`Ops, você errou, vamos para sua ${chances + 1}ª. chance.\nUma dica: O número secreto é menor que ${numeroEscolhido}\nDigite um número:`);
            } else {
                numeroEscolhido = prompt(`Ops, você errou, vamos para sua ${chances + 1}ª. chance.\nUma dica: O número secreto é maior que ${numeroEscolhido}\nDigite um número:`);
            }
        }
    } else {
        alert(`PARABÉNS !!!\n\nO número secreto é ${numeroSecreto}.\nVocê acertou na sua ${chances + 1}ª. tentativa.`);
        console.log('acertou');
        break;
    }  
}