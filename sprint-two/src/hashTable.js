var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var array;
  array = this._storage.get(i);
  if(array){
    array.push([k,v]);
  }else{
    this._storage.set(i,[[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var x;
  var array;
  var results;
  array = this._storage.get(i);
  for(var x=0;x<array.length;x++){
    if(array[x][0] === k){
      results = array[x][1];
    }
  }
  return results;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(i);
  console.log(array);
  for(var x=0;x<array.length;x++){
    if(array[x][0] === k){
      array[x].splice(1, 1, null);
    }
  }
};

