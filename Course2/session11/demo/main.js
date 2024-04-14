//hapi 1 : e dhena Array me Objekte
const nxenesit = [
  { id: 0, name: "Klajdi", lastname: "Zmalaj" },
  { id: 1, name: "test", lastname: "test1" },
  { id: 2, name: "test2", lastname: "testtt2" },
  { id: 2, name: "test2", lastname: "testtt2" },
  { id: 2, name: "test2", lastname: "testtt2" },
  { id: 2, name: "test2", lastname: "testtt2" },
  { id: 2, name: "test2", lastname: "testtt2" },
  { id: 2, name: "test2", lastname: "testtt2" },
  { id: 2, name: "test2", lastname: "testtt2" },
];

//
const nexnesitMaped = nxenesit.map((currentNxenesi) => {
  return ` <div class="nxenesi">
    <p>Id e nxenesit eshte : ${currentNxenesi.id}</p>
    <h1>${currentNxenesi.name} ${currentNxenesi.lastname}</h1>
  </div>`;
});

nexnesitMaped.forEach((currentNxenesiStringHtml) => {
  const sectionContainer = document.querySelector("#container");
  sectionContainer.innerHTML += currentNxenesiStringHtml;
});

console.log("Variablat jane : ", nxenesit);
console.log("Variablat jane : ", nexnesitMaped);
