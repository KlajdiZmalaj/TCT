//`id` , `emer` , `kategori`
class Produkt {
  constructor(id, emer, kategori) {
    this.id = id;
    this.emer = emer;
    this.kategori = kategori;
  }
}

// `skadenca` , `sasia` , `cmimi`
class Shampo extends Produkt {
  constructor(id, emer, kategori, skadenca, sasia, cmimi) {
    super(id, emer, kategori);
    this.skadenca = skadenca;
    this.sasia = sasia;
    this.cmimi = cmimi;
  }
}
class Pasta extends Produkt {
  constructor(id, emer, kategori, skadenca, sasia, cmimi) {
    super(id, emer, kategori);
    this.skadenca = skadenca;
    this.sasia = sasia;
    this.cmimi = cmimi;
  }
}
const shampo1Obj = new Shampo(1, "Wash And Go", "Self care", "19/20/2024", 23, 500);
// const shampo2Obj = new Shampo(2,'Wash And Go','Self care','19/20/2024',23,500)

const barillaObj = new Pasta(2, "Barilla", "Ushqim", "23/12/2024", 14, 600);

//ush 2

class Basketball {
  constructor() {
    this.skuadrat = {
      skuadra1: {
        emri: "Chicago bulls",
        piket: 0,
      },
      skuadra2: {
        emri: "Miami heat",
        piket: 0,
      },
    };
  }
  shenoPiket(emer_skuader, piketEMarra) {
    this.skuadrat[emer_skuader].piket += piketEMarra;
    const fullSquadName = this.skuadrat[emer_skuader].emri;
    console.log(fullSquadName, " sapo shenoi : ", piketEMarra, " pike");
  }
  PerfundoNdeshjen() {
    const piket1 = this.skuadrat.skuadra1.piket;
    const piket2 = this.skuadrat.skuadra2.piket;

    if (piket1 > piket2) {
      console.log("Fitues eshte skuadra e pare");
    } else {
      console.log("Fitues eshte skuadra e dyte");
    }
  }
}
const BasketballGame = new Basketball();
BasketballGame.shenoPiket("skuadra1", 2);
BasketballGame.shenoPiket("skuadra1", 3);
BasketballGame.shenoPiket("skuadra1", 2);
BasketballGame.shenoPiket("skuadra2", 3);

//ush 3
class Restoranti {
  constructor() {
    this.tavolinat = [
      {
        id: 1,
        paguar: false,
        porosite: ["uje", "rizoto", "sallate"],
      },
      {
        id: 2,
        paguar: false,
        porosite: ["kafe", "briosh", "uje"],
      },
    ];
  }
  shtoProdukt(tavolinIndex, porosiaqeDoShtohet) {
    //
    this.tavolinat[tavolinIndex].porosite.push(porosiaqeDoShtohet);

    console.log(`ne tavolinen me index ${tavolinIndex} 
    u shtua dhe nje ${porosiaqeDoShtohet}`);
  }
  paguaj(index) {
    this.tavolinat[index].paguar = !this.tavolinat[index].paguar;
    console.log("tavolina me idenx ", index, " u pagua");
  }
}
const RestorantiObject = new Restoranti();

RestorantiObject.shtoProdukt(0, "kafe");
RestorantiObject.shtoProdukt(0, "kafe");
RestorantiObject.shtoProdukt(0, "kafe");
RestorantiObject.shtoProdukt(0, "kafe");

//ush 4
class KontrolloArray {
  constructor(arrayIMarre) {
    this.arrayProp = arrayIMarre;
  }
  findFirstString() {
    const firstStringFound = this.arrayProp.find((currentItem) => typeof currentItem === "string");
    console.log("stringu i pare u gjet dhe eshte : ", firstStringFound);
    return firstStringFound;
  }
  //   secMethod() {
  //     let stringuPar = this.findFirstString()
  //   }

  findGreatestNumber() {
    let numriMeIMadh = 0;
    this.arrayProp.forEach((currentItem) => {
      if (currentItem > numriMeIMadh) {
        numriMeIMadh = currentItem;
      }
    });
    console.log("numriMeIMadh eshte : ", numriMeIMadh);
    return numriMeIMadh;
  }
}
const CheckArrObj = new KontrolloArray([-1, 10, 2, -23, 0, 4, 50, 33, 99, "test", "6"]);
