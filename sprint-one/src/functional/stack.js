var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size=0; // Hint: set an initial value here

  // Implement the methods below
  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    size &&  size--;
    var popped = storage[size];
    delete storage[size];
    return popped;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

