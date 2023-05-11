## SHOPIT

##### Tehnologii folosite
    1. Node.js -> back-end
    2. React -> front-end
    3. MongoDB -> baza de date => o sa va trimit un json cu intrarile din baza mea de date. Am facut baza de date locala momentan, nu stiu daca o voi accesa online pana la final.

I. Cum a fost sa lucrez cu node.js si react ?
    - React intentionez sa folosesc si la licenta

II. Ce noutati am invatat din acest proiect?
    - Am invatat cum sa lucrez cu postman si cu mongodb care sunt foarte interesante si sunt sigura ca le voi folosi probabil si la licenta. Cel putin postman sigur il voi folosi pentru testare. Si Redux este un utilitar foarte bun de folosit pentru viteza.

III. De ce am folosit Postman?
    - La inceput am facut partea de backend desi nu cred ca a fost o idee foarte buna sa las frontendul la final, mi-a placut mai mult sa lucrez pe partea de backend. SI am avut nevoie de un utilitar cu care sa testez anumite requestur, sa vad daca imi functioneaza bine aplicatia. O sa va atasez si o imagine cu requesturile facute de  mine in postman.


### Descriere aplicatie si functionalitati

1. Pagina de login este una simpla care necesita adaugarea unui mail valid si a unei parole valide. De asemenea regasim optiunea de Forgot Password => in cazul in care utilizatorul si-a uitat parola va putea sa o afle introducand email-ul si va primi un mail de schimbare a parolei. Eu am testat doar cu aplicatia Mailtrap une mi se genera tokenul de schimbare a parolei si introduceam acel url pentru a schimba parola utilizatorului. Va voi arata in micul video demonstrativ pe care l-am facut. 
2. Pagina de Register => New user in login => este tot o pagina simpla in care utilizatorul va trebui sa introduca niste date valide si un avatar. Acest avatar va putea fi selectat din calculatorul dumneavoastra ca o imagine jpeg sau png.
3. In pagina de HOME am pus produsele alaturi de preul lor, numarul de review-uri, o imagine sugestiva, rating-ul specificat vizual de numarul de stelute. Fiecare produs poate fi deschis intr-o noua pagina, apasand pe butonul "View Details" => pagina de prezentare.
4. Pagina de prezentare a produsului contine: descrierea acestuia, pretul, numele, id-ul, rating-ul, numarul de review-uri, numele vanzatorului, daca este sau nu in stock. De asemenea, contine 2 butoane: 
        - Add to Cart => prin care putem adauga produsul in cosul de cumparaturi. De asemenea, putem selecta cate produse sa fie adaugate.
        - Submit Your Review => se va deschide o mica fereastra de unde putem selecta un numar de stelute pe care vrem sa il dam produsului, reprezentand rantingul si putem adauga un review la produs. Dupa ce dam Submit se vor salva in baza de date.
