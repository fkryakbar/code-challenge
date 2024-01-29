// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let missingLetter = "";
  const words = array;
  if (lowerCase.some((u) => u == words[0])) {
    // lowercase
    let rIndex = lowerCase.indexOf(words[0]);

    words.forEach((element) => {
      if (element == lowerCase[rIndex]) {
      } else if (missingLetter == "") {
        missingLetter = lowerCase[rIndex];
      }

      rIndex++;
    });
  } else {
    // uppercase

    let rIndex = upperCase.indexOf(words[0]);

    words.forEach((element) => {
      if (element == upperCase[rIndex]) {
      } else if (missingLetter == "") {
        missingLetter = upperCase[rIndex];
      }

      rIndex++;
    });
  }

  return missingLetter;
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));
