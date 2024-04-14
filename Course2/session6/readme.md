# Javascript Advance

~ Praktike

1.  Krijoni nje funksion i cili konverton minutat ne sekonda
    Shembull : `konvertoNeSekonda(3)` do ktheje : `Ne 3 minuta ne kemi 180 sekonda`

2.  Krijoni nje funksion i cili gjen sa karaktere ka numri :
    Shembull : `gjejNumrin(5000)` do ktheje : `Per numrin 5000 kemi 4 karaktere`

3.  Krijoni nje funksion i cili nga array i dhene me 0 dhe 1 numeron sa 0 jane dhe sa 1-sha jane:
    Shembull : `numeroVlerat([1,2,3,0,0,1,1,5,1,0])` do ktheje : `U gjeten 4 njesha dhe 3 zero`

4.  Krijoni nje nested function i cili mbledh 2 numra : `mblidh(20)(10)` do ktheje `Shuma e 20 dhe 10 eshte 30`

5.  Krijoni nje funksion i cili ju kthen vlerat e Array-ve ne nje Array te vetme :
    Shembull : `bashko( [1,2,3],['a','b','c'], [1] )` do ktheje : [ 1,2,3,'a','b','c',1 ]

6.  Krijoni nje funksion i cili shton emrin tuaj ne nje Array te kthyr aq here sa ju e percaktoni ne argument :
    Shembull : `duplikoEmrin('Klajdi',3)` do ktheje : ['Klajdi','Klajdi','Klajdi']

7.  Krijoni nje funx i cili merr vleren ne lek si string dhe heq qindarkat dhe e kthen ne numer si me poshte:
    Shembull : `formatoLekun('2300,50')` => 2300 `formatoLekun('120,00')` => 120

8.  Krijoni ne "Makine llogaritese" me nje funksion i cili pranon 3 parametra ku:
    Parmetri i pare dhe i 3 jane nr te cilet do kalkulohen dhe parametri 2 eshte veprimi:
    Shembull : `calculator(2, "+", 2) ➞ 4` , `calculator(2, "*", 2) ➞ 4` , `calculator(4, "/", 2) ➞ 2` , `calculator(4, "-", 1) ➞ 3`

9.  Krijoni nje funksion i cili kontrollon nese argumenti i 2 eshte midis argumentit te pare dhe te 3 ne renditje numerike:
    Shembull : `kontrolloNumrin(1,2,6)` => true sepse 2 eshte midis 1-6 `kontrolloNumrin(1,4,3)` => false sepse 4 eshte jashte 1-3

10. Krijoni nje funksion qe llogarit zbritjen e produkteve ne oferte per dyqanin:
    Shembull : `zbritjaNeLek(3000,50)` do ktheje : `Produkte me 50% zbritje shkon 1500 leke`
    Formula e zbritjes : var zbritja = 50 / 100 \* 3000

11. Gejni sa % ze siperfaqja e shtetit ne rruzullin tokesor. Te renditen ne array sipas madhesise,
    Siperfaqja e tokes : `148,940,000` [Km^2]
    Shembull : `llogaritHapsiren('Shqiperia',28748)`, ku 28,748 km^2 zejne 0.02%
    Shembull : `llogaritHapsiren('Italia',302073)`, ku 302,073 km^2 zejne 0.20%
    Shembull : `llogaritHapsiren('Rusia',17098242)`, ku 17,098,242 km^2 zejne 11.48%

12. Krijoni nje funxion i cili kthen fjalet mbrapsht :
    Shembull : `ktheFjalet('pershendetje une jam nje front end developer')` => 'developer end front nje jam une'

13. Llogarisni buxhetin e personave ne Array :
    merrBuxhetet([
    { emri: "Andi", mosha: 21, buxhet: 23000 },
    { emri: "Mario", mosha: 32, buxhet: 40000 },
    { emri: "Klajdi", mosha: 16, buxhet: 2700 }
    ]) ➞ 65700

    merrBuxhetet([
    { emri: "Andi", mosha: 21, buxhet: 29000 },
    { emri: "Mario", mosha: 32, buxhet: 32000 },
    { emri: "Klajdi", mosha: 16, buxhet: 1600 }
    ]) ➞ 62600

14. Nga Array me numra ktheni ne array me strige te tilla ,
    Shembull : [ -3 ,0 ,3 ,2 ,-10 ,3, -12, 10] do kthehet ne ['-',0,'+','+','-','+','-','+']

15. Nga objekti i Punet per cdo user vendosi ne vend te puna_id emrin e punes

    Punet = {
    10 : 'Pastrues',
    13 : 'Arkitekt',
    99 : 'Programues',
    101 : 'Kamarier'
    }

    Userat = [
    {emri : "Klajdi", puna_id : 99 },
    {emri : "Andi", puna_id : 99 },
    {emri : "Mario", puna_id : 99 },
    {emri : "John", puna_id : 13 }
    {emri : "Bill", puna_id : 10 }
    ]