5. Daca apasam pe logo-ul site-ului ne vo intoarce la Home Page.
6. In partea de jos a paginii o sa regasim o paginare: ne putem muta la prima pagina sau la ultima, sau putem folosi Next sau Prev pentru a ne muta inainte sau inapoi.
7. Avem SearchBar-ul care va retine un mic istoric al cautarilor noastre, va tine cont de utilizatorul conectat. Daca vom introduce un cuvant care va include mai multe categorii si preturi avem posibilitatea sa facem o filtrare a produselor in functie de pret, categorie si rating => se vor afisa doar produsele care respecta preferintele noastre.
8. In dreptul cosului de cumparaturi se va afla numarul produselor selectate de userul conectat. Daca apasam pe cosul de cumparaturi vm putea vedea produsele selectate de utilizatorul conectat. De asemenea, putem si de aici sa marim numarul produselor deja selectate, dar sa nu depaseasca stock-ul disponibil al acestora, altfel butonul nu va mai putea adauga desi il apasam. Putem sterge produsul din cosul de cumparaturi apasand pe iconita cu cosul de gunoi. In partea dreapta putem observa totalul de plata al produselor selectate. Daca apasam pe butonul Check out ar trebui sa ne duca in cele 3 stadii de concepere a facturii: shipping info, confirmare a cumpararii si introducerea unei metode de plata. Acest buton nu l-am implementat.
9. Daca mergem in partea de sus al Header-ului putem observa si acolo un meniu de accesare a unor optiuni ce tin de profilul utilizatorului. Pentru administrator va aparea si optiunea DASHBOARD, restul vor avea doar Orders, Profile, Logout. 
        - Daca utilizatorul va apasa pe Logout => acesta va fi deconectat.
        - Daca va apasa pe Profile => se va deschide o pagina cu informatii despre utilizatorul nostru. Acesta poate sa-si modifice profilul apasand butonul Edit Profile. Sau isi poate modifica parola apasand butonul Change Password. Aceste functionalitati sunt implementate si pot fi testate.
        - Daca va apasa pe Orders => ii vor fi afisate un istoric al comenzilor. Putem alege numarul de comenzi care sa fie afisate, in cazul in care sunt mai multe. Si aici exista o paginare a comenzilor. In cazul in care dorim sa vedem detalii despre comanda vom apasa pe acel buton reprezentat de un ochi albastru. Aici am o problema pentru ca nu mi gaseste imaginea in baza de date si nu am descoperit inca de ce. Putem chiar cauta o comanda dupa ID-ul acesteia.
        - Daca administratorul va apasa pe optiunea de DASHBOARD se va afisa un meniu in care putem vedea: produsele, comenzile, userii si produsele care nu mai sunt in stock si nu in ultimul rand review-urile unui produs ce il pute cauta dupa ID. In fiecare dintre aceste optiuni de vizualizare reagsim si actiuni pe care administartorul le poate face. El poate sterge un utilizator sau ii poate schimba rolul. Poate vizualiza produsele si comenzile efectuate. La comenzi poate sa le stearga sau sa vizualizeze mai in detaliu. Poate cauta un user sau o comanda dupa ID. Din pacate aici am cateva probleme la produse, am o eroare si nu stiu sa o rezov momentan, dar nu am mai modificat codul si l-am lasat asa. Administratorul poate sterge sau updata un produs sau sa adauge unul nou. Am cateva probleme in cod la Dashboard si nu cred ca tin de interfata, exista probleme la conexiunea cu baza de date sau am scris eu ceva gresit la backend, nu am gasit problema inca, dar am preferat sa las asa si sa ma mai uit dupa ce va voi trimite proiectul. Chiar imi pare rau ca nu am reusit sa rezolv tot ce mi-am propus sa fac la acest proiect.
10. Aplicatia este responsive.
11. Galeria de imagini se regaseste atunci cand userul va deschide produsul pentru a-l studia mai in detaliu. La produsul apple -> categoria food regasim galerie de imagini realizata cu Carousel.
12. Viteza de raspuns aar trebui sa fie destul de mare deoarece m-am folosit de utilitarul Redux pentru a pastra in local Storage diverse date de care am nevoie in aplicatie.
13. Daca utilizatorul nu este logat nu va putea adauga review la produse si nici nu va putea cumpara ceva, doar va putea adauga in cos.

Contul de cloudinary:
email : itshopit@gmail.com
parola: Parola_1234567

Contul meu pe aplicatia MailTrap:
email: itshopit000@gmail.com
parola: Parola_12

Credentiale ADMIN:
ionascubianca17@yahoo.com
parola: parola

Credentiale USER:
maria@gmail.com
parola: parola12

### Descriere mai amanuntita a aplicatiei

#### BACKEND

######Cont Stripe (https://dashboard.stripe.com/test/dashboard) -> pentru plati => in confi.env am pus cheia publica si privata pentru stripe

Email: itshopit000@gmail.com
Parola: parola_1234567_parola 

Dar nu mi-a iesit inca aceasta parte de plata a comenzii.

- Toate pachetele utilizate de mine in proiect se afla in package.json cu versiunile aferente.
- Baza de date asculta la adresa : 127.0.0.1 si pe portul 27017.
- In fisierul config.env am toate credentialele folosite in toate aplicatiile online care m-au ajutat sa fac diverse lucruri. Am si credentialele de la niste site-uri dar inca nu am codul terminat pentru acele functionlitati. 

#### Eu in timp ce am scris codul am scris si un README mai detaliat cu ce am facut. O sa va atasez aici si pasii pe care i-am facut in realizarea acestui proiect. Desi poate am mai schimbat lucruri pe parcurs dupa ce am adaugat si partea de frontend o sa va atasez pasii si notitele facute pe parcurs (Puteti citi doar daca vreti):

- In product.js gasim structura unui produs(model de produs) care ar trebui sa contina: nume, pret, descriere, rating dat de clienti, imagini, sa faca parte dintr-o anumita categorie, persoana de contact, stocul de produse de acest tip, data la care a fost creat, numar de reviews si reviews.

- Din folderul backend/data/ avem product.json unde vom scrie datele despre produse(descriere, nume, imagini etc).

- Eu am folosit postman pentru ca nu aveam un frontend initial. Si este foarte util.

