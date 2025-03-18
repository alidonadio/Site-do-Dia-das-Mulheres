// Função para adicionar homenagens na página de homenagens
function adicionarHomenagem() {
    const lista = document.getElementById("lista-homenagens");
    const homenagem = prompt("Digite o nome de uma mulher que você deseja homenagear:");

    if (homenagem) {
        const li = document.createElement("li");
        li.textContent = homenagem;
        lista.appendChild(li);
    }
}

// Função para enviar o formulário de contato
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Sua mensagem foi enviada! Obrigado pelo contato.");
});