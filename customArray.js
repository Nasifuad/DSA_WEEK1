class MyArray {
  constructor() {
    this.length = 0;
    this.array = {};
  }
  push(element) {
    this.array[this.length] = element;
    this.length++;
    return this.length;
  }
}
const newArray = new MyArray();

newArray.push("Hello");
newArray.push("Ola");
newArray.push("hi");
newArray.push("konichiwa");
newArray.push("hey");
newArray.push("greeting");
newArray.push("howdy");

console.log(newArray);

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray.array[i]);
}
console.log(newArray.length);
