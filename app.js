//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let names = [
  
];

// Atualiza a lista ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    updateNameList();
});

function adicionarAmigo() {
    const nameInput = document.getElementById('amigo').value.trim(); // Corrigido para usar o ID correto
    if (nameInput === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    names.push(nameInput);
    updateNameList(); // Chama a função para atualizar a lista
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada
}

function updateNameList() {
    const nameList = document.getElementById('listaAmigos'); // ID correto
    if (listaAmigos) {
        listaAmigos.innerHTML = names.map(name => `<li>${name}</li>`).join(''); // Atualiza a lista com os nomes
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

    // Remove o nome sorteado da lista
    names.splice(randomIndex, 1);
    updateNameList(); // Atualiza a lista após o sorteio
}