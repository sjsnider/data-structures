var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[i] !== undefined){
    this._storage[i].push([k,v]);
    //this._storage[i].set(this_storage[i].length, [k,v]);
  }else{
    this._storage.set(i,[k,v]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var x;
  // debugger;
  var results;
  this._storage.each(function(value, key, storage){
    if (value !== undefined){
      for(x=0;x<value.length;x++){
        if (value[x][0] === k)
          results = value[x][1];
      }
    }
  });
  return results;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(value, key, storage){
    if(value !== undefined){
      if(value[0] === k){
        value[1] = null;
      }
    }
  });
};

