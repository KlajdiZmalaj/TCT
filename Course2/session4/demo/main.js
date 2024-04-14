let myArr = ["klajdi", "andi", 3, 4, 5];
let myArr2 = ["vlera1", 2, 3, 5, 99];
//.concat =>bashkon 2 arra
let arrEBashkuar = myArr.concat(myArr2);
//
for (let i = 0; i < myArr.length; i++) {
  //
  console.log("vlerat e arr jane : ", myArr[i], myArr.at(i));
}

//
for (const numriCurrent of myArr) {
  console.log("vlerat e nr eshte : ", numriCurrent);
}
//
// myArr.forEach(  funx  ) , funx = (param)=>{} , function(param) {}
myArr.forEach((numriRradhes) => {
  console.log("numri me foreach eshte : ", numriRradhes);
});

myArr.forEach(function (numriRradhes) {
  console.log("numri me foreach fnx eshte : ", numriRradhes);
});

// .fill > .fill('_') , mush arr me _  _ __ _ _ per cdo vlere

//slice pret arry nga index 0 der te inx 2 ,<2
const newSlicedArr = myArr.slice(0, 2);

const numrat = [1, 9, 2, 3, 1];

console.log(
  "a jane te gjith nr pozitive ???",
  numrat.every((numriCurrent) => numriCurrent > 0),
);

// ruan ne variablin  janeTeGjithaTrue vleren true/false
const janeTeGjithaTrue = numrat.every((numriCurrent) => {
  if (numriCurrent == 0) {
    return true;
  } else {
    return false;
  }
});

//step1 === .every()
//step2 === .every((nr)=> KUSHTI ), KUSHTI -> true/false
//step3 === [1, 9, 2, 3, 1]; 1>0 , 9>0 2>0 3>0 1>0 , nqs te gjitha true , return true

console.log(
  "a kemi te pakten nje nr tek ??? ",
  numrat.some(function (nr) {
    return nr % 2 == 1;
  }),
);

const arrToFind = ["klaj", "andi", "marjo"];

//find() , nqs true te kthen elementin e pare te gjetur
//findLast , nqs true te kthen nga shume elemente te gjetur , te fundit
const emriMe4 = arrToFind.findLast((emriAktual) => {
  return emriAktual.length == 4;
});

console.log("emri qe ka 4 shkornja eshte : ", emriMe4);

// nga const numrat = [1, 9, 2, 3, 1]; te gjendet nr i pari cift dhe i fundit tek
// numrat.find();
// numrat.findLast();

// flat

//map68

const myNumers2 = [3, 5, -4, -3, 44, 99];

const myNumers2Maped = myNumers2.map(
  (vleraAktuale, index) => `<div>Numri i ciklit eshte : ${vleraAktuale} dhe indexin e kam : ${index}</div>`,
);

// filtrojme nr pozitive
const numratEFilturar = myNumers2.filter((numriAk) => {
  if (numriAk > 0) {
    return true;
  } else {
    return false;
  }
});

console.log("Nr pozitiv jane ~~ ", numratEFilturar);

console.log("array e ndryshuar eshte : ", myNumers2, myNumers2Maped);

//arrow funx me return
// ()=> 'Klajdi'

// ()=> { return 'Klajdi' }

//funx me return
// function() {
//     return 'Klajdi'
// }
