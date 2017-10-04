do {
  class elements {
    constructor() {
      this.array = [];
    }
    setarray(array) {
      this.array = array;
    }
    getarray() {
      return this.array;
    }
    register() {
      var Name = prompt('Type element name');
      var Code = parseInt(prompt('Type element code'));
      var data = {
        Name,
        Code
      };
      this.array = JSON.parse(localStorage.getItem('Inventory'));
      if (this.array === null) {
        this.array = [
          data
        ];
      } else {
        this.array.push(data);
      }
      localStorage.setItem('Inventory', JSON.stringify(this.array));
    }
    searchname() {
      var Name2 = prompt('Type the name of the item you want to search for');
      var flag = 0;
      this.array = JSON.parse(localStorage.getItem('Inventory'));
      for (let contact of this.array) {
        if (contact.Name === Name2) {
          flag++;
          if (flag === 1) {
            console.log('The item has been found, Name : ' + contact.Name + ' - Code : ' + contact.Code);
          }
        }
      }
      console.log(flag === 0 ? 'The item has NOT been found' : '');
    }
    searchcode() {
      var code2 = parseInt(prompt('Write the code of the item you want to search'));
      var flag = 0;
      this.array = JSON.parse(localStorage.getItem('Inventory'));
      for (let contact of this.array) {
        if (contact.Code === parseInt(code2)) {
          flag++;
          if (flag === 1) {
            console.log('The item has been found, Name : ' + contact.Name + ' - Code : ' + contact.Code);
          }
        }
      }
      console.log(flag === 0 ? 'The item has NOT been found' : '');
    }
    print() {
      console.log(JSON.parse(localStorage.getItem('Inventory')));
    }
  }
  var op = 0;
  var menu = parseInt(prompt("        1. Register item\n\
        2. Find item by name\n\
        3. Search item by code\n\
        4. Print registered items\n\
        0. exit the program"));
  let items = new elements;
  switch (menu) {
    case 1:
      items.register();
      break;
    case 2:
      items.searchname();
      break;
    case 3:
      items.searchcode();
      break;
    case 4:
      items.print();
      break;
    case 0:
      op = 1;
      console.log('Bye');
      break;
  }
} while (op === 0)