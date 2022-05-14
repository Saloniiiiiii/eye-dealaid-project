var SpeechRecognition = window.webkitSpeechRecognition;
var speech = new SpeechSynthesisUtterance();

var recognition = new SpeechRecognition();
speech.lang = "en-US";

speech.volume = 1;
speech.rate = 0.89;
speech.pitch = 1;
recognition.continuous = true;

window.addEventListener("click", () => {
  recognition.start();
  speech.text = " ......................  Welcome to eye deal aid";
  window.speechSynthesis.speak(speech);
  setTimeout(loginpagedata, 5000);
});
/*
function overall() {
  recognition.start();
  setTimeout(instruct, 1000);
  function instruct() {
    speech.text = "Do you want to read the instructions ";
    window.speechSynthesis.speak(speech);

    let i = "";
    recognition.onresult = function (event) {
      console.log("instructions  ");
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      i += transcript;

      if (i.includes("yes")) {
        speech.rate = 0.8;
        speech.text = document.getElementById("textbox").value;
        window.speechSynthesis.speak(speech);

        setTimeout(loginpage, 16500);
      } else {
        setTimeout(loginpage, 3000);
      }
    };
  }*/
function loginpagedata() {
  speech.text = "To log in to your G mail acount say Log in ";
  window.speechSynthesis.speak(speech);
  let commandlog = "";
  recognition.onresult = function (event) {
    console.log("logging in ");
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    commandlog += transcript;
    if (commandlog.includes("login")) {
      console.log("logging in ");
      document.getElementById("lbtn").click();
    }
  };
}
