var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  instance.dequeue = function(){

    var result = storage[0];
    delete storage[0];
    for(var i=1;i<size;i++){
      storage[i-1]=storage[i];
    }
    size && size--;
    delete storage[size];
    return result;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
