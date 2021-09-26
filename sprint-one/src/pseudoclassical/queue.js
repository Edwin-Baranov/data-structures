var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() {
  return this.lastIndex;
};