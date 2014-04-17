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






    // list[value] = list.tail.value;
    // if (list[value] === null){
    //   list.head.value = value;
    // }
    // list.tail.value = value;
  };

  list.removeHead = function(){

    list.head = list.head.next;



    // var key= list.tail.value;
    // while (list[key] !== list.head.value){
    //   key = list[key];
    // }
    // delete list[list.head.value];
    // list[key] = null;
    // list.head.value = key;
  };

  list.contains = function(target, node){
    // var key = list.tail.value;
    // while (key !== null){
    //   if (key === target){
    //     return true;
    //   }
    //   key = list[key];
    // }
    // return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
