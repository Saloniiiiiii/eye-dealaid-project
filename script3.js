function composefunc() {
  var SpeechRecognition = window.webkitSpeechRecognition;
  var speech = new SpeechSynthesisUtterance();
  var speech1 = new SpeechSynthesisUtterance();
  var recognition = new SpeechRecognition();
  speech.lang = "en-US";

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  recognition.continuous = true;

  speech.text = "You are headed towards compose page";
  window.speechSynthesis.speak(speech);
  setTimeout(to, 4000);
  recognition.start();
  function to() {
    email = "";
    speech.text = "Write recipients Email I D ";
    window.speechSynthesis.speak(speech);
    recognition.onresult = function (event) {
      console.log("add recipient's email id");
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      email += transcript;
      if (email.includes("at the rate")) {
        email = email.replace(/at the rate/gi, "@").replace(/\s/g, "");
      }
      document.getElementById("add").innerHTML = email;
      localStorage.setItem("toid", document.getElementById("add").value);
    };
    setTimeout(() => {
      if (document.getElementById("add").value.length == 0) {
        to();
      } else {
        sub();
      }
    }, 13000);
  }

  function sub() {
    subject = "";
    speech.text = "Write subject ";
    window.speechSynthesis.speak(speech);
    recognition.onresult = function (event) {
      console.log("subject");
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      subject += transcript;

      document.getElementById("subject").innerHTML = subject;
      localStorage.setItem("subb", document.getElementById("subject").value);
    };
    setTimeout(() => {
      if (document.getElementById("subject").value.length == 0) {
        sub();
      } else {
        body();
      }
    }, 10000);
  }
  function body() {
    bodyy = "";
    speech.text = "Write your email's content ";
    window.speechSynthesis.speak(speech);
    recognition.onresult = function (event) {
      console.log("body");
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      bodyy += transcript;

      document.getElementById("message").innerHTML = bodyy;
      localStorage.setItem(
        "messagebody",
        document.getElementById("message").value
      );
    };
    setTimeout(() => {
      if (document.getElementById("message").value.length == 0) {
        body();
      } else {
        Consent();
      }
    }, 10000);
  }
  function Consent() {
    replay = "";
    p = "";
    speech.text =
      "Do you want me to read this email for you before sending it ";
    window.speechSynthesis.speak(speech);
    recognition.onresult = function (event) {
      console.log("consent");
      var current = event.resultIndex;

      var transcript = event.results[current][0].transcript;

      replay += transcript;

      if ((replay.includes = "yes")) {
        speech.text = "Alright this is your email's content ";
        window.speechSynthesis.speak(speech);
        setTimeout(read, 5000);
        function read() {
          speech.text = document.getElementById("message").value;
          window.speechSynthesis.speak(speech);
        }
        setTimeout(permission, 5000);
        function permission() {
          speech.text = "should i send this mail";
          window.speechSynthesis.speak(speech);
          recognition.onresult = function (event) {
            console.log("consent");
            var current = event.resultIndex;

            var transcript = event.results[current][0].transcript;

            p += transcript;
            if ((p.includes = "yes")) {
              send();
            } else {
              to();
            }
          };
        }
        //  if ((replay.includes = "no")) {
        //   send();
        //}
      }
      function send() {
        document.getElementById("mailsend").click();
        speech.text = "Mail has been sent successfully";
        window.speechSynthesis.speak(speech);
      }
    };
  }
}
