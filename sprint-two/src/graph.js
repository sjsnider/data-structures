var Graph = function(){
  this._nodes = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var keys;

  this._nodes[newNode] = [];
  if(toNode){
    this._nodes[newNode].push(toNode);
    this._nodes[toNode].push(newNode);
  }
  keys = Object.keys(this._nodes);
  if(keys.length===2){
    console.log(keys);
    //debugger;
    this._nodes[keys[0]].push(keys[1]);
    this._nodes[keys[1]].push(keys[0]);
  }
};

Graph.prototype.contains = function(node){
  return Boolean(this._nodes[node]);
};

Graph.prototype.removeNode = function(node){
  var edges = this._nodes[node];
  delete this._nodes[node];
  for(var i=0;i<edges.length;i++){
    var edgesArr = this._nodes[edges[i]];
    var indexOfNode = edgesArr.indexOf(node);
    if(indexOfNode){
      edgesArr.splice(indexOfNode,1);
    }
  }

};

Graph.prototype.getEdge = function(fromNode, toNode){
  var edges = this._nodes[fromNode];
  var result = edges.indexOf(toNode);
  if(result === -1)
    return false;
  else
    return true;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._nodes[fromNode].push(toNode);
  this._nodes[toNode].push(fromNode);

};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //debugger;
  var edges = this._nodes[fromNode];
  edges.splice(edges.indexOf(toNode),1);
  if(edges.length===0){
    delete this._nodes[fromNode];
  }

  edges = this._nodes[toNode];
  edges.splice(edges.indexOf(fromNode),1);
  if(edges.length===0){
    delete this._nodes[toNode];
  }



};
