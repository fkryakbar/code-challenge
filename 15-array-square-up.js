// https://www.codewars.com/kata/5a8bcd980025e99381000099/train/javascript

function squareUp(n) {
  let state = [];
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (i >= j + 1) {
        state.push(0);
      } else {
        state.push(i + 1);
      }
    }
  }
  let arrayState = [];
  let reversedState = state.reverse();
  for (
    let i = 0;
    i < reversedState.length;
    i += Math.ceil(reversedState.length / n)
  ) {
    const subarray = reversedState.slice(
      i,
      i + Math.ceil(reversedState.length / n)
    );
    arrayState.push(subarray);
  }

  reversedState = arrayState.reverse();
  let result = [];
  reversedState.forEach((el) => {
    el.forEach((a) => {
      result.push(a);
    });
  });

  return result;
}

console.log(squareUp(4));
