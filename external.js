function toggle_text(choice1) {
  var span = document.getElementById(choice1);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonChoice1").style.display= "none";
    document.getElementById("buttonChoice2").style.display= "none";
    document.getElementById("buttonChoice11").style.display= "inline";
    document.getElementById("buttonChoice12").style.display= "inline";
  }
}

function toggle_text2(choice2) {
  var span = document.getElementById(choice2);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonChoice1").style.display= "none";
    document.getElementById("buttonChoice2").style.display= "none";
    document.getElementById("buttonChoice21").style.display= "inline";
    document.getElementById("buttonChoice22").style.display= "inline";
  }
}
