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
,{id:21,q:"21. Na lotniskach, na których nie funkcjonują lotnicze przejścia graniczne, formalności związane z przewozem broni i amunicji statkiem powietrznym dokonuje:",o:{"a":"Policja","b":"przewoźnik lotniczy","c":"Służba Celno-Skarbowa","d":"Służba Ochrony Lotniska"},c:["d"]},{id:22,q:"22. Ręczny wykrywacz metali:",o:{"a":"jest w stanie wykryć metalowe przedmioty żelazne","b":"jest w stanie wykryć metalowe przedmioty nieżelazne","c":"jest używany jako podstawowa metoda kontroli bezpieczeństwa osób","d":"jest w stanie wykryć przedmioty z tworzyw sztucznych","e":"posiada wskaźnik wizualny sygnalizujący, że urządzenie funkcjonuje"},c:["a","b","e"]},{id:23,q:"23. Kontrolą manualną jest zespół czynności kontroli bezpieczeństwa:",o:{"a":"wykonywanych ręcznie bez ingerencji w wewnętrzne powłoki ciała oraz w sposób powodujący w jak najmniejszym stopniu naruszenie intymności, w celu wykryciu w odzieży lub na ciele oraz w przedmiotach osobistych kontrolowanej osoby zabronionych przedmiotów, urządzeń lub substancji","b":"wykonywanych ręcznie z ingerencją w wewnętrzne powłoki ciała...","c":"wykonywanych za pomocą bramki do wykrywania metali i ręcznego wykrywacza metali..."},c:["a"]},{id:24,q:"24. Pracownik służby ochrony lotniska przy wykonywaniu zadań z zakresu kontroli bezpieczeństwa w lotnictwie cywilnym ma prawo do:",o:{"a":"dokonywania kontroli manualnej i przeglądania zawartości bagażu","b":"korzystania ze środków chemicznych oraz wykorzystania psów do wykrywania przedmiotów lub substancji, które mogą stanowić przedmiot niebezpieczny","c":"niedopuszczenia do wejścia na obszar lub do obiektu podlegających ochronie osoby nieposiadającej wymaganych uprawnień","d":"samodzielnej neutralizacji na stanowisku kontrolnym wykrytego urządzenia wybuchowego","e":"zwolnienia z kontroli bezpieczeństwa osób poruszających się na wózku inwalidzkim"},c:["a","b","c"]},{id:25,q:"25. W szkoleniu w celu uzyskania certyfikatu operatora kontroli bezpieczeństwa może wziąć udział osoba:",o:{"a":"co do której ustalono brak negatywnych przesłanek do wykonywania przez tę osobę kontroli bezpieczeństwa w lotnictwie cywilnym","b":"która ukończyła szkolenie świadomości ochrony lotnictwa cywilnego","c":"potrafiąca nawiązać kontakt z osobami kontrolowanymi w co najmniej jednym języku obcym w podstawowym zakresie","d":"zamieszkująca na terenie Polski co najmniej 3 lata"},c:["a","b","c"]},{id:26,q:"26. Bramka do wykrywania metali:",o:{"a":"jest na stałe przymocowana do twardego podłoża","b":"musi być odporna na zalanie wodą","c":"wykrywa przedmiot metalowy niezależnie od jego położenia i usytuowania","d":"wykrywa przedmioty z plastiku niezależnie od ich położenia i usytuowania"},c:["a","c"]},{id:27,q:"27. Podczas kontroli bezpieczeństwa zaopatrzenia portu lotniczego zastosowane środki lub metoda:",o:{"a":"są zależne od częstotliwości dostaw w danym porcie lotniczym","b":"uwzględniają rodzaj zaopatrzenia","c":"zapewniają dostateczny poziom bezpieczeństwa, na ile to możliwe, jeżeli chodzi o wykrycie przedmiotów zabronionych ukrytych w zaopatrzeniu","d":"zawsze przewidują wykorzystanie psów do wykrywania materiałów wybuchowych..."},c:["b","c"]},{id:28,q:"28. Następujące przedmioty uznaje się za przedmioty zabronione w zaopatrzeniu portu lotniczego:",o:{"a":"aerozole odstraszające zwierzęta","b":"farby drogowe w pojemnikach o pojemności powyżej 10 litrów","c":"granaty dymne","d":"masy bitumiczne uszczelniające w pojemnikach o pojemności powyżej 20 litrów","e":"pistolety sygnałowe","f":"spirytus salicylowy"},c:["a","c","e"]},{id:29,q:"29. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do luku bagażowego statku powietrznego, stosuje się:",o:{"a":"kontrolę wzrokową","b":"psy do wykrywania materiałów wybuchowych","c":"systemy wykrywania urządzeń wybuchowych","d":"urządzenia do wykrywania metali"},c:["b","c"]},{id:30,q:"30. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego stosuje się pojedynczo lub w kombinacji następujące środki lub metody kontroli:",o:{"a":"bramkowe detektory metali","b":"detektory promieniowania jonizującego","c":"kontrolę manualną","d":"systemy do wykrywania urządzeń wybuchowych","e":"urządzenia do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z kontrolą wzrokową"},c:["c","e"]}

];
