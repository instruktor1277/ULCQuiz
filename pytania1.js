const quizData1 = [
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
            b: "B) funkcjonariusze Służby Kontrwywiadu Wojskiem po okazaniu ważnej legitymacji służbowej",
            c: "C) funkcjonariusze właściwych służb państwowych wykonujących zadania związane z pełnieniem wart ochronnych na pokładach statków powietrznych obcych przewoźników lotniczych na podstawie zawartych porozumień i umów międzynarodowych w tym zakresie posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku",
            d: "D) osoba posiadająca legitymację służbową wydaną przez Urząd Lotnictwa Cywilnego podczas wykonywania zadań i obowiązków służbowych na lotnisku",
            e: "E) pracownicy i funkcjonariusze Agencji Bezpieczeństwa Wewnętrznego i żołnierze wyznaczeni na stanowisko służbowe w Służbie Wywiadu Wojskowego posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku"
        },
        correct: ["c", "e"]
    },
    {
        id: 7,
        question: "7. Funkcjonariusze Straży Granicznej, Służby Celno-Skarbowej i Służby Ochrony Państwa mogą wejść do strefy zastrzeżonej lotniska na podstawie legitymacji służbowej, jeżeli są eskortowani przez osoby posiadające:",
        answers: {
            a: "A) certyfikat inspektora lotnictwa cywilnego wydany przez Prezesa Urzędu Lotnictwa Cywilnego",
            b: "B) czasową kartę identyfikacyjną danego portu lotniczego",
            c: "C) odpowiednik karty pokładowej",
            d: "D) ważną kartę identyfikacyjną członka załogi"
        },
        correct: ["a", "b"]
    },
    {
        id: 8,
        question: "8. Czasowa karta identyfikacyjna portu lotniczego dla funkcjonariuszy Straży Granicznej, Policji, Służby Celno-Skarbowej oraz innych służb państwowych zawiera:",
        answers: {
            a: "A) datę wydania",
            b: "B) nazwisko funkcjonariusza",
            c: "C) nr PESEL",
            d: "D) numer służbowy funkcjonariusza",
            e: "E) oznaczenia stref, do których funkcjonariusz ma dostęp"
        },
        correct: ["d", "e"]
    },
    {
        id: 9,
        question: "9. Kartę identyfikacyjną portu lotniczego zwraca się niezwłocznie podmiotowi wydającemu:",
        answers: {
            a: "A) w momencie opuszczania terytorium kraju na okres dłuższy niż 2 tygodnie",
            b: "B) w momencie unieważnienia karty",
            c: "C) w momencie zmiany pracodawcy",
            d: "D) w przypadku gdy pracownik udaje się na zwolnienie lekarskie trwające powyżej 14 dni",
            e: "E) w razie zmiany potrzeby dostępu do stref, w odniesieniu do których udzielono upoważnienia"
        },
        correct: ["b", "c", "e"]
    },
    {
        id: 10,
        question: "10. Osoby niebędące pasażerami poddaje się kontroli bezpieczeństwa za pomocą:",
        answers: {
            a: "A) kontroli wzrokowej",
            b: "B) ręcznego wykrywacza metali",
            c: "C) urządzenia do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z ręcznymi wyktywaczami metali",
            d: "D) urządzeń do wykrywania śladowych ilości materiałów wybuchowych"
        },
        correct: ["c"]
    }
];
