function getName(){
  var name = document.getElementById("name").value;
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var akanMale = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
  var akanFemale = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
  var dd = parseInt(document.getElementById("date").value);
  var cc = parseInt(document.getElementById("year").value.slice(0,2));
  var yy = parseInt(document.getElementById("year").value.slice(2,4));
  var mm = parseInt(document.getElementById("month").value);
  var day = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
  var akanDay = days[Math.floor(day)];
  var gender = parseInt(document.getElementById("gender").value);
  