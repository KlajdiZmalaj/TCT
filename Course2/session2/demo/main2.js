//
for (let i = 5; i <= 10; i++) {
  console.log("Ky eshte nje log", i);
}

let increment = 0;
while (increment <= 10) {
  console.log("Ky eshte nje log , nga while", increment);
  increment++;
}

const arrayMeData = ["klajdi", {}, () => {}, 3, 4, 5];

for (let item of arrayMeData) {
  console.log("numri per ciklin eshte : ", item);
}

const obj = {
  key1: 0,
  key2: 1,
  key3: 4,
  klajdi: "un jam klajdi",
};
for (const element in obj) {
  console.log("key per cikel eshte : ", element, obj[element]);
}

//Ushtrimi 1
let fjalia = prompt("Vendosni fjaline");

fjalia.length >= 0 && fjalia.length <= 10
  ? console.log("Fjali e shkruter")
  : fjalia.length > 10 && fjalia.length <= 15
  ? console.log("Fjali mesatare")
  : fjalia.length > 15 && fjalia.length <= 20
  ? console.log("Fjali e gjate")
  : "";
