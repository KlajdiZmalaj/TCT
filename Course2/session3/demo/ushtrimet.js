//ush1
function gjejSip(brinja1, brinja2) {
  const sip = brinja1 * brinja2;
  console.log("Sip eshte : ", sip, brinja1 * brinja2);
}

const gjejSip2 = (brinja1, brinja2) => brinja1 * brinja2;

gjejSip(4, 6);
console.log("Sip me arrow eshte : ", gjejSip2(10, 12));

//ush 2

function kontrolloUserin(username, password) {
  let isAdmin;
  if (username == "root0" && password == "psw_01") {
    isAdmin = true;
  } else {
    isAdmin = false;
  }

  if (isAdmin) {
    console.log("Je admin");
  }
}
kontrolloUserin("klajdi", "zmalaj");
kontrolloUserin("root0", "psw_01");
