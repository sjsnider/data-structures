var makeBinarySearchTree = function(value){
  var instance;

  instance = Object.create(binaryMethods);
  instance.value = value;
  instance.right = {};
  instance.left = {};


  return instance;

};

var binaryMethods = {};

binaryMethods.insert = function(val){

  if(this.value<val){
    if(this.right.value === undefined){
      this.right = makeBinarySearchTree(val);
    }else{
      this.right.insert(val);
    }
  }else{
    if(this.left.value === undefined){
      this.left = makeBinarySearchTree(val);
    }else{
      this.left.insert(val);
    }
  }

};


binaryMethods.contains = function(val){
  if(this.value===val){
    return true;
  }else if(this.value<val){
    if(this.right.value)
      return this.right.contains(val);
  }else{
    if(this.left.value)
    return this.left.contains(val);
  }
  return false;

};


binaryMethods.depthFirstLog = function(func){


  func(this.value);

  if(this.left.value){
    this.left.depthFirstLog(func);
  }
  if(this.right.value){
    this.right.depthFirstLog(func);
  }

};
