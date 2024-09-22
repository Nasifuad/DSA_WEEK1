//Fibonacci Algorithm
let cur = 1;
let prev = 0;

console.log(cur, prev);

for (let i = 0; i < 20; i++) {
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
Fibonacci(20);
