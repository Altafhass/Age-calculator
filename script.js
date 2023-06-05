function calculateAge() {
  var birthYearInput = document.getElementById("birthYear");
  var birthYear = parseInt(birthYearInput.value);

  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  finalage.value = age;

  // alert("Your age is: " + age);
}
