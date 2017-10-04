class Number {
  constructor() {
    this.array = [];
    this.pair = [];
    this.prime = [];
  }
  setArray(array) {
    this.array = array;
  }
  getArray() {
    return this.array;
  }
  setPairs(array) {
    this.pair = array = [];
    var accountanteven = 0;
    var i = 0;
    do {
      if (arreglo[i] % 2 === 0) {
        array[accountanteven] = arreglo[i];
        accountanteven++;
      }
      i++;
    } while (i <= arreglo.length);
  }
  getPairs() {
    return this.pair;
  }
  setPrime(array) {
    this.prime = array = [];
    for (var num of arreglo) {
      var accountant = 0;
      for (var c = 1; c <= num; c++) {
        num % c === 0 ? accountant++ : accountant;
      }
      accountant === 2 ? array.push(num) : array;
    }
  }
  getPrime() {
    return this.prime;
  }
}
// Definir arreglo
let size = parseInt(prompt("Define el tamaño del arreglo"));
var arreglo = [];
var i = 0;
while (i <= size - 1) {
  arreglo[i] = parseInt(prompt("Enter the number:"));
  i++;
}

// intanciar la clase
let Numbers = new Number();

Numbers.setArray(arreglo);
console.log(Numbers.getArray());

Numbers.setPairs(Numbers.getArray());
console.log(Numbers.getPairs());

Numbers.setPrime(Numbers.getArray());
console.log(Numbers.getPrime());