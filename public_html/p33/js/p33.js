do {
  class information {
    constructor() {
      this.personalinfo2 = "";
      this.familyinfo2 = "";
      this.workinfo2 = "";
      this.professionalinfo2 = "";
    }
    setPersonal() {
      this.personalinfo2 = personalinfo = {
        name: '',
        lastname: '',
        phonenumber: '',
        address: '',
        nationality: '',
        hometown: '',
        occupation: '',
        email: '',
        civilStatus: ''
      };

      personalinfo.name = prompt('Enter your name');
      personalinfo.lastname = prompt('Enter your lastname');
      personalinfo.phonenumber = prompt('Enter your phone number');
      personalinfo.address = prompt('Enter your address');
      personalinfo.nationality = prompt('Enter your nationality');
      personalinfo.hometown = prompt('Enter your home city');
      personalinfo.occupation = prompt('Enter your occupation');
      personalinfo.email = prompt('Enter your email');
      personalinfo.civilStatus = prompt('Enter your marital status');
    }
    getPersonal() {
      return this.personalinfo2;
    }
    setFamily() {
      this.familyinfo2 = familyinfo = {
        name: '',
        lastname: '',
        phonenumber: '',
        address: '',
        nationality: '',
        hometown: '',
        occupation: '',
        email: '',
        civilStatus: ''
      };

      familyinfo.name = prompt('Enter family name');
      familyinfo.lastname = prompt('Enter family lastname');
      familyinfo.phonenumber = prompt('Enter family phone number');
      familyinfo.address = prompt('Enter family address');
      familyinfo.nationality = prompt('Enter family nationality');
      familyinfo.hometown = prompt('Enter hometown of the relative');
      familyinfo.occupation = prompt('Enter family occupation');
      familyinfo.email = prompt('Enter email from family member');
      familyinfo.civilStatus = prompt('Enter family status');
    }
    getFamily() {
      return this.familyinfo2;
    }
    setWork() {
      this.workinfo2 = workinfo = {
        companysname: '',
        phonenumber: '',
        address: '',
        country: '',
        city: '',
        occupation: '',
        email: '',
        Headofwork: ''
      };

      workinfo.companysname = prompt('Enter your company name');
      workinfo.phonenumber = prompt('Enter company phone number');
      workinfo.address = prompt('Enter company address');
      workinfo.country = prompt('Enter country of company');
      workinfo.city = prompt('Enter company city');
      workinfo.occupation = prompt('Enter your occupation in the company');
      workinfo.email = prompt('Enter company email');
      workinfo.Headofwork = prompt('Enter the name of the head of the company');
    }
    getWork() {
      return this.workinfo2;
    }
    setProfessional() {
      this.professionalinfo2 = professionalinfo = {
        text: ''
      };

      professionalinfo.text = prompt("Write your professional profile description");
    }
    getProfessional() {
      return this.professionalinfo2;
    }
    Print() {
      op = 1;
      console.log('\
            RESUME\n\
      Personal information');
      console.log('Name :' + personalinfo.name);
      console.log('LastName :' + personalinfo.lastname);
      console.log('Phone Number :' + personalinfo.phonenumber);
      console.log('Address :' + personalinfo.address);
      console.log('Nationality :' + personalinfo.nationality);
      console.log('Hometown :' + personalinfo.hometown);
      console.log('Occupation :' + personalinfo.occupation);
      console.log('Email :' + personalinfo.email);
      console.log('Civil Status :' + personalinfo.civilStatus);

      console.log('\n\
      Family reference');
      console.log('Name :' + familyinfo.name);
      console.log('LastName :' + familyinfo.lastname);
      console.log('Phone Number :' + familyinfo.phonenumber);
      console.log('Address :' + familyinfo.address);
      console.log('Nationality :' + familyinfo.nationality);
      console.log('Hometown :' + familyinfo.hometown);
      console.log('Occupation :' + familyinfo.occupation);
      console.log('Email :' + familyinfo.email);
      console.log('Civil Status :' + familyinfo.civilStatus);

      console.log('\n\
      Work reference');
      console.log('Company Name :' + workinfo.companysname);
      console.log('Business phone number :' + workinfo.phonenumber);
      console.log('Address :' + workinfo.address);
      console.log('Company country :' + workinfo.country);
      console.log('Company city :' + workinfo.city);
      console.log('Occupation in the company :' + workinfo.occupation);
      console.log('Company email :' + workinfo.email);
      console.log('Head of the company :' + workinfo.Headofwork);

      console.log('\n\
      Professional profile description');
      console.log('Professional description : ' + professionalinfo.text);
    }
  }
  var personalinfo = '';
  var familyinfo = '';
  var workinfo = '';
  var professionalinfo = '';
  var op = 0;
  var menu = parseInt(prompt("Select an option to enter your data.\n\
        1. Personal information\n\
        2. Family reference\n\
        3. Work reference\n\
        4. Professional profile description\n\
        5. Print Resume\n\
        0. exit the program"));
  let allinformation = new information;
  switch (menu) {
    case 1:
      allinformation.setPersonal();
      break;
    case 2:
      allinformation.setfamily();
      break;
    case 3:
      allinformation.setWork();
      break;
    case 4:
      allinformation.setProfessional();
      break;
    case 5:
      allinformation.Print();
      break;
    case 0:
      op = 1;
      console.log('Bye');
      break;
  }
} while (op === 0)