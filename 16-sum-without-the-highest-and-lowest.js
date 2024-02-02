// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

function sumArray(array) {
  if (array && array.length > 2) {
    array.splice(array.indexOf(array.reduce((a, b) => (a > b ? a : b))), 1);
    array.splice(array.indexOf(array.reduce((a, b) => (a < b ? a : b))), 1);
    return array.reduce((a, b) => a + b);
  }
  return 0;
}

console.log(sumArray([3, 5]));
