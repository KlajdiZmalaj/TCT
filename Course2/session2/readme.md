# Javascript Advance

## Fundamentals and Intermediate Concepts (Review Basics)

- Conditionals
  if, if/else, if/else if/else, switch statement, ternary operator

  Ushtrim : Merrni nga useri (prompt) moshen e tij dhe kontrolloni nese ai eshte 18+ vjec. Nese po , beni nje alert ku tregon moshen me nje text te tille :
  `Jo, ju nuk jeni mbi 18 vjec. Jeni xx vjec`
  `Po, ju jeni +18. Jeni xx vjec`

- Logical operators ( || , && ) - '' , 'string' , 1 , 0

  Ushtrim : Merrni nga prompt 2 numra (let num1; let num2;)
  Afishoni ne console.log keto rezultate nese :

  -Nëse num1 dhe num2 janë numra pozitivë, printoni `Të dy numrat janë pozitivë.`
  -Nëse njeri nga numrat num1 ose num2 është zero, printoni `Të paktën një nga numrat është zero.`
  -Nëse num1 është çift, printoni `Numri 1 është çift.`
  -Nëse num2 është tel, printoni `Numri 1 është tek.`

- Loops ( for, while, forOf , forIn )

  - Mblidh 10 numra te nje pas njeshem nga 20-30 duke perdor dhe ciklin `for` dhe ciklin `while`

=== === ===

- Praktike

1. Merrni nje fjali nga prompt dhe kontrolloni madhesine e string.
   Duke perdorur ternary afishoni ne log sipas madhesise :

   - nga 0 karaktere - 10 karakter -> `Fjali e shkruter`
   - nga 10 karaktere - 15 karakter -> `Fjali mesatare`
   - nga 15 karaktere - 20 karakter -> `Fjali e gjate`

2. Duke perdorni ciklet afishoni 20 logs per numrat nga 50 - 70;

3. Ne arrayn e meposhtme gjeni numra tek ose cift dhe indexin e tyre
   `const numrat = [10, 15, 20, 25, 30, 50, 77, 89, 100, 101];`
   Shembull : Numri 20 me pozicion 2 eshte cift...

4. Merrni nga useri 2 inpute ku te cilat nqs inputi i pare (username) dhe inputi i dyte(password) jane
   username:`root0` dhe password`admin321`
   do behet nje alert : `Ju u loguat me sukses` perndryshe `Username/Password gabim`
