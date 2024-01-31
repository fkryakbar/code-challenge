// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const valid = [":", ";", "-", "~", ")", "D"];
  let count = 0;
  arr.forEach((element) => {
    let el = element.split("");
    let state = el.every((item) => {
      if (el.includes(":") && el.includes(";")) {
        return false;
      }
      if (el.includes("-") && el.includes("~")) {
        return false;
      }
      return valid.includes(item);
    });
    if (state && new Set(el).size === el.length) count += 1;
  });
  return count;
}

const result = countSmileys([":o)", ":--D", ";-~)"]);
result;
