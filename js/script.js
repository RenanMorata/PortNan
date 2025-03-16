// VALIDAÇÃO DO FORMULARIO
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio se houver erros

    let nome = document.getElementById("Nome").value.trim();
    let email = document.getElementById("Email").value.trim();
    let telefone = document.getElementById("Telefone").value.trim();
    let assunto = document.getElementById("Assunto").value.trim();
    let mensagem = document.getElementById("Mensagem").value.trim();

    // Validação do Nome
    if (nome.length < 3 || nome.length > 100) {
        alert("O nome deve ter entre 3 e 100 caracteres.");
        return;
    }

    // Validação do Email com regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Validação do Telefone (Apenas números e exatamente 11 dígitos)
    let telefoneRegex = /^\d{11}$/;
    if (!telefoneRegex.test(telefone)) {
        alert("O número de telefone deve ter exatamente 11 dígitos.");
        return;
    }

    // Validação do Assunto
    if (assunto.length < 3 || assunto.length > 50) {
        alert("O assunto deve ter entre 3 e 50 caracteres.");
        return;
    }

    // Validação da Mensagem
    if (mensagem.length < 10 || mensagem.length > 500) {
        alert("A mensagem deve ter entre 10 e 500 caracteres.");
        return;
    }

    // Se todas as validações passarem, o formulário pode ser enviado
    alert("Formulário enviado com sucesso!");
    this.submit(); // Envia o formulário
});

// FUNÇÃO PRA ABIR LINK

function abrirLink(id,url){
    const elemento = document.getElementById(id);
    if (elemento) {
        elemento.addEventListener('click', () => window.open(url,"_blank") )
    }
}

abrirLink("instagram", "https://www.instagram.com/renan.morata?igsh=YW9qcG9kMTlrZ2Vz");
abrirLink("linkedin","https://www.linkedin.com/in/renan-morata-025580333/");
abrirLink("github","https://github.com/RenanMorata") 





