var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var lastIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastIndex] = value;
    lastIndex++;
  };

  someInstance.dequeue = function() {
    if (lastIndex > 0) {
      var result = storage[0];

      //loop through all keys in order setting key's value to key+1's value
      for (var i = 0; i < lastIndex; i++) {
      //last key value should auto set to undefined
        storage[i] = storage[i + 1];
      }

      lastIndex--;
      return result;
    }
  };

  someInstance.size = function() {
    return lastIndex;
  };

  return someInstance;
};
