var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  instance._storage = {};
  //debugger;
  instance._size = 0; // Hint: set an initial value here

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};
// Implement the methods below
stackMethods.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

stackMethods.pop = function(){
  this._size &&  this._size--;
  var popped = this._storage[this._size];
  delete this._storage[this._size];
  return popped;
};

stackMethods.size = function(){
  return this._size;
};
