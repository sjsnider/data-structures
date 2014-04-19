var HashTable = function(){
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
    }
  }
};

