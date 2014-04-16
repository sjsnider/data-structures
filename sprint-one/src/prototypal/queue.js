var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.stackSize = 0;

  // Implement the methods below

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  };

queueMethods.dequeue = function(){

  var result = this.storage[0];
  delete this.storage[0];
  for(var i=1;i<this.stackSize;i++){
    this.storage[i-1]=this.storage[i];
  }
  this.stackSize && this.stackSize--;
  delete this.storage[this.stackSize];
  return result;
};

queueMethods.size = function(){
  return this.stackSize;
};
