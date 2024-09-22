//Fibonacci Algorithm
let cur = 1;
let prev = 0;

console.log(cur, prev);

for (let i = 0; i < 1; i++) {
  let next = cur + prev;
  console.log(next);
  prev = cur;
  cur = next;
}
// Using Recursion

console.log(0, 1);
count = 2;
let cur1 = 1;
let prev1 = 0;
const Fibonacci = (n) => {
  while (count < n) {
    let next = cur1 + prev1;
    console.log(next);
    prev1 = cur1;
    cur1 = next;
    count++;
    Fibonacci(n);
  }
};
Fibonacci(1);

//Lowest Value from the array
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);
let d = Math.floor(Math.random() * 100);
let e = Math.floor(Math.random() * 100);
let f = Math.floor(Math.random() * 100);
let g = Math.floor(Math.random() * 100);
let arr = [a, b, c, d, e, f, g];
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log(`The lowers in the ${arr} is ${min}`);
