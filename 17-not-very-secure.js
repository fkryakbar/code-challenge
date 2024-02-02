const alphanumeric = (string) =>
  new RegExp(/^(?=.*[a-zA-Z]|.*[0-9])[A-Za-z0-9]+$/).test(string);

console.log(alphanumeric("PassW0rd"));
