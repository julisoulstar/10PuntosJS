class Number {
  constructor() {
    this.array = [];
    this.pair = [];
    this.sumpair = 0;
    this.pairWHILE = [];
    this.sumpairWHILE = 0;
    this.pairFOR = [];
    this.sumpairFOR = 0;
    this.averagepair = 0;
    this.prime = [];
    this.sumprime = 0;
    this.primeWHILE = [];
    this.sumprimeWHILE = 0;
    this.primeFOR = [];
    this.sumprimeFOR = 0;
    this.averageprime = 0;
  }
  setArray(array) {
    this.array = array;
  }
  getArray() {
    return this.array;
  }
  //-pares con do while-------------------------------------------------
  setPairsDoWhile(array) {
    var accountanteven = 0;
    var i = 0;
    do {
      if (array[i] % 2 === 0) {
        this.pair[accountanteven] = array[i];
        accountanteven++;
      }
      i++;
    } while (i <= array.length);
  }
  getPairsDoWhile() {
    return this.pair;
  }
  setSumEvenDoWhile(array) {
    i = 0;
    do {
      this.sumpair = this.sumpair + array[i];
      i++;
    } while (i < array.length)
  }
  getSumEvenDoWhile() {
    return this.sumpair;
  }

  setaveragepair(array) {
    this.averagepair = array / this.pair.length;
  }
  getaveragepair() {
    return this.averagepair;
  }
  //-pares con while-------------------------------------------------
  setPairsWhile(array) {
    var i = 0;
    var accountanteven = 0;
    while (i <= array.length) {
      if (array[i] % 2 === 0) {
        this.pairWHILE[accountanteven] = array[i];
        accountanteven++;
      }
      i++;
    }
  }
  getPairsWhile() {
    return this.pairWHILE;
  }
  setSumPairWhile(array) {
    var i = 0;
    while (i < array.length) {
      this.sumpairWHILE = this.sumpairWHILE + array[i];
      i++;
    }
  }
  getSumPairWhile() {
    return this.sumpairWHILE;
  }
  //-pares con for-------------------------------------------------
  setPairsFor(array) {
    var accountanteven = 0;
    for (i = 0; i <= array.length; i++) {
      if (array[i] % 2 === 0) {
        this.pairFOR[accountanteven] = array[i];
        accountanteven++;
      }
    }
  }
  getPairsFor() {
    return this.pairFOR;
  }
  setSumPairFor(array) {
    for (i = 0; i < array.length; i++) {
      this.sumpairFOR = this.sumpairFOR + array[i];
    }
  }
  getSumPairFor() {
    return this.sumpairFOR;
  }
//-primos con do while-------------------------------------------------

  setPrimeDoWhile(array) {
    var accountantprime = 0;
    var j = 0;
    do {
      var c = 1;
      var accountant = 0;
      do {
        if (array[j] % c === 0) {
          accountant++;
        }
        c++;
      } while (c <= array[j]);
      if (accountant === 2) {
        this.prime[accountantprime] = array[j];
        accountantprime++;
      }
      j++;
    } while (j < array.length);
  }
  getPrimeDoWhile() {
    return this.prime;
  }

  setSumPrimeDoWhile(array) {
    var i = 0;
    do {
      this.sumprime = this.sumprime + array[i];
      i++;
    } while (i < array.length)
  }
  getSumPrimeDoWhile() {
    return this.sumprime;
  }

  setaverageprime(array) {
    this.averageprime = array / this.prime.length;
  }
  getaverageprime() {
    return this.averageprime;
  }

//-primos con WHILE-------------------------------------------------

  setPrimeWhile(array) {
    var accountantprime = 0;
    var j = 0;
    while (j <= array.length) {
      var c = 0;
      var accountant = 0;
      while (c <= array[j]) {
        if (array[j] % c === 0) {
          accountant++;
        }
        c++;
      }
      if (accountant === 2) {
        this.primeWHILE[accountantprime] = array[j];
        accountantprime++;
      }
      j++;
      accountant = 0;
    }
  }
  getPrimeWhile() {
    return this.primeWHILE;
  }
  setSumPrimeWhile(array) {
    var i = 0;
    while (i < array.length) {
      this.sumprimeWHILE = this.sumprimeWHILE + array[i];
      i++;
    }
  }
  getSumPrimeWhile() {
    return this.sumprimeWHILE;
  }

//-encontrar primos con for-------------------------------------------------

  setPrimeFor(array) {
    var accountant = 0;
    var accountantprime = 0;
    for (var j = 0; j <= array.length; j++) {
      for (var c = 0; c <= array[j]; c++) {
        if (array[j] % c === 0) {
          accountant++;
        }
      }

      if (accountant === 2) {
        this.primeFOR[accountantprime] = array[j];
        accountantprime++;
      }
      accountant = 0;
    }
  }
  getPrimeFor() {
    return this.primeFOR;
  }
  setSumPrimeFor(array) {
    for (i = 0; i < array.length; i++) {
      this.sumprimeFOR = this.sumprimeFOR + array[i];
    }
  }
  getSumPrimeFor() {
    return this.sumprimeFOR;
  }

}
// Definir arreglo
let size = parseInt(prompt("Defines the size of the array"));
var numbers = [];
var i = 0;
while (i <= size - 1) {
  numbers[i] = parseInt(prompt("Enter the number:"));
  i++;
}

