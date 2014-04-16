var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.stackSize = 0;
};

Queue.prototype.enqueue = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  };

Queue.prototype.dequeue = function(){

  var result = this.storage[0];
  delete this.storage[0];
  for(var i=1;i<this.stackSize;i++){
    this.storage[i-1]=this.storage[i];
  }
  this.stackSize && this.stackSize--;
  delete this.storage[this.stackSize];
  return result;
};

Queue.prototype.size = function(){
  return this.stackSize;
};
