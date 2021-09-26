var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastIndex = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.pop = function() {
    if (lastIndex > 0) {
      var result = storage[lastIndex - 1];
      storage[lastIndex - 1] = undefined;
      lastIndex--;
      return result;
    }
  };

  someInstance.size = function() {
    return lastIndex;
  };

  return someInstance;
};
