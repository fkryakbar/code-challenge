// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let stringArray = numbers.split(" ");
  let numArray = stringArray.map((element) => Number(element));

  let maxValue = numArray.reduce(
    (previousLargestNumber, currentLargestNumber) => {
      return currentLargestNumber > previousLargestNumber
        ? currentLargestNumber
        : previousLargestNumber;
    }
  );
  let minValue = numArray.reduce(
    (previousLargestNumber, currentLargestNumber) => {
      return currentLargestNumber < previousLargestNumber
        ? currentLargestNumber
        : previousLargestNumber;
    }
  );
  return `${maxValue} ${minValue}`;
}

console.log(highAndLow("1 2 3 4 5"));
