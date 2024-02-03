// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
const addWithFormat = (number1, number2) =>
  (parseInt(number1, 10) + parseInt(number2, 10))
    .toString()
    .padStart(number1.length, "0");

function incrementString(strng) {
  let index = -1;
  let lastNumber = [];
  let state = false;
  while (index > strng.length * -1 && !state) {
    if (!isNaN(strng.slice(index))) {
      lastNumber.push(strng.slice(index));
    }
    index--;
  }
  if (lastNumber.length > 0) {
    return strng.replace(
      new RegExp(
        `${lastNumber[lastNumber.length - 1]}(?=[^${
          lastNumber[lastNumber.length - 1]
        }]*$)`
      ),
      addWithFormat(lastNumber[lastNumber.length - 1], 1)
    );
  } else if (isNaN(strng)) return strng + 1;

  return (Number(strng) + 1).toString();
}

console.log(incrementString("foobar00"));