- Am facut in postman o comanda de POST si una de GET prin care trimit si primesc produse din baza de date, de fapt testez conexiunea cu baza de date. Cam asta face postman testeaza conexiunea dintre serverul meu si restul. Cu comanda de get all products am implementat-o in codul meu in productController.js getProducts(), desi este o functie destul de simpla o sa o folosesc ulterior la search si la filter.
- Am facut si o metoda prin care returnez un anumit produs dupa IDul lui => ajuta la functionalitatea administratorului de cauta un anumit produs dupa id-ul acestuia.
- Am creat si un data seeder prin care trimit toate produsele dintr-o singura comanda. Mai intai voi sterge toate produsele si dupa voi adauga  toate produsele. Este un script gasit in fisierul seeder.js din folderul utils. Si l-am adaugat si in package.json

- Prin functia updateProduct din productController.js adminul poate updata un produs, cautandu-l dupa id. Iar prin functie de deleteProduct, poate sterge un produs, cautandu-l dupa id.

- Functionalitatile de update, de creere de nou produs si de stergere produs le poate avea doar adminul.

- In folderul utils am creat un fisier in care tratez erorile global.
O sa separ erorile development de cele de productie, pentru a-mi fi mai usor. Plus de asta cand sunt in modul development vreau sa mi arate toata eroarea (error stack) sa inteleg exact de unde provine, dar cand voi fi in production mode, asta inseamna ca un user normal va folosi aplicatia. Un utilizator care nu cunoaste neaparat programare. Asa ca voi afisa un mesaj sugestiv prin care sa inteleaga de unde provine eroarea. Plus de asta nu ar fi indicat sa vada userul in ce linie de cod si in ce fisier am eu eroare, el trebuie doar sa vada un mesaj sugestiv.


####Cu comenzile:

###1. npm run dev => rulez in modul development
###2. npm run prod => rulez in modul production

- Am vrut sa tratez si erorile care apar atunci cand dau pe postman sa mi trimita o anumita comanda de POST, GET etc in cazul in care pe server exista o anumita problema cicla la infinit in incercarea de a trimite requestul si nu aparea eroarea ce a provocat rularea la infinit. Am citit pe net si am inteles ca ar trebui sa tratez erori asincrone. => erori ce se gasesc in controller function. De exemplu noi in create new product nu tratam nicio eroare(De ex daca uit sa scriu numele sau pretul nu mi va spune exact ce eroare am).

- De asemenea, am tratat si unhandled promise rejection, uncaught exceptions si erorile de validare si mongoose ID errors.

    --- unhandled promise rejection: Daca de exemplu modific DB_LOCAL_URI sau pur si simplu cum am avut eu o eroare la acest string pentru ca foloseam o functie care era deprecated pentru versiunea de mongodb pe care o am, nu prea imi dadeam seama ce trebuia sa fac sau ce era gresit. Dar trebuia inchis serverul si modificat codul pentru ca nu avea cum functiona altfel. Au fost tratate in server.js. Si acum apare un mesaj de eroare sugestiv. Trebuia tratata si aceasta eroare. => sa nu scriu sa nu mi dadeam seama de eroare, doar ca trebuia tratata si ea.

    ---- uncaught exceptions: Daca folosesc variabile nedeclarate etc.
    ---- validation error: Cand creez un nou produs si uit sa pun mai multe categorii o sa mi apara mesaj de eroare doar pt prima. O sa incerc sa tratez eroarea si sa mi apara mesaj de eroare pentru toate.
    ---- mongoose ID error: cand vreau sa aflu detalii despre un produs si il caut dupa ID dar ID-ul  nu este corect de ex.
    ---- nu avem voie sa avem doi useri care sa aiba aceeasi adresa de email. Ar trebui sa fie unica adresa de e-mail.

 Functionalitatile de:

 1. Search: am facut o clasa in utils in fisierul apiFeatures in care caut un produs dupa un keyword. Keywordul va fi de fapt numele produsului care va fi case insensitive. Si va trebui sa i adaug si un filtru prin care sa specific categoria din care doresc sa afiseze acest produs.  
 2. Filter: Imi filtreaza cautarea in functie de categoria dorita. (pentru ca daca eu cautam apple imi afisa si device apple si de la food). Asa am facut remove la keyword si caut dupa categorie. Pentru ca eu in spate nu am field-ul keyword, ci am categorie, pret, etc. Voi filtra si in functie de pret, de ratinguri etc. => poate clientul vrea sa caute un produs ce se incadreaza intr-o anumita suma, sau care are ranting mai mare. 
 3. Pagination