// intanciar la clase
let Numbers = new Number();

Numbers.setArray(numbers);
console.log("Numbers Entered : ");
console.log(Numbers.getArray());
console.log('--------------------------------------');
//-pares con do while-------------------------------------------------
Numbers.setPairsDoWhile(numbers);
console.log("Even numbers typed (DO WHILE): ");
console.log(Numbers.getPairsDoWhile());

Numbers.setSumEvenDoWhile(Numbers.getPairsDoWhile());
console.log("The sum of the even numbers is: ");
console.log(Numbers.getSumEvenDoWhile());

console.log("The average of even numbers is: ");
Numbers.setaveragepair(Numbers.getSumEvenDoWhile());
console.log(Numbers.getaveragepair());
console.log('--------------------------------------');
//-pares con while-------------------------------------------------
Numbers.setPairsWhile(numbers);
console.log("Even numbers typed (WHILE): ");
console.log(Numbers.getPairsWhile());

Numbers.setSumPairWhile(Numbers.getPairsWhile());
console.log("The sum of the even numbers is: ");
console.log(Numbers.getSumPairWhile());

console.log("The average of even numbers is: ");
Numbers.setaveragepair(Numbers.getSumEvenDoWhile());
console.log(Numbers.getaveragepair());
console.log('--------------------------------------');
//-pares con for-------------------------------------------------
Numbers.setPairsFor(numbers);
console.log("Even numbers typed (FOR): ");
console.log(Numbers.getPairsFor());

Numbers.setSumPairFor(Numbers.getPairsFor());
console.log("The sum of the even numbers is: ");
console.log(Numbers.getSumPairFor());

console.log("The average of even numbers is: ");
Numbers.setaveragepair(Numbers.getSumEvenDoWhile());
console.log(Numbers.getaveragepair());
console.log('--------------------------------------');

//-primos con do while-------------------------------------------------
console.log("Prime numbers typed (DO WHILE): ");
Numbers.setPrimeDoWhile(numbers);
console.log(Numbers.getPrimeDoWhile());

console.log("The sum of the prime numbers is: ");
Numbers.setSumPrimeDoWhile(Numbers.getPrimeDoWhile());
console.log(Numbers.getSumPrimeDoWhile());

console.log("The average prime numbers is: ");
Numbers.setaverageprime(Numbers.getSumPrimeDoWhile());
console.log(Numbers.getaverageprime());
console.log('--------------------------------------');
//-primos con WHILE-------------------------------------------------
console.log("Prime numbers typed (WHILE): ");
Numbers.setPrimeWhile(numbers);
console.log(Numbers.getPrimeWhile());

console.log("The sum of the prime numbers is: ");
Numbers.setSumPrimeWhile(Numbers.getPrimeWhile());
console.log(Numbers.getSumPrimeWhile());

console.log("The average prime numbers is: ");
Numbers.setaverageprime(Numbers.getSumPrimeDoWhile());
console.log(Numbers.getaverageprime());
console.log('--------------------------------------');
//-encontrar primos con for-------------------------------------------------
console.log("Prime numbers typed (FOR): ");
Numbers.setPrimeFor(numbers);
console.log(Numbers.getPrimeFor());

console.log("The sum of the prime numbers is: ");
Numbers.setSumPrimeFor(Numbers.getPrimeFor());
console.log(Numbers.getSumPrimeFor());

console.log("The average prime numbers is: ");
Numbers.setaverageprime(Numbers.getSumPrimeDoWhile());
console.log(Numbers.getaverageprime());
console.log('--------------------------------------');