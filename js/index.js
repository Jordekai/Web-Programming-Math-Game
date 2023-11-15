function playFunction() {
  var play = document.getElementById("playButton");
  
  alert("Register and click start!");
}

//Task 1
//Function used to calculate age in form
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
  if (!ageIsValid) {
    ageInput.value = "Invalid Date of Birth";
    ageInput.style.color = "red";
  } else {
    ageInput.style.color = null;
  }
}

//Task 2
var PlayerRegistrationData = [];

function Register() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;

  //Validating all entried
  if (
    fname === "" ||
    lname === "" ||
    dob === "" ||
    age === "" ||
    gender === ""
  ) {
    alert("Complete all fields.");
    return false;
  }

  var playerData = {
    FirstName: fname,
    LastName: lname,
    DateOfBirth: dob,
    Age: age,
    Gender: gender,
  };

  PlayerRegistrationData.push(playerData);

  localStorage.setItem(
    "PlayerRegistrationData",
    JSON.stringify(PlayerRegistrationData)
  );

  alert("Registration successful!");

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";

  return false;
}

//Task 3
function registerAndDisableFields() {
  var registrationResult = Register();

  document.getElementById("fname").disabled = true;
  document.getElementById("lname").disabled = true;
  document.getElementById("dob").disabled = true;
  document.getElementById("age").disabled = true;
  document.getElementById("gender").disabled = true;
  document.querySelector("#registrationForm button").disabled = true;

  document.getElementById("startButton").disabled = false;
  document.getElementById("endButton").disabled = false;

  return registrationResult;
}

function startFunction() {
  alert("Start button clicked! :)");
}

function endFunction() {
  alert("End button clicked! :)");
}