Functionalitate de authentification authorization la aplicatie:
1. Am creat mai intai: Model of the user => 
                1. Am instalat bcryptjs => encrypt our password
                2. Am instalat jsonwebtoken => for tokens
                3. Am instalat validator => pentru a valida email-ul
                4. Am instalat nodemailer => pentru a trimite email-uri, ca sa recuperam parola de exemplu.
                5. Am instalat 'cookie-parser' => for cookies
                6. Am instalat 'body-parser'

In folderul "models" am creat modele pentru user si product.
 ---- La avatarul user-ului: o sa incarcam o imagine userului si o sa dam un id acelei imagini si un url al acelei imagini.
 ---- resetPasswordToken => daca am uitat parola o sa  trimit un email la acest token 
 ---- resetPasswordExpire => ii resetez data de expirare a tokenului dupa ce am am schimbat parola, implicit si tokenul

Functionalitate de register si de criptare a parolei userului nou si salvarea lui cu parola criptata in baza de date.
    ----- Good practice: Nu e bine sa retinem tokenul local storage => nu e secure, el trebuie retinut doar in cookies.
    ----- Aceasta functionalitate se poate gasi in folderul controllers in fisierul authController.

Functionalitate de criptare a parolei inainte de a salva in baza de date:
    --- vom salva parola criptata(am facut un hash) cu bcrypt in baza de date.
    --- parola nu trebuie sa fie in clar in baza de date => nu ar fi secure
    --- gasim functia in user.js din models.

Functionalitate de generare de token (JWT token):
    --- gasim functia in user.js din models
    --- ne-am folosit de id-ul userului, de secret si de data de expirare a tokenului pentru a crea tokenul
    --- tokenul va fi transmis pe canal pentru securitate

Functionalitate de logare user in aplicate si sa asignam tokenul corespunzator userului conectat:
    --- dupa vom verifica autentificarea userului in functie de acel token
    --- functionalitate gasita in authController.js

Deci eu void asigna un token in functie de cele enuntate mai sus care are o data de expirare, dupa se va reinnoi, si in functie de el se va verifica autentificarea mea. tokenul il voi salva intr-un cookie, de unde il voi si prelua la verificarea datelor atunci cand vreau sa ma loghez sau sa raman logat pentru o perioda mai lunga de timp. Cookie ul oricum este securizat, in loc sa punem in local storage unde nu ar fi ok. => fac asta in jwtToken.js din  folderul utils.


Functionalitate: Un user neautorizat nu poate crea produse sau sterge produse sau adauga produse. => auth.js din folderul middlewares.
Din ce am inteles asta se poate prin mai multe metode, ori verificam headerul dupa token(nu prea e o metoda securizata), ori il luam direct din cookie si verificam daca e autorizat sa faca anumite actiuni. Aceste cookie-uri face oarecum autentificarea userului mai mult pe partea de server astfel incat clientul sa nu aibe acces la aceste date care ii ofera anumite anumite drepturi asupra aplicatiei. Cu cat informatiile se tin mai departe de client si mai aproape de server cu atat este mai securizata aplicatia.

Functionalitate: la logout trebuie sa stergem cookie-ul si la expirarea timpului cookie ului trebuie sters. Userul fiind nevoit sa se logheze iar. -> in authController.js

Deci asa am realizat o aplicatie foarte bine securizata, lucram cu backend-ul: punem token in cookie si autentificam utilizatorul pe backend in loc sa punem tokenul in antet si sa il verificam => in backend verific userii!! 

Functionalitate: doar adminul poate sa faca anumite functionalitati (sa creeze un produs, sa l stearga etc.). In fisierul auth.js din middlewares.

Functionalitate: sa salvez cine a creat un anumit produs.

Functionalitate: Generate forgot password token: in fisierul user.js din folderul models. Aici ne vom folosi de cele doua caracteristici ale userului resetPasswordToken si resetPasswordExpire care erau destinate spre a fi folosite atunci cand se producea o schimbare asupra tokenului. Vom cripta tokenul in baza de date pentru a nu avea acces la el. => metoda de securitate. 

Functionalitate: Send password recovery email : O sa ma folosesc de aplicatia MailTrap = the best platform to test our emails. O sa iau din SMTP Settings adresa hostului si alte informatii:

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8c7c7331934a95",
    pass: "f1d5ab00cd3f9f"
  }
});

O sa folosesc Nodemailer pentru a trimite mailuri cu node.js. Functionalitatea se gaseste implementata in fisierul authController.js. Iar functionalitatea de trimitere efectiva a emailului o gasiti in utils in fisierul sendEmail.js.

Contul meu pe aplicatia MailTrap:
email: itshopit000@gmail.com
parola: Parola_12

