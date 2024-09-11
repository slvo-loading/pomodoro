const bells = new Audio('./bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
let myInterval = null;
let state = true;

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
const message = document.getElementById('message');
let typewriter = new Typewriter(message, {
  loop: false,
});

const displayPhrase = () => {
      typewriter.deleteAll().pauseFor(1500).typeString(motivationalPhrases[messageIndex]).pauseFor(1500).start();
      messageIndex = (messageIndex + 1) % motivationalPhrases.length;
    };
  

/*const displayPhrase = () => {
  typewriter
    .deleteAll()
    .pauseFor(1500)
    .typeString(motivationalPhrases[messageIndex])
    .pauseFor(1500)
    .callFunction(() => {
      messageIndex = (messageIndex + 1) % motivationalPhrases.length;
      displayPhrase();
    })
    .start();
};*/

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;
    startBtn.textContent = 'Pause';

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
    motivationInterval = setInterval(displayPhrase, 1000);
    //displayPhrase();
  } else {
    state = true;
    startBtn.textContent = 'Start';
    clearInterval(myInterval);
  }
};

startBtn.addEventListener('click', () => {
  appTimer();
});
