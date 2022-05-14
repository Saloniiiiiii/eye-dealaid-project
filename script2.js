//speechm can be replaced with speech ... check "login to ur gmail account"
function menufunc() {
  var SpeechRecognition = window.webkitSpeechRecognition;
  var speechm = new SpeechSynthesisUtterance();
  var recognition = new SpeechRecognition();
  speechm.lang = "en-US";

  speechm.volume = 1;
  speechm.rate = 1;
  speechm.pitch = 1;
  recognition.continuous = true;
  menu = "";
  speechm.text =
    "What do you want to do ? Compose an email or read emails from your inbox ";
  window.speechSynthesis.speak(speechm);
  recognition.start();
  recognition.onresult = function (event) {
    var current = event.resultIndex;

    var transcript = event.results[current][0].transcript;

    menu += transcript;
    if (menu.includes("compose an email")) {
      console.log("menu deciding");
      document.getElementById("bttn1").click();
    }
  };
}