In fisierul sendEmail.js o sa gasiti conceperea mesajului de email pentru a fi trimis la user. Dupa ce voi apela aceasta functionalitate de trimitere de mail imi va aparea pe contul meu de MailTrap un mail in care se cere recovery password: Am atasat o poza in folderul Images cu un snipet din rezultat si din baza de date cum s-au modificat resetPasswordExpire si resetPasswordToken(aici s a aplicat hash ul).


Functionalitate: reset new password: o sa resetez parola folosindu-ma de tokenul generat in email pentru noua parola. Implementarea functionalitatii se regaseste in fisierul authController.js.

Functionalitate: de afisat un mesaj sugestiv in production mode atunc cand se folosesc emailuri duplicate la crearea conturilor => pentru a da un mesaj mai sugestiv. In fisierul errors.js din middlewares.

Functionalitate: handle wrong jwt token and expire jwt error: tot in production mode. Pentru a afisa mesaje mai sugestive. In fisierul errors.js din middlewares.


Functionalitate: show user profile: pentru a vedea detaliile despre profilul clientului logat. Implementata in authController.js

Functionalitate: schimbare parola user logat: El va trebui sa fie logat si sa bage vechea parola pentru a o putea schimba cu alta. Un fel de update al parolei. Implemetare in authController.js.

Functionalitate: update user profile:
1. Vom updata numele sau email-ul userului logat sau avatarul acestuia.
2. Implementata in authController.js.

Functionalitate: adminul poate sa obtina detalii despre un anumit user sau poate sa obtina toti userii. Sa-i vizualizeze.
1. Implementata in authController.js

Functionalitate: update & delete user: implementata in authController.js
1. Update: adminul poate updata numele, emailul sau rolul userului( adica sa-l facem admin sau user).
2. Delete: adminul sa poata sa stearga  un anumit user cautat dupa id-ul lui. O sa stearga inclusiv avatarul din coudinary.

O sa creez un model de order in folderul models in fisierul order.js. Am scris in comentarii ce reprezinta fiecare caracteristica adaugata la schema de order. Nu o sa mai repet si aici.
O sa scriu o functie de creare comanda noua si de salvare a acesteia in baza de date. => Aceasta se va gasi in orderController.js.


Functionalitate: get single order: o sa caut in baza de date o anumita comanda in functie de ID-ul acesteia. Este implementata in orderController.js.

Functionalitate: logged in user orders: o sa mi returneze toate comenzile facute de userul curent logat. Este implementata in orderController.js.

Functionalitate: get all orders - ADMIN: doar adminul poate vedea toate comenzile. Aici o sa calculam inclusiv suma totala de bani acumulata pe toate comenzile si aceasta suma poate fi vazuta doar de admin.

Functionalitate: schimbare status comanda si numarul de produse disponibile in stock: administratorul poate schimba statusul comenzii din 'Processing' in 'Delivered', implicit scaduse si din stock produsul respectiv. Daca comanda este deja livrata se va afisa doar un mesaj sugestiv fara a mai produce alte modificari. Implementata in orderController.js.

Functionalitate: stergere  comanda: doar adminul poate sterge o comanda. Am facut o functie in fisierul orderController.js in care se cauta o anumita comanda dupa ID si dupa o sterg.


Functionalitate: adaugare review sau actualizare review: in cazul in care a fost dat deja un review de catre userul logat la un anumit produs, acesta va fi doar actualizat. Orice user logat poate adauga un review la orice produs. De asemenea, trebuie sa calculam media pe ratings in functie de toate ratingurile date de toti userii(o sa adunam toate ratingurile date si le impartim la cate sunt). Implementare in productController.js.

Functionalitate: get all the reviews of product: o functie care sa-mi returneze toate review urile unui produs anume identificat prin ID. Oricine poate vedea toate review-urile unui produs. Implementata in productController.js.

Functionalitate: stergere review de la un produs anume. Cautam produsul dupa ID. Implementata in productController.js.


Pana aici eu am lucrat doar la partea de backend si am testat absolut tot ce vedeti implementat cu aplicatia postman in care am scris requesturile necesare pentru fiecare functionalitate. In comentarii veti observa si aceste requesturi ( ex: /api/v1/...). De asemenea, am verificat daca datele, respectiv modificarile sunt facute si in baza de date. Deci toata partea de backend ar trebui sa fie functionala, am incercat sa testez si cam toate erorile posibile ca sa vad daca le tratez bine in program sau daca am uitat sa le tratez. De asemenea, in postman am salvat toate requesturile facute, astfel incat cand a fost nevoie sa le refolosesc sa mi fie usor. Poate era mai usor daca aveam partea de frontend facuta dar nu mi place sa lucrez pe partea de frontend, m-a incantat mai mult sa lucrez la aceasta parte de proiect, de aceea am si inceput cu ea.


