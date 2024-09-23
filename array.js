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
function Fibonacci(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(`The lowers in the ${arr} is ${min}`);

  //Buble Sort
  function BubbleSort(arr) {
    console.log(`Before sorting the array was ${arr}`);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length - 1; j++) {
        if (arr[i] > arr[j + 1]) {
          let temp = arr[i];
          arr[i] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(`After sorting the array is ${arr}`);
  }
}

// quick sort

function QuickSort(arr, low, high) {
  console.log(`Before sorting the array was ${arr}`);
  let n = arr.length - 1;
  quicksort(arr, 0, n);

  function quicksort(arr, low, high) {
    if (low < high) {
      let pivotIndex = partition(arr, low, high);
      quicksort(arr, low, pivotIndex - 1);
      quicksort(arr, pivotIndex + 1, high);
    }
  }

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }
  console.log(`After sorting the array is ${arr}`);
}
