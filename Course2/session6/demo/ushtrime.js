//ush1
const konvertoNeSekonda = (min) => {
  const sekondat = min * 60;
  console.log(`Ne ${min} minuta ne kemi ${sekondat} sekonda`);
};

// const konvertoNeSekonda2 = (min) => {
//   return min * 60;
// };
// console.log(`Ne ${3} minuta ne kemi ${konvertoNeSekonda2(3)} sekonda`);

//ush 2
const gjejNumrin = (numberGot) => {
  const nrString = numberGot.toString();
  const charLength = nrString.length;
  //
  console.log(`Per numrin ${numberGot} kemi ${charLength} karaktere`);
};
gjejNumrin(5000);

//ush 3
const numeroVlerat = (arrMeNr) => {
  let counterZero = 0;
  let counterNjesha = 0;

  arrMeNr.forEach((currentNr) => {
    if (currentNr === 1) {
      counterNjesha++;
    }
    if (currentNr === 0) {
      counterZero++;
    }
  });

  console.log(`U gjeten ${counterNjesha} njesha dhe ${counterZero} zero`);
};
numeroVlerat([1, 2, 3, 0, 0, 1, 1, 5, 1, 0, 1, 1]);
numeroVlerat([1, 1, 0]);

//ush4
const varPromp1 = Number(prompt("Vendos nr 1"));
const varPromp2 = Number(prompt("Vendos nr 2"));

const shuma = (numri1) => {
  return (numri2) => numri1 + numri2;
};
console.log(`Shuma e ${varPromp1} dhe ${varPromp2} eshte : ${shuma(varPromp1)(varPromp2)}`);
// const shuma2 = () => {
//   return function () {};
// };

//ush 5
const bashko = (...rest) => {
  console.log("cfare ka operatori res ? ", rest);
  return rest.flat();
};
bashko([1, 2, 3], ["a", "b", "c"], [1], ["klajdi"]);
// [1, 2, 3, "a", "b", "c", 1];

//ush 6

const duplikoEmrin = (emri, counter) => {
  let emratDuplicated = [];

  for (let index = 0; index < counter; index++) {
    emratDuplicated.push(emri);
  }
  return emratDuplicated;
};

//ush 7

const formatoLekun = (leku) => {
  const lekuFirst = leku.split(",")[0];
  const qindarka = leku.split(",")[1];

  console.log("Leku eshte :", lekuFirst, " dhe qindarka eshte : ", qindarka);
  return lekuFirst;
};

formatoLekun("2300,50");

//ush 8
