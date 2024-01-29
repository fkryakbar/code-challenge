// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/train/javascript

function findNextSquare(sq) {
  let value = Math.sqrt(sq);
  if (Number.isInteger(value)) return (value + 1) ** 2;
  return -1;
}

console.log(findNextSquare(121));
