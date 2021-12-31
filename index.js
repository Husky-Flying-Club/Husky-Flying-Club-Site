function menuFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("menuCheckbox");
  // Get the output text
  var social = document.getElementById("social");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    social.style.display = "flex";
  } else {
    social.style.display = "none";
  }
}