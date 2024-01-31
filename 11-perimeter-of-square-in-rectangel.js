// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript

function perimeter(n) {
  let fibNumber = [1];
  let first = 0;
  let second = 1;
  for (let index = 0; index < n; index++) {
    let fib = first + second;
    first = second;
    second = fib;
    fibNumber.push(fib);
  }
  let result = 0;
  fibNumber.forEach((item) => {
    result += item;
  });
  return result * 4;
}

const result = perimeter(7);

result;
