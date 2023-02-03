'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretnumber);

//state variable.
let score = 20;

let highscore = 0;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(
  document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);

    if (!guess) {
      //when there is no input
      // document.querySelector('.message').textContent = `⛔No number `;

      displayMsg(`⛔No number`);
      // When the player wins.
    } else if (guess === secretnumber) {
      // document.querySelector('.message').textContent = `🎉 Correct Number`;
      displayMsg(`🎉 Correct Number`);
      document.querySelector('.number').textContent = secretnumber;

      document.querySelector('body').style.backgroundColor = `#60b347`;

      document.querySelector(`.number`).style.width = `30rem`;

      //setting the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }

      //When guess is wrong.
    } else if (guess != secretnumber) {
      if (score > 1) {
        // document.querySelector(`.message`).textContent =
        //   guess > secretnumber ? `📈Too high` : `📉Too low`;
        displayMsg(guess > secretnumber ? `📈Too high` : `📉Too low`);
        score -= 1;

        document.querySelector(`.score`).textContent = score;
      } else {
        // document.querySelector(`.message`).textContent = `You lost the game....`;
        displayMsg(`You lost the game....`);
        document.querySelector(`.score`).textContent = 0;
      }
    }
    /*
    // when guess is too high
    else if (guess > secretnumber) {
      if (score > 1) {
        document.querySelector(`.message`).textContent = `📈Too high`;
        score -= 1;
        document.querySelector(`.score`).textContent = score;
      } else {
        document.querySelector(
          `.message`
        ).textContent = `You lost the game....`;
        document.querySelector(`.score`).textContent = 0;
      }

      //when guess is to low.
    } else if (guess < secretnumber) {
      if (score > 1) {
        document.querySelector(`.message`).textContent = `📉Too Low`;
        score -= 1;
        document.querySelector(`.score`).textContent = score;
      } else {
        document.querySelector(
          `.message`
        ).textContent = `You lost the game....`;
        document.querySelector(`.score`).textContent = 0;
      }
    }
    */

    //SETTING THE  functionality of 'AGAIN' BUTTON
    document.querySelector(`.again`).addEventListener(`click`, function () {
      score = 20;
      document.querySelector(`.score`).textContent = score;
      secretnumber = Math.trunc(Math.random() * 20) + 1;

      // document.querySelector(`.number`).textContent = secretnumber;
      document.querySelector(`.message`).textContent = `Start guessing...`;
      displayMsg(`Start guessing...`);

      document.querySelector(`.number`).textContent = `?`;
      document.querySelector(`.guess`).value = '';

      document.querySelector(`body`).style.backgroundColor = `#222`;
      document.querySelector(`.number`).style.width = `15rem`;
    });
  })
);
