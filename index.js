const image = document.getElementById("images");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const displayText = document.getElementById("displayText");
const optionArray = [option1, option2, option3, option4];
const doggoImage = document.getElementById("doggoImage");

let arr = [];
let c = 0;
image.src = "/images/97.png";
let key;

const numberGenerator = function () {
  for (let i = 0; i < 4; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    // console.log(randomNumber);
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
  doggoImage.src = "images/happyRet.png";
  displayText.textContent = "PLEASE PRACTICE, I'M WATCHING!!!";
  for (i = 0; i < 4; i++) {
    optionArray[i].style.backgroundColor = "white";
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

    doggoImage.src = "images/happyRet.png";
    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";

    setTimeout(reloadFunction, 2000);
  } else {
    option1.style.backgroundColor = "red";
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
    setTimeout(reloadFunction, 3000);
    // confettiSad();
  }
};

const answer2 = function () {
  if (key == 1) {
    option2.style.backgroundColor = "green";
    confettiHappy();
    doggoImage.src = "images/happyRet.png";
    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";
    setTimeout(reloadFunction, 2000);
  } else {
    option2.style.backgroundColor = "red";
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
    setTimeout(reloadFunction, 3000);
  }
};

const answer3 = function () {
  if (key == 2) {
    option3.style.backgroundColor = "green";
    confettiHappy();
    doggoImage.src = "images/happyRet.png";
    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";
    setTimeout(reloadFunction, 2000);
  } else {
    option3.style.backgroundColor = "red";
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
    // confettiSad();
    setTimeout(reloadFunction, 3000);
  }
};

const answer4 = function () {
  if (key == 3) {
    option4.style.backgroundColor = "green";
    confettiHappy();
    doggoImage.src = "images/happyRet.png";

    displayText.textContent = "YAYYYYYYY!!!!!🥳🥳🥳🥳";
    setTimeout(reloadFunction, 2000);
  } else {
    option4.style.backgroundColor = "red";
    optionArray[key].style.backgroundColor = "green";
    doggoImage.src = "images/sadRet.png";
    displayText.textContent = "CHECK THE ANSWER IN GREEN";
    // confettiSad;
    setTimeout(reloadFunction, 3000);
  }
};
