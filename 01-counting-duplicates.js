// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
  let loweredText = text.toLowerCase();
  let array = loweredText.split("");

  let obj = {};

  array.forEach((element) => {
    if (obj[element]) {
      obj[element] = obj[element] + 1;
    } else {
      obj[element] = 1;
    }
  });

  let result = 0;

  for (let i in obj) {
    if (obj[i] > 1) result++;
  }
  return result;
}

console.log(duplicateCount("Indivisibilities"));
