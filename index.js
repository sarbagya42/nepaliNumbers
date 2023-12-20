const image = document.getElementById("images");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const displayText = document.getElementById("displayText");
const optionArray = [option1, option2, option3, option4];
const doggoImage = document.getElementById("doggoImage");
const correct = document.getElementById("correct");
const mistake = document.getElementById("mistake");
let arr = [];
let corrects = 0;
let mistakes = 0;
correct.textContent = corrects;
mistake.textContent = mistakes;
image.src = "/images/97.png";
let key;
let c;
const numberGenerator = function () {
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    arr.push(randomNumber);
  }
};

const keyGenerator = () => {
  return Math.floor(Math.random() * 4);
};

const numberRenderer = function () {
  key = keyGenerator();
  // console.log(key);
  const answer = arr[key];
  image.src = `/images/${answer}.png`;
  optionArray[key].textContent = arr[key];
  for (i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * 100 + 1);
    if (key != i) {
      if (answer == random) {
        optionArray[i].textContent = random + 9;
      } else {
        optionArray[i].textContent = random;
      }
    }
  }
};

const reloadFunction = function () {
  arr = [];
  doggoImage.src = "images/happyRet.png";
  displayText.textContent = "PLEASE PRACTICE, I'M WATCHING!!!";
  for (i = 0; i < 4; i++) {
    optionArray[i].style.backgroundColor = "gold";
  }
  numberGenerator();
  numberRenderer();
};

numberGenerator();
numberRenderer();

const confettiHappy = function () {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });

    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🥳🥳🥳🥳🥳🥳🥳🥳", "♥♥🥰🥰🥰"],
        },
      },
    });
  }
  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};

const confettiSad = function () {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  };

  function shoot() {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    });

    confetti({
      ...defaults,
      particleCount: 20,
      scalar: 2,
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["🥴", "😭"],
        },
      },
    });
  }

  setTimeout(shoot, 0);
  setTimeout(shoot, 100);
  setTimeout(shoot, 200);
};

const answer1 = function () {
  if (key == 0) {
    option1.style.backgroundColor = "green";
    confettiHappy();
    corrects = corrects + 1;
    correct.textContent = corrects;
    doggoImage.src = "images/happyRet.png";
    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";
  } else {
    mistakes = mistakes + 1;
    mistake.textContent = mistakes;
    option1.style.backgroundColor = "red";
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
  }
};

const answer2 = function () {
  if (key == 1) {
    option2.style.backgroundColor = "green";
    confettiHappy();
    corrects = corrects + 1;
    correct.textContent = corrects;
    doggoImage.src = "images/happyRet.png";
    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";
  } else {
    option2.style.backgroundColor = "red";
    mistakes = mistakes + 1;
    mistake.textContent = mistakes;
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
  }
};

const answer3 = function () {
  if (key == 2) {
    option3.style.backgroundColor = "green";
    corrects = corrects + 1;
    correct.textContent = corrects;
    confettiHappy();
    doggoImage.src = "images/happyRet.png";
    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";
  } else {
    option3.style.backgroundColor = "red";
    mistake.textContent = mistakes + 1;
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
    // confettiSad();
  }
};

const answer4 = function () {
  if (key == 3) {
    option4.style.backgroundColor = "green";
    corrects = corrects + 1;
    correct.textContent = corrects;
    confettiHappy();
    doggoImage.src = "images/happyRet.png";
    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";
  } else {
    option4.style.backgroundColor = "red";
    mistakes = mistakes + 1;
    mistake.textContent = mistakes;
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
  }
};

const nextButton = function () {
  reloadFunction();
  console.log("i am pressed");
};
