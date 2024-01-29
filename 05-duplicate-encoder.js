// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
function duplicateEncode(word) {
  let encodedWord = "";
  let letterArray = word.toLowerCase().split("");
  let countLetter = {};

  letterArray.forEach((element) => {
    if (countLetter[element]) {
      countLetter[element] = countLetter[element] + 1;
    } else {
      countLetter[element] = 1;
    }
  });
  letterArray.forEach((element) => {
    if (countLetter[element] == 1) {
      encodedWord += "(";
    } else {
      encodedWord += ")";
    }
  });

  return encodedWord;
}

console.log(duplicateEncode("(( @"));
