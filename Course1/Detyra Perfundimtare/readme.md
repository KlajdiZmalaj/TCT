# Detyra perfundimtare

- Brenda folderit `Detyra perfundimtare` krijoni nje folder me emrin dhe mbiemrin tuaj ku ne ate folder do hidhet dhe detyra e zhvilluar , shembull : `Klajdi Zmalaj` > `demo` > ...

Kerkesa :

- Te ndertohet ne HTML + CSS webi : https://www.free-css.com/assets/files/free-css-templates/preview/page278/careo/
  duke perdorur pikat e meposhtme:

1. Semantic tags (header>nav , section , footer etj...)
2. CSS external
3. Flexbox
4. Responsive web design (media query per mobile)
5. Sticky header ( nav )
6. Transitions dhe Hover ( ne butona dhe tek services )
7. Forma ne seksionin `Request A call Back`

- Pasi te jete ndertuar design i HTML/CSS do perdoret javascript per pikat e meposhtme:

1. Buttonat ne header (`Read More` dhe `Book Now`) dhe kene nje click event qe ben nje `console.log`
2. Tek seksioni `Our Customer Feedback` do klikohen shigjetat majtas dhe djathtas dhe do ndryshoje fotoja e klientit - (te perdoret : `document.getElementById('...')`)

3. Tek seksioni `Services` dhe shfaqet 3 sherbimet nga nje JSON i cili do merret tek API :

- fetch(`https://api.npoint.io/fe3fd34cbd8e1b186fd7`)

- Keto objekte do nxirren me nje cikel `for` brenda `funksionit` qe therret ket API dhe do behen `.innerHTML` te seksioni `Services`.
- API perman nje liste (`array`) me sherbime (`objekte`) ku secili object ka kete strukture :

{
"image" : "https://www.free-css.com/assets/files/free-css-templates/preview/page278/careo/assets/images/thr.png",
"title" : "COSMETIC",
"description" : "some form, by injected humour, or randomised words which don't look even slightly believable. If you are"
}
