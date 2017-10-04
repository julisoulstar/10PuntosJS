function math() {
  var date1 = new Date($("#date1").val());
  var date2 = new Date($("#date2").val());
  if (date2.getTime() > date1.getTime()) {
    var diference = date2.getTime() - date1.getTime();
  } else {
    var diference = date1.getTime() - date2.getTime();
  }
  var years = parseInt(diference / (1000 * 60 * 60 * (24 * 364)));
  var months = parseInt(diference / (1000 * 60 * 60 * (24 * 30.4167)));
  var days = parseInt(diference / (1000 * 60 * 60 * 24));
  $("#text").text("difference in years : " + years + " difference in months : " + months + " difference in days : " + days);
}