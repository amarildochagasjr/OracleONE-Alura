alert('Olá, tudo bem ?\nBoas vindas ao jogo do número secreto !!!');

alert('Você tem 03 chances para acertar o número que vou escolher entre 1 e 15. Vamos lá ?\n\nVou pensar em um número...');

let chances = 1

let numeroSecreto = 7

let numeroEscolhido = prompt('Ok, ja escolhi meu número. Agora é sua vez, Digite um númeroentre 1 e 15:');


while (chances < 3){
    if (numeroEscolhido != numeroSecreto){
    chances += 1
    numeroEscolhido = prompt('Opa, você errou. vamos para sua ' + chances + 'a. chance. Digite um número:');
    } else{
        console.log('acertou');
        break
    }
}

alert('Poxa, você não acertou, eu pensei no número ' + numeroSecreto)
