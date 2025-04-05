let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Qu’est-ce que Rosh Rodesh ?",
        answer: "La tête du mois du calendrier hébraïque, « néoménie »"
    },
    {
        question: "Qu’ajoute-t-on dans la prière du matin le jour de rosh rodesh ?",
        answer: "Yallé ve yavo (dans la Amidah)"
    },
    // Ajoutez ici les autres questions...
];

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;
    answerElement.innerHTML = `<p>${currentQuestion.answer}</p>`;

    document.getElementById('card').classList.remove('flipped');
}

function flipCard() {
    document.getElementById('card').classList.toggle('flipped');
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    document.getElementById('score').innerText = score;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Quiz terminé ! Votre score final est de " + score + ".");
    }
}

// Charger la première question au chargement de la page
loadQuestion();
