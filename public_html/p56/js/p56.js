function math() {
  var minimum = $("#minimum").val();
  var salary = $("#salary").val();
  var days = $("#days").val();
  var help = 80000;
  var salarydays = parseInt(salary) / 30 * parseInt(days);
  if (days > 30) {
    $("#warning").text("30 days is the maximum number of working days per month");
  } else if (days <= 30) {
    $("#warning").text("");
  }
  var save = $("#save").val();
  if (save === "localStorage") {
    var validate = JSON.parse(localStorage.getItem('validate'));
    validate = "true";
    localStorage.setItem('validate', JSON.stringify(validate));
    if (salary <= (minimum * 2)) {
      var retentionsource = "No";
      var transportation = "Yes : " + help;
      var totalsalary = salarydays + help;
      var data = {
        minimum,
        salary,
        days,
        salarydays,
        transportation,
        help,
        retentionsource,
        totalsalary

      };
      var Information = JSON.parse(localStorage.getItem('Information'));
      if (Information === null) {
        var Information = [
          data
        ];
      } else {
        Information.push(data);
      }
      localStorage.setItem('Information', JSON.stringify(Information));
    } else if (salary > (minimum * 2) && salary < (minimum * 4)) {
      var retentionsource = "No";
      var transportation = "No";
      var totalsalary = salarydays;
      var data = {
        minimum,
        salary,
        days,
        salarydays,
        transportation,
        help,
        retentionsource,
        totalsalary

      };
      var Information = JSON.parse(localStorage.getItem('Information'));
      if (Information === null) {
        var Information = [
          data
        ];
      } else {
        Information.push(data);
      }
      localStorage.setItem('Information', JSON.stringify(Information));
    } else if (salary >= (minimum * 4)) {
      var retentionPercentage = 10;
      var retention = salarydays * parseInt(retentionPercentage) / 100;
      var totalsalary = salarydays - retention;
      var retentionsource = "Yes, 10 % = " + retention;
      var transportation = "No";
      var data = {
        minimum,
        salary,
        days,
        salarydays,
        transportation,
        help,
        retentionsource,
        totalsalary

      };
      var Information = JSON.parse(localStorage.getItem('Information'));
      if (Information === null) {
        var Information = [
          data
        ];
      } else {
        Information.push(data);
      }
      localStorage.setItem('Information', JSON.stringify(Information));
    }
  } else if (save === "sessionStorage") {
    var validate = JSON.parse(localStorage.getItem('validate'));
    validate = "false";
    localStorage.setItem('validate', JSON.stringify(validate));
    if (salary <= (minimum * 2)) {
      var retentionsource = "No";
      var transportation = "Yes : " + help;
      var totalsalary = salarydays + help;
      var data = {
        minimum,
        salary,
        days,
        salarydays,
        transportation,
        help,
        retentionsource,
        totalsalary

      };
      var information = JSON.parse(sessionStorage.getItem('information'));
      if (information === null) {
        var information = [
          data
        ];
      } else {
        information.push(data);
      }
      sessionStorage.setItem('information', JSON.stringify(information));
    } else if (salary > (minimum * 2) && salary < (minimum * 4)) {
      var retentionsource = "No";
      var transportation = "No";
      var totalsalary = salarydays;
      var data = {
        minimum,
        salary,
        days,
        salarydays,
        transportation,
        help,
        retentionsource,
        totalsalary

      };
      var information = JSON.parse(sessionStorage.getItem('information'));
      if (information === null) {
        var information = [
          data
        ];
      } else {
        information.push(data);
      }
      sessionStorage.setItem('information', JSON.stringify(information));
    } else if (salary >= (minimum * 4)) {
      var retentionPercentage = 10;
      var retention = salarydays * parseInt(retentionPercentage) / 100;
      var totalsalary = salarydays - retention;
      var retentionsource = "Yes, 10 % = " + retention;
      var transportation = "No";
      var data = {
        minimum,
        salary,
        days,
        salarydays,
        transportation,
        help,
        retentionsource,
        totalsalary

      };
      var information = JSON.parse(sessionStorage.getItem('information'));
      if (information === null) {
        var information = [
          data
        ];
      } else {
        information.push(data);
      }
      sessionStorage.setItem('information', JSON.stringify(information));
    }
  }
}
var validate = JSON.parse(localStorage.getItem('validate'));
if (validate === "true") {
  var Information = JSON.parse(localStorage.getItem('Information'));
  for (let contact of Information) {
    $("#salarydays").text(contact.salarydays);
    $("#help").text(contact.transportation);
    $("#retention").text(contact.retentionsource);
    $("#totalsalary").text(contact.totalsalary);
  }
} else if (validate === "false") {
  var information = JSON.parse(sessionStorage.getItem('information'));
  for (let contact of information) {
    $("#salarydays").text(contact.salarydays);
    $("#help").text(contact.transportation);
    $("#retention").text(contact.retentionsource);
    $("#totalsalary").text(contact.totalsalary);
  }
}