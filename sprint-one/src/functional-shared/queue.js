var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {
    storage: {},
    lastIndex: 0
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

queueMethods.dequeue = function() {
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

queueMethods.size = function() {
  return this.lastIndex;
};

