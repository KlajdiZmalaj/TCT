# Javascript Advance

## Javascript Arrays

- Array declaration / syntax

- [ index ] , at( index )

- Array cycles : For , For of , forEach

- push() pop() shift() unshift()

- reverse()

- .concat()

- .fill() - mutate

- slice

- every() , some()

- find() , findLast() , findIndex() , findLastIndex()

- includes()

- flat()

- join()

- Array.from('STRING') =>

- Array.isArray > kthen true false ne base te type

- .map() .filter() .sort()

  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===
  === === ===

Praktike :

Ne matricen me usera ku cdo user ka keto te dhena : `[ID , emer_mbiemer , mosha ]`:

    var users = [
        [1, 'Klajdi Zmalaj' , 24],
        [2, 'John Doe' , 30],
        [3, 'test test2' , 22],
        [4, 'test test3' , 23],
        [5, 'test test44' , 17],
    ]

1. Te krijohet nje funksion i cili gjen userin me id perkates : `gjejUserin(3)` , do ktheje : `Useri me id 3 eshte : test test2`
2. Te krijohet nje funksion i cili kthen userat qe jane me te medhenj se 23 vjec.
3. Duke perdorur nje cikel for/forEach shtoni per cdo user (nje vlere te 4) numrin e karaktereve te `emer_mbiemer`
4. Kontrolloni nqs te gjith userat jane 18vjec+. Nqs po afishoni ne alert `Po te gjith userat jane +18` dhe anasjelltas
5. Nga userat ktheni nje array tjt vetem me moshat e tyre : [24,30,22,23,17] gjithashtu gjeni dhe moshen mesatare te ketij array te gjeneruar me numra.
6. Te ndryshohet mosha e nje useri te marre nga argumenti :
   Shembull : `ndryshoUserin(2,23)` => Nga 22 vjec do behet 23 , tregojeni me log.
7. Krijo nje variabel `userNew = []` dhe ne kete user vendosni te dhenat tuaja me .push() dhe userin e ri bashkojeni dhe userat e tjere.
8. Cdo useri ti kthehet emri mbrapsht ;
   Shembull : `Klajdi Zmalaj` => `jalamZ idjalK` (reverse ArrayFrom dhe join)
