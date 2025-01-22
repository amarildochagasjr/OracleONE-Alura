let listaNumeroSorteado = [];  // Lista para armazenar os números já sorteados
let maximoChance;  // Variável para armazenar o número máximo de tentativas
let campoInput;  // Variável para armazenar o campo de input
let chances = 1;  // Contador de chances
let numeroSecreto;  // Número secreto a ser adivinhado
let jogoFinalizado = false;  // Flag para verificar se o jogo foi finalizado

const limiteMenor = 75;  // Limite inferior para o valor máximo do intervalo
const limiteMaior = 225;  // Limite superior para o valor máximo do intervalo

// Função que exibe a mensagem inicial
mensagemInicial();

// Função que gera as mensagens no local correto
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);  // Seleciona o campo pela tag
    campo.innerHTML = texto;  // Exibe o texto no campo

    // Função usada para falar o texto com voz
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// Função que exibe a mensagem inicial do jogo
function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');  // Exibe o título do jogo
    exibirTexto('p','Primeiro, digite um número maior ou igual a 10 para ser o valor máximo do intervalo.');  // Instruções iniciais
    exibirTexto('h6', 'Exemplo: Se vocẽ escolher 25, vou pensar em um número entre 1 e 25:');  // Exemplo de intervalo

    document.querySelector('input').focus();  // Foca no campo de input para o usuário começar a digitar

    // Adiciona um ouvinte de evento para quando a tecla "Enter" for pressionada
    document.querySelector('input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {  // Verifica se a tecla pressionada foi "Enter"
            document.getElementById('btnOk').click();  // Simula o clique no botão "OK"
        }
    });
}

// Função que verifica o valor inserido pelo usuário
function numeroMax(valorInput){
    // Se o valor for menor que 10, exibe uma mensagem de erro e limpa o campo
    while(valorInput < 10){
        exibirTexto('p','Lembre-se, este número deve ser maior ou igual a 10. \nDigite um número >= 10:');
        limparCampo();
        return botaoOk();
    }

    // Verifica em qual intervalo o valor está e define o número de chances
    if (valorInput <= limiteMenor){
        limparCampo();
        document.getElementById('btnOk').setAttribute('disabled', true);  // Desabilita o botão "OK"
        document.getElementById('chute').removeAttribute('disabled');  // Habilita o campo de chute
        maximoChance = 5;  // Define o número máximo de chances
        campoInput = valorInput;
        exibirTexto('p', `Ok, ja escolhi meu número. Agora é sua vez, você tem ${maximoChance} chances, digite um número entre 1 e ${valorInput}:`);
        exibirTexto('h6', `Essa é sua ${chances}ª. chance. (${chances}/ ${maximoChance})`);
        numeroSecreto = numeroAleatorio(valorInput);  // Gera o número secreto aleatório
        ativaEnterChute();  // Ativa o "Enter" para o chute

    } else if (valorInput <= limiteMaior){
        limparCampo();
        document.getElementById('btnOk').setAttribute('disabled', true);
        document.getElementById('chute').removeAttribute('disabled');
        maximoChance = 7;
        exibirTexto('p', `Ok, ja escolhi meu número. Agora é sua vez, você tem ${maximoChance} chances, digite um número entre 1 e ${valorInput}:`);
        exibirTexto('h6', `Essa é sua ${chances}ª. chance. (${chances}/ ${maximoChance})`);
        numeroSecreto = numeroAleatorio(valorInput);
        ativaEnterChute();

    } else{
        limparCampo(); 
        document.getElementById('btnOk').setAttribute('disabled', true);
        document.getElementById('chute').removeAttribute('disabled');
        maximoChance = 10;
        exibirTexto('p', `Ok, ja escolhi meu número. Agora é sua vez, você tem ${maximoChance} chances, digite um número entre 1 e ${valorInput}:`);
        exibirTexto('h6', `Essa é sua ${chances}ª. chance. (${chances}/ ${maximoChance})`);
        numeroSecreto = numeroAleatorio(valorInput);
        ativaEnterChute();
    }
}

