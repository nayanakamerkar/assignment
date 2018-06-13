class Graph1
{
  constructor() 
  {
     this.vertices = [];
     this.edges = [];
     this.numberOfEdges = 0;
  }
  
  addVertex (vert)
  {
     this.vertices.push(vert);
     this.edges[vert] = [];
  }
 

  addEdge (vert1, vert2) 
  {
    this.edges[vert1].push(vert2);
    this.edges[vert2].push(vert1);
    this.numberOfEdges++;
  }

  pathFromTo (vertSource, vertDestination)
  {
     if(!~this.vertices.indexOf(vertSource)) 
     {
     return console.log('Vertex not found');
     }
    var queue = [];
    queue.push(vertSource);
    var visited = [];
    visited[vertSource] = true;
    var paths = [];
    while(queue.length) 
    { 
    var vertex = queue.shift();
    for(var i = 0; i < this.edges[vertex].length; i++)
     {
       if(!visited[this.edges[vertex][i]]) 
      {
        visited[this.edges[vertex][i]] = true;
        queue.push(this.edges[vertex][i]);
        paths[this.edges[vertex][i]] = vertex;
      }
     }
    }
     if(!visited[vertDestination]) 
     {
      return undefined;
     }
     
     var path = [];
     for(var j = vertDestination; j != vertSource; j = paths[j])
     {
       path.push(j);
     }
     path.push(j);
     
     return path.reverse().join('-');
  }
  /*
  print() 
  {
    console.log(this.vertices.map(function(vertex)
    {
    return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
    }, this).join(' | '));
  }
  */
}

var graph = new Graph1();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
//graph.print(); 
graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
//graph.print(); 
console.log('path from 2 to 4:', graph.pathFromTo(2, 4)); 
console.log('path from 3 to 5:', graph.pathFromTo(3, 5)); 
console.log('path from 6 to 1:', graph.pathFromTo(6, 1)); 
