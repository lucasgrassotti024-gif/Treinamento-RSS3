// Sistema de Quiz RSS3 Treinamentos
class QuizSystem {
    constructor() {
        this.currentQuiz = null;
        this.answers = {};
        this.score = 0;
        this.totalQuestions = 0;
    }

    // Inicializar quiz
    initQuiz(quizData) {
        this.currentQuiz = quizData;
        this.answers = {};
        this.score = 0;
        this.totalQuestions = Object.keys(quizData.questions).length;
        
        // Limpar seleções anteriores
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.checked = false;
        });
        
        // Esconder resultado anterior
        const resultDiv = document.getElementById('quiz-result');
        if (resultDiv) {
            resultDiv.style.display = 'none';
        }
    }

    // Submeter quiz
    submitQuiz() {
        if (!this.currentQuiz) return;
        
        this.score = 0;
        this.answers = {};
        
        // Coletar respostas
        Object.keys(this.currentQuiz.questions).forEach(questionKey => {
            const selectedOption = document.querySelector(`input[name="${questionKey}"]:checked`);
            if (selectedOption) {
                this.answers[questionKey] = selectedOption.value;
                if (selectedOption.value === this.currentQuiz.questions[questionKey].correct) {
                    this.score++;
                }
            }
        });
        
        // Mostrar resultado
        this.showResult();
    }

    // Mostrar resultado
    showResult() {
        const resultDiv = document.getElementById('quiz-result');
        if (!resultDiv) return;
        
        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        const isPassing = percentage >= 70;
        
        // Obter textos traduzidos
        const resultTitle = this.getTranslatedText('quiz-result-title');
        const scoreText = this.getTranslatedText('quiz-score');
        const correctText = this.getTranslatedText('quiz-correct');
        const incorrectText = this.getTranslatedText('quiz-incorrect');
        const congratulationsText = this.getTranslatedText('quiz-congratulations');
        const tryAgainText = this.getTranslatedText('quiz-try-again');
        const retryText = this.getTranslatedText('quiz-retry');
        const backText = this.getTranslatedText('quiz-back');
        
        resultDiv.innerHTML = `
            <div class="quiz-result-content">
                <h3>${resultTitle}</h3>
                <div class="quiz-score">
                    <div class="score-circle ${isPassing ? 'passing' : 'failing'}">
                        <span class="score-number">${percentage}%</span>
                    </div>
                    <div class="score-details">
                        <p><strong>${scoreText}:</strong> ${this.score}/${this.totalQuestions}</p>
                        <p class="correct-answers">${correctText}: ${this.score}</p>
                        <p class="incorrect-answers">${incorrectText}: ${this.totalQuestions - this.score}</p>
                    </div>
                </div>
                <div class="quiz-message ${isPassing ? 'success' : 'error'}">
                    ${isPassing ? 
                        `<p>${congratulationsText} ${this.score} de ${this.totalQuestions} perguntas!</p>` :
                        `<p>${tryAgainText} ${this.score} de ${this.totalQuestions} perguntas.</p>`
                    }
                </div>
                <div class="quiz-actions">
                    <button class="btn-secondary" onclick="quizSystem.retryQuiz()">${retryText}</button>
                    <a href="../index.html" class="btn-primary">${backText}</a>
                </div>
            </div>
        `;
        
        resultDiv.style.display = 'block';
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }

    // Refazer quiz
    retryQuiz() {
        if (!this.currentQuiz) return;
        
        // Limpar seleções
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.checked = false;
        });
        
        // Esconder resultado
        const resultDiv = document.getElementById('quiz-result');
        if (resultDiv) {
            resultDiv.style.display = 'none';
        }
        
        // Resetar
        this.answers = {};
        this.score = 0;
        
        // Voltar ao topo do quiz
        const quizSection = document.querySelector('.quiz-section');
        if (quizSection) {
            quizSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Obter texto traduzido
    getTranslatedText(key) {
        const lang = localStorage.getItem('rss3-language') || 'pt';
        if (translations && translations[lang] && translations[lang][key]) {
            return translations[lang][key];
        }
        return key; // Retorna a chave se não encontrar tradução
    }
}

// Instância global do quiz
const quizSystem = new QuizSystem();

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar evento ao botão de submit
    const submitBtn = document.getElementById('quiz-submit');
    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            quizSystem.submitQuiz();
        });
    }
});

// Exportar para uso global
window.quizSystem = quizSystem;
