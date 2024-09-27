let array = [3, 3, 4, 5, 2, 45, 7, 3, 23, 5, 6, 78, 9, 0, 3, 2, 4, 6, 7];
let target = 9;

function twoSum(nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length - 1; j++) {
      if (nums[i] + nums[j + 1] === target) {
        res.push(i, j + 1);
      }
    }
  }
  return res;
}
const result = twoSum(array, target);
console.logcc3essghbv(result);
console.log(result);
