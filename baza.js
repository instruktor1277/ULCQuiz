const bazaPytan = [
    {
        id: 1,
        q: "1. Pasażer może wnieść do stref zastrzeżonych lotniska lub na pokład statku powietrznego przedmioty zabronione, wymienione w dodatku 4-C załącznika do rozporządzenia wykonawczego Komisji nr 2015/1998 pod warunkiem, że:",
        o: { 
            "a": "odpowiedni organ wyrazi zgodę na przewóz danego przedmiotu", 
            "b": "pasażer wnoszący przedmioty zabronione przeszedł sprawdzenie przeszłości, zgodnie z pkt 11.1.3 załącznika do rozporządzenia wykonawczego Komisji nr 2015/1998", 
            "c": "pasażerowi wnoszącemu przedmioty zabronione towarzyszy uzbrojona eskorta", 
            "d": "przewoźnik lotniczy został poinformowany o pasażerze i przewożonym przez niego przedmiocie przed wejściem pasażerów na pokład statku powietrznego", 
            "e": "spełnione są mające zastosowanie zasady ochrony lotnictwa" 
        },
        c: ["b", "d", "e"]
    },
    {
        id: 2,
        q: "2. Podczas kontroli bezpieczeństwa osób, ręczny wykrywacz metali:",
        o: { 
            "a": "jest podstawowym środkiem kontroli bezpieczeństwa", 
            "b": "jest pomocny przy ustalaniu miejsca ukrycia materiałów wybuchowych", 
            "c": "można stosować tylko jako dodatkowy środek kontroli bezpieczeństwa", 
            "d": "można stosować zamiast kontroli manualnej", 
            "e": "nie zastępuje wymogów kontroli manualnej", 
            "f": "stosowany jest wyłącznie do kontroli bezpieczeństwa osób z ograniczoną możliwością poruszania się" 
        },
        c: ["c", "e"]
    },
    {
        id: 3,
        q: "3. Wskaż kategorie pasażerów zwolnionych z kontroli bezpieczeństwa:",
        o: { 
            "a": "funkcjonariusze Służby Ochrony Państwa wykonujący czynności związane z zapewnieniem ochrony ministrowi spraw wewnętrznych", 
            "b": "osoby konwojowane pod uzbrojoną eskortą", 
            "c": "personel misji dyplomatycznych", 
            "d": "wicemarszałkowie Senatu" 
        },
        c: ["a", "d"]
    },
    {
        id: 4,
        q: "4. Kontrolę bezpieczeństwa pasażera potencjalnie uciążliwego przeprowadza się, za pomocą:",
        o: { 
            "a": "kontroli manualnej", 
            "b": "psów do wykrywania materiałów wybuchowych", 
            "c": "ręcznego wykrywacza metali", 
            "d": "urządzenia rentgenowskiego" 
        },
        c: ["a", "c", "d"]
    },
    {
        id: 5,
        q: "5. Sprzęt ułatwiający podróżowanie osobom z ograniczoną możliwością poruszania się:",
        o: { 
            "a": "poddaje się kontroli wzrokowej", 
            "b": "poddaje się w miarę możliwości kontroli bezpieczeństwa jako bagaż kabinowy", 
            "c": "zwolniony jest z kontroli bezpieczeństwa za zgodą przewoźnika lotniczego", 
            "d": "zwolniony jest z kontroli bezpieczeństwa" 
        },
        c: ["b"]
    },
    {
        id: 6,
        q: "6. Wskaż osoby niebędące pasażerami, które są zwolnione z kontroli bezpieczeństwa:",
        o: { 
            "a": "funkcjonariusze Izby Skarbowej po okazaniu ważnej legitymacji służbowej", 
            "b": "funkcjonariusze Służby Kontrwywiadu Wojskowego po okazaniu ważnej legitymacji służbowej", 
            "c": "funkcjonariusze właściwych służb państwowych wykonujących zadania związane z pełnieniem wart ochronnych na pokładach statków powietrznych obcych przewoźników lotniczych na podstawie zawartych porozumień i umów międzynarodowych w tym zakresie posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku", 
            "d": "osoba posiadająca legitymację służbową wydaną przez Urząd Lotnictwa Cywilnego podczas wykonywania zadań i obowiązków służbowych na lotnisku", 
            "e": "pracownicy i funkcjonariusze Agencji Bezpieczeństwa Wewnętrznego i żołnierze wyznaczeni na stanowisko służbowe w Służbie Wywiadu Wojskowego posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku" 
        },
        c: ["c", "d", "e"]
    },
    {
        id: 7,
        q: "7. Funkcjonariusze Straży Granicznej, Służby Celno-Skarbowej i Służby Ochrony Państwa mogą wejść do strefy zastrzeżonej lotniska na podstawie legitymacji służbowej, jeżeli są eskortowani przez osoby posiadające:",
        o: { 
            "a": "certyfikat inspektora lotnictwa cywilnego wydany przez Prezesa Urzędu Lotnictwa Cywilnego", 
            "b": "czasową kartę identyfikacyjną danego portu lotniczego", 
            "c": "odpowiednik karty pokładowej", 
            "d": "ważną kartę identyfikacyjną członka załogi" 
        },
        c: ["b"]
    },
    {
        id: 8,
        q: "8. Czasowa karta identyfikacyjna portu lotniczego dla funkcjonariuszy Straży Granicznej, Policji, Służby Celno-Skarbowej oraz innych służb państwowych zawiera:",
        o: { 
            "a": "datę wydania", 
            "b": "nazwisko funkcjonariusza", 
            "c": "nr PESEL", 
            "d": "numer służbowy funkcjonariusza", 
            "e": "oznaczenia stref, do których funkcjonariusz ma dostęp" 
        },
        c: ["d", "e"]
    },
    {
        id: 9,
        q: "9. Kartę identyfikacyjną portu lotniczego zwraca się niezwłocznie podmiotowi wydającemu:",
        o: { 
            "a": "w momencie opuszczania terytorium kraju na okres dłuższy niż 2 tygodnie", 
            "b": "w momencie unieważnienia karty", 
            "c": "w momencie zmiany pracodawcy", 
            "d": "w przypadku gdy pracownik udaje się na zwolnienie lekarskie trwające powyżej 14 dni", 
            "e": "w razie zmiany potrzeby dostępu do stref, w odniesieniu do których udzielono upoważnienia" 
        },
        c: ["b", "c", "e"]
    },
    {
        id: 10,
        q: "10. Osoby niebędące pasażerami poddaje się kontroli bezpieczeństwa za pomocą:",
        o: { 
            "a": "kontroli wzrokowej", 
            "b": "ręcznego wykrywacza metali", 
            "c": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z ręcznymi wykrywaczami metali", 
            "d": "urządzeń do wykrywania śladowych ilości materiałów wybuchowych" 
        },
        c: ["c"]
    },{id:11,q:"11. Kartę identyfikacyjną portu lotniczego nosi się w widocznym miejscu przynajmniej wówczas:",o:{"a":"gdy jej posiadacz przechodzi przez punkt kontroli bezpieczeństwa","b":"gdy jej posiadacz przechodzi przez punkt kontroli dostępu","c":"gdy jej posiadacz znajduje się w strefach ogólnodostępnych lotniska","d":"gdy jej posiadacz znajduje się w strefach zastrzeżonych lotniska"},c:["d"]},{id:12,q:"12. Po przeprowadzonej kontroli bezpieczeństwa, przesyłki zawierające ładunek lub pocztę, które znajdują się w innej części lotniska niż część krytyczna strefy zastrzeżonej, uważa się za zabezpieczone przed bezprawną ingerencją, jeśli:",o:{"a":"nie są pozostawione bez nadzoru, a dostęp do nich mają wyłącznie osoby zaangażowane w zabezpieczanie i ładowanie ładunku oraz poczty na pokład statku powietrznego","b":"pozostają tam nie dłużej niż jedną godzinę","c":"tak przewiduje program ochrony przewoźnika lotniczego"},c:["a"]},{id:13,q:"13. Ładunek i poczta poddawane są kontroli bezpieczeństwa z zastosowaniem co najmniej jednej z poniższych metod:",o:{"a":"kontrola wzrokowa","b":"psy do wykrywania materiałów wybuchowych","c":"sprawdzenie przeszłości nadawcy przesyłki","d":"systemy do wykrywania urządzeń wybuchowych","e":"urządzenia do wykrywania metali"},c:["a","b","d"]},{id:14,q:"14. Podczas kontroli bezpieczeństwa bagażu rejestrowanego stosuje się:",o:{"a":"kontrole wzrokową","b":"psy do wykrywania urządzeń wybuchowych","c":"systemy wykrywania urządzeń wybuchowych","d":"urządzenia rentgenowskie","e":"wykrywacze metali"},c:["d"]},{id:15,q:"15. Następujące przedmioty uznaje się za przedmioty zabronione w przesyłkach zawierających ładunek i pocztę:",o:{"a":"wiertarki i wiertła, w tym bezprzewodowe przenośne wiertarki elektryczne","b":"wyposażenie wykorzystywane do sztuk walki","c":"zabawki w kształcie broni, repliki i imitacje broni palnej, które można pomylić z prawdziwą bronią","d":"zmontowane urządzenia wybuchowe i zapalające, które nie są przewożone zgodnie z mającymi zastosowanie zasadami bezpieczeństwa w lotnictwie cywilnym"},c:["d"]},{id:16,q:"16. Następujące przedmioty nie mogą być przewożone przez pasażerów w bagażu rejestrowanym:",o:{"a":"dynamit i proch strzelniczy","b":"fajerwerki i inne materiały pirotechniczne","c":"lonty","d":"narzędzia z ostrzem lub trzonkiem o długości powyżej 6 cm, nadające się do użycia jako broń, takie jak śrubokręty i dłuta","e":"urządzenia do porażania, takie jak paralizatory, tasery i pałki paraliżujące"},c:["a","b","c"]},{id:17,q:"17. Przedmioty zabronione do przewozu w bagażu kabinowym, o ile nie są zabronione do przewozu w bagażu rejestrowanym, mogą być:",o:{"a":"oznakowane przez przewoźnika lotniczego jako bagaż kabinowy i skierowane do luku bagażowego w trakcie kontroli bezpieczeństwa pasażerów i bagażu kabinowego","b":"po usunięciu z bagażu kabinowego umieszczone w specjalnie do tego celu przeznaczonym pojemniku i zniszczone na koszt przewoźnika lotniczego lub zarządzającego lotniskiem","c":"przechowane na lotnisku za opłatą, w przeznaczonym do tego celu pomieszczeniu, do czasu zgłoszenia się po ich odbiór pasażera","d":"umieszczone przez pasażera w bagażu rejestrowanym podczas trwania odprawy biletowo – bagażowej"},c:["b","c","d"]},{id:18,q:"18. Następujące przedmioty nie mogą być wnoszone przez pasażerów do stref zastrzeżonych lotniska ani na pokład statku powietrznego:",o:{"a":"celowniki teleskopowe do broni palnej","b":"fajerwerki","c": "ładowarki do telefonów komórkowych","d":"pałki gumowe","e":"proce","f":"strzały do łuków"},c:["b","d","e","f"]},{id:19,q:"19. Podczas kontroli bezpieczeństwa bagażu kabinowego stosuje się:",o:{"a":"bramkowe wykrywacze metali","b":"komory symulacyjne","c":"kontrolę manualną","d":"psy do wykrywania materiałów wybuchowych w połączeniu z kontrolą manualną","e":"urządzenia do wykrywania metali"},c:["c","d"]},{id:20,q:"20. Podczas kontroli bezpieczeństwa osób, urządzenia do wykrywania śladowych ilości materiałów wybuchowych, w połączeniu z ręcznymi wykrywaczami metali, można stosować:",o:{"a":"jako podstawową metodę kontroli bezpieczeństwa","b":"tylko w przypadku, gdy operator kontroli bezpieczeństwa uzna kontrolę manualną za nieskuteczną lub niepożądaną","c":"wyłącznie w stosunku do osób niepełnosprawnych"},c:["b"]}

];
