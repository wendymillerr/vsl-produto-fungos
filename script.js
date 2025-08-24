// Faz as perguntas abrirem e fecharem
document.addEventListener('DOMContentLoaded', function() {
    const perguntas = document.querySelectorAll('.pergunta-titulo');
    
    perguntas.forEach(pergunta => {
        pergunta.addEventListener('click', function() {
            const resposta = this.nextElementSibling;
            
            // Fecha todas as outras respostas
            document.querySelectorAll('.resposta').forEach(outraResposta => {
                if (outraResposta !== resposta) {
                    outraResposta.classList.remove('mostrar');
                }
            });
            
            // Abre ou fecha a resposta clicada
            resposta.classList.toggle('mostrar');
        });
    });
});