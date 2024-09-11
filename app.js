const bells = new Audio('./bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
let myInterval = null;
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);
  const btn = document.querySelector('.btn-start');

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;
    btn.textContent = 'Pause';

    const updateSeconds = () => {
      const minute = document.querySelector('.minutes');
      const seconds = document.querySelector('.seconds');

      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      if (secondsLeft < 10) {
        seconds.textContent = '0' + secondsLeft;
      } else {
        seconds.textContent = secondsLeft;
      }
      minute.textContent = `${minutesLeft}`;

      if (minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
      }
    };
    myInterval = setInterval(updateSeconds, 1000);
    motivationInterval = setInterval(displayPhrase, 10000);
  } else {
    state = true;
    btn.textContent = 'Start';
    clearInterval(myInterval);
    clearInterval(motivationInterval);
  }
};

const motivationalPhrases = [
  'You got this!',
  'You are capable of amazing things',
  'Progress over perfection',
  'Focus on one task at a time',
  'Small steps lead to big results',
  'You’re closer than you think',
  'Stay in the moment',
  'Finish strong',
  'Your effort matters',
  'You’ve got this',
  'Make it happen',
  'Keep moving forward',
  'You are unstoppable',
  'You are stronger than you think',
  'You are capable of more than you know',
];

let messageIndex = 0;
var message = document.getElementById('message');
var typewriter = new Typewriter(message, {
  loop: true,
});
const displayPhrase = () => {
  typewriter.deleteAll().typeString(motivationalPhrases[messageIndex]).start();
  
  messageIndex = (messageIndex + 1) % motivationalPhrases.length;
};

startBtn.addEventListener('click', () => {
  appTimer();
  displayPhrase();
});
