var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.lastIndex = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

stackMethods.pop = function() {
  if (this.lastIndex > 0) {
    var result = this.storage[this.lastIndex - 1];
    this.storage[this.lastIndex - 1] = undefined;
    this.lastIndex--;
    return result;
  }
};

stackMethods.size = function() {
  return this.lastIndex;
};