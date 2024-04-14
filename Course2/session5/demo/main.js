//Objects
const myObj = {
  prop1: "my string",
  prop2: 2323,
  prop3: [1, 2, 32, 2],
  prop4: {
    emri: "Andi",
  },
  prop5: function (adadad) {
    console.log("sadada");
  },
  prop2: "test",
};

//menyre statike :
console.log("prop i 3 eshte : ", myObj.prop3);
const prop3Var = "prop3";
//menyre dinamike > ky 'prop3' mund te ishte variabel
console.log("prop i 3 eshte : ", myObj[prop3Var]);

//exe method  :

myObj.prop5(23434);

let objektiIm = {
  emri: "Klajdi",
  mosha: 24,
  gender: "M",
  merrEmrinTim: (emriParam) => {
    console.log("Emri i keti objekti eshte : ", emriParam);
  },
};

objektiIm.merrEmrinTim("Klajdi Zmalaj");

var users2 = [
  [1, "Klajdi Zmalaj", 24],
  [2, "John Doe", 30],
  [3, "test test2", 22],
  [4, "test test3", 23], //mosha users[3][2]
  [5, "test test44", 17],
];

let users = [
  { id: 1, fullName: "Klajdi Zmalaj", mosha: 24 },
  { id: 2, fullName: "andi  ", mosha: 24 },
];

console.log("mosha e userit te 2 eshte : ", users[1]["mosha"]);

// bashkojme objekte :

const obj3 = {
  prop1: "vlera 1",
  prop2: "vlera2",
};
const obj4 = {
  prop3: "vlera 1",
  prop4: 3,
};

const objektetEBashkuar = Object.assign({}, obj3, obj4);

console.log("Objektet e fundit jane : ", obj3, obj4, objektetEBashkuar);

console.log("ka ka prop2 obj4 ? ", Object.hasOwn(obj4, "prop3"));

// .values dhe .keys kthen Array
console.log("Te gjithe properyt e objektit objektiIm jane : ", Object.keys(objektiIm));
console.log("Te gjithe valuet e objektit objektiIm jane : ", Object.values(objektiIm));

// Object.entries kthen ne matrice (Array) [[key,value],[key,value]] dhe keys dhe values nga nje object
console.log("Entries jane : ", Object.entries(objektiIm));

//Group by
// const varTest = Object.groupBy(objektiIm, ({ mosha }) => mosha);
