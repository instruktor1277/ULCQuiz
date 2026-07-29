function checkAnswer(question) {
const resultDiv = document.getElementById('result');
let correct = false;

// Sprawdź odpowiedzi dla pytania
const answers = document.getElementsByName(question);
for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
        if (question === 'q1' && answers[i].value === 'b') {
            correct = true;
            break;
        }
        // Dodaj logikę dla innych pytań
    }
}

// Wyświetl wynik
if (correct) {
    resultDiv.textContent = "Poprawna odpowiedź!";
} else {
    resultDiv.textContent = "Niestety, to nie jest poprawna odpowiedź.";
}
}


