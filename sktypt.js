const quizData1 = [
    {
        id: 1,
        question: "1. Pasażer może wnieść do stref zastrzelonych lotniska przedmioty zabronione pod warunkiem, że:",
        answers: { a: "A) odpowiedni organ wyrazi zgodę", b: "B) spełnione są zasady ochrony" },
        correct: ["a", "b"]
    }
];
const quizData2 = [
    {
        id: 11,
        question: "11. Kartę identyfikacyjną portu lotniczego nosi się w widocznym miejscu:",
        answers: { a: "A) w strefach ogólnodostępnych", b: "B) w strefach zastrzeżonych lotniska" },
        correct: ["b"]
    }
];
let currentQuizData = quizData1;
function switchQuiz(partNumber, buttonId) {
    document.getElementById('result').style.display = 'none';
    document.querySelectorAll('.btn-menu').forEach(btn => btn.classList.remove('active'));
    document.getElementById(buttonId).classList.add('active');
    currentQuizData = (partNumber === 1) ? quizData1 : quizData2;
    renderQuiz();
}
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';
    currentQuizData.forEach((q) => {
        let answersHtml = '';
        for (let key in q.answers) {
            answersHtml += `<label><input type="checkbox" name="question-${q.id}" value="${key}"> ${q.answers[key]}</label>`;
        }
        const div = document.createElement('div');
        div.className = 'question';
        div.innerHTML = `<p style="font-weight:bold;">${q.question}</p><div class="answers-group">${answersHtml}</div><div id="feedback-${q.id}" style="margin-top:10px;font-weight:bold;"></div>`;
        quizContainer.appendChild(div);
    });
}
function checkAllAnswers() {
    let score = 0;
    currentQuizData.forEach((q) => {
        const checked = document.querySelectorAll(`input[name="question-${q.id}"]:checked`);
        const userAnswers = Array.from(checked).map(box => box.value);
        const feedback = document.getElementById(`feedback-${q.id}`);
        if (userAnswers.length === 0) { feedback.innerHTML = "<span style='color:orange;'>⚠️ Brak odpowiedzi!</span>"; return; }
        const isCorrect = q.correct.length === userAnswers.length && q.correct.every(val => userAnswers.includes(val));
        if (isCorrect) { feedback.innerHTML = "<span style='color:green;'>✓ Poprawna!</span>"; score++; }
        else { feedback.innerHTML = "<span style='color:red;'>✗ Błędna. Poprawna: " + q.correct.join(", ").toUpperCase() + "</span>"; }
    });
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<h3>Wynik: ${score} z ${currentQuizData.length}</h3>`;
}
renderQuiz();