// Função que verifica o número chutado pelo jogador
function verificaNumeros(secreto, chute){
    // Se o chute estiver correto
    if (secreto == chute){
        exibirTexto('h1', 'PARABÉNS !!! Você acertou.');
        exibirTexto('p',`O número secreto é ${secreto}. Você acertou na ${chances}ª. chance.`);
        exibirTexto('h6', '');
        limparCampo();
        document.getElementById('reiniciar').removeAttribute('disabled');  // Habilita o botão "Reiniciar"
        document.getElementById('chute').setAttribute('disabled', true);  // Desabilita o campo de chute

        jogoFinalizado = true  // Marca o jogo como finalizado
        ativaEnterNovoJogo();  // Ativa o "Enter" para o novo jogo

    } else if ((secreto != chute) && (chances < maximoChance)){
        chances++;  // Incrementa o contador de chances
        // Se o chute for maior que o número secreto
        if (secreto < chute){
            exibirTexto('h1', 'Você errou.');
            exibirTexto('p',`O número secreto é menor que ${chute}. Digite um número:`);
            exibirTexto('h6', `Essa é sua ${chances}ª. chance. (${chances}/ ${maximoChance})`);
            limparCampo();

        } else {  // Se o chute for menor que o número secreto
            exibirTexto('h1', 'Você errou.');
            exibirTexto('p',`O número secreto é maior que ${chute}. Digite um número:`);
            exibirTexto('h6', `Essa é sua ${chances}ª. chance. (${chances}/ ${maximoChance})`);
            limparCampo();
        }
    } else {     // Se o errar todas as chances
        exibirTexto('h1', 'Que pena.');
        exibirTexto('p',`Você não acertou, o número secreto é ${secreto}.`);
        exibirTexto('h6', '');
        limparCampo();
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled', true);

        jogoFinalizado = true;
        ativaEnterNovoJogo();
    }

    limparCampo();
    campoInput.focus();  // Foca novamente no campo de input
}

// Função que chama o processo para verificar o número máximo
function botaoOk(){
    let campoInput = document.querySelector('input').value;  // Obtém o valor do input

    numeroMax(campoInput);  // Chama a função para verificar o número máximo
}

// Função que verifica o chute do jogador
function verificarChute(){
    campoInput = document.querySelector('input').value;  // Obtém o valor do chute

    // Se o valor não for um número, exibe uma mensagem de erro
    if (isNaN(campoInput) || campoInput === '') {
        exibirTexto('p', `Ok, ja escolhi meu número. Agora é sua vez, você tem ${maximoChance} chances, digite um número entre 1 e ${valorInput}:`);
        limparCampo();
        return;
    }

    verificaNumeros(numeroSecreto, campoInput);  // Verifica o chute
}

// Função para reiniciar o jogo através do botão "Novo Jogo"
function novoJogo(){
    mensagemInicial();  // Exibe a mensagem inicial
    limparCampo();  // Limpa o campo
    chances = 1;  // Reseta as chances
    jogoFinalizado = false;  // Reseta o estado do jogo
    document.getElementById('btnOk').removeAttribute('disabled');  // Habilita o botão "OK"
    document.getElementById('chute').setAttribute('disabled', true);  // Desabilita o campo de chute
    document.getElementById('reiniciar').setAttribute('disabled', true);  // Desabilita o botão "Reiniciar"

    ativaEnterNovoJogo();  // Ativa o "Enter" para novo jogo
}

// Função que gera um número aleatório dentro do intervalo fornecido
function numeroAleatorio(valorInput){
    let numeroSorteado = parseInt(Math.random() * valorInput + 1);  // Gera um número aleatório entre 1 e o valor fornecido

    if (listaNumeroSorteado.length == valorInput){  // Se a lista de números sorteados atingir o limite
        listaNumeroSorteado = [];  // Reseta a lista
    }

    // Se o número sorteado já foi sorteado antes, chama a função novamente
    if (listaNumeroSorteado.includes(numeroSorteado)) {  
        return numeroAleatorio();  // Sorteia novamente
    } else {
        listaNumeroSorteado.push(numeroSorteado);  // Adiciona o número sorteado à lista
        return numeroSorteado;  // Retorna o número sorteado
    }
}

// Função que ativa a tecla "Enter" para processar o chute
function ativaEnterChute(){
    document.querySelector('input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {  // Verifica se a tecla pressionada foi "Enter"
            verificarChute();  // Processa o chute
        }
    });
}

// Função que ativa a tecla "Enter" para iniciar um novo jogo
function ativaEnterNovoJogo() {
    // Remove os event listeners anteriores para evitar duplicação
    document.querySelector('input').removeEventListener('keypress', handleKeyPressNovoJogo);

    // Adiciona o event listener para o novo jogo
    document.querySelector('input').addEventListener('keypress', handleKeyPressNovoJogo);
}

// Função que trata o pressionamento da tecla "Enter" no campo de input
function handleKeyPressNovoJogo(event) {
    if (jogoFinalizado && event.key === 'Enter') {  // Se o jogo foi finalizado e a tecla "Enter" foi pressionada
        document.getElementById('reiniciar').click();  // Simula o clique no botão "Novo Jogo"
    } else if (!jogoFinalizado && event.key === 'Enter') {  // Se o jogo não foi finalizado
        verificarChute();  // Processa o chute
    }
}

// Função para limpar o campo de input
function limparCampo(){
    campoInput = document.querySelector('input');  // Seleciona o campo de input
    campoInput.value = '';  // Limpa o valor do campo
}
