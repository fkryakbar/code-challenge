// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

const humanReadable = (seconds) =>
  `${
    Math.floor(seconds / 3600) < 10
      ? "0" + Math.floor(seconds / 3600).toString()
      : Math.floor(seconds / 3600).toString()
  }:${
    Math.floor((seconds / 60) % 60) < 10
      ? "0" + Math.floor((seconds / 60) % 60).toString()
      : Math.floor((seconds / 60) % 60).toString()
  }:${
    Math.floor(seconds % 60) < 10
      ? "0" + Math.floor(seconds % 60).toString()
      : Math.floor(seconds % 60).toString()
  }`;

const test = humanReadable(359999);

test;
