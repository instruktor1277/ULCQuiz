// W polu "correct" podajemy teraz tablicę poprawnych odpowiedzi, np. ['a', 'c']
const quizData = [
    {
        id: 1,
        question: "1. Pasażer może wnieść do stref zastrzelonych lotniska lub na pokład statku powietrznego przedmioty zabronione, wymienione w dodatku 4-C załącznika do rozporządzenia wykonawczego Komisji nr 2015/1998 pod warunkiem, że:",
        answers: {
            a: "A) odpowiedni organ wyrazi zgodę na przewóz danego przedmiotu",
            b: "B) pasażer wnoszący przedmioty zabronione przeszedł sprawdzenie przeszłości, zgodnie z pkt 11.1.3 załącznika do rozporządzenia wykonawczego Komisji nr 2015/1998",
            c: "C) pasażerowi wnoszącemu przedmioty zabronione towarzyszy uzbrojona eskorta",
            d: "D) przewoźnik lotniczy został poinformowany o pasażerze i przewożonym przez niego przedmiocie przed wejściem pasażerów na pokład statku powietrznego",
            e: "E) spełnione są mające zastosowanie zasady ochrony lotnictwa"
        },
        correct: ["a","d","e"] // Jedna poprawna odpowiedź
    },
    {
        id: 2,
        question: "2. Podczas kontroli bezpieczeństwa osób, ręczny wykrywacz metali:",
        answers: {
            a: "A) jest podstawowym środkiem kontroli bezpieczeństwa",
            b: "B) jest pomocny przy ustalaniu miejsca ukrycia materiałów wybuchowych",
            c: "C) można stosować tylko jako dodatkowy środek kontroli bezpieczeństwa",
            d: "D) można stosować zamiast kontroli manualnej",
            e: "E) nie zastępuje wymogów kontroli manualnej",
            f: "F) stosowany jest wyłącznie do kontroli bezpieczeństwa osób z ograniczoną możliwością poruszania się"
        },
        correct: ["c","e"] // Jedna poprawna odpowiedź
    },
    {
        id: 3,
        question: "3. Wskaż kategorie pasażerów zwolnionych z kontroli bezpieczeństwa:",
        answers: {
            a: "A) funkcjonariusze Służby Ochrony Państwa wykonujący czynności związane z zapewnieniem ochrony ministrowi spraw wewnętrznych",
            b: "B) osoby konwojowane pod uzbrojoną eskortą",
            c: "C) personel misji dyplomatycznych",
            d: "D) wicemarszałkowie Senatu"
        },
        correct: ["a","d"] // Jeśli to pytanie też ma tylko jedną odpowiedź
    },
    {
        id: 4,
        question: "4. Kontrolę bezpieczeństwa pasażera potencjalnie uciążliwego przeprowadza się, za pomocą:",
        answers: {
            a: "A) kontroli manualnej",
            b: "B) psów do wykrywania materiałów wybuchowych",
            c: "C) ręcznego wykrywacza metali",
            d: "D) urządzenia rentgenowskiego"
        },
        correct: ["a","b"]
    },
    {
        id: 5,
        question: "5. Sprzęt ułatwiający podróżowanie osobom z ograniczoną możliwością poruszania się:",
        answers: {
            a: "A) poddaje się kontroli wzrokowej",
            b: "B) poddaje się w miarę możliwości kontroli bezpieczeństwa jako bagaż kabinowy",
            c: "C) zwolniony jest z kontroli bezpieczeństwa za zgodą przewoźnika lotniczego",
            d: "D) zwolniony jest z kontroli bezpieczeństwa"
        },
        correct: ["b"]
    }
];

// Generowanie quizu z kwadracikami (checkbox)
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizData.forEach((q) => {
        let answersHtml = '';
        for (let key in q.answers) {
            answersHtml += `
                <label style="display: block; margin-bottom: 5px; cursor: pointer;">
                    <input type="checkbox" name="question-${q.id}" value="${key}">
                    ${q.answers[key]}
                </label>
            `;
        }

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.style.marginBottom = '30px';
        questionElement.innerHTML = `
            <p style="font-weight: bold;">${q.question}</p>
            <div class="answers-group" id="answers-${q.id}">
                ${answersHtml}
            </div>
            <div id="feedback-${q.id}" style="margin-top: 5px; font-weight: bold;"></div>
        `;
        quizContainer.appendChild(questionElement);
    });
}

// Sprawdzanie wielu odpowiedzi
function checkAllAnswers() {
    let score = 0;

    quizData.forEach((q) => {
        // Pobierz wszystkie zaznaczone kwadraciki dla danego pytania
        const checkedBoxes = document.querySelectorAll(`input[name="question-${q.id}"]:checked`);
        const userAnswers = Array.from(checkedBoxes).map(box => box.value);
        const feedbackDiv = document.getElementById(`feedback-${q.id}`);

        if (userAnswers.length === 0) {
            feedbackDiv.innerHTML = "<span style='color: orange;'>⚠️ Brak odpowiedzi!</span>";
            return;
        }

        // Sprawdź czy tablice poprawnych odpowiedzi i odpowiedzi użytkownika są identyczne
        const isCorrect = q.correct.length === userAnswers.length && 
                          q.correct.every(val => userAnswers.includes(val));

        if (isCorrect) {
            feedbackDiv.innerHTML = "<span style='color: green;'>✓ Poprawna odpowiedź!</span>";
            score++;
        } else {
            const correctUpper = q.correct.map(letter => letter.toUpperCase()).join(", ");
            feedbackDiv.innerHTML = `<span style='color: red;'>✗ Błędna odpowiedź. Poprawne to: ${correctUpper}</span>`;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Twój wynik to: ${score} z ${quizData.length} punktów!</h3>`;
}

window.onload = renderQuiz;
