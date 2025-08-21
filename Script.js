// Script simples para o formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    this.reset(); // limpa o formulário
});
