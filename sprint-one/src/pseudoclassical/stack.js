var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.lastIndex = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

Stack.prototype.pop = function() {
  if (this.lastIndex > 0) {
    var result = this.storage[this.lastIndex - 1];
    this.storage[this.lastIndex - 1] = undefined;
    this.lastIndex--;
    return result;
  }
};

Stack.prototype.size = function() {
  return this.lastIndex;
};


