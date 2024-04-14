- Variable Writings ( `Pascal` , `Camel` , `Snake` , `Kebab` )

- Javascript Arrays ( `.length` )

- Arrays basic methods `.concat() .unshift() .push() .shift() .pop()`

=== === ===

- Praktike

1.  Nga variabli `gjeniVleren` me poshte gjeni vleren per indexin e 5

        let gjeniVleren = [ 1 , '3' , 2.3 , {} , 'test' , 'A' , { 5 : '2' } ]

2.  Nga variabli `nxenesi` i meposhtem tregoni noten e 2-te te fizikes per nxenesin.

        let nxenesi = {
        emri: "Test",
        mbiemri: "Test2",
        lendet: {
            fizike: [10, 9, 9],
            matematike: [9, 8, 10],
            letersi: [7, 8, 4],
         },
        };

3.  Ne variablin `nxenesi` shtoni notat per cdo lende :

    `fizike` -> 4 , `matematike` -> 10, `letersi` -> 8

4.  Krijoni nje funksion i cili merr secilen notat e nje lende te variabli `nxenesi` si parameter dhe tregon mesataren

        (nota1,nota2,nota3 ) => (nota1+nota2+nota3) / 3

5.  Bashkoni te gjitha notat e lendeve ne nje `Array` te vetme duke perdorur metoden `concat`
