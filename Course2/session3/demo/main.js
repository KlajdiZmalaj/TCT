// argumentet dhe parametrat

function kyEshteFunksioniIm(parametri1 = "testDefault", param2, a, b) {
  console.log("Functions");
  console.log("Parametrat e funx jane : ", parametri1, param2, a, b);
}

kyEshteFunksioniIm("klajdi", 5, [], "zmalaj");
kyEshteFunksioniIm("test", "test", 1, "34534");
kyEshteFunksioniIm({}, {}, {}, {});
kyEshteFunksioniIm([], [], [], []);
kyEshteFunksioniIm();

// function scope

//variabel globale
let name = "Klajdi";

function myFunc() {
  //variabel lokale

  console.log("emri brenda funx : ", emri);

  var emri = "klajdi";
  var emri2 = "andi";
}

myFunc();

// arrow function

const myFunc2 = (p1, p2, p3) => {
  console.log("log brenda arrow funx !!!");
};

myFunc2();

//function expresion
const myFuncExp = function (p1, p2, p3) {
  console.log("Function expresion me params : ", p1, p2, p3);
};
myFuncExp("arg 1", 2, "arg3");
myFuncExp("arg adadsasdasdad", 2, "arg3");

//return syntax

function funxMeReturn(a, b) {
  console.log("shuma eshte : ", a + b);

  return a + b;
}

const shuma = funxMeReturn(5, 10);
const shuma2 = funxMeReturn(20, 30);
funxMeReturn();

function pjestoNumrat(numri1, numri2) {
  return numri1 / numri2;
}

console.log(
  "Pjestime jane : ",
  pjestoNumrat(10, 5),
  pjestoNumrat(20, 10),
  pjestoNumrat(30, 15),
  pjestoNumrat(5, 2),
  pjestoNumrat(10, 5),
);

// const merrNgaUseri = prompt("vendosni nje vlere : ");

// argumnets obj {}
function getAllArg(p1, p2) {
  console.log("Argumentet nga parametrat jane : ", p1, p2);
  console.log("getAllArg called !  :", arguments[4]);
}

getAllArg(1, "sdd", "klajdi", [], 45555);

//rest operator []
function getRestParams(p1, ...teTjera) {
  console.log("Parametrat jane : ", teTjera[1]);
}

getRestParams("klajdi", "zmalaj", 24, 1999, "andi");

// nested funx
function funksioni1(p1) {
  console.log("funx 1", p1);

  return function (p2) {
    console.log("funx 2", p2, p1);
  };
}

funksioni1("klajdi")("zmalaj");
