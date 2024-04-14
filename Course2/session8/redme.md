# Javascript Advance

## Javascript Classes 2

- extends

=== === ===

1. Krijoni nje clase Produkt qe ka keto property `id` , `emer` , `kategori`

Do krijohen dhe 2 class-a te tjera ku do bejne extend nga Produkt propertit me siper dhe do kene propertiet e tyre qe jane : `skadenca` , `sasia` , `cmimi`

new Shampo(1,'Wash And Go','Self care','19/20/2024',23,500)
new Pasta(2,'Barilla','Ushqim','23/12/2024',14,600)

2. Basketball game
   - Krijoni nje klase `Basketball` e cila llogarit nje ndeshje basketballi

- Klasa duhet te permbaje 1 property qe jane skuadrat qe kane brenda emrin dhe rezultatin e pikeve

          this.skuadrat = {
             skuadra1 : {
               emri : 'Chicago bulls',
               piket :0
           },
           skuadra2 : {
               emri : 'Miami heat',
               piket :0
           },
          }

- Klasa duhet te permbaje 1 metode `ShenoPiket` ku ndryshon rezultatin e pikeve (parametri2) per skuadren e dhene (parametri1):

       ShenoPiket('skuadra1',3) -> Chicago bulls sapo shenoi 3 pike
       ShenoPiket('skuadra2',2) -> Miami heat sapo shenoi 2 pike

- Klasa duhet te permbaje nje metode `PerfundoNdeshjen` ku perfundon ndeshjen dhe tregon skuadren fituese ne baze te pikeve

3. Restaurant manager

   - Krijoni nje klase `Restoranti` i cili menaxhon nje restorant
   - Klasa duhet te permbaje tavolinat (4 tavolina - array me objekte)
   - cdo objekt tavoline ka keto property : ( numri : xx , porosia : ['uje','rizoto','sallate'] , paguar : false )
   - Klasa duhet te permbaje nje metode e cila shton nje produkt te porosia
     Shembull : shtoProdukt( 2 , 'kafe' ) => `Ne tavolinen me index 2 u porosit dhe nje kafe`

   - Klasa duhet te permbaje nje metodo e cila kalon statusin e `paguar` ne true per tavolinen[x] perkatese
     Shembull : paguaj(3){ ... } => `Tavolina me index 3 u pagua.`

4. Krijoni nje Klase e cila ne arrayn e dhene do kryhen keto kontrolle :
   new KontrolloArray(
   [-1, 10 , 2 , -23 , 0 , 4 , 50 , 33 , 99 , 'test' , '6' ]
   )

   - krijoni nje metode e cila kthen stringun e pare qe gjen ( perdor typeof )

   - krijoni nje metode e cila gjen numrin me te madh dhe e kthen ate

   - krijoni nje metode e cila gjen numrin me te vogel dhe e tregon ate

   - krijoni nje metode e cila mbledh te gjith numrat negative dhe tregon shumen

   - krijoni nje metode e cila ndryshon cdo element ne array dhe i shton nje + pas : shembul [-1+ , 10+ , 2+ ...etj]

   - krijoni nje metode e cila kontrollon array dhe tregon nese gjen te pakten nje numer me te madh se 50

5. Krijoni nje Klase e cila kontrollon blerjet online.
   - new DyqanOnline( { shampo : 500 , 'spray flokesh' : 1000 , libra : 900 } )
   - Krijoni nje metode e cila tregon te gjithe emrat e produkteve
   - Krijoni nje metode e cila tregon nese ka transport falas apo jo
     Shembull : Nese cmimi i gjithe produkteve eshte me i madh se 2.000 lek ka transport falas
