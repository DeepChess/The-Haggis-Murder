function toggle_text(choice1) {
  var span = document.getElementById(choice1);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonChoice1").style.display= "none";
    document.getElementById("buttonChoice2").style.display= "none";
    document.getElementById("file").value="10";
    document.getElementById("textProgress").innerHTML="10%";
    document.getElementById("crime_scene").style.display="none";
    document.getElementById("detective_man").style.display="block";
    document.getElementById("buttonNext1").style.display= "inline";

  }
}

function toggle_text2(choice2) {
  var span = document.getElementById(choice2);
  if(span.style.display == "none") {
    document.getElementById("buttonChoice1").style.display= "none";
    document.getElementById("buttonChoice2").style.display= "none";
    document.getElementById("buttonChoice11").style.display= "none";
    document.getElementById("buttonChoice12").style.display= "none";
    document.getElementById("buttonChoice111").style.display= "none";
    document.getElementById("buttonChoice112").style.display= "none";
    document.getElementById("buttonChoice1121").style.display= "none";
    document.getElementById("buttonChoice1122").style.display= "none";
    document.getElementById("audio2").play();
    document.getElementById("car").style.display="block";
    document.getElementById("suspect").style.display="none";
    document.getElementById("win").style.display="none";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("driver").style.display="none";
    document.getElementById("sister").style.display="none";
    document.getElementById("cartel").style.display="none";
    document.getElementById("butcher").style.display="none";
    document.getElementById("medical").style.display="none";
    document.getElementById("phone").style.display="none";
    document.getElementById("crime_scene").style.display="none";
    document.getElementById("homePage").style.display="inline";
  }
}

function toggle_text11(choice11) {
  var span = document.getElementById(choice11);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonChoice11").style.display= "none";
    document.getElementById("buttonChoice12").style.display= "none";
    document.getElementById("file").value="30";
    document.getElementById("textProgress").innerHTML="30%";
    document.getElementById("phone").style.display="none";
    document.getElementById("audio1").pause();
    document.getElementById("medical").style.display="block";
    document.getElementById("buttonNext4").style.display="inline";

  }
}

function toggle_text112(choice112) {
  var span = document.getElementById(choice112);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonChoice111").style.display= "none";
    document.getElementById("buttonChoice112").style.display= "none";
    document.getElementById("detective_man").style.display="block";
    document.getElementById("medical").style.display="none";
    document.getElementById("buttonNext6").style.display="inline";
    document.getElementById("file").value="50";
    document.getElementById("textProgress").innerHTML="50%";

  }
}


function toggle_text1121(choice1121) {
  var span = document.getElementById(choice1121);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonChoice1121").style.display= "none";
    document.getElementById("buttonChoice1122").style.display= "none";
    document.getElementById("phone").style.display="none";
    document.getElementById("audio1").pause();
    document.getElementById("medical").style.display="block";
    document.getElementById("buttonNext10").style.display="inline";
    document.getElementById("file").value="70";
    document.getElementById("textProgress").innerHTML="70%";
  }
}

function toggle_text11211(choice11211) {
  var span = document.getElementById(choice11211);
  if(span.style.display == "none") {
    document.getElementById("audio2").play();
    document.getElementById("car").style.display="block";
    document.getElementById("sister").style.display="none";
    document.getElementById("buttonChoice11211").style.display= "none";
    document.getElementById("buttonChoice11212").style.display= "none";
    document.getElementById("file").value="90";
    document.getElementById("textProgress").innerHTML="90%";
  }
}

function toggle_text11212(choice11212) {
  var span = document.getElementById(choice11212);
  if(span.style.display == "none") {
    document.getElementById("audio2").play();
    document.getElementById("car").style.display="block";
    document.getElementById("sister").style.display="none";
    document.getElementById("buttonChoice11211").style.display= "none";
    document.getElementById("buttonChoice11212").style.display= "none";

  }
}



function toggle_text_next1(next1) {
  var span = document.getElementById(next1);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext1").style.display= "none";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("butcher").style.display="block";
    document.getElementById("buttonNext2").style.display= "inline";
  }
}

