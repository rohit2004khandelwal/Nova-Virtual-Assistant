let btn = document.querySelector('#btn');
let content = document.querySelector('#content');
function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
    speech.lang = 'en-IN';
    window.speechSynthesis.speak(speech);
}
