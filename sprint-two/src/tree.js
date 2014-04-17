var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  window.alert(_);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
};

treeMethods.contains = function(target){
};

