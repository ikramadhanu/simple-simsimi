function runSpeechRecognitionID() {
    var action = document.getElementById("me");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = function () {
        action.innerHTML = "Silakan berbicara...";
    };
    recognition.onspeechend = function () {
        action.innerHTML = "Selesai...";
        recognition.stop();
    }
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        action.innerHTML = transcript;
        document.getElementById("conversation-form-input").value = transcript;
        document.getElementById("conversation-form").submit();
    };
    recognition.lang = 'id-ID';
    recognition.start();
}

function runSpeechRecognitionEN() {
    var action = document.getElementById("me");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = function () {
        action.innerHTML = "Please talk...";
    };
    recognition.onspeechend = function () {
        action.innerHTML = "End...";
        recognition.stop();
    }
    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        action.innerHTML = transcript;
        document.getElementById("conversation-form-input").value = transcript;
        document.getElementById("conversation-form").submit();
    };
    recognition.lang = 'en-US';
    recognition.start();
}