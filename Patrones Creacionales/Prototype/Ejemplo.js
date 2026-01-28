class Prototype {
  constructor(value) {
    this.value = value;
  }

  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)),
      JSON.parse(JSON.stringify(this)));
  }
}

const original = new Prototype([1, 2, 3]);
const cloned = original.clone();
cloned.value.push(4);

console.log(original.value);
console.log(cloned.value);
