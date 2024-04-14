//
console.log("Javascript external");

// if (4 > 5) {
//   console.log("nr 4 eshte me i vogel se 5");
// } else if (6 > 4) {
//   console.log("5 eshte me e madhe se 4");
// } else if (5 > 4) {
//   console.log("5 eshte me e madhe se 4");
// } else {
//   console.log("jemi ");
// }

const numri = 5;

switch (numri) {
  case 4:
    console.log("variabli ka vlere 4");
    break;
  case 5:
    console.log("variabli ka vlere 5");
    break;
  case 6:
    console.log("variabli ka vlere 6");
    break;

  default:
    console.log("variabli nuk ka anje nga vlerat e mesiperme");

    break;
}

if (numri == 4) {
  console.log("variabli ka vlere 4");
} else if (numri == 5) {
  console.log("variabli ka vlere 5");
} else if (numri == 6) {
  console.log("variabli ka vlere 6");
} else {
  console.log("variabli nuk ka anje nga vlerat e mesiperme");
}

// kushti ? shprehja1 : shprehja2
4 > 5 ? console.log("1") : console.log("2");
//ush 1

let mosha = prompt("Vendosni moshen : ");
mosha = Number(mosha);

if (mosha > 18) {
  console.log("Po, ju jeni +18.");
} else if (mosha == 18) {
  console.log("Ju jeni fix 18");
} else {
  console.log("Jo, ju nuk jeni mbi 18 vjec. Jeni ", mosha, " vjec");
  //   console.log(`Jo, ju nuk jeni mbi 18 vjec. Jeni ${mosha} vjec`);
}

mosha >= 18 ? console.log("Po, ju jeni +18.") : console.log("Jo, ju nuk jeni mbi 18 vjec. Jeni ", mosha, " vjec");

//  Ushtrim : Merrni nga useri (prompt) ...
let num1 = prompt("vendosni nr e pare");
let num2 = prompt("vendosni nr e dyte");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > 0 && num2 > 0) {
  console.log("Të dy numrat janë pozitivë.");
} else if (num1 == 0 || num2 == 0) {
  console.log("Të paktën një nga numrat është zero.");
}

if (num1 % 2 === 1) {
  console.log("Numri 1 është tek.");
} else {
  console.log("Numri 1 është cift.");
}

if (num2 % 2 === 1) {
  console.log("Numri 2 është tek.");
} else {
  console.log("Numri 2 është cift.");
}

//
for (let i = 0; i < 10; i++) {
  console.log("Ky eshte nje log");
}