function toggle_text_next2(next2) {
  var span = document.getElementById(next2);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext2").style.display= "none";
    document.getElementById("butcher").style.display="none";
    document.getElementById("detective_man").style.display="block";
    document.getElementById("buttonNext3").style.display= "inline";
  }
}

function toggle_text_next3(next3) {
  var span = document.getElementById(next3);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext3").style.display= "none";
    document.getElementById("butcher").style.display="block";
    document.getElementById("detective_man").style.display="none";
  }
}

function toggle_text_next4(next4) {
var span = document.getElementById(next4);
  if(span.style.display == "none") {
    document.getElementById("audio2").play();
    document.getElementById("buttonNext4").style.display= "none";
    document.getElementById("car").style.display="block";
    document.getElementById("medical").style.display="none";
  }
}

function toggle_text_next5(next5) {
  var span = document.getElementById(next5);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext5").style.display= "none";
    document.getElementById("medical").style.display="block";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("buttonChoice111").style.display= "inline";
    document.getElementById("buttonChoice112").style.display= "inline";
  }
}

function toggle_text_next6(next6) {
  var span = document.getElementById(next6);
  if(span.style.display == "none") {
    document.getElementById("audio2").play();
    document.getElementById("buttonNext6").style.display= "none";
    document.getElementById("car").style.display="block";
    document.getElementById("detective_man").style.display="none";
  }
}

function toggle_text_next7(next7) {
  var span = document.getElementById(next7);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext7").style.display= "none";
    document.getElementById("driver").style.display="block";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("buttonNext8").style.display= "inline";
  }
}

function toggle_text_next8(next8) {
  var span = document.getElementById(next8);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext8").style.display= "none";
    document.getElementById("detective_man").style.display="block";
    document.getElementById("driver").style.display="none";
    document.getElementById("buttonNext9").style.display= "inline";
  }
}

function toggle_text_next9(next9) {
  var span = document.getElementById(next9);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext9").style.display= "none";
    document.getElementById("driver").style.display="block";
    document.getElementById("detective_man").style.display="none";
  }
}

function toggle_text_next10(next10) {
var span = document.getElementById(next10);
  if(span.style.display == "none") {
    document.getElementById("audio2").play();
    document.getElementById("buttonNext10").style.display= "none";
    document.getElementById("car").style.display="block";
    document.getElementById("medical").style.display="none";
  }
}

function toggle_text_next11(next11) {
  var span = document.getElementById(next11);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext11").style.display= "none";
    document.getElementById("sister").style.display="block";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("buttonNext12").style.display= "block";
  }
}

function toggle_text_next12(next12) {
  var span = document.getElementById(next12);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext12").style.display= "none";
    document.getElementById("sister").style.display="none";
    document.getElementById("detective_man").style.display="block";
    document.getElementById("buttonNext13").style.display= "block";
  }
}

function toggle_text_next13(next13) {
  var span = document.getElementById(next13);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext13").style.display= "none";
    document.getElementById("sister").style.display="block";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("buttonNext14").style.display= "block";
  }
}

function toggle_text_next14(next14) {
  var span = document.getElementById(next14);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext14").style.display= "none";
    document.getElementById("sister").style.display="none";
    document.getElementById("detective_man").style.display="block";
    document.getElementById("buttonNext15").style.display= "block";
  }
}

function toggle_text_next15(next15) {
  var span = document.getElementById(next15);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext15").style.display= "none";
    document.getElementById("sister").style.display="block";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("buttonChoice11211").style.display= "inline";
    document.getElementById("buttonChoice11212").style.display= "inline";
  }
}

function toggle_text_next16(next16) {
  var span = document.getElementById(next16);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext16").style.display= "none";
    document.getElementById("cartel").style.display="block";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("buttonNext17").style.display= "block";
  }
}

function toggle_text_next17(next17) {
  var span = document.getElementById(next17);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext17").style.display= "none";
    document.getElementById("cartel").style.display="none";
    document.getElementById("detective_man").style.display="block";
    document.getElementById("buttonNext18").style.display= "block";
  }
}

function toggle_text_next18(next18) {
  var span = document.getElementById(next18);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext18").style.display= "none";
    document.getElementById("cartel").style.display="block";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("buttonNext20").style.display= "block";
  }
}

