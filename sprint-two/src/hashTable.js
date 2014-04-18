var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if (this._storage[i])
  this._storage.set(i,[k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  var results;
  this._storage.each(function(value, key, storage){
    if (value !== undefined){
      if (value[0] === k)
        results = value[1];
    }
  });
  return results;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, key, storage){
    if(this._storage[i][0] === k){
      this._storage[i][1] = null;
    }
  });
};

