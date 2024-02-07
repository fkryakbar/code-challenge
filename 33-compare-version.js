// https://www.codewars.com/kata/53b138b3b987275b46000115/train/javascript

function compareVersions(version1, version2) {
  let array1 = version1.split(".").map((a) => Number(a));
  let array2 = version2.split(".").map((a) => Number(a));

  let result = true;
  let state = true;
  for (
    let i = 0;
    i < (array1.length > array2.length ? array1.length : array2.length);
    i++
  ) {
    if (state) {
      if (array1[i] == undefined) array1[i] = 0;
      if (array2[i] == undefined) array2[i] = 0;

      if (array1[i] > array2[i]) {
        result = true;
        state = false;
      } else if (array1[i] == array2[i]) {
        result = true;
        state = true;
      } else {
        result = false;
        state = false;
      }
    }
  }

  return result;
}

console.log(compareVersions("10.4.6", "10.4"));
