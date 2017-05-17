class Decrement {
  constructor(value, decrement) {
    this.value = value;
    this.decrement = decrement;
  }
  toString() {
    this.value = this.value - this.decrement;
    return this.value;
  }
}