### FRONTEND

### Ca sa rulati partea de frontend va mutati pe folderul cd frontend si dupa dati comanda npm start.

Aici de asemenea sunt notitele luate pe parcurs, in timp ce scriam si ma chinuiam cu diverse erori. Au fost mai putin erori la backend si mai usor de rezolvat!!!

Prima data m-am mutat pe folderul "frontend" si am dat comanda:

    ---- npx create-react-app .

pentru a instala toate pachetele react si dependintele necesare de care avem nevoie.

Am mai instalat si alte dependinte necesare cu comanda: ( folosesc axios ca sa fac legatura cu backendul si react-alert ca sa vad mesajele de alerta si react-bootstrap pentru ca am folosit componente de bootstrap in frontend si react-helmet care ma ajuta sa customizez datele in pagina(ex: titlurile) si react-redux si redux si alte pachete necesare in crearea proiectului)

    --- npm i axios react-alert react-alert-template-basic react-bootstrap react-helmet react-redux redux redux-thunk redux-devtools-extension react-router-dom

In fisierul "index.html" am pus link-urile catre ce am eu nevoie. Din folderul "src" am sters urmatoarele fisiere: App.test.js, index.css, logo.svg, setupTests.js, reportWebVitals.js.


Ca sa pornim partea de frontend cu react dam comanda: 
    ---- npm start

Avem frontend-ul care ruleaza pe:
    -- localhost si portul 3000

Fisiere:
1. index.js => este fisierul nostru principal in care o sa avem componentele aplicatiei
2. App.js => alte componente ca footer, header etc. Paginile mele se vor afla aici. Aici vom crea rutele paginilor  cu ajutorul bibliotecii react-router-dom de asemenea. 
3. MetaData.js => ajuta la customizarea titlurilor si a datelor(desrierile, textele, autorii) cu ajutorul bibliotecii helmet. O sa ii dam parametrii si asa o sa customizam in app.js datele cu ajutorul acesteia.

In proiect o sa ma folosesc de Redux(este o biblioteca open-source JavaScript) pentru a crea un Store local si a face aplicatia mai predictibila si mai usor de folosit. Este foarte util deoarece aplicatia mea contine multe date care sunt schimbate frecvent. Acest store local este de fapt o structura de date care contine intreaga stare a aplicatiei, inclusiv datele utilizatorilor, setarile, preferintele etc. => organizate sub forma unui arbore de obiecte. Cele mai importante componente din Redux sunt Action si Reducer de care depinde toate modificarile din Store. Aici am explicat eu ce am inteles mai exact ce face Redux. Si de ce am ales sa-l folosesc. Am auzit de acesta intamplator si am incercat sa inteleg mai bine ce este si daca ar fi bun sa l folosesc si eu in apliactie. Am creat fisierul store.js in care voi crea Store impreuna cu Action si Reducer.

Am instalat in vs code si extensia: ES7 React/Redux/GraphQL/React-Native snippets.


O sa creez reducers pentru produse in fisierul productReducers.js. Vom gasi cele 4 cazuri:         ALL_PRODUCTS_REQUEST, 
                ALL_PRODUCTS_SUCCESS, 
                ALL_PRODUCTS_FAIL,
                CLEAR_ERRORS si fiecare caz va returna ceva specific, va face o actiune corespunzatoare. 
Acum o sa creez toate actiunile unui produs in fisierul productAction.js.


"proxy": "http://127.0.0.1:4000"  => the backend punem in package.json


Cand clientul apasa pe butonul de "view details" i se va deschide o noua pagina cu detaliile corespunzatoare produsului selectat.

Atunci cand sunt la ALL_PRODUCTS_REQUEST si am loading pe true sa mi apara ca se incarca(o sa apara Loaderul) si in  interfata si cand loading e pe false, adica s-au incarcat sa apara toate produsele. Atunci cand se incarca sa nu apara o pagina goala ci sa sugereze ca se incarca ceva. In fisierul Loader.js am implementat functionalitatea de loader. => o sa mi apara acel loader de incarcare in interfata.
In fisierul App.css regasim toate componentele din interfata, inclusiv loader.

Ca sa testez daca imi merge loaderul pusesem in productController.js timpul de incarcare al produselor la 2 secunde si intr-adevar imi aparea acel loader, l-am lasat implicit dupa sa nu am un delay in interfata.


O sa adauga cu ajutorul react-alert o alerta in cazul unei erori. Si o afisez eroarea si in interfata. In cazul unei erori va fi afisata o alerta de eroare. M am folosit de asemenea de react-alert-template pentru aceasta.


