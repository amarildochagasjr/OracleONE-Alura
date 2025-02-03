//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];
let listaNomeSorteado = [];
let listaSorteador = [];
let nomeAmigo;
let iListaNomes = 0;

document.getElementById('amigo').focus();

function adicionarAmigo() {
    document.getElementById('amigo').focus();

    nomeAmigo = document.getElementById("amigo").value.trim();

    if (nomeAmigo === "" || !isNaN(nomeAmigo)) {
        alert("Digite um nome válido.");
        limparCampo();
        return;
    }

    nomeAmigo = capitalizarNome(nomeAmigo);

    if (listaAmigos.includes(nomeAmigo)) {
        alert(`${nomeAmigo} já adicionado. Adicione outro amigo.`);
        limparCampo();
        return;

    } else {
        listaAmigos.push(nomeAmigo);
        limparCampo();
        exibirLista(listaAmigos);
    }
}

function limparCampo() {
    document.getElementById("amigo").value = '';
}

function exibirLista(listaAmigos) {
    document.getElementById("listaAmigos").innerHTML = `<h3>Lista de Amigos:</h3> ${listaAmigos.map(nome => `<li>${nome}</li>`).join("")}`;
}

function capitalizarNome(nome) {
    let letrasNome = nome.toLowerCase().split(" ");

    for (let i = 0; i < letrasNome.length; i++) {
        let letra = letrasNome[i];
        letrasNome[i] = letra[0].toUpperCase() + letra.slice(1);
    }

    return letrasNome.join(" ");
}

function sortearAmigo(){
    if (listaAmigos.length < 3) {
        alert("Adicione pelo menos 3 amigos à lista antes de sortear.");

        document.getElementById('amigo').focus();

        return;
    }

    document.getElementById("resultado").innerHTML = '';

    document.getElementById('amigo').focus();

    document.getElementById("titleSection").innerHTML = "Agora, Digite o nome de quem vai sortear:";

    document.getElementById('buttonAdd').disabled = true;

    if (iListaNomes < listaAmigos.length){
        let nomeSorteador = document.getElementById("amigo").value;

        nomeSorteador = capitalizarNome(nomeSorteador);

        while (!listaAmigos.includes(nomeSorteador)){
            alert(`O nome ${nomeSorteador} não está na lista de participantes. Digite novamente.`);

            limparCampo();

            nomeSorteador = document.getElementById("amigo").value;

            nomeSorteador = capitalizarNome(nomeSorteador);
        }

        if (listaSorteador.includes(nomeSorteador)) {
            alert(`${nomeSorteador} já foi utilizado para sortear. Escolha outro nome.`);

            limparCampo();

            return;
        } else {

            listaSorteador.push(nomeSorteador);

            limparCampo();
        }

        // Gera um índice aleatório
        let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);

        // Pega o nome sorteado
        let nomeSorteado = listaAmigos[indiceSorteado];

        while ((nomeSorteador == nomeSorteado) || (listaNomeSorteado.includes(nomeSorteado))){
                indiceSorteado = Math.floor(Math.random() * listaAmigos.length);

                nomeSorteado = listaAmigos[indiceSorteado];
        }
        
        listaNomeSorteado.push(nomeSorteado);

        document.getElementById("resultado").innerHTML = `<li>${nomeSorteador} seu amigo secreto é: ${nomeSorteado}</li>`;

        limparCampo();

        document.getElementById('amigo').focus();

    } else {
        limparCampo();
        alert("Todos os nomes já foram sorteados.");
    }
    
    iListaNomes++;

}