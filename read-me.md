![Alura - OracleONE](img/Alura-OracleONE.png)

# Projeto Challenge Amigo Secreto

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Challenge Amigo Secreto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1, h2 {
            color: #333;
        }
        .copy-container {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-top: 10px;
        }
        .copy-container input {
            padding: 8px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 300px;
        }
        .copy-container button {
            padding: 8px 12px;
            font-size: 14px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .copy-container button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <h1>Projeto Challenge Amigo Secreto</h1>

    <h2 id="sobre-o-projeto">Sobre o Projeto</h2>
    <p>
        Este código implementa um jogo de amigo secreto onde os participantes são adicionados a uma lista e, em seguida, sorteados aleatoriamente. O jogo começa com o usuário digitando os nomes dos amigos no campo de input e clicando em "Adicionar". Cada nome é validado para garantir que não esteja vazio, não seja um número e não tenha sido adicionado anteriormente. O usuário deve digitar o nome de quem está sorteando, em seguida, um nome é sorteado aleatoriamente, garantindo que ninguém sorteie a si mesmo e que cada nome seja sorteado apenas uma vez. O resultado é exibido na tela, e o jogo continua até que todos os nomes tenham sido sorteados.
    </p>

    <h2 id="tecnologias-utilizadas">Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>JavaScript</strong>: Criado por Amarildo Chagas Junior</li>
        <li><strong>HTML</strong>: Criado por equipe Alura</li>
        <li><strong>CSS</strong>: Criado por equipe Alura</li>
    </ul>

    <h2 id="requisitos">Requisitos</h2>
    <p>
        Antes de instalar, certifique-se de ter as seguintes ferramentas:
    </p>
    <ul>
        <li><strong>VsCode</strong> - Para visualização do código.</li>
        <li><strong>Live Server</strong>: Extensão VsCode para visualização via Navegador Web.</li>
        <li><strong>Git</strong> - Para clonar o repositório.</li>
    </ul>

    <h2 id="passo-a-passo">Passo a Passo</h2>
    <div class="copy-container">
        <input type="text" id="gitCloneUrl" value="https://github.com/amarildochagasjr/OracleONE-Alura" readonly>
        <button onclick="copiarUrl()">Copiar</button>
    </div>
    <p>
        1. Clone este repositório:
    </p>

    <h2 id="organizadores">Organizadores</h2>
    <p>
        [![Alura](img/alura-logo2.jpeg)](https://www.alura.com.br/) <strong>Alura</strong> &nbsp;&nbsp;&nbsp;&nbsp; [![Oracle](img/one.png)](https://www.oracle.com/br/education/oracle-next-education/) <strong>ONE</strong>
    </p>

    <script>
        function copiarUrl() {
            const url = document.getElementById('gitCloneUrl').value;

            // Copia o texto para a área de transferência
            navigator.clipboard.writeText(url)
                .then(() => {
                    alert('URL copiada com sucesso!');
                })
                .catch(() => {
                    alert('Erro ao copiar a URL.');
                });
        }
    </script>

</body>
</html>
