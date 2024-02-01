// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
function sum(arr) {
  return arr.reduce(function (x, y) {
    return x + y;
  }, 0);
}
function maxSequence(arr) {
  let possibilities = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length + 1; j++) {
      let possibility = arr.slice(i, i + j);
      possibilities[sum(possibility)] = possibility;
    }
  }
  const highest = Object.keys(possibilities).reduce(
    (a, b) => (Number(a) > Number(b) ? a : b),
    0
  );

  return Number(highest);
}

const result = maxSequence([
  7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
]);
console.log(result);
