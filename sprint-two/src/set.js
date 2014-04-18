var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(this._storage === undefined){
    this._storage = [];

  }
  this._storage.push(item);
};

setPrototype.contains = function(item){
  var index = this._storage.indexOf(item);
  if (this._storage[index]===item){
    return true;
  }else{
    return false;
  }
};

setPrototype.remove = function(item){
  var index = this._storage.indexOf(item);
  if(index!==-1){
    this._storage.splice(index, 1);
  }
};
