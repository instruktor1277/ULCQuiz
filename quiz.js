// Baza pierwszych 6 pytań z poprawnie ustawionymi wielokrotnymi odpowiedziami
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
        correct: ["a", "d", "e"]
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
        correct: ["c", "e"]
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
        correct: ["a", "d"]
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
        correct: ["a", "b"]
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
    },
    {
        id: 6,
        question: "6. Wskaż osoby niebędące pasażerami, które są zwolnione z kontroli bezpieczeństwa:",
        answers: {
            a: "A) funkcjonariusze Izby Skarbowej po okazaniu ważnej legitymacji służbowej",
            b: "B) funkcjonariusze Służby Kontrwywiadu Wojskowego po okazaniu ważnej legitymacji służbowej",
            c: "C) funkcjonariusze właściwych służb państwowych wykonujących zadania związane z pełnieniem wart ochronnych na pokładach statków powietrznych obcych przewoźników lotniczych na podstawie zawartych porozumień i umów międzynarodowych w tym zakresie posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku",
            d: "D) osoba posiadająca legitymację służbową wydaną przez Urząd Lotnictwa Cywilnego podczas wykonywania zadań i obowiązków służbowych na lotnisku",
            e: "E) pracownicy i funkcjonariusze Agencji Bezpieczeństwa Wewnętrznego i żołnierze wyznaczeni na stanowisko służbowe w Służbie Wywiadu Wojskowego posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku"
        },
        correct: ["c", "e"]
    }
];

// Generowanie quizu
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizData.forEach((q) => {
        let answersHtml = '';
        for (let key in q.answers) {
            answersHtml += `
                <label style="display: block; margin-bottom: 8px; cursor: pointer; padding: 5px; border-radius: 4px;">
                    <input type="checkbox" name="question-${q.id}" value="${key}" style="margin-right: 10px;">
                    ${q.answers[key]}
                </label>
            `;
        }

        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.style.marginBottom = '30px';
        questionElement.innerHTML = `
            <p style="font-weight: bold; font-size: 16px; color: #2c3e50;">${q.question}</p>
            <div class="answers-group" id="answers-${q.id}" style="margin-left: 10px;">
                ${answersHtml}
            </div>
            <div id="feedback-${q.id}" style="margin-top: 10px; font-size: 14px; font-weight: bold;"></div>
        `;
        quizContainer.appendChild(questionElement);
    });
}

// Sprawdzanie wyników
function checkAllAnswers() {
    let score = 0;

    quizData.forEach((q) => {
        const checkedBoxes = document.querySelectorAll(`input[name="question-${q.id}"]:checked`);
        const userAnswers = Array.from(checkedBoxes).map(box => box.value);
        const feedbackDiv = document.getElementById(`feedback-${q.id}`);

        if (userAnswers.length === 0) {
            feedbackDiv.innerHTML = "<span style='color: #e67e22;'>⚠️ Brak odpowiedzi!</span>";
            return;
        }

        // Sprawdzenie czy zaznaczono dokładnie te same odpowiedzi, które są poprawne
        const isCorrect = q.correct.length === userAnswers.length && 
                          q.correct.every(val => userAnswers.includes(val));

        if (isCorrect) {
            feedbackDiv.innerHTML = "<span style='color: #27ae60;'>✓ Poprawna odpowiedź!</span>";
            score++;
        } else {
            const correctUpper = q.correct.map(letter => letter.toUpperCase()).join(", ");
            feedbackDiv.innerHTML = `<span style='color: #c0392b;'>✗ Błędna odpowiedź. Poprawne to: ${correctUpper}</span>`;
        }
    });

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>Twój wynik to: ${score} z ${quizData.length} punktów!</h3>`;
}

window.onload = renderQuiz;
