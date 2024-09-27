const chunk = (array, size) => {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));

    index += size;
  }

  return chunked;
};

const arr = [
  3, 4, 5, 46, 5, 65, 7, 8, 4, 5, 6, 6, 7, 8, 3, 3, 4, 5, 46, 5, 65, 7, 8, 4, 5,
  6, 6, 7, 8, 3,
];
const size = 4;

console.log(chunk(arr, size));
