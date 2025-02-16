const questions = [
    {
        question: "O que é obesidade emocional?",
        options: ["A) Comer por prazer", "B) Comer em resposta a emoções", "C) Comer apenas quando se está com fome", "D) Comer alimentos saudáveis"],
        answer: 1
    },
    {
        question: "Qual é um sinal comum de obesidade emocional?",
        options: ["A) Exercício regular", "B) Comer sem fome", "C) Dieta equilibrada", "D) Controle de porções"],
        answer: 1
    },
    {
        question: "Qual emoção pode levar à obesidade emocional?",
        options: ["A) Alegria", "B) Tristeza", "C) Satisfação", "D) Motivação"],
        answer: 1
    },
    {
        question: "Qual é uma estratégia para lidar com a obesidade emocional?",
        options: ["A) Ignorar as emoções", "B) Praticar mindfulness", "C) Comer mais doces", "D) Assistir TV"],
        answer: 1
    },
    {
        question: "O que pode ser um gatilho para a obesidade emocional?",
        options: ["A) Estresse", "B) Exercícios físicos", "C) Sono adequado", "D) Hidratação"],
        answer: 0
    },
    {
        question: "Qual é um efeito da obesidade emocional na saúde?",
        options: ["A) Aumento da energia", "B) Melhora do humor", "C) Problemas de saúde mental", "D) Aumento da autoestima"],
        answer: 2
    },
    {
        question: "Como a terapia pode ajudar na obesidade emocional?",
        options: ["A) Aumentando o apetite", "B) Identificando gatilhos emocionais", "C) Incentivando a dieta restritiva", "D) Promovendo o sedentarismo"],
        answer: 1
    },
    {
        question: "Qual é um exemplo de comida reconfortante?",
        options: ["A) Salada", "B) Frutas", "C) Sorvete", "D) Água"],
        answer: 2
    },
    {
        question: "O que é compulsão alimentar?",
        options: ["A) Comer devagar", "B) Comer em excesso sem controle", "C) Comer apenas em refeições", "D) Comer apenas quando se está com fome"],
        answer: 1
    },
    {
        question: "Qual é uma maneira saudável de lidar com emoções?",
        options: ["A) Comer chocolate", "B) Falar com amigos", "C) Ignorar os sentimentos", "D) Assistir a filmes"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const restartButton = document.getElementById('restart-button');
const feedbackElement = document.getElementById('feedback');
const resultElement = document.getElementById('result');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
    feedbackElement.classList.add('hidden');
    nextButton.classList.add('hidden');
}

function selectOption(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.answer) {
        score++;
        feedbackElement.innerText = "Correto!";
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    } else {
        feedbackElement.innerText = "Errado! O quiz foi encerrado.";
        feedbackElement.classList.remove('hidden');
        showResult();
    }
}

function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    resultElement.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;
    resultElement.classList.remove('hidden');
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add('hidden');
    restartButton.classList.add('hidden');
    questionElement.classList.remove('hidden');
    optionsElement.classList.remove('hidden');
    showQuestion();
}

nextButton.addEventListener('click', showQuestion);
restartButton.addEventListener('click', restartQuiz);
showQuestion();