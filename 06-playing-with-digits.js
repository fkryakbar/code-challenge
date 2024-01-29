// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  let nString = String(n);
  let nStringArray = nString.split("");
  let nNumberArray = nStringArray.map((element) => Number(element));

  let sumWithSquare = 0;
  let index = p;
  nNumberArray.forEach((number) => {
    sumWithSquare += number ** index;
    index++;
  });

  return Number.isInteger(sumWithSquare / n) ? sumWithSquare / n : -1;
}

console.log(digPow(92, 1));
