var result1 = parseInt(50) ** parseInt(10);
var result2 = parseInt(10) ** parseInt(50);
var result3 = parseInt(50) * parseInt(10);
var result4 = parseInt(50) / parseInt(10);
var result5 = parseInt(10) / parseInt(50);
var result6 = parseInt(50) % parseInt(10);
var result7 = parseInt(50) - parseInt(10);
var result8 = parseInt(50) + parseInt(10);

$('#text').text("50 to 10 is: " + result1 + "\n\
10 to 50 is: " + result2 + "\n\
The multiplication between 50 and 10 is: " + result3 + "\n\
The division between 50 and 10 is: " + result4 + "\n\
The division between 10 and 50 is: " + result5 + "\n\
The division module between 50 and 10 is: " + result6 + "\n\
The subtraction between 50 and 10 is: " + result7 + "\n\
The sum between 50 and 10 is: " + result8 + ".");
