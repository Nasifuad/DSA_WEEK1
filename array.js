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
