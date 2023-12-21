const nepaliNumber = document.getElementById("nepaliNumber");
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
let key;
let c;
const nepaliNumbersArray = [
  { key: 0, number: "शुन्य" },
  { key: 1, number: "एक" },
  { key: 2, number: "दुइ" },
  { key: 3, number: "तीन" },
  { key: 4, number: "चार" },
  { key: 5, number: "पाँच" },
  { key: 6, number: "छ" },
  { key: 7, number: "सात" },
  { key: 8, number: "आठ" },
  { key: 9, number: "नौ" },
  { key: 10, number: "दश" },
  { key: 11, number: "एघार" },
  { key: 12, number: "बाह्र" },
  { key: 13, number: "तेह्र" },
  { key: 14, number: "चौध" },
  { key: 15, number: "पन्ध्र" },
  { key: 16, number: "सोह्र" },
  { key: 17, number: "सत्र" },
  { key: 18, number: "अठार" },
  { key: 19, number: "उन्नाइस" },
  { key: 20, number: "बीस" },
  { key: 21, number: "एक्काइस" },
  { key: 22, number: "बाइस" },
  { key: 23, number: "तेईस" },
  { key: 24, number: "चौबीस" },
  { key: 25, number: "पच्चीस" },
  { key: 26, number: "छब्बीस" },
  { key: 27, number: "सत्ताइस" },
  { key: 28, number: "अठ्ठाइस" },
  { key: 29, number: "उनन्तीस" },
  { key: 30, number: "तीस" },
  { key: 31, number: "एकतीस" },
  { key: 32, number: "बत्तीस" },
  { key: 33, number: "तेतीस" },
  { key: 34, number: "चौंतीस" },
  { key: 35, number: "पैंतीस" },
  { key: 36, number: "छत्तीस" },
  { key: 37, number: "सैंतीस" },
  { key: 38, number: "अठतीस" },
  { key: 39, number: "उनन्चालीस" },
  { key: 40, number: "चालीस" },
  { key: 41, number: "एकचालीस" },
  { key: 42, number: "बयालीस" },
  { key: 43, number: "त्रियालीस" },
  { key: 44, number: "चवालीस" },
  { key: 45, number: "पैंतालीस" },
  { key: 46, number: "छयालीस" },
  { key: 47, number: "सत्चालीस" },
  { key: 48, number: "अठचालीस" },
  { key: 49, number: "उनन्पचास" },
  { key: 50, number: "पचास" },
  { key: 51, number: "एकाउन्न" },
  { key: 52, number: "बाउन्न" },
  { key: 53, number: "त्रिपन्न" },
  { key: 54, number: "चौवन्न" },
  { key: 55, number: "पचपन्न" },
  { key: 56, number: "छपन्न" },
  { key: 57, number: "सन्ताउन्न" },
  { key: 58, number: "अन्ठाउन्न" },
  { key: 59, number: "उनान्साठी" },
  { key: 60, number: "साठी" },
  { key: 61, number: "एकसठी" },
  { key: 62, number: "बासठी" },
  { key: 63, number: "त्रिसठी" },
  { key: 64, number: "चौंसठी" },
  { key: 65, number: "पैंसठी" },
  { key: 66, number: "छयसठी" },
  { key: 67, number: "सत्सठी" },
  { key: 68, number: "अठ्ठासठी" },
  { key: 69, number: "उनन्सत्तारी" },
  { key: 70, number: "सत्तरी" },
  { key: 71, number: "एकहत्तर" },
  { key: 72, number: "बहत्तर" },
  { key: 73, number: "त्रीहत्तर" },
  { key: 74, number: "चौहत्तर" },
  { key: 75, number: "पचहत्तर" },
  { key: 76, number: "छयहत्तर" },
  { key: 77, number: "सतहत्तर" },
  { key: 78, number: "अठ्हत्तर" },
  { key: 79, number: "उननअसी" },
  { key: 80, number: "असी" },
  { key: 81, number: "एकासी" },
  { key: 82, number: "बयासी" },
  { key: 83, number: "त्रीयासी" },
  { key: 84, number: "चौरासी" },
  { key: 85, number: "पचासी" },
  { key: 86, number: "छयासी" },
  { key: 87, number: "सतासी" },
  { key: 88, number: "अठासी" },
  { key: 89, number: "उनननब्बे" },
  { key: 90, number: "नब्बे" },
  { key: 91, number: "एकानब्बे" },
  { key: 92, number: "बयानब्बे" },
  { key: 93, number: "त्रियानब्बे" },
  { key: 94, number: "चौरानब्बे" },
  { key: 95, number: "पन्चानब्बे" },
  { key: 96, number: "छयानब्बे" },
  { key: 97, number: "सन्तानब्बे" },
  { key: 98, number: "अन्ठानब्बे" },
  { key: 99, number: "उनान्सय" },
  { key: 100, number: "सय" },
];

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
  const answer = arr[key];
  nepaliNumber.textContent = nepaliNumbersArray[answer].number;
  optionArray[key].textContent = arr[key];
  for (let i = 0; i < 4; i++) {
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
};

const newGame = function () {
  location.reload();
};

// const nepaliNumbers = Array.from({ length: 101 }, (_, i) => ({
//   key: i,
//   number: String.fromCharCode(0x906 + i), // Unicode values for Nepali numbers start from 0x906
// }));

// console.log(nepaliNumbers);
