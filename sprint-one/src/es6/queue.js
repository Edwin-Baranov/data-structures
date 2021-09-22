class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.lastIndex = 0;
  }

  enqueue(value) {
    this.storage[this.lastIndex] = value;
    this.lastIndex++;
  }

  dequeue() {
    if (this.lastIndex > 0) {
      var result = this.storage[0];

      //loop through all keys in order setting key's value to key+1's value
      for (var i = 0; i < this.lastIndex; i++) {
      //last key value should auto set to undefined
        this.storage[i] = this.storage[i + 1];
      }

      this.lastIndex--;
      return result;
    }
  }

  size() {
    return this.lastIndex;
  }

}
