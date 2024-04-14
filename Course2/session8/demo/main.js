// Classes

class KlasaNr1 {
  constructor(stringu, numri, objektiBosh) {
    this.prop1 = numri;
    this.prop2 = "klajdiTest";
  }

  method1() {}
  method2() {}
}

class KlasaNr2 extends KlasaNr1 {
  constructor(stringu, numri, objektiBosh, arrMe3Nr) {
    super(stringu, numri, objektiBosh);
    this.prop3 = arrMe3Nr;
  }
}

const KlasaNr1Obj = new KlasaNr1("param1", 2323, {});
const KlasaNr2Obj = new KlasaNr2("param1", 2323, {}, [1, 2, 3]);
