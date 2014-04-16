var Stack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  //debugger;
  this.stackSize = 0; // Hint: set an initial value here
};


// Implement the methods below
Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

Stack.prototype.pop = function(){
  this.stackSize &&  this.stackSize--;
  var popped = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return popped;
};

Stack.prototype.size = function(){
  return this.stackSize;
};
