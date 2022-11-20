import player from "./class/player.js";

const mainForm = document.querySelector("#mainForm");
const textDisplay = document.querySelector("#test");

const checkBrowserCompatibility = () => {

  "speechSynthesis" in window
      ? true : false  
  }

checkBrowserCompatibility();

const synth = window.speechSynthesis

mainForm.onsubmit = (event) => {
    event.preventDefault()
    const textForm = textDisplay.value;
    let utterThis = new SpeechSynthesisUtterance;
    utterThis.text = textForm
    synth.speak(utterThis);
  }

// let p1 = new player("Julien", 10);

// let textPlayer = JSON.stringify(p1);
// alert(textPlayer);