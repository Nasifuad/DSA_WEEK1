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
    delete this.array[this.length - 1];
    this.length--;
  }
  CustomDelete(index) {
    for (let i = index - 1; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    delete this.array[this.length - 1];
    this.length--;
  }
  shift() {
    for (let i = 0; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }
    delete this.array[this.length - 1];
    this.length--;
  }
  unshift(item) {
    this.array[this.length] = item;
    let temp = this.array[this.length - 1];
    for (let i = 0; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.array[0] = temp;

    this.length++;
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
newArray.push("ciao");
newArray.push("salut");
newArray.push("hola");
newArray.push("bonjour");
newArray.push("hallo");

console.log(newArray);

newArray.CustomDelete(3);
console.log(newArray);
newArray.shift();
console.log(newArray);
newArray.unshift("hi");
console.log(newArray);
