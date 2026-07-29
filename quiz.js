// Tutaj znajduje się Twoja baza 177 pytań. 
// Możesz dopisywać kolejne pytania dokładnie według tego samego schematu.
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
        correct: "e" // czerwona odpowiedź z PDF
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
        correct: "e"
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
        correct: "a"
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
        correct: "a"
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
        correct: "b"
    }
];

// Funkcja, która automatycznie buduje quiz na stronie HTML
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizData.forEach((q) => {
        let answersHtml = '';
        for (let key in q.answers) {
            answersHtml += `
                <label style="display: block; margin-bottom: 5px; cursor: pointer;">
                    <input type="radio" name="question-${q.id}" value="${key}">
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

// Funkcja sprawdzająca wszystkie odpowiedzi na raz
function checkAllAnswers() {
    let score = 0;

    quizData.forEach((q) => {
        const selectedInput = document.querySelector(`input[name="question-${q.id}"]:checked`);
        const feedbackDiv = document.getElementById(`feedback-${q.id}`);

        if (selectedInput) {
            if (selectedInput.value === q.correct) {
                feedbackDiv.innerHTML = "<span style='color: green;'>✓ Poprawna odpowiedź!</span>";
                score++;
            } else {
                feedbackDiv.innerHTML = `<span style='color: red;'>✗ Błędna odpowiedź. Poprawna to: ${q.correct.toUpperCase()}</span>`;
            }
        } else {
            feedbackDiv.innerHTML = "<span style='color: orange;'>⚠️ Brak odpowiedzi!</span>";
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Twój wynik to: ${score} z ${quizData.length} punktów!</h3>`;
}

// Uruchomienie generowania quizu po załadowaniu strony
window.onload = renderQuiz;
