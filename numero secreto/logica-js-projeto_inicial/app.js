alert('Olá, tudo bem ?\nBoas vindas ao jogo do número secreto !!!');

alert('Você tem 03 chances para acertar o número que vou escolher entre 1 e 15. Vamos lá ?\n\nVou pensar em um número...');

let chances = 1;

let numeroSecreto = Math.floor((Math.random() * 15) + 1);

let numeroEscolhido = prompt('Ok, ja escolhi meu número. Agora é sua vez, Digite um número entre 1 e 15:');


while (chances < 4){
    if (numeroEscolhido != numeroSecreto){
        chances += 1;
        if (chances === 4){
            alert(`Que pena, você errou.\n\nO número secreto é ${numeroSecreto}.`);
            break;
        } else {
            if (numeroEscolhido > numeroSecreto){
                numeroEscolhido = prompt(`Ops, você errou, vamos para sua ${chances}ª. chance.\nUma dica: O número secreto é menor que ${numeroEscolhido}\nDigite um número:`);
            } else {
                numeroEscolhido = prompt(`Ops, você errou, vamos para sua ${chances}ª. chance.\nUma dica: O número secreto é maior que ${numeroEscolhido}\nDigite um número:`);
            }
        }
    } else {
        alert(`PARABÉNS !!!\n\nO número secreto é ${numeroSecreto}.`);
        console.log('acertou');
        break;
    }  
}
