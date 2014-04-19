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
    node.previous = list.tail;
    list.tail = node;
  };

  list.addToHead = function(value){
    //Head.previous = new node
    var node = makeNode(value);

    if(list.head === null){
      list.tail = node;
    }else{
      list.head.previous = node;
      node.next = list.head;
    }

    //head = new node
    list.head = node;

  }

  list.removeHead = function(){
    var result;
    result = list.head.value;
    list.head = list.head.next;
    return result;

  };

  list.removeTail = function(){
    var result;
    result = list.tail.value;
    list.tail = list.tail.previous;
    return result;

  }

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
  node.previous = null;

  return node;
};
