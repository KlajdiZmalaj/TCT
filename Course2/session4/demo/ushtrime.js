var users = [
  [1, "Klajdi Zmalaj", 24],
  [2, "John Doe", 30],
  [3, "test test2", 22],
  [4, "test test3", 23],
  [5, "test test44", 17],
];
console.log("users jane : ", users);

//ush 1

const gjejUserin = (id) => {
  console.log(`Useri me id ${id} eshte : ${useriGjetur[1]}`);
  return (useriGjetur = users.find((currentUser) => currentUser[0] == id));
};

// gjejUserin(5);
// gjejUserin(3);
// gjejUserin(1);

//ushtrimi 2
const gjejUseratPlus23 = () => {
  return users.filter((currentUser) => currentUser[2] > 23);
};

//ushtrimi 3
users.forEach((currentUser) => {
  // currentUser.push(currentUser[1].length)
  currentUser[3] = currentUser[1].length;
});
console.log("users updated : ", users);

//ushtrimi 4

const kontrolloPlus18 = () => {
  if (users.every((currentUser) => currentUser[2] >= 18)) {
    alert("Po te gjith userat jane +18");
  } else {
    alert("Jo disa user jane < 18");
  }
};

//ushtrimi 5

const gjeneroMoshat = () => {
  const moshat = users.map((currentUser) => currentUser[2]);
  let shuma = 0;

  for (let index = 0; index < moshat.length; index++) {
    shuma += moshat[index];
  }
  return shuma / moshat.length;
};

//ushtrimi 6
const ndryshoUserin = (index, moshenERe) => {
  users[index][2] = moshenERe;
  console.log("users janeee : ", users);
};

//ushtirmi 7
let userNew = [];

const bashkoDheShto = () => {
  userNew.push([6, "Andi", 24]);

  users = users.concat(userNew);
  console.log("users te bashkuar jane : ", users);
};

// ushtrimi 8
const reverseNameForUSers = () => {
  users.forEach((currentUser) => {
    const emriINdare = currentUser[1].split("").reverse();

    currentUser[1] = emriINdare.join("");
  });
  console.log("all users revesed", users);
};
