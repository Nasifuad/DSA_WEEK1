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
  get(index) {
    return this.array[index];
  }
  pop() {
    for (let i = 0; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    delete this.array[this.length - 1];
    this.length--;
    return this.length;
  }
  CustomDelete(index) {
    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
      delete this.array[this.length - 1];
    }
    this.length--;
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

const getItem = newArray.get(3);
console.log(getItem);

newArray.pop();
newArray.CustomDelete(5);
console.log(newArray);