O sa adaug acum functionalitatea ca atunci cand apasa pe produs sa se deschida detaliile despre acel produs => o pagina noua in care sa fie descrierea detaliata a produsului. In productReducer am adaugat state-urile in care se poate afla produsul si ce ar trebui sa faca in fiecare caz. Am creat un fisier ProductDetails.js in care am folosit un template de bootstrap care sa afiseze detaliile despre produs.
Deoarece o sa am o gama mai variata de imagini o sa folosesc bootstrap Carousel pentru aceasta. Fiecare produs poate avea mai multe imagini cand user deschide detaliile acestuia => array de imagini de asta folosim Carousel aici.

In App.css sunt stilizate cu css diverse atribute pe care le-am folosit la afisarea produselor sau a altor elemente din interfata.

Daca produsul nu mai e in stock mi se va afisa cu rosu si mesajul 'Out of Stock', altfel se va afisa cu verde 'In Stock'. Toate datele despre produse vor fi aduse din baza de date, din backend.


Am adaugat si functionalitatile de:
1. paginare: am folosit react-js-pagination. Din backend am setat cate produse sa am pe pagina si am adaugat cu tool-ul de mai sus paginare si schimbarea lor, tinand cont de currentPage.
2. search: Am implementat Search barul in fisierul Search.js, acesta cauta dupa o cheie data anumite produse. Am adaugat si un istoric al cautarilor atunci cand userul va introduce ceva ii va aparea. Am inclus in Header.js optiunea de search prin intermediul unui Route pentru ca functia de search are un parametru => history si nu aveam cum sa adaug altfel in header fara react-router-dom.
3. filter(dupa categorie, dupa pret, dupa ratinguri): 
   ------ dupa categorie: Atunci cand vom cauta anumite produse ne vor aparea filtrul de pret si categoriile. Daca selectam o anumita categorie vor disparea celelalte produse care nu fac parte din categoria selectata.
   ------ dupa pret: m-am folosit de utilitarul rc-slider. L-am instalat cu comanda: npm i  rc-slider. Am setat pretul minim la 1 $ si pretul maxim la 10000 $. Am creat slider pentru filtru in home.js.
   ------ dupa ratinguri: vom selecta produsele care au cel putin ratingul dorit de noi. Sub filtrul de categorii se afla si acets filtru.

Toate filtrele pot fi aplicate chiar in acelasi timp.
In cazul in care vreau sa caut anumite produse aplicand filtrele si rezultatul nu necesita paginare, voi scoate paginarea => in backend la productController.js. Daca am o singura pagina nu are sens sa punem paginare.

In Header.js am adaugat proprietatea ca atunci cand apesi pe logo-ul site-ului sa te intoarca la homepage. Atunci cand dai search la un produs va fi disponibil si filtrul de pret Dar daca vrei sa te intorci la pagina principala doar poti apasa pe logo-ul site-ului.


In fisierul userActions.js o sa implementez tot ce tine de user (logare, inregistrare etc.) -> actiunile, iar in userReducers.js o sa am tipurile de requesturi pe care le pot face in cadrul site-ului pe aceasta parte de user -> reducers.

 ----------------LOGIN ---------------

-> Login.js
-> cand se va loga se va face push si la tot istoricul cautarilor userului logat
-> o sa aibe functionalitatea de a selecta ca si-a uitat parola ceea ce inseamna ca isi poate schimba parola. I se va genera alt token pentru resetare parola si dupa userul poate da noua parola.
-> proprietatea de inregsitrare daca nu are cont

Am instalat in backend pachetul cloudinary: npm i cloudinary. Voi pune aici imaginele pe care le folosesc in aplicatie. In fisierul config.env din backend am scris credentialele contului meu de cloudinary. O sa am doua foldere aici, unul avatars in care salvez toate avatarele userilor si in products am toate produsele afisate in interfata.


 ---------------REGISTER---------------

-> Register.js
-> utilizatorul isi va introduce o poza de profil = am folosit express-fileUpload pentru a uploada imaginea. Imaginea va fi salvata dupa in cloudinary (server.js -> backend) in follderul avatars

Voi incarca datele userului conectat dupa,  prin functia loadUser din userActions.js. Acesta va ramane logat pe site pana se va deloga, chit ca dau refresh la pagina el va ramane logat. O sa preluam datele introduse in login sau register si vom pastra userul  logat pana la deconectare. M-am uitat si cu inspect, cu toolul de redux si la use imi apareau toate datele incarcate ale userului.

 -------------USER--------------

