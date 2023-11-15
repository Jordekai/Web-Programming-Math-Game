//Function used to calculate age in form(Task 1)
function calculateAge() {
  //Getting the Date based on input by user
  var dobInput = document.getElementById("dob");
  var dobValue = dobInput.value;

  //Calculating Age
  var dobDate = new Date(dobValue);
  var today = new Date();
  var age = today.getFullYear() - dobDate.getFullYear();

  //Determining if birthday occured in current year to assist in calculation
  if (
    today.getMonth() < dobDate.getMonth() ||
    (today.getMonth() === dobDate.getMonth() &&
      today.getDate() < dobDate.getDate())
  ) {
    age--;
  }

  //Displaying Age
  var ageInput = document.getElementById("age");
  ageInput.value = age;

  //Checking if age is between 8 and 12 inclusive
  var ageIsValid = age >= 8 && age <= 12;

  //Displaying error and take action age is not valid
  var errorMessage = document.getElementById("error-message");
  if(!ageIsValid) {
    errorMessage.innerHTML = "Age must be between 8 and 12 inclusive.";
  } else {
    errorMessage.innerHTML = "";
  }
}
