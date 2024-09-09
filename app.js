const bells = new Audio('./bell.wav');
const startBtn = document.querySelector('.btn-start');
const session = document.querySelector('.minutes');
let myInterval = null;
let state = true;

const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

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
  } else {
    alert('Session has already started.');
  }
};

const motivationalPhrases = [
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
];

const displayPhrase = () => {
  var message = document.getElementById('message');
  const initialText = message.textContent;
  var typewriter = new Typewriter(message, {
    loop: true,
  });

  typewriter
    .typeString(motivationalPhrases[0])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[1])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[2])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[3])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[4])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[5])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[6])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[7])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[8])
    .pauseFor(2500)
    .deleteAll()
    .typeString(motivationalPhrases[9])
    .pauseFor(2500)
    .deleteAll()
    .start();
};

startBtn.addEventListener('click', () => {
  appTimer();
  displayPhrase();
});
