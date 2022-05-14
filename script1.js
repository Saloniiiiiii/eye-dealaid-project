function loginpage() {
  var SpeechRecognition = window.webkitSpeechRecognition;
  var speech = new SpeechSynthesisUtterance();
  var speech1 = new SpeechSynthesisUtterance();
  var recognition = new SpeechRecognition();
  speech.lang = "en-US";

  speech.volume = 1;
  speech.rate = 0.89;
  speech.pitch = 1;
  recognition.continuous = true;
  recognition.start();
  speech.text = " You are headed towards login page .";
  window.speechSynthesis.speak(speech);
  //setTimeout(email, 8500);
  email();
  /*var voices = window.speechSynthesis.getVoices();

speech.voice = voices.filter(function (voice) {
  return (voice.name = "Samantha");
})[9];
*/

  function email() {
    let emailid = "";
    let mail = "";

    speech.text = "Write your E mail I D  ";
    window.speechSynthesis.speak(speech);

    recognition.onresult = function (event) {
      console.log("writing email id ");
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      emailid += transcript;
      if (emailid.includes("at the rate")) {
        emailid = emailid.replace(/at the rate/gi, "@").replace(/\s/g, "");
      }
      emailid = emailid.replace(/ /gi, " ").replace(/\s/g, "");
      document.getElementById("Uname").innerHTML = emailid;
      localStorage.setItem("mail", document.getElementById("Uname").value); //update
    };
    setTimeout(() => {
      if (document.getElementById("Uname").value.length == 0) {
        email();
      } else {
        password();
      }
    }, 13000);
  }

  function password() {
    let emailpassword = "";
    let pswd = "";
    let pswd2 = "";
    let pswd1 = "";

    speech.text = "Enter you password ";
    window.speechSynthesis.speak(speech);
    recognition.onresult = function (event) {
      console.log("entering pswd");
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      pswd += transcript;
      if (pswd.includes("at the rate")) {
        pswd = pswd.replace(/at the rate/gi, "@").replace(/\s/g, "");
      }
      if (pswd.includes("hashtag")) {
        pswd = pswd.replace(/hashtag/gi, "#").replace(/\s/g, "");
      }
      if (pswd.includes("dollar")) {
        pswd = pswd.replace(/dollar/gi, "$").replace(/\s/g, "");
      }
      if (
        pswd.includes("exclaimation mark ") ||
        pswd.includes("exclaimation")
      ) {
        pswd = pswd.replace(/exclaimation mark /gi, "!").replace(/\s/g, "");
      }
      if (pswd.includes("asterisk ") || pswd.includes("star")) {
        pswd = pswd.replace(/asterisk /gi, "*").replace(/\s/g, "");
      }
      if (pswd.includes("capital")) {
        pswd = pswd.replace(/capital /gi, "").replace(/\s/g, "");
        document.getElementById("Pass").innerHTML = pswd;
        pswd2 += transcript;
        pswd2 = pswd2.toUpperCase();
        document.getElementById("Pass").innerHTML += pswd2;
      }
      //Check it
      if (pswd.includes("small")) {
        pswd = pswd.replace(/small/gi, "").replace(/\s/g, "");
        document.getElementById("Pass").innerHTML = pswd1;
        pswd2 += transcript;
        pswd2 = pswd2.toLowerCase();
        document.getElementById("Pass").innerHTML += pswd1;
      }
      pswd = pswd.replace(/ /gi, " ").replace(/\s/g, "");
      document.getElementById("Pass").innerHTML = pswd;
      localStorage.setItem(
        "emailpassword",
        document.getElementById("Pass").value
      );
    };
    setTimeout(() => {
      if (document.getElementById("Pass").value.length == 0) {
        password();
      } else {
        submitform();
      }
    }, 10000);
  }
  function submitform() {
    command = "";
    speech.text = "Say submit to log in to your account ";
    window.speechSynthesis.speak(speech);
    recognition.onresult = function (event) {
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      command += transcript;
      if (command.includes("submit")) {
        console.log("submitting form  ");
        // const formsubmit = document.getElementById("login");
        //formsubmit.addEventListener("submit", (e) => {
        // e.preventDefault();
        document.getElementById("submitt").click();
        //});
      }
    };
  }
}
