var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = makeNode(value);

    if(list.head === null){
      list.head = node;
    }else{
      list.tail.next = node;
    }

    list.tail = node;
  };

  list.removeHead = function(){

    list.head = list.head.next;
  };

  list.contains = function(target, node){
    node = node || list.head;
    if(node.value === target){
      return true;
    }else if(node.next === null){
      return false;
    }

    return list.contains(target, node.next);
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
