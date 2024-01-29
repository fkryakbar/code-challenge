// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

function createPhoneNumber(numbers) {
  let phoneString = "";
  for (let index = 0; index < numbers.length; index++) {
    if (index == 0) phoneString += "(";
    if (index == 3) phoneString += ") ";
    if (index == 6) phoneString += "-";
    phoneString += numbers[index];
  }
  return phoneString;
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
