# Javascript Advance

# Detyra perfundimtare

- Brenda folderit `Detyra perfundimtare` krijoni nje folder me emrin dhe mbiemrin tuaj ku ne ate folder do hidhet dhe detyra e zhvilluar , shembull : `Klajdi Zmalaj` > `demo` > ...

Krijoni websiten e meposhtme duke ndjekur designin e Nicepage dhe duke perdorur HTML, SCSS dhe Javscript/JQuery

Link i demos Nicepage : https://website47374.nicepage.io/Portfolio.html

1. Te krijohet navigation

2. Te krijohet sectioni `We define ambitions` + Animacionet

3. Te ndertohet flex gridi i portofolit `Our Portfolio` + Animacionet

4. Te ndertohet `Contact Us` + Forma te jete funksionale
   - Qe forma te jete funksionale te dhenat e formes do dergohen ne API e FORMES me metoden : POST
   - Inputet e formes duhet te permbajne te dhena per name,email,description
   - FORM POST API : https://forms.nicepagesrv.com/v2/form/process
   - Pasi forma te dergohet nxirrni nje mesazh : `Message sent successfully!`

Shembull i body :

fetch("https://forms.nicepagesrv.com/v2/form/process", {
"body": '{"name":"Andi","email":"andi@test.com","description":"test desc"}',
"method": "POST",
});