-> am afisat in header poza de profil al userului logat si i-am creat un meniu in care in functie de rolul acetsuia(administrator sau utilizator) va avea anumite optiuni in meniu. La administrator vom avea si dashboard fata de user. Ambele vor avea optiunea de logout si de a-si vizualiza profilul contului. In fisierul Header.js am adaugat comentarii acolo unde se am adaugat meniul imaginea userului.
-> am implementat in userReducers si userAction optiunea de logout: cand va apasa aceasta optiune utilizatorul de orice tip ar fi va fi delogat si va aparea iar optiunea de log in, de asemenea am sters tokenul asocita contului din cookie. Am verificat cu inspect acest lucru si functioneaza.

-> optiunea de profile din meniul userului: 
        - implementata in fisierul Profile.js
        - vom arata detaliile contului: nume, email, cand a fost creat, comenzi efectuate, isi poate edita profilul de aici sau isi poate schimba parola.
        - daca voi incerca sa scriu localhost:3000/me si sa nu fiu conectata la niciun cont o sa imi dea eroare pentru ca este o ruta protejata, doar userul conectat isi poate vedea profilul => este portejata atat din backend, cat si din frontend. Partea de protectie pentru frontend se gaseste in fisierul ProtectedRoute.js. In cazul nu e logat va fi redirectat spre pagina de login.
        - optiunea de actualizare a profilului userului: poate updata numele, emailul, poza de profil => fisierul userReducers in care definim tipurile de actiuni si in userActions, dar si in UpdateProfile.js. Tratam actualizarea profilului tot ca o ruta protejata. Atunci cand schimbam poza de profil aceasta va fi schimbatat si in cloudinary, o voi sterge pe cea veche si o voi adauga pe cea noua => in backend fac asta on authController.js.
        - optiunea de schimbare a parolei: implementare tot in userActions.js si userReducers.js si in UpdatePassword.js. Toate au nevoie de actiuni si reducers. Userul va introduce vechea parola si noua parola si in cazul in care vechea parola este buna si noua parola nu are mai putin de 6 caractere ar trebui sa fie ok. Utilizatorului i se va schimba parola cu noua parola.
  
-> optiunea de parola uitata: asmenea o sa i scriu reducer si action si dupa  sa scriu in fisierul ForgotPassword.js. La login regasim aceasta optiune si va trebui sa introduceti emailul catre care se va trimite un email de confirmare a identitatii. O sa mi trimita pe mailtrap un mail in care mi se tokenul de resetare al vechii parole si pentru test am introdus adresa url a frontendului(adica ceva static, o variabila din config.env) ca sa testez. introduc adresa url impreuna cu tokenul si observ ca mi afiseaz ao pagina in care imi pot introduce noua parola.

----------------Cosul de cumparaturi-------------------

-> pot sa adaug cate produse vreau eu de acelasi tip, cat imi permite stock-ul acelui produs. Pot sa adaug cat imi permite stock-ul.
-> pot sa scot din produsele de acelasi tip din cos 
Aceste doua functionaliatti au fost implementate in PRoductDetails.js. Daca produsul este Out of Stock nu vom putea adauga niciun produs. Va ramane doar valoarea default 1, pe care nu o sa  o putem sterge dar nici adauga la ea.
-> cand va apasa pe butonul de Add to Cart produsul va fi adaugat in cos -> la fel va avea un reducer si un action asociat, in care vom definii actiunile posibile pe cosul de cumparaturi. Voi retine produsele din cos in local Storage si le incarc de acolo foarte repede => cu insepct se vor observa acolo la Application-> localStorage.
-> putem modifc cantitatea produselor si din cosul de cumparaturi sau putem sa stergem produsul => fisierul Cart.js
-> si informatiile din shipping info vor fi retinute in localStorage.


---La plata vom crea mai multi pasi------------

-> fisierul CheckoutSteps.js -> apar toti pasii
-> aceti nu poti fi selectati de catre user see vor lua in ordine in functie de completarea fiecaerui formular in parte.
-> orderInfo le vom retinr in sessionStorage


In tot codul am lasat comentarii sugestibile pentru anumite actiuni => le-am scris in engleza pentru ca l-am incarcat pe github dupa ce l-am terminat si mi s-a parut ma ok sa le pun in engleza. Acum daca am mai gresit ceva ce tine de cunostintele mele la engleza imi pare rau!
Toate utilitarele necesare rularii codului se  gasesc in packet.json in backend si frontend, fiecare avnd nevoie de un anumit numar pachete instalate.

Aici nu am mai scris la fiecare functie in parte ce face pentru nu am mai  avut timp atunci cand scriam. 


### Am mai lasat comentarii in cod.