function toggle_text_next19(next19) {
  var span = document.getElementById(next19);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext19").style.display= "none";
    document.getElementById("detective_man").style.display="none";
    document.getElementById("medical").style.display="block";
  }
}

function toggle_text_next20(next20) {
  var span = document.getElementById(next20);
  if(span.style.display == "none") {
    span.style.display = "inline";
    document.getElementById("buttonNext20").style.display= "none";
    document.getElementById("cartel").style.display="none";
    document.getElementById("suspect").style.display="block";
    document.getElementById("answer").style.display="block";
  }
}




function timer1(){
  document.getElementById("audio1").play();
  document.getElementById("phone").style.display="block";
  document.getElementById("butcher").style.display="none";
  document.getElementById("buttonChoice11").style.display= "inline";
  document.getElementById("buttonChoice12").style.display= "inline";
}

function timer2(){
  document.getElementById("audio2").pause();
  document.getElementById("detective_man").style.display="block";
  document.getElementById("car").style.display="none";
  document.getElementById("next4").style.display="inline"
  document.getElementById("buttonNext5").style.display= "inline";
}

function timer3(){
  document.getElementById("audio2").pause();
  document.getElementById("detective_man").style.display="block";
  document.getElementById("car").style.display="none";
  document.getElementById("next6").style.display="inline"
  document.getElementById("buttonNext7").style.display= "inline";
}

function timer4(){
  document.getElementById("audio1").play();
  document.getElementById("phone").style.display="block";
  document.getElementById("driver").style.display="none";
  document.getElementById("buttonChoice1121").style.display= "inline";
  document.getElementById("buttonChoice1122").style.display= "inline";
}

function timer5(){
  document.getElementById("audio2").pause();
  document.getElementById("detective_man").style.display="block";
  document.getElementById("car").style.display="none";
  document.getElementById("next10").style.display="inline"
  document.getElementById("buttonNext11").style.display= "inline";
}

function timer6(){
  document.getElementById("audio2").pause();
  document.getElementById("detective_man").style.display="block";
  document.getElementById("car").style.display="none";
  document.getElementById("choice11211").style.display="inline"
  document.getElementById("buttonNext16").style.display= "inline";
}

function timer7(){
  document.getElementById("audio2").pause();
  document.getElementById("detective_man").style.display="block";
  document.getElementById("car").style.display="none";
  document.getElementById("choice11212").style.display="inline"
  document.getElementById("buttonNext19").style.display= "inline";
}

function timer8(){
  document.getElementById("medical").style.display="none";
  document.getElementById("over").style.display="flex";
}

function timer10(){
    document.getElementById("audio2").pause();
    document.getElementById("audio3").play();
}

function timer11(){
    document.getElementById("audio3").pause();
    document.getElementById("audio4").play();
    document.getElementById("car").style.display="none";
    document.getElementById("boum").style.display="block";
}

function timer12(){
    document.getElementById("audio4").pause();
    document.getElementById("boum").style.display="none";
    document.getElementById("over").style.display="flex";
    document.getElementById("choice2").style.display="inline";
    document.getElementById("homePage").style.display="inline";
}

function getValue() {
var input = document.getElementById("text_answer").value;
if(input=="Logan"){
  document.getElementById("win").style.display="flex";
  document.getElementById("suspect").style.display="none";
  document.getElementById("answer").style.display="none";
  document.getElementById("homePage").style.display="inline";
}
else{
  document.getElementById("over").style.display="flex";
  document.getElementById("answer").style.display="none";
  document.getElementById("suspect").style.display="none";
  document.getElementById("car").style.display="none";
  document.getElementById("win").style.display="none";
  document.getElementById("detective_man").style.display="none";
  document.getElementById("driver").style.display="none";
  document.getElementById("sister").style.display="none";
  document.getElementById("cartel").style.display="none";
  document.getElementById("butcher").style.display="none";
  document.getElementById("medical").style.display="none";
  document.getElementById("phone").style.display="none";
  document.getElementById("crime_scene").style.display="none";
  document.getElementById("homePage").style.display="inline";
}
}
