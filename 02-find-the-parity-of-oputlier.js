// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  let even = [];
  let odd = [];

  integers.forEach((element) => {
    if (element % 2 == 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  });

  if (even.length == 1) {
    return even[0];
  }
  return odd[0];
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
