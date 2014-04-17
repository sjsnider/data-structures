var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here

  // Use an object with numeric keys to store values
  this._storage = {};
  this._size = 0;
};

Queue.prototype.enqueue = function(value){
    this._storage[this._size] = value;
    this._size++;
  };

Queue.prototype.dequeue = function(){

  var result = this._storage[0];
  delete this._storage[0];
  for(var i=1;i<this._size;i++){
    this._storage[i-1]=this._storage[i];
  }
  this._size && this._size--;
  delete this._storage[this._size];
  return result;
};

Queue.prototype.size = function(){
  return this._size;
};
