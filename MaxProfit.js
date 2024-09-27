let stock = [8, 1, 2, 3, 4, 7, 4, 7, 3, 1];

function MaxProfit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        max = Math.max(max, arr[j] - arr[i]);
      }
    }
  }
  return max;
}

console.log(MaxProfit(stock));
