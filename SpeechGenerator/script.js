let speech = new SpeechSynthesisUtterance();
// This Web Speech API interface represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
playBtn.addEventListener("click", function () {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
pauseBtn.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});
