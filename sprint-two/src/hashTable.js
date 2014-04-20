var HashTable = function(){
  this._size = 0;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var j;
  var array;
  var tuple;
  array = this._storage.get(i) || [];
  for (var j=0; j<array.length; j++){
    tuple = array[j];
    if(tuple[0] === k){
      tuple[1] = v;
      return;
    }
  }
  array.push([k,v]);
  this._size++;
  if (this._size > Math.floor(this._limit * .75)){
    this.resize(this._limit*2)
  }
  this._storage.set(i,array);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var x;
  var array;
  var tuple;
  array = this._storage.get(i) || [];;
  for(var x=0;x<array.length;x++){
    tuple = array[x];
    if(tuple[0] === k){
      return tuple[1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var tuple;
  var array;
  var i = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(i) || [];
  for(var x=0;x<array.length;x++){
    tuple = array[x];
    if(tuple[0] === k){
      array.splice(x, 1);
      this._size--;
      if(this._size < Math.floor(this._limit*.25)){
        this.resize(this._limit/2);
      }
    }
  }
};

HashTable.prototype.resize = function (newSize){
  var oldStorage;
  var tuple;
  var self;
  oldStorage = this._storage;
  this._storage = makeLimitedArray(newSize);
  this._limit = newSize;
  this._size = 0;
  self = this;
  oldStorage.each(function(tupleArray){
    if(!tupleArray){ return;}
    for (var x=0; x<tupleArray.length; x++){
      tuple = tupleArray[x];
      self.insert(tuple[0], tuple[1]);
    }
  });
};



