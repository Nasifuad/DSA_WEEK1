let string = "abba";

let palindrom = (str) =>
  str.split("").reverse().join("") === string ? "YES" : "NO";

console.log(palindrom(string));
