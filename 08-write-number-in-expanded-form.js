// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function generateZero(num) {
  let zero = "";

  for (let index = 0; index < num; index++) {
    zero += "0";
  }

  return zero;
}

function expandedForm(num) {
  const stringNum = num.toString();
  const arrayNum = stringNum.split("");
  let numLength = arrayNum.length;
  let expandedNum = [];
  arrayNum.forEach((element) => {
    let string = "";
    if (element != 0) {
      string = `${element}${generateZero(numLength - 1)}`;
      expandedNum.push(string);
    }
    numLength--;
  });

  return expandedNum.join(" + ");
}

console.log(expandedForm(70304));
