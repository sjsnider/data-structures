var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = Object.create(queueMethods);

  // Use an object with numeric keys to store values
  instance._storage = {};
  instance._size = 0;

  // Implement the methods below

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
    this._storage[this._size] = value;
    this._size++;
  };

queueMethods.dequeue = function(){

  var result = this._storage[0];
  delete this._storage[0];
  for(var i=1;i<this._size;i++){
    this._storage[i-1]=this._storage[i];
  }
  this._size && this._size--;
  delete this._storage[this._size];
  return result;
};

queueMethods.size = function(){
  return this._size;
};
