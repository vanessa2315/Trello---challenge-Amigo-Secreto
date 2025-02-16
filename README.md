README para o Projeto "Amigo Secreto"
Descrição
O projeto "Amigo Secreto" é uma aplicação web desenvolvida para facilitar o sorteio de amigos secretos entre grupos de pessoas. O objetivo principal é permitir que os usuários adicionem nomes e realizem o sorteio de forma interativa e divertida.

Tecnologias Utilizadas
HTML
CSS
JavaScript
Estrutura do Projeto
O projeto é composto por três arquivos principais:

app.js - Contém a lógica principal da aplicação.
index.html - Estrutura HTML da página.
style.css - Estilos da aplicação.
app.js
javascript
Copiar
let names = [];

// Atualiza a lista ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    updateNameList();
});

function adicionarAmigo() {
    const nameInput = document.getElementById('amigo').value.trim();
    if (nameInput === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    names.push(nameInput);
    updateNameList();
    document.getElementById('amigo').value = '';
}

function updateNameList() {
    const nameList = document.getElementById('listaAmigos');
    if (nameList) {
        nameList.innerHTML = names.map(name => `<li>${name}</li>`).join('');
    } else {
        console.error('Elemento com ID "listaAmigos" não encontrado.');
    }
}

function sortearAmigo() {
    if (names.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio.');
        return;
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    const result = names[randomIndex];
    document.getElementById('resultado').textContent = `O amigo secreto é: ${result}`;
    names.splice(randomIndex, 1);
    updateNameList();
}
index.html
html
Copiar

Ver todos
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
        </header>
        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <input type="text" id="amigo" placeholder="Digite um nome">
            <button onclick="adicionarAmigo()">Adicionar</button>
            <ul id="listaAmigos"></ul>
            <div>
                <button onclick="sortearAmigo()">Sortear amigo</button>
            </div>
            <ul id="resultado"></ul>
        </section>
    </main>
    <script src="app.js" defer></script>
</body>
</html>
html 1

Abrir na tela

style.css
css
Copiar
:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    /* ... demais variáveis de estilo ... */
}

body {
    background-color: var(--color-primary);
}

/* ... demais estilos ... */
Como Usar
Adicionar Nomes: Digite o nome de um amigo na caixa de texto e clique no botão "Adicionar". O nome será adicionado à lista.
Sortear Amigo Secreto: Após adicionar pelo menos um nome, clique no botão "Sortear amigo" para realizar o sorteio. O nome sorteado será exibido na tela.
Remover Nome: O nome sorteado será automaticamente removido da lista.
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
