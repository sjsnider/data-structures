var makeLinkedList = function(){
  var list = {};
  list.head = {'value':null};
  list.tail = {'value':null};

  list.addToTail = function(value){
    list[value] = list.tail.value;
    if (list[value] === null){
      list.head.value = value;
    }
    list.tail.value = value;
  };

  list.removeHead = function(){
    var key= list.tail.value;
    while (list[key] !== list.head.value){
      key = list[key];
    }
    delete list[list.head.value];
    list[key] = null;
    list.head.value = key;
  };

  list.contains = function(target, node){
    var key = list.tail.value;
    while (key !== null){
      if (key === target){
        return true;
      }
      key = list[key];
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
