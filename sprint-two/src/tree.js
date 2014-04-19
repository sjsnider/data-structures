var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
  this.children[this.children.length-1].parent =  this;
};

treeMethods.contains = function(target){
  var result = false;
  if(this.value === target)
    result = true;
  else {
    for(var i=0; i < this.children.length; i++){
      if(!result){
        result = this.children[i].contains(target);
      }
    }
  }
  return result;
};

treeMethods.removeFromParent = function(){
  var val;
  var treeArray;
  var index;
  val = this.value;
  treeArray = this.parent.children;
  for (var i=0; i<treeArray.length; i++){
    if(treeArray[i] === val) {
      index = i;
    }
  }
  treeArray.splice(index, 1);
  delete this.parent;
};



