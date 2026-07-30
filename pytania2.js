const quizData = [
    {
        id: 11,
        question: "11. Kartę identyfikacyjną portu lotniczego nosi się w widocznym miejscu przynajmniej wówczas:",
        answers: {
            a: "A) gdy jej posiadacz przechodzi przez punkt kontroli bezpieczeństwa",
            b: "B) gdy jej posiadacz przechodzi przez punkt kontroli dostępu",
            c: "C) gdy jej posiadacz znajduje się w strefach ogólnodostępnych lotniska",
            d: "D) gdy jej posiadacz znajduje się w strefach zastrzeżonych lotniska"
        },
        correct: ["d"]
    },
    {
        id: 12,
        question: "12. Po przeprowadzonej kontroli bezpieczeństwa, przesyłki zawierające ładunek lub pocztę, które znajdują się w innej części lotniska niż część krytyczna strefy zastrzeżonej, uważa się za zabezpieczone przed bezprawną ingerencją, jeśli:",
        answers: {
            a: "A) nie są pozostawione bez nadzoru, a dostęp do nich mają wyłącznie osoby zaangażowane w zabezpieczanie i ładowanie ładunku oraz poczty na pokład statku powietrznego",
            b: "B) pozostają tam nie dłużej niż jedną godzinę",
            c: "C) tak przewiduje program ochrony przewoźnika lotniczego"
        },
        correct: ["a"]
    },
    {
        id: 13,
        question: "13. Ładunek i poczta poddawane są kontroli bezpieczeństwa z zastosowaniem co najmniej jednej z poniższych metod:",
        answers: {
            a: "A) kontrola wzrokowa",
            b: "B) psy do wykrywania materiałów wybuchowych",
            c: "C) sprawdzenie przeszłości nadawcy przesyłki",
            d: "D) systemy do wykrywania urządzeń wybuchowych",
            e: "E) urządzenia do wykrywania metali"
        },
        correct: ["a", "b", "d"]
    },
    {
        id: 14,
        question: "14. Podczas kontroli bezpieczeństwa bagażu rejestrowanego stosuje się:",
        answers: {
            a: "A) kontrolę wzrokową",
            b: "B) psy do wykrywania urządzeń wybuchowych",
            c: "C) systemy wykrywania urządzeń wybuchowych",
            d: "D) urządzenia rentgenowskie",
            e: "E) wykrywacze metali"
        },
        correct: ["d"]
    },
    {
        id: 15,
        question: "15. Następujące przedmioty uznaje się za przedmioty zabronione w przesyłkach zawierających ładunek i pocztę:",
        answers: {
            a: "A) wiertarki i wiertła, w tym bezprzewodowe przenośne wiertarki elektryczne",
            b: "B) wyposażenie wykorzystywane do sztuk walki",
            c: "C) zabawki w kształcie broni, repliki i imitacje broni palnej, które można pomylić z prawdziwą bronią",
            d: "D) zmontowane urządzenia wybuchowe i zapalające, które nie są przewożone zgodnie z mającymi zastosowanie zasadami bezpieczeństwa w lotnictwie cywilnym"
        },
        correct: ["d"]
    },
    {
        id: 16,
        question: "16. Następujące przedmioty nie mogą być przewożone przez pasażerów w bagażu rejestrowanym:",
        answers: {
            a: "A) dynamit i proch strzelniczy",
            b: "B) fajerwerki i inne materiały pirotechniczne",
            c: "C) lonty",
            d: "D) narzędzia z ostrzem lub trzonkiem o długości powyżej 6 cm, nadające się do użycia jako broń, takie jak śrubokręty i dłuta",
            e: "E) urządzenia do porażania, takie jak paralizatory, tasery i pałki paraliżujące"
        },
        correct: ["a", "b", "c", "d", "e"]
    },
    {
        id: 17,
        question: "17. Przedmioty zabronione do przewozu w bagażu kabinowym, o ile nie są zabronione do przewozu w bagażu rejestrowanym, mogą być:",
        answers: {
            a: "A) oznakowane przez przewoźnika lotniczego jako bagaż kabinowy i skierowane do luku bagażowego w trakcie kontroli bezpieczeństwa pasażerów i bagażu kabinowego",
            b: "B) po usunięciu z bagażu kabinowego umieszczone w specjalnie do tego celu przeznaczonym pojemniku i zniszczone na koszt przewoźnika lotniczego lub zarządzającego lotniskiem",
            c: "C) przechowane na lotnisku za opłatą, w przeznaczonym do tego celu pomieszczeniu, do czasu zgłoszenia się po ich odbiór pasażera",
            d: "D) umieszczone przez pasażera w bagażu rejestrowanym podczas trwania odprawy biletowo – bagażowej"
        },
        correct: ["b", "c", "d"]
    },
    {
        id: 18,
        question: "18. Następujące przedmioty nie mogą być wnoszone przez pasażerów do stref zastrzeżonych lotniska ani na pokład statku powietrznego:",
        answers: {
            a: "A) celowniki teleskopowe do broni palnej",
            b: "B) fajerwerki",
            c: "C) ładowarki do telefonów komórkowych",
            d: "D) pałki gumowe",
            e: "E) proce",
            f: "F) strzały do łuków"
        },
        correct: ["b", "d", "e", "f"]
    },
    {
        id: 19,
        question: "19. Podczas kontroli bezpieczeństwa bagażu kabinowego stosuje się:",
        answers: {
            a: "A) bramkowe wykrywacze metali",
            b: "B) komory symulacyjne",
            c: "C) kontrolę manualną",
            d: "D) psy do wykrywania materiałów wybuchowych w połączeniu z kontrolą manualną",
            e: "E) urządzenia do wykrywania metali"
        },
        correct: ["c", "d"]
    },
    {
        id: 20,
        question: "20. Podczas kontroli bezpieczeństwa osób, urządzenia do wykrywania śladowych ilości materiałów wybuchowych, w połączeniu z ręcznymi wykrywaczami metali, można stosować:",
        answers: {
            a: "A) jako podstawową metodę kontroli bezpieczeństwa",
            b: "B) tylko w przypadku, gdy operator kontroli bezpieczeństwa uzna kontrolę manualną za nieskuteczną lub niepożądaną",
            c: "C) wyłącznie w stosunku do osób niepełnosprawnych"
        },
        correct: ["b"]
    }
];
