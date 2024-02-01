// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
  const originalArray = s.split("");
  const stringArray = s.toLowerCase().split("");
  const numberOfLetter = {};
  stringArray.forEach((el, i) => {
    if (numberOfLetter[el]) {
      numberOfLetter[el][0] = numberOfLetter[el][0] + 1;
    } else {
      numberOfLetter[el] = [1, i];
    }
  });
  if (s != "") {
    const lowest = Object.keys(numberOfLetter).reduce(function (a, b) {
      return numberOfLetter[a][0] == 1 &&
        numberOfLetter[a][1] < numberOfLetter[b][1]
        ? a
        : b;
    });
    return numberOfLetter[lowest][0] == 1
      ? originalArray[numberOfLetter[lowest][1]]
      : "";
  }
  return "";
}

const test = firstNonRepeatingLetter("stress");
test;
