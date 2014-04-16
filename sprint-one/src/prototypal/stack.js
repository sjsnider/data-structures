var makeStack = function() {
  // Hey! Copy your code from src/functional-shared/stack.js and paste it here
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  //debugger;
  instance.stackSize = 0; // Hint: set an initial value here

  return instance;
};


var stackMethods = {};
// Implement the methods below
stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

stackMethods.pop = function(){
  this.stackSize &&  this.stackSize--;
  var popped = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  return popped;
};

stackMethods.size = function(){
  return this.stackSize;
};
