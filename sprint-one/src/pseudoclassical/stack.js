var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here

  // Use an object with numeric keys to store values
  this._storage = {};
  //debugger;
  this._size = 0; // Hint: set an initial value here
};


// Implement the methods below
Stack.prototype.push = function(value){
  this._storage[this._size] = value;
  this._size++;
};

Stack.prototype.pop = function(){
  this._size &&  this._size--;
  var popped = this._storage[this._size];
  delete this._storage[this._size];
  return popped;
};

Stack.prototype.size = function(){
  return this._size;
};
