do {
  class operations {
    constructor() {
      this.suma = 0;
      this.resta = 0;
      this.mul = 0;
      this.div = 0;
    }

    setSuma() {
      let n1 = parseInt(prompt('escribe un numero'));
      let n2 = parseInt(prompt('escribe otro numero'));
      this.suma = n1 + n2;
      console.log('result :' + numbers.getSuma());
    }
    getSuma() {
      return this.suma;
    }
    setResta() {
      let n1 = parseInt(prompt('escribe un numero'));
      let n2 = parseInt(prompt('escribe otro numero'));
      this.resta = n1 - n2;
      console.log('result :' + numbers.getResta());
    }
    getResta() {
      return this.resta;
    }
    setMul() {
      let n1 = parseInt(prompt('escribe un numero'));
      let n2 = parseInt(prompt('escribe otro numero'));
      this.mul = n1 * n2;
      console.log('result :' + numbers.getMul());
    }
    getMul() {
      return this.mul;
    }
    setDiv() {
      let n1 = parseInt(prompt('escribe un numero'));
      let n2 = parseInt(prompt('escribe otro numero'));
      this.div = n1 / n2;
      console.log('result :' + numbers.getDiv());
    }
    getDiv() {
      return this.div;
    }
  }
  var op = 0;
  var menu = parseInt(prompt('\n\
1. sumar\n\
2. restar\n\
3. multi\n\
4. dividir\n\
0. salir'));


  let numbers = new operations();

  switch (menu) {
    case 1:
      numbers.setSuma();
      break;
    case 2:
      numbers.setResta();
      break;
    case 3:
      numbers.setMul();
      break;
    case 4:
      numbers.setDiv();
      break;
    case 0:
      op = 1;
      break;
  }
} while (op === 0);
