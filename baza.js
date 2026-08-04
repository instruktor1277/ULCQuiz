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
,{
    id: 21,
    q: "21. Na lotniskach, na których nie funkcjonują lotnicze przejścia graniczne, formalności związane z przewozem broni i amunicji statkiem powietrznym dokonuje:",
    o: { 
        "a": "Policja", 
        "b": "przewoźnik lotniczy", 
        "c": "Służba Celno-Skarbowa", 
        "d": "Służba Ochrony Lotniska" 
    },
    c: ["d"]
},
{
    id: 22,
    q: "22. Ręczny wykrywacz metali:",
    o: { 
        "a": "jest w stanie wykryć metalowe przedmioty żelazne", 
        "b": "jest w stanie wykryć metalowe przedmioty nieżelazne", 
        "c": "jest używany jako podstawowa metoda kontroli bezpieczeństwa osób", 
        "d": "jest w stanie wykryć przedmioty z tworzyw sztucznych", 
        "e": "posiada wskaźnik wizualny sygnalizujący, że urządzenie funkcjonuje" 
    },
    c: ["a", "b", "e"]
},
{
    id: 23,
    q: "23. Kontrolą manualną jest zespół czynności kontroli bezpieczeństwa:",
    o: { 
        "a": "wykonywanych ręcznie bez ingerencji w wewnętrzne powłoki ciała oraz w sposób powodujący w jak najmniejszym stopniu naruszenie intymności, w celu wykryciu w odzieży lub na ciele oraz w przedmiotach osobistych kontrolowanej osoby zabronionych przedmiotów, urządzeń lub substancji", 
        "b": "wykonywanych ręcznie z ingerencją w wewnętrzne powłoki ciała, w celu wykrycia w odzieży lub ciele oraz w przedmiotach osobistych kontrolowanej osoby zabronionych przedmiotów, urządzeń lub substancji", 
        "c": "wykonywanych za pomocą bramki do wykrywania metali i ręcznego wykrywacza metali, w celu wykrycia w odzieży lub na ciele oraz w przedmiotach osobistych kontrolowanej osoby zabronionych przedmiotów, urządzeń lub substancji" 
    },
    c: ["a"]
},
{
    id: 24,
    q: "24. Pracownik służby ochrony lotniska przy wykonywaniu zadań z zakresu kontroli bezpieczeństwa w lotnictwie cywilnym ma prawo do:",
    o: { 
        "a": "dokonywania kontroli manualnej i przeglądania zawartości bagażu", 
        "b": "korzystania ze środków chemicznych oraz wykorzystania psów do wykrywania przedmiotów lub substancji, które mogą stanowić przedmiot niebezpieczny", 
        "c": "niedopuszczenia do wejścia na obszar lub do obiektu podlegających ochronie osoby nieposiadającej wymaganych uprawnień", 
        "d": "samodzielnej neutralizacji na stanowisku kontrolnym wykrytego urządzenia wybuchowego", 
        "e": "zwolnienia z kontroli bezpieczeństwa osób poruszających się na wózku inwalidzkim" 
    },
    c: ["a", "b", "c"]
},
{
    id: 25,
    q: "25. W szkoleniu w celu uzyskania certyfikatu operatora kontroli bezpieczeństwa może wziąć udział osoba:",
    o: { 
        "a": "co do której ustalono brak negatywnych przesłanek do wykonywania przez tę osobę kontroli bezpieczeństwa w lotnictwie cywilnym", 
        "b": "która ukończyła szkolenie świadomości ochrony lotnictwa cywilnego", 
        "c": "potrafiąca nawiązać kontakt z osobami kontrolowanymi w co najmniej jednym języku obcym w podstawowym zakresie", 
        "d": "zamieszkująca na terenie Polski co najmniej 3 lata" 
    },
    c: ["a", "b", "c"]
},
{
    id: 26,
    q: "26. Bramka do wykrywania metali:",
    o: { 
        "a": "jest na stałe przymocowana do twardego podłoża", 
        "b": "musi być odporna na zalanie wodą", 
        "c": "wykrywa przedmiot metalowy niezależnie od jego położenia i usytuowania", 
        "d": "wykrywa przedmioty z plastiku niezależnie od ich położenia i usytuowania" 
    },
    c: ["a", "c"]
},
{
    id: 27,
    q: "27. Podczas kontroli bezpieczeństwa zaopatrzenia portu lotniczego zastosowane środki lub metoda:",
    o: { 
        "a": "są zależne od częstotliwości dostaw w danym porcie lotniczym", 
        "b": "uwzględniają rodzaj zaopatrzenia", 
        "c": "zapewniają dostateczny poziom bezpieczeństwa, na ile to możliwe, jeżeli chodzi o wykrycie przedmiotów zabronionych ukrytych w zaopatrzeniu", 
        "d": "zawsze przewidują wykorzystanie psów do wykrywania materiałów wybuchowych w powiązaniu z systemami wykrywania materiałów wybuchowych" 
    },
    c: ["b", "c"]
},
{
    id: 28,
    q: "28. Następujące przedmioty uznaje się za przedmioty zabronione w zaopatrzeniu portu lotniczego:",
    o: { 
        "a": "aerozole odstraszające zwierzęta", 
        "b": "farby drogowe w pojemnikach o pojemności powyżej 10 litrów", 
        "c": "granaty dymne", 
        "d": "masy bitumiczne uszczelniające w pojemnikach o pojemności powyżej 20 litrów", 
        "e": "pistolety sygnałowe", 
        "f": "spirytus salicylowy" 
    },
    c: ["a", "c", "e"]
},
{
    id: 29,
    q: "29. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do luku bagażowego statku powietrznego, stosuje się:",
    o: { 
        "a": "kontrolę wzrokową", 
        "b": "psy do wykrywania materiałów wybuchowych", 
        "c": "systemy wykrywania urządzeń wybuchowych", 
        "d": "urządzenia do wykrywania metali" 
    },
    c: ["b", "c"]
},
{
    id: 30,
    q: "30. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego stosuje się pojedynczo lub w kombinacji następujące środki lub metody kontroli:",
    o: { 
        "a": "bramkowe detektory metali", 
        "b": "detektory promieniowania jonizującego", 
        "c": "kontrolę manualną", 
        "d": "systemy do wykrywania urządzeń wybuchowych", 
        "e": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z kontrolą wzrokową" 
    },
    c: ["c", "e"]
},
{
    id: 31,
    q: "31. Następujące przedmioty uznaje się za przedmioty zabronione w zaopatrzeniu pokładowym:",
    o: { 
        "a": "latarki akumulatorowe", 
        "b": "metalowe pojemniki na lód", 
        "c": "pistolety sygnałowe", 
        "d": "rozpylacze kwasu", 
        "e": "tasery" 
    },
    c: ["c", "d", "e"]
},
{
    id: 32,
    q: "32. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do luku bagażowego statku powietrznego, stosuje się:",
    o: { 
        "a": "kontrolę wzrokową", 
        "b": "systemy wykrywania urządzeń wybuchowych", 
        "c": "urządzenia do wykrywania niemetali", 
        "d": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych" 
    },
    c: ["b", "d"]
},
{
    id: 33,
    q: "33. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego stosuje się pojedynczo lub w kombinacji następujące środki lub metody kontroli:",
    o: { 
        "a": "urządzenia do wykrywania metali", 
        "b": "detektory promieniowania jonizującego", 
        "c": "systemy do wykrywania urządzeń wybuchowych", 
        "d": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z kontrolą wzrokową", 
        "e": "urządzenia rentgenowskie" 
    },
    c: ["d", "e"]
},
{
    id: 34,
    q: "34. Następujące przedmioty uznaje się za przedmioty zabronione w zaopatrzeniu pokładowym:",
    o: { 
        "a": "gazy obronne", 
        "b": "latarki akumulatorowe", 
        "c": "metalowe pojemniki na lód", 
        "d": "pistolety na CO2", 
        "e": "rozpylacze kwasu" 
    },
    c: ["a", "d", "e"]
},
{
    id: 35,
    q: "35. Status ochrony nadany przesyłkom oznacza:",
    o: { 
        "a": "„SCO” – bezpieczne tylko dla pasażerskiego i towarowego statku powietrznego", 
        "b": "„SHR” – bezpieczny dla pasażerskiego, towarowego i pocztowego statku powietrznego, zgodnie z wymogami wysokiego ryzyka", 
        "c": "„SPO” – bezpieczne tylko dla pasażerskiego i pocztowego statku powietrznego", 
        "d": "„SPX” – bezpieczne tylko dla pasażerskiego i pocztowego statku powietrznego" 
    },
    c: ["b"]
},
{
    id: 36,
    q: "36. Dokumentacja dołączona do każdej przesyłki zawierającej ładunek i pocztę, w stosunku do których zastosowano środki kontroli, zawiera między następujące informacje:",
    o: { 
        "a": "nazwisko osoby wystawiającej list przewozowy", 
        "b": "nazwisko osoby, która nadała status ochrony lub równoważną identyfikację oraz datę i godzinę nadania", 
        "c": "niepowtarzalny alfanumeryczny identyfikator uznanego nadawcy, nadany przez Prezesa Urzędu Lotnictwa Cywilnego", 
        "d": "niepowtarzalny identyfikator każdego zarejestrowanego agenta, który zaakceptował status ochrony nadany przesyłce przez innego zarejestrowanego agenta", 
        "e": "opis zawartości przesyłki, status ochrony przesyłki i powód wydania statusu ochrony" 
    },
    c: ["b", "d", "e"]
},
{
    id: 37,
    q: "37. Następujące przedmioty uznaje się za przedmioty zabronione w przesyłkach zawierających ładunek i pocztę:",
    o: { 
        "a": "broń palna przewożona zgodnie z mającymi zastosowanie zasadami bezpieczeństwa w lotnictwie cywilnym", 
        "b": "wiertarki i wiertła, w tym bezprzewodowe przenośne wiertarki elektryczne", 
        "c": "zabawki w kształcie broni, repliki i imitacje broni palnej, które można pomylić z prawdziwą bronią", 
        "d": "zmontowane urządzenia wybuchowe i zapalające, które nie są przewożone zgodnie z mającymi zastosowanie zasadami bezpieczeństwa w lotnictwie cywilnym" 
    },
    c: ["b", "c", "d"]
},
{
    id: 38,
    q: "38. Po przeprowadzonej kontroli bezpieczeństwa, przesyłki zawierające ładunek lub pocztę, które znajdują się w innej części pomieszczeń zarejestrowanego agenta, do których dostęp nie jest kontrolowany, uznaje się za zabezpieczone przed nieupoważnioną ingerencją, jeżeli:",
    o: { 
        "a": "nie są fizycznie zabezpieczone w sposób zapobiegający wprowadzeniu do nich przedmiotu zabronionego", 
        "b": "nie są pozostawione bez nadzoru, a dostęp do nich mają wyłącznie osoby zaangażowane w zabezpieczanie i ładowanie ładunku oraz poczty na pokład statku powietrznego", 
        "c": "pozostają tam nie dłużej niż dwie godziny", 
        "d": "tak przewiduje program ochrony przewoźnika lotniczego" 
    },
    c: ["b"]
},
{
    id: 39,
    q: "39. Przed załadunkiem do luku bagażowego statku powietrznego, poczta przewoźnika lotniczego i materiały przewoźnika lotniczego poddawane są środkom kontroli w zakresie ochrony i zabezpieczane zgodnie zasadami stosowanymi w odniesieniu do:",
    o: { 
        "a": "bagażu kabinowego", 
        "b": "ładunków i poczty", 
        "c": "przedmiotów przenoszonych przez osoby niebędące pasażerami" 
    },
    c: ["b"]
},
{
    id: 40,
    q: "40. Następujące przedmioty uznaje się za przedmioty zabronione w poczcie przewoźnika lotniczego i materiałach przewoźnika lotniczego, które mają zostać załadowane do jakiejkolwiek części statku powietrznego innej niż luk bagażowy:",
    o: { 
        "a": "broń pneumatyczna", 
        "b": "gazy pieprzowe", 
        "c": "kastety", 
        "d": "noże o długości ostrza poniżej 6 cm", 
        "e": "nożyczki o długości 6 cm", 
        "f": "piłki tenisowe" 
    },
    c: ["a", "b", "c", "d", "e"]
} 
,
{
    id: 41,
    q: "41. Znanych nadawców ładunku i poczty wyznacza:",
    o: { 
        "a": "Prezes Urzędu Lotnictwa Cywilnego", 
        "b": "uznany nadawca", 
        "c": "zarejestrowany agent", 
        "d": "zarządzający portem lotniczym" 
    },
    c: ["a"]
},
{
    id: 42,
    q: "42. Przesyłki zawierające ładunek i pocztę, w stosunku do których zastosowano środki kontroli, oczekujące na załadunek do statku powietrznego uważa się za zabezpieczone przed nieupoważnioną ingerencją, jeżeli znajdują się:",
    o: { 
        "a": "w części krytycznej strefy zastrzeżonej lotniska", 
        "b": "w części operacyjnej lotniska", 
        "c": "w części zastrzeżonej lotniska" 
    },
    c: ["a"]
},
{
    id: 43,
    q: "43. Jeżeli nieupoważnione osoby mogły mieć dostęp do stref zastrzeżonych lotniska:",
    o: { 
        "a": "zwołuje się Zespół Ochrony lotniska", 
        "b": "niezwłocznie dokonuje się przeszukania całego lotniska, aby upewnić się, na ile to możliwe, że nie zostały wniesione przedmioty zabronione", 
        "c": "niezwłocznie dokonuje się przeszukania części, do których mogły mieć dostęp te osoby, aby upewnić się, na ile to możliwe, że nie znajdują się w nich przedmioty zabronione", 
        "d": "wstrzymuje się odloty statków powietrznych do czasu odnalezienia tych osób" 
    },
    c: ["c"]
},
{
    id: 44,
    q: "44. W celu uzyskania pozwolenia na dostęp do stref zastrzeżonych lotniska odlatujący podróżny przedstawia:",
    o: { 
        "a": "dokument potwierdzający dokonanie odprawy celnej", 
        "b": "dokument potwierdzający zakup biletu lotniczego", 
        "c": "ważną kartę pokładową lub jej odpowiednik", 
        "d": "zaświadczenie od biura podróży, które organizuje podróż drogą lotniczą" 
    },
    c: ["c"]
},
{
    id: 45,
    q: "45. Kartę pokładową lub jej odpowiednik, przedstawianą przez odlatującego podróżnego, sprawdza się przed udzieleniem mu pozwolenia na dostęp do stref zastrzeżonych w celu:",
    o: { 
        "a": "prowadzenia statystyki natężenia ruchu lotniczego", 
        "b": "upewnienia się co do jej ważności", 
        "c": "zastosowania odpowiedniej metody kontroli bezpieczeństwa w zależności od portu lotniczego, do którego odlatuje" 
    },
    c: ["b"]
},
{
    id: 46,
    q: "46. Karty identyfikacyjne członka załogi i portu lotniczego wydaje się na okres nie dłuższy niż:",
    o: { 
        "a": "10 lat", 
        "b": "2 lat", 
        "c": "3 lat", 
        "d": "5 lat" 
    },
    c: ["d"]
},
{
    id: 47,
    q: "47. Kartę identyfikacyjną portu lotniczego zwraca się niezwłocznie podmiotowi wydającemu:",
    o: { 
        "a": "na żądanie podmiotu wydającego", 
        "b": "w momencie rozpoczęcia urlopu trвающей dłużej niż 30 dni kalendarzowych", 
        "c": "w momencie rozwiązania stosunku pracy", 
        "d": "w momencie unieważnienia karty", 
        "e": "w momencie wygaśnięcia ważności karty" 
    },
    c: ["a", "c", "d", "e"]
},
{
    id: 48,
    q: "48. Kartę identyfikacyjną portu lotniczego zwraca się niezwłocznie podmiotowi wydającemu:",
    o: { 
        "a": "w momencie zmiany pracodawcy", 
        "b": "w momencie opuszczania terytorium kraju na okres dłuższy niż 2 tygodnie", 
        "c": "w momencie unieważnienia karty", 
        "d": "w momencie wygaśnięcia ważności karty", 
        "e": "w razie zmiany potrzeby dostępu do stref, w odniesieniu do których udzielono upoważnienia" 
    },
    c: ["a", "c", "d", "e"]
},
{
    id: 49,
    q: "49. Na karcie identyfikacyjnej portu lotniczego znajdują się:",
    o: { 
        "a": "nazwa podmiotu wydającego lub portu lotniczego", 
        "b": "data urodzenia posiadacza", 
        "c": "nazwisko i zdjęcie posiadacza", 
        "d": "data ważności, o ile nie jest zaprogramowana elektronicznie" 
    },
    c: ["a", "c", "d"]
},
{
    id: 50,
    q: "50. Na karcie identyfikacyjnej portu lotniczego znajdują się:",
    o: { 
        "a": "funkcja, jaką posiadacz karty pełni w porcie lotniczym", 
        "b": "nazwa pracodawcy posiadacza, o ile nie jest zaprogramowana elektronicznie", 
        "c": "nazwisko posiadacza", 
        "d": "strefy, do których posiadacz karty ma dostęp" 
    },
    c: ["a", "b", "c", "d"]
}
,
{
    id: 51,
    q: "51. Czasowa karta identyfikacyjna portu lotniczego zawiera:",
    o: { 
        "a": "datę wydania", 
        "b": "funkcję, jaką posiadacz karty pełni w porcie lotniczym", 
        "c": "zabezpieczenie przed jej podrobieniem lub przerobieniem", 
        "d": "zdjęcie posiadacza" 
    },
    c: ["c"]
},
{
    id: 52,
    q: "52. Na jednorazowej karcie identyfikacyjnej portu lotniczego znajdują się:",
    o: { 
        "a": "data wydania", 
        "b": "napisy: „GOŚĆ” i „VISITOR”", 
        "c": "nazwa pracodawcy posiadacza", 
        "d": "nazwisko posiadacza" 
    },
    c: ["b"]
},
{
    id: 53,
    q: "53. Czasowa karta identyfikacyjna portu lotniczego dla funkcjonariuszy Straży Granicznej, Policji, Służby Celnej oraz innych służb państwowych zawiera:",
    o: { 
        "a": "imię i nazwisko", 
        "b": "numer służbowy funkcjonariusza", 
        "c": "oznaczenia stref, do których funkcjonariusz ma dostęp", 
        "d": "zabezpieczenie przed jej podrobieniem lub przerobieniem", 
        "e": "zdjęcie posiadacza" 
    },
    c: ["d"]
},
{
    id: 54,
    q: "54. Ładunek i poczta, którym nadano oznaczenie „KC” oznacza przesyłkę otrzymaną od:",
    o: { 
        "a": "uznanego dostawcy", 
        "b": "zarejestrowanego agenta", 
        "c": "zarejestrowanego dostawcy", 
        "d": "znanego nadawcy" 
    },
    c: ["d"]
},
{
    id: 55,
    q: "55. Czasowa karta identyfikacyjna portu lotniczego dla funkcjonariuszy Straży Granicznej, Policji, Służby Celnej oraz innych służb państwowych zawiera:",
    o: { 
        "a": "datę ważności", 
        "b": "nazwisko funkcjonariusza", 
        "c": "numer służbowy funkcjonariusza", 
        "d": "oznaczenia stref, do których funkcjonariusz ma dostęp" 
    },
    c: ["a"]
},
{
    id: 56,
    q: "56. Funkcjonariusze Straży Granicznej, Służby Celnej i Służby Ochrony Państwa mogą wejść do strefy zastrzeżonej lotniska na podstawie legitymacji służbowej, jeżeli są eskortowani przez osoby posiadające:",
    o: { 
        "a": "certyfikat inspektora lotnictwa cywilnego wydany przez Prezesa Urzędu Lotnictwa Cywilnego", 
        "b": "czasową kartę identyfikacyjną danego portu lotniczego", 
        "c": "nie ma wymogu eskortowania funkcjonariuszy służb państwowych udających się do strefy zastrzeżonej lotniska na podstawie legitymacji służbowej", 
        "d": "odpowiednik karty pokładowej", 
        "e": "ważną kartę identyfikacyjną członka załogi" 
    },
    c: ["c"]
},
{
    id: 57,
    q: "57. Funkcjonariusze i żołnierze Agencji Bezpieczeństwa Wewnętrznego, Żandarmerii Wojskowej i Policji mogą wejść do strefy zastrzeżonej lotniska na podstawie legitymacji służbowej w asyście osoby posiadającej:",
    o: { 
        "a": "certyfikat inspektora lotnictwa cywilnego wydany przez Prezesa ULC", 
        "b": "czasową kartę identyfikacyjną danego portu lotniczego", 
        "c": "ważną kartę identyfikacyjną członka załogi", 
        "d": "ważną legitymację inspektora ULC" 
    },
    c: ["b"]
},
{
    id: 58,
    q: "58. Dokumentem uprawniającym do eskortowania osób w strefach zastrzeżonych lotniska jest:",
    o: { 
        "a": "certyfikat inspektora lotnictwa cywilnego wydany przez Prezesa ULC", 
        "b": "ważna karta identyfikacyjna członka załogi", 
        "c": "ważna karta identyfikacyjna portu lotniczego", 
        "d": "ważna karta pokładowa" 
    },
    c: ["c"]
},
{
    id: 59,
    q: "59. Ładunek i poczta, którym nadano oznaczenie „RA” oznacza przesyłkę otrzymaną od:",
    o: { 
        "a": "uznanego dostawcy", 
        "b": "zarejestrowanego agenta", 
        "c": "zarejestrowanego dostawcy", 
        "d": "znanego dostawcy" 
    },
    c: ["b"]
},
{
    id: 60,
    q: "60. Osoby niebędące pasażerami poddaje się kontroli bezpieczeństwa za pomocą następujących środków:",
    o: { 
        "a": "bramki do wykrywania metali", 
        "b": "kontrola manualna", 
        "c": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych", 
        "d": "urządzenia rentgenowskie" 
    },
    c: ["b"]
}
,
{
    id: 61,
    q: "61. Osoby niebędące pasażerami poddaje się kontroli bezpieczeństwa za pomocą następujących środków:",
    o: { 
        "a": "kontrola manualna", 
        "b": "psy do wykrywania materiałów wybuchowych", 
        "c": "urządzenia do prześwietlania osób niewykorzystujące promieniowania jonizującego", 
        "d": "urządzenia do wykrywania śladowych ilości narkotyków i środków odurzających" 
    },
    c: ["a"]
},
{
    id: 62,
    q: "62. Osoby niebędące pasażerami poddaje się kontroli bezpieczeństwa za pomocą następujących środków:",
    o: { 
        "a": "kontrola wzrokowa", 
        "b": "ręczne wykrywacze metali", 
        "c": "urządzenia do prześwietlania osób niewykorzystujących promieniowania jonizującego", 
        "d": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z ręcznymi wykrywaczami metali" 
    },
    c: ["d"]
},
{
    id: 63,
    q: "63. Osoby niebędące pasażerami poddaje się kontroli bezpieczeństwa za pomocą następujących środków:",
    o: { 
        "a": "kontrola manualna", 
        "b": "psy do wykrywania materiałów wybuchowych", 
        "c": "ręczne wykrywacze metali", 
        "d": "urządzenia do wykrywania metali (MDE)", 
        "e": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z ręcznymi wykrywaczami metali" 
    },
    c: ["a", "d", "e"]
},
{
    id: 64,
    q: "64. Wskaż osoby niebędące pasażerami, które są zwolnione z kontroli bezpieczeństwa:",
    o: { 
        "a": "członkowie załogi statku powietrznego podczas wykonywania obowiązków służbowych", 
        "b": "funkcjonariusze Centralnego Biura Antykorupcyjnego posiadający ważną kartę identyfikacyjną portu lotniczego, podczas wykonywania zadań i obowiązków służbowych na lotnisku", 
        "c": "funkcjonariusze Policji i Służby Celnej po okazaniu ważnej legitymacji służbowej", 
        "d": "pracownicy wewnętrznej służby ochrony", 
        "e": "zarządzający lotniskiem", 
        "f": "żołnierze i funkcjonariusze Straży Granicznej, Biura Ochrony Rządu i Żandarmerii Wojskowej posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku" 
    },
    c: ["b", "f"]
},
{
    id: 65,
    q: "65. Wskaż osoby niebędące pasażerami, które są zwolnione z kontroli bezpieczeństwa:",
    o: { 
        "a": "dyrektor ds. bezpieczeństwa portu lotniczego", 
        "b": "funkcjonariusze Izby Skarbowej po okazaniu ważnej legitymacji służbowej", 
        "c": "funkcjonariusze Służby Kontrwywiadu Wojskowego po okazaniu ważnej legitymacji służbowej", 
        "d": "osoba posiadająca certyfikat inspektora lotnictwa cywilnego wydanego przez Prezesa ULC podczas wykonywania zadań i obowiązków służbowych na lotnisku", 
        "e": "żołnierze i funkcjonariusze Agencji Bezpieczeństwa Wewnętrznego i Służby Wywiadu Wojskowego posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku" 
    },
    c: ["d", "e"]
},
{
    id: 66,
    q: "66. Do strefy zastrzeżonej portu lotniczego, bez poddawania kontroli bezpieczeństwa, mogą wjechać pojazdy używane w celu:",
    o: { 
        "a": "dostarczania zaopatrzenia pokładowego", 
        "b": "dostawy towarów do sklepów wolnocłowych", 
        "c": "prowadzenia działań ratowniczych i gaśniczych", 
        "d": "utrzymania nawierzchni lotniskowych w stanie sprawności eksploatacyjnej" 
    },
    c: ["c"]
},
{
    id: 67,
    q: "67. Podczas kontroli bezpieczeństwa bagażu kabinowego, laptopy i inne duże urządzenia elektryczne:",
    o: { 
        "a": "mogą pozostać w bagażu pod warunkiem, że torba jest otwarta", 
        "b": "muszą być wyjmowane z bagażu przed kontrolą w celu prześwietlenia ich oddzielnie (chyba że urządzenie rentgenowskie pozwala na badanie wewnątrz)", 
        "c": "są zwolnione z prześwietlenia promieniowaniem rentgenowskim", 
        "d": "wymagają każdorazowo przeprowadzenia kontroli manualnej" 
    },
    c: ["b"]
},
{
    id: 68,
    q: "68. Płyny, aerozole i żele (LAG) wnoszone przez pasażerów mogą być zwolnione z kontroli bezpieczeństwa odpowiednimi urządzeniami, jeżeli:",
    o: { 
        "a": "są zapakowane w torbę STEB zabezpieczoną przed otwarciem i pochodzą z lotniskowego sklepu wolnocłowego", 
        "b": "są przeznaczone do użycia w trakcie podróży do celów leczniczych lub ze względów dietetycznych (w tym żywność dla niemowląt)", 
        "c": "ich pojemność pojedyncza nie przekracza 100 ml i mieszczą się w jednej zamykanej przezroczystej torbie plastikowej o pojemności do 1 litra", 
        "d": "pasażer zadeklaruje ustnie, że substancje te nie są niebezpieczne" 
    },
    c: ["a", "b", "c"]
},
{
    id: 69,
    q: "69. Płyny, aerozole i żele (LAG) zakupione w porcie lotniczym lub na pokładzie statku powietrznego są zwolnione z kontroli bezpieczeństwa pod warunkiem, że są zapakowane w torbę STEB, w której znajduje się widoczny:",
    o: { 
        "a": "bilet lotniczy pasażera", 
        "b": "dowód zakupu w danym porcie lotniczym lub na pokładzie statku powietrznego w ciągu ostatnich 48 godzin", 
        "c": "certyfikat bezpieczeństwa produktu wydany przez producenta", 
        "d": "dowód tożsamości osoby sprzedającej" 
    },
    c: ["b"]
},
{
    id: 70,
    q: "70. Wskaż, które z poniższych substancji zalicza się do płynów, aerozoli i żeli (LAG) podlegających ograniczeniom przy kontroli bezpieczeństwa bagażu kabinowego:",
    o: { 
        "a": "pasty (np. pasta do zębów)", 
        "b": "mieszaniny substancji płynnych i stałych (np. dżemy, zupy)", 
        "c": "zawartość pojemników pod ciśnieniem (np. pianka do golenia, dezodoranty)", 
        "d": "produkty o konsystencji żelu (np. żele do włosów, żele pod prysznic)" 
    },
    c: ["a", "b", "c", "d"]
}
,
{
    id: 71,
    q: "71. Przed kontrolą bezpieczeństwa pasażerów:",
    o: { 
        "a": "muszą oni schować płaszcze i kurtki do bagażu kabinowego", 
        "b": "muszą oni wyjąć wszystkie przedmioty z bagażu kabinowego", 
        "c": "muszą oni zdjąć płaszcze i kurtki, które poddawane są kontroli bezpieczeństwa jako bagaż kabinowy" 
    },
    c: ["c"]
},
{
    id: 72,
    q: "72. Kontrolę bezpieczeństwa pasażerów przeprowadza się za pomocą:",
    o: { 
        "a": "bramki do wykrywania metali", 
        "b": "kontroli manualnej", 
        "c": "psów do wykrywania materiałów wybuchowych", 
        "d": "urządzeń do prześwietlania osób niewykorzystujących promieniowania jonizującego", 
        "e": "urządzeń rentgenowskich" 
    },
    c: ["a", "b", "c", "d", "e"]
},
{
    id: 73,
    q: "73. Kontrolę bezpieczeństwa pasażerów przeprowadza się za pomocą:",
    o: { 
        "a": "bramki do wykrywania metali", 
        "b": "komór symulacyjnych", 
        "c": "kontroli manualnej", 
        "d": "psów do wykrywania materiałów wybuchowych", 
        "e": "urządzeń do wykrywania śladowych ilości materiałów wybuchowych w połączeniu z ręcznymi wykrywaczami metali" 
    },
    c: ["a", "c", "d", "e"]
},
{
    id: 74,
    q: "74. Kontrolę bezpieczeństwa pasażerów przeprowadza się:",
    o: { 
        "a": "pod nadzorem przewoźnika lotniczego", 
        "b": "separując pasażerów poddanych kontroli bezpieczeństwa od nieskontrolowanych, wykorzystując środki osobowe lub bariery techniczne", 
        "c": "w bezpośrednim sąsiedztwie stanowisk odprawy biletowo-bagażowej", 
        "d": "w miejscu wyodrębnionym, do którego nie ma dostępu personel lotniska, z wyjątkiem pracowników służby ochrony lotniska", 
        "e": "w sposób uniemożliwiający fizyczne kontaktowanie się pasażerów skontrolowanych z pasażerami oczekującymi na kontrolę" 
    },
    c: ["b", "e"]
},
{
    id: 75,
    q: "75. Wskaż osoby niebędące pasażerami, które są zwolnione z kontroli bezpieczeństwa:",
    o: { 
        "a": "funkcjonariusze Izby Skarbowej po okazaniu ważnej legitymacji służbowej", 
        "b": "funkcjonariusze pełniący służbę w ramach Europejskiej Agencji Straży Granicznej i Przybrzeżnej posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku", 
        "c": "funkcjonariusze Służby Kontrwywiadu Wojskowego po okazaniu ważnej legitymacji służbowej", 
        "d": "osoba posiadająca legitymację służbową wydaną przez Urząd Lotnictwa Cywilnego podczas wykonywania zadań i obowiązków służbowych na lotnisku", 
        "e": "pracownicy i funkcjonariusze Służby Ochrony Państwa i żołnierze wyznaczeni na stanowisko służbowe w Służbie Kontrwywiadu Wojskowego posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku" 
    },
    c: ["b", "d", "e"]
},
{
    id: 76,
    q: "76. Następujące przedmioty uznaje się za przedmioty zabronione w przesyłkach zawierających ładunek i pocztę:",
    o: { 
        "a": "wiertarki i wiertła, w tym bezprzewodowe przenośne wiertarki elektryczne", 
        "b": "zabawki w kształcie broni, repliki i imitacje broni palnej, które można pomylić z prawdziwą bronią", 
        "c": "zmontowane urządzenia wybuchowe i zapalające, które nie są przewożone zgodnie z mającymi zastosowanie zasadami bezpieczeństwa w lotnictwie cywilnym" 
    },
    c: ["c"]
},
{
    id: 77,
    q: "77. Kontrolę bezpieczeństwa pasażera potencjalnie uciążliwego przeprowadza się za pomocą:",
    o: { 
        "a": "bramki do wykrywania metali", 
        "b": "eskortowany pasażer potencjalnie uciążliwy jest zwolniony z kontroli bezpieczeństwa", 
        "c": "kontroli manualnej", 
        "d": "urządzeń do wykrywania substancji narkotycznych" 
    },
    c: ["a", "c"]
},
{
    id: 78,
    q: "78. Wskaż kategorie pasażerów zwolnionych z kontroli bezpieczeństwa:",
    o: { 
        "a": "osoby konwojowane pod uzbrojoną eskortą", 
        "b": "osoby którym towarzyszy ochrona służb państwowych", 
        "c": "personel misji dyplomatycznych", 
        "d": "wicemarszałkowie Senatu" 
    },
    c: ["b", "d"]
},
{
    id: 79,
    q: "79. Kontrolę manualną osób przeprowadza się:",
    o: { 
        "a": "w taki sposób, aby upewnić się, na ile to możliwe, że kontrolowana osoba nie przenosi przedmiotów zabronionych", 
        "b": "wyłącznie w przypadku awarii bramki do wykrywania metali", 
        "c": "wyłącznie w stosunku do mężczyzn" 
    },
    c: ["a"]
},
{
    id: 80,
    q: "80. Jeżeli dozwolone jest przewożenie w kabinie pasażerskiej statku powietrznego żywego zwierzęcia:",
    o: { 
        "a": "jest ono poddawane takiej samej kontroli bezpieczeństwa jak pasażer lub bagaż kabinowy", 
        "b": "nie podlega ono kontroli bezpieczeństwa", 
        "c": "podlega ono kontroli bezpieczeństwa przeprowadzonej wyłącznie przez uprawnionego weterynarza" 
    },
    c: ["a"]
}
,
{
    id: 81,
    q: "81. Ładunek i poczta, którym nadano oznaczenie „KC” oznacza przesyłkę otrzymaną od:",
    o: { 
        "a": "uznanego dostawcy", 
        "b": "zarejestrowanego agenta", 
        "c": "znanego dostawcy z portu lotniczego państwa trzeciego", 
        "d": "znany nadawca" 
    },
    c: ["d"]
},
{
    id: 82,
    q: "82. Przed kontrolą bezpieczeństwa bagażu kabinowego przenośne komputery i inne duże urządzenia elektryczne:",
    o: { 
        "a": "muszą zostać obowiązkowo skontrolowane z wykorzystaniem psów do wykrywania materiałów wybuchowych", 
        "b": "muszą zostać włączone, aby sprawdzić, czy działają", 
        "c": "usuwa się z bagażu i poddaje kontroli bezpieczeństwa oddzielnie" 
    },
    c: ["c"]
},
{
    id: 83,
    q: "83. Podczas kontroli bezpieczeństwa bagażu kabinowego stosuje się:",
    o: { 
        "a": "bramkowe wykrywacze metali", 
        "b": "komory symulacyjne", 
        "c": "kontrolę manualną", 
        "d": "psy do wykrywania materiałów wybuchowych w połączeniu z kontrolą manualną", 
        "e": "ręczne wykrywacze metali" 
    },
    c: ["c", "d"]
},
{
    id: 84,
    q: "84. Podczas kontroli bezpieczeństwa bagażu kabinowego stosuje się:",
    o: { 
        "a": "ręczne detektory metali", 
        "b": "systemy wykrywania materiałów wybuchowych", 
        "c": "urządzenia do prześwietlania osób niewykorzystujące promieniowania jonizującego", 
        "d": "urządzenia rentgenowskie", 
        "e": "wzierniki endoskopowe" 
    },
    c: ["b", "d"]
},
{
    id: 85,
    q: "85. Kontrola manualna bagażu kabinowego polega na:",
    o: { 
        "a": "kontroli ręcznej bagażu, w tym całej jego zawartości, aby upewnić się, na ile to możliwe, że nie zawiera on przedmiotów zabronionych", 
        "b": "kontroli ręcznej tylko tych wybranych części bagażu, w których spodziewane jest wykrycie przedmiotów zabronionych", 
        "c": "poddaniu bagażu 12-godzinnej kwarantannie", 
        "d": "wyłącznie zewnętrznych oględzinach bagażu bez ingerencji do jego wnętrza" 
    },
    c: ["a"]
},
{
    id: 86,
    q: "86. Kontroli bezpieczeństwa nie podlega bagaż kabinowy:",
    o: { 
        "a": "dyrektora portu lotniczego ds. bezpieczeństwa, któremu towarzyszy ochrona SOP", 
        "b": "funkcionariuszy SOP zapewniających ochronę ministrowi spraw wewnętrznych", 
        "c": "Prezesa Urzędu Lotnictwa Cywilnego", 
        "d": "żołnierzy Żandarmerii Wojskowej zapewniających ochronę ministrowi obrony narodowej" 
    },
    c: ["b"]
},
{
    id: 87,
    q: "87. Kontroli bezpieczeństwa nie podlegają:",
    o: { 
        "a": "bagaż kabinowy i rejestrowany dyplomatów", 
        "b": "bagaż kabinowy i rejestrowany personelu misji konsularnych", 
        "c": "przesyłki stanowiące pocztę dyplomatyczną spełniające wymogi Konwencji wiedeńskiej o stosunkach dyplomatycznych" 
    },
    c: ["c"]
},
{
    id: 88,
    q: "88. Jeżeli w bagażu kabinowym znajduje się duże urządzenie elektryczne:",
    o: { 
        "a": "jest ono kontrolowane jednocześnie z tym bagażem, bez konieczności wyjmowania z bagażu", 
        "b": "musi ono być obowiązkowo przełożone do bagażu rejestrowanego", 
        "c": "obowiązkowo do kontroli tego bagażu należy wykorzystać urządzenie do wykrywania śladowych ilości materiałów wybuchowych", 
        "d": "wyjmuje się je z bagażu i bagaż poddaje się ponownej kontroli bezpieczeństwa, a urządzenie elektryczne podlega oddzielnej kontroli bezpieczeństwa" 
    },
    c: ["d"]
},
{
    id: 89,
    q: "89. Następujące przedmioty nie mogą być wnoszone przez pasażerów do stref zastrzeżonych lotniska ani na pokład statku powietrznego:",
    o: { 
        "a": "kije do gry w baseball i softball", 
        "b": "noże o długości ostrza – 5 cm", 
        "c": "ręczne latarki", 
        "d": "urządzenia do ogłuszania i uboju zwierząt", 
        "e": "wyposażenie wykorzystywane do sztuk walki z ostrym zakończeniem lub ostrą krawędzią", 
        "f": "zabawki w kształcie broni" 
    },
    c: ["a", "d", "e"]
},
{
    id: 90,
    q: "90. Następujące przedmioty nie mogą być wnoszone przez pasażerów do stref zastrzeżonych lotniska ani na pokład statku powietrznego:",
    o: { 
        "a": "gaz pieprzowy", 
        "b": "imitacje urządzeń wybuchowych", 
        "c": "nożyczki o długości ostrzy powyżej 6 cm, mierzonych od punktu połączenia obrotowego", 
        "d": "piłki do gry w baseball", 
        "e": "pistolety startowe", 
        "f": "urządzenia do nawigacji samochodowej" 
    },
    c: ["a", "b", "c", "e"]
}
,
{
    id: 91,
    q: "91. Następujące przedmioty nie mogą być wnoszone przez pasażerów do stref zastrzeżonych lotniska ani na pokład statku powietrznego:",
    o: { 
        "a": "bezprzewodowe przenośne piły elektryczne", 
        "b": "celowniki teleskopowe do broni palnej", 
        "c": "fajerwerki", 
        "d": "ładowarki do telefonów komórkowych", 
        "e": "strzały do łuków", 
        "f": "tasaki kuchenne" 
    },
    c: ["a", "c", "e", "f"]
},
{
    id: 92,
    q: "92. Następujące przedmioty nie mogą być wnoszone przez pasażerów do stref zastrzeżonych lotniska ani na pokład statku powietrznego:",
    o: { 
        "a": "amunicja do broni palnej przewożona bez broni", 
        "b": "bezprzewodowe liczniki rowerowe", 
        "c": "broń pneumatyczna", 
        "d": "kołowrotki wędkarskie", 
        "e": "pałki policyjne", 
        "f": "szpikulce do lodu" 
    },
    c: ["a", "c", "e", "f"]
},
{
    id: 93,
    q: "93. Pocztę przewoźnika lotniczego i materiały przewoźnika lotniczego można zwolnić ze środków kontroli w zakresie ochrony:",
    o: { 
        "a": "jeśli pochodzą z części krytycznych stref zastrzeżonych lotniska", 
        "b": "jeśli tak zdecyduje przewoźnik lotniczy w porozumieniu z zarządzającym lotniskiem", 
        "c": "w przypadku, gdy statek powietrzny realizuje rejs bez pasażerów", 
        "d": "w przypadku, gdy statek powietrzny realizuje rejs krajowy" 
    },
    c: ["a"]
},
{
    id: 94,
    q: "94. Podczas kontroli bezpieczeństwa zaopatrzenia portu lotniczego stosuje się pojedynczo następujące środki lub metody kontroli:",
    o: { 
        "a": "kontrolę manualną", 
        "b": "kontrolę wzrokową", 
        "c": "psy do wykrywania materiałów wybuchowych w połączeniu z kontrolą przy użyciu urządzenia rentgenowskiego", 
        "d": "systemy do wykrywania urządzeń wybuchowych", 
        "e": "urządzenia ETD w połączeniu z kontrolą manualną" 
    },
    c: ["a", "b"]
},
{
    id: 95,
    q: "95. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do jakiejkolwiek części statku powietrznego innej niż luk bagażowy, stosuje się:",
    o: { 
        "a": "24 godzinną kwarantannę", 
        "b": "systemy do wykrywania materiałów wybuchowych", 
        "c": "urządzenia do wykrywania metali", 
        "d": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych" 
    },
    c: ["b", "d"]
},
{
    id: 96,
    q: "96. Podczas kontroli bezpieczeństwa bagażu rejestrowanego stosuje się:",
    o: { 
        "a": "bramkowe wykrywacze metali", 
        "b": "kontrolę manualną", 
        "c": "psy do wykrywania materiałów wybuchowych", 
        "d": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych", 
        "e": "urządzenia do wykrywania śladowych ilości narkotyków i substancji odurzających" 
    },
    c: ["b", "c", "d"]
},
{
    id: 97,
    q: "97. Podczas kontroli bezpieczeństwa bagażu rejestrowanego stosuje się:",
    o: { 
        "a": "kontrolę manualną", 
        "b": "ręczne wykrywacze metali", 
        "c": "systemy wykrywania materiałów wybuchowych", 
        "d": "urządzenia do prześwietlania osób niewykorzystujące promieniowania jonizującego", 
        "e": "urządzenia rentgenowskie" 
    },
    c: ["a", "c", "e"]
}
,
{
    id: 98,
    q: "98. Kontrola manualna bagażu rejestrowanego polega na:",
    o: { 
        "a": "kontroli ręcznej bagażu, w tym całej jego zawartości, aby upewnić się, na ile to możliwe, że nie zawiera on przedmiotów zabronionych", 
        "b": "kontroli ręcznej tylko tych wybranych części bagażu, w których spodziewane jest wykrycie przedmiotów zabronionych", 
        "c": "kontroli ręcznej wyłącznie zewnętrznych części bagażu bez ingerencji do jego wnętrza", 
        "d": "wykorzystaniu psów do wykrywania materiałów wybuchowych" 
    },
    c: ["a"]
},
{
    id: 99,
    q: "99. Jeżeli do kontroli bezpieczeństwa bagażu rejestrowanego stosowane są urządzenia rentgenowskie lub systemy wykrywania materiałów wybuchowych, to przedmioty, których gęstość uniemożliwia operatorowi analizę zawartości tego bagażu:",
    o: { 
        "a": "nie mogą być dopuszczone do przewozu drogą lotniczą", 
        "b": "poddawane są kontroli bezpieczeństwa przy użyciu innej metody", 
        "c": "uważa się za bezpieczne – nie zawierające przedmiotów zabronionych" 
    },
    c: ["b"]
},
{
    id: 100,
    q: "100. Bagaż rejestrowany, który poddano już kontroli bezpieczeństwa, nie zabezpieczony przed bezprawną ingerencją:",
    o: { 
        "a": "można poddać powtórnej kontroli bezpieczeństwa, ale tylko wtedy, gdy zdecydują o tym przełożeni", 
        "b": "poddaje się powtórnej kontroli bezpieczeństwa", 
        "c": "poddaje się powtórnej kontroli bezpieczeństwa tylko wtedy, gdy przewożący go statek powietrzny odlatuje do Stanów Zjednoczonych Ameryki lub do Izraela", 
        "d": "powinien być jak najszybciej dostarczony do statku powietrznego" 
    },
    c: ["b"]
},
{
    id: 101,
    q: "101. Następujące przedmioty nie mogą być przewożone przez pasażerów w bagażu rejestrowanym:",
    o: { 
        "a": "amunicja", 
        "b": "lampy lutownicze", 
        "c": "plastyczne materiały wybuchowe", 
        "d": "pociski i naboje dymne", 
        "e": "przedmioty przeznaczone do rąbania, takie jak siekiery, topory i tasaki" 
    },
    c: ["a", "c", "d"]
},
{
    id: 102,
    q: "102. Następujące przedmioty nie mogą być przewożone przez pasażerów w bagażu rejestrowanym:",
    o: { 
        "a": "dynamit i proch strzelniczy", 
        "b": "fajerwerki i inne materiały pirotechniczne", 
        "c": "narzędzia z ostrzem lub trzonkiem o długości powyżej 6 cm, nadające się do użycia jako broń, takie jak śrubokręty i dłuta", 
        "d": "spłonki", 
        "e": "urządzenia do porażania, takie jak paralizatory, tasery i pałki paraliżujące" 
    },
    c: ["a", "b", "d"]
},
{
    id: 103,
    q: "103. Następujące przedmioty uznaje się za przedmioty zabronione w przesyłkach zawierających ładunek i pocztę:",
    o: { 
        "a": "łomy stalowe", 
        "b": "wiertarki i wiertła, w tym bezprzewodowe przenośne wiertarki elektryczne", 
        "c": "zabawki w kształcie broni, repliki i imitacje broni palnej, które można pomylić z prawdziwą bronią", 
        "d": "zmontowane urządzenia wybuchowe i zapalające, które nie są przewożone zgodnie z mającymi zastosowanie zasadami bezpieczeństwa w lotnictwie cywilnym" 
    },
    c: ["d"]
},
{
    id: 104,
    q: "104. Podczas kontroli bezpieczeństwa ładunku lub poczty:",
    o: { 
        "a": "bezwzględnie muszą zostać użyte systemy wykrywania materiałów wybuchowych", 
        "b": "zastosowane środki lub metody zapewniają poziom bezpieczeństwa wystarczający, aby upewnić się, na ile to możliwe, że w przesyłce nie ukryto przedmiotów zabronionych", 
        "c": "zawsze należy zastosować co najmniej trzy metody kontroli bezpieczeństwa" 
    },
    c: ["b"]
},
{
    id: 105,
    q: "105. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do jakiejkolwiek części statku powietrznego innej niż luk bagażowy, stosuje się:",
    o: { 
        "a": "24 godzinną kwarantannę", 
        "b": "systemy do wykrywania materiałów wybuchowych", 
        "c": "urządzenia do prześwietlania osób niewykorzystujące promieniowania jonizującego", 
        "d": "urządzenia rentgenowskie" 
    },
    c: ["d"]
},
{
    id: 106,
    q: "106. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego stosuje się pojedynczo lub w kombinacji następujące środki lub metody kontroli:",
    o: { 
        "a": "bramkowe detektory metali", 
        "b": "detektory promieniowania jonizującego", 
        "c": "kontrolę manualną", 
        "d": "psy do wykrywania materiałów wybuchowych w połączeniu z kontrolą wzrokową", 
        "e": "systemy do wykrywania urządzeń wybuchowych" 
    },
    c: ["c"]
},
{
    id: 107,
    q: "107. Kontrola wzrokowa zaopatrzenia pokładowego polega na dokładnych oględzinach tego zaopatrzenia i jest dopuszczalna jedynie:",
    o: { 
        "a": "gdy rzeczywiście można zobaczyć wszystkie elementy zaopatrzenia, stosując środki pomocnicze lub bez ich udziału", 
        "b": "gdy statek powietrzny realizuje rejs do: Słowacji, Węgier, Rumunii lub Bułgarii", 
        "c": "gdy ukrycie przedmiotów zabronionych jest niemożliwe ze względu na charakter zaopatrzenia", 
        "d": "w małych portach lotniczych" 
    },
    c: ["a", "c"]
},
{
    id: 108,
    q: "108. Ładunek i poczta poddawane są kontroli bezpieczeństwa z zastosowaniem co najmniej jednej z poniższych metod:",
    o: { 
        "a": "bramkowe wyktywacze metali", 
        "b": "kontrola manualna", 
        "c": "rozmowa z nadawcą dotyczącą zawartości przesyłki", 
        "d": "systemy wykrywania materiałów wybuchowych", 
        "e": "urządzenia rentgenowskie" 
    },
    c: ["b", "d", "e"]
},
{
    id: 109,
    q: "109. Ładunek i poczta poddawane są kontroli bezpieczeństwa z zastosowaniem co najmniej jednej z poniższych metod:",
    o: { 
        "a": "12 godzinna kwarantanna", 
        "b": "kontrola wzrokowa", 
        "c": "psy do wykrywania materiałów wybuchowych", 
        "d": "sprawdzenie przeszłości nadawcy przesyłki", 
        "e": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych" 
    },
    c: ["b", "c", "e"]
},
{
    id: 110,
    q: "110. Po przeprowadzonej kontroli bezpieczeństwa, przesyłki zawierające ładunek lub pocztę uważa się za zabezpieczone przed bezprawną ingerencją, jeżeli:",
    o: { 
        "a": "ich ilość nie przekracza 10 sztuk", 
        "b": "zawierają jedynie części samochodowe", 
        "c": "znajdują się w części krytycznej strefy zastrzeżonej lotniska" 
    },
    c: ["c"]
}
,
{
    id: 111,
    q: "111. Po przeprowadzonej kontroli bezpieczeństwa, przesyłki zawierające ładunek lub pocztę, które znajdują się w innej części lotniska niż część krytyczna strefy zastrzeżonej, uważa się za zabezpieczone przed bezprawną ingerencją, jeśli:",
    o: { 
        "a": "pozostają tam nie dłużej niż jedną godzinę", 
        "b": "są fizycznie zabezpieczone tak, by nie dopuścić do wprowadzenia jakiegokolwiek przedmiotu, który mógłby zostać użyty w akcie bezprawnej ingerencji", 
        "c": "tak przewiduje program ochrony przewoźnika lotniczego" 
    },
    c: ["b"]
},
{
    id: 112,
    q: "112. Po przeprowadzonej kontroli bezpieczeństwa, przesyłki zawierające ładunek lub pocztę, które znajdują się w innej części lotniska niż część krytyczna strefy zastrzeżonej, uważa się za zabezpieczone przed bezprawną ingerencją, jeśli:",
    o: { 
        "a": "jeszcze tego samego dnia zostaną załadowane do statku powietrznego", 
        "b": "nie są pozostawione bez nadzoru, a dostęp ogranicza się do osób zaangażowanych w zabezpieczenie i ładowanie ładunku lub poczty do statku powietrznego", 
        "c": "z analizy ryzyka przeprowadzonej przez Szefa Agencji Bezpieczeństwa Wewnętrznego wynika, że nic tym przesyłkom nie grozi" 
    },
    c: ["b"]
},
{
    id: 113,
    q: "113. Przed załadunkiem do luku bagażowego statku powietrznego poczta przewoźnika lotniczego i materiały przewoźnika lotniczego poddawane są kontroli bezpieczeństwa i zabezpieczane zgodnie z zasadami kontroli bezpieczeństwa i zasadami zabezpieczenia:",
    o: { 
        "a": "bagażu kabinowego", 
        "b": "bagażu rejestrowanego", 
        "c": "przedmiotów przenoszonych przez osoby niebędące pasażerami" 
    },
    c: ["b"]
},
{
    id: 114,
    q: "114. Przed załadunkiem do jakiejkolwiek części statku powietrznego innej niż luk bagażowy, poczta przewoźnika lotniczego i materiały przewoźnika lotniczego poddawane są kontroli bezpieczeństwa i zabezpieczane zgodnie z zasadami kontroli bezpieczeństwa i zasadami zabezpieczenia:",
    o: { 
        "a": "bagażu kabinowego", 
        "b": "bagażu rejestrowanego", 
        "c": "ładunków i poczty" 
    },
    c: ["a"]
},
{
    id: 115,
    q: "115. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do luku bagażowego statku powietrznego, stosuje się:",
    o: { 
        "a": "kontrolę manualną", 
        "b": "kontrolę wzrokową", 
        "c": "ręczne wykrywacze metali", 
        "d": "systemy wykrywania materiałów wybuchowych" 
    },
    c: ["a", "b", "d"]
},
{
    id: 116,
    q: "116. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do luku bagażowego statku powietrznego, stosuje się:",
    o: { 
        "a": "psy do wykrywania materiałów wybuchowych", 
        "b": "urządzenia do wykrywania śladowych ilości narkotyków i środków odurzających", 
        "c": "urządzenia rentgenowskie", 
        "d": "wzierniki endoskopowe" 
    },
    c: ["a", "c"]
},
{
    id: 117,
    q: "117. Podczas kontroli bezpieczeństwa poczty przewoźnika lotniczego i materiałów przewoźnika lotniczego, które mają zostać załadowane do jakiejkolwiek części statku powietrznego innej niż luk bagażowy, stosuje się:",
    o: { 
        "a": "bramkowe wykrywacze metali", 
        "b": "komory symulacyjne", 
        "c": "kontrolę manualną", 
        "d": "psy do wykrywania materiałów wybuchowych w połączeniu z kontrolą manualną" 
    },
    c: ["c", "d"]
},
{
    id: 118,
    q: "118. Następujące przedmioty uznaje się za przedmioty zabronione w poczcie przewoźnika lotniczego i materiałach przewoźnika lotniczego, które mają zostać załadowane do luku bagażowego statku powietrznego:",
    o: { 
        "a": "amunicja", 
        "b": "fajerwerki i inne materiały pirotechniczne", 
        "c": "noże do cięcia kartonów", 
        "d": "ostrza do maszynek do golenia", 
        "e": "pistolety do wstrzeliwania kołków i gwoździ" 
    },
    c: ["a", "b"]
},
{
    id: 119,
    q: "119. Następujące przedmioty uznaje się za przedmioty zabronione w poczcie przewoźnika lotniczego i materiałach przewoźnika lotniczego, które mają zostać załadowane do luku bagażowego statku powietrznego:",
    o: { 
        "a": "części składowe broni palnej", 
        "b": "dynamit, proch strzelniczy i plastyczne materiały wybuchowe", 
        "c": "noże o długości ostrza powyżej 6 cm", 
        "d": "spłonki", 
        "e": "wyrzutnie rac sygnalizacyjnych" 
    },
    c: ["b", "d"]
},
{
    id: 120,
    q: "120. Następujące przedmioty uznaje się za przedmioty zabronione w poczcie przewoźnika lotniczego i materiałach przewoźnika lotniczego, które mają zostać załadowane do jakiejkolwiek części statku powietrznego innej niż luk bagażowy:",
    o: { 
        "a": "łomy stalowe", 
        "b": "miotacze gazów łzawiących", 
        "c": "papier ścierny w rulonach", 
        "d": "piłki tenisowe", 
        "e": "pistolety i rewolwery", 
        "f": "szpady i szable" 
    },
    c: ["a", "b", "e", "f"]
}
,
{
    id: 121,
    q: "121. Następujące przedmioty uznaje się za przedmioty zabronione w poczcie przewoźnika lotniczego i materiałach przewoźnika lotniczego, które mają zostać załadowane do jakiejkolwiek części statku powietrznego innej niż luk bagażowy:",
    o: { 
        "a": "aerozole odstraszające zwierzęta", 
        "b": "czekany do wspinaczki wysokogórskiej", 
        "c": "długopisy", 
        "d": "klawiatury komputerowe", 
        "e": "repliki urządzeń wybuchowych", 
        "f": "strzelby myśliwskie" 
    },
    c: ["a", "b", "e", "f"]
},
{
    id: 122,
    q: "122. Następujące przedmioty uznaje się za przedmioty zabronione w zaopatrzeniu pokładowym:",
    o: { 
        "a": "latarki akumulatorowe", 
        "b": "metalowe pojemniki na lód", 
        "c": "pistolety i rewolwery", 
        "d": "repliki urządzeń wybuchowych", 
        "e": "urządzenia do uboju zwierząt" 
    },
    c: ["c", "d", "e"]
},
{
    id: 123,
    q: "123. Następujące przedmioty uznaje się za przedmioty zabronione w zaopatrzeniu pokładowym:",
    o: { 
        "a": "materiały pirotechniczne", 
        "b": "metalowe łyżki stołowe", 
        "c": "pistolety startowe", 
        "d": "plastikowe widelce", 
        "e": "rozpylacze kwasu", 
        "f": "telefony komórkowe" 
    },
    c: ["a", "c", "e"]
},
{
    id: 124,
    q: "124. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego zastosowane środki lub metoda:",
    o: { 
        "a": "są losowane ze specjalnie przygotowanej listy", 
        "b": "uwzględniają rodzaj zaopatrzenia", 
        "c": "zawsze przewidują wykorzystanie urządzeń rentgenowskich" 
    },
    c: ["b"]
},
{
    id: 125,
    q: "125. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego zastosowane środki lub metoda:",
    o: { 
        "a": "są wcześniej ustalane na każdy dzień tygodnia", 
        "b": "zapewniają dostateczny poziom bezpieczeństwa, na ile to możliwe, jeżeli chodzi o wykrycie przedmiotów zabronionych ukrytych w zaopatrzeniu", 
        "c": "zawsze przewidują kontrolę manualną" 
    },
    c: ["b"]
},
{
    id: 126,
    q: "126. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego stosuje się pojedynczo lub w kombinacji następujące środki lub metody kontroli:",
    o: { 
        "a": "kontrola wzrokowa", 
        "b": "psy do wykrywania materiałów wybuchowych w powiązaniu z kontrolą wzrokową", 
        "c": "ręczne detektory metali", 
        "d": "urządzenie rentgenowskie", 
        "e": "wzierniki endoskopowe" 
    },
    c: ["a", "b", "d"]
},
{
    id: 127,
    q: "127. Podczas kontroli bezpieczeństwa zaopatrzenia pokładowego stosuje się pojedynczo lub w kombinacji następujące środki lub metody kontroli:",
    o: { 
        "a": "bramkowe detektory metali", 
        "b": "detektory promieniowania jonizującego", 
        "c": "kontrola manualna", 
        "d": "urządzenia do wykrywania śladowych ilości materiałów wybuchowych w powiązaniu z kontrolą wzrokową", 
        "e": "urządzenie rentgenowskie" 
    },
    c: ["c", "d", "e"]
},
{
    id: 128,
    q: "128. Podczas kontroli bezpieczeństwa osób, ręczny wykrywacz metali:",
    o: { 
        "a": "jest podstawowym środkiem kontroli bezpieczeństwa", 
        "b": "jest pomocny przy ustalaniu miejsca ukrycia materiałów wybuchowych", 
        "c": "można stosować tylko jako dodatkowy środek kontroli bezpieczeństwa", 
        "d": "można stosować zamiast kontroli manualnej", 
        "e": "nie zastępuje wymogów kontroli manualnej", 
        "f": "stosowany jest wyłącznie do kontroli bezpieczeństwa kobiet w zaawansowanej ciąży" 
    },
    c: ["c", "e"]
},
{
    id: 129,
    q: "129. Kontrolę bezpieczeństwa pasażera potencjalnie uciążliwego przeprowadza się za pomocą:",
    o: { 
        "a": "bramki do wykrywania metali", 
        "b": "eskortowany pasażer potencjalnie uciążliwy jest zwolniony z kontroli bezpieczeństwa", 
        "c": "kontroli manualnej", 
        "d": "psów do wykrywania materiałów wybuchowych", 
        "e": "urządzeń do wykrywania substancji narkotycznych" 
    },
    c: ["a", "c"]
},
{
    id: 130,
    q: "130. Wskaż osoby niebędące pasażerami, które są zwolnione z kontroli bezpieczeństwa:",
    o: { 
        "a": "dyrektor ds. bezpieczeństwa portu lotniczego", 
        "b": "funkcjonariusze Izby Skarbowej po okazaniu ważnej legitymacji służbowej", 
        "c": "funkcjonariusze Służby Kontrwywiadu Wojskowego po okazaniu ważnej legitymacji służbowej", 
        "d": "pracownicy i funkcjonariusze Agencji Bezpieczeństwa Wewnętrznego i Służby Wywiadu Wojskowego posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku", 
        "e": "strażacy Państwowej Straży Pożarnej upoważnieni do przeprowadzania czynności kontrolno-rozpoznawczych na lotnisku posiadający ważną kartę identyfikacyjną portu lotniczego podczas wykonywania zadań i obowiązków służbowych na lotnisku" 
    },
    c: ["d", "e"]
}
    
]
