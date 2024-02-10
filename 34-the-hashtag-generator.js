// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }
  let finalString = `#${str
    .split(" ")
    .map((a) => {
      return a.charAt(0).toUpperCase() + a.slice(1);
    })
    .join("")}`;
  return finalString.length > 140 ? false : finalString;
}

console.log(generateHashtag("Do We have A Hashtag"));
