// Edge List -> The below shows an array of arrays and how 2 is connected to 0,1,3 . 3 is connected to 1,2 and so on

const graph = [[0,2], [2, 3],[2,1], [1,2]]



//ADJACENT LIST - where the index is the node and the value is the nodes neighboors. The index of the array is the value of the actual Graph node
const graph = [[2],[2,3],[0,1,3],[1,2]];


//Adjacent Matrix - It is simply going to have 0's and 1's indicating whether node "X" has connection with node "Y"; Zero is no and 1 is a yes

const graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]


// ----------------- EXERCISE ----------------- EXERCISE ----------------- EXERCISE ----------------- EXERCISE ----------------- EXERCISE ----------------- EXERCISE ----------------- EXERCISE ------------

class Graph { 
    constructor() { 
      this.numberOfNodes = 0;
      this.adjacentList = {
      }; 
    } 
    addVertex(node)  { 
        this.adjacentList[node] = [] //this is an empty array because when the node is initially entered it wont have any connectins. The edges to those connections are being added below
        this.numberOfNodes++
    } 
    addEdge(node1, node2) { 
      //undirected Graph 
      this.adjacentList[node1].push(node2); // this is accessing the key and pushing the connection of the node and since this is an undirected graph the node we are pushing to has to do the samething back. See next line.
      this.adjacentList[node2].push(node1);
    } 
    showConnections() { 
      const allNodes = Object.keys(this.adjacentList); 
      for (let node of allNodes) { 
        let nodeConnections = this.adjacentList[node]; 
        let connections = ""; 
        let vertex;
        for (vertex of nodeConnections) {
          connections += vertex + " ";
        } 
        console.log(node + "-->" + connections); 
      } 
  } 
  } 
  
  const myGraph = new Graph();
  myGraph.addVertex('0');
  myGraph.addVertex('1');
  myGraph.addVertex('2');
  myGraph.addVertex('3');
  myGraph.addVertex('4');
  myGraph.addVertex('5');
  myGraph.addVertex('6');
  myGraph.addEdge('3', '1'); 
  myGraph.addEdge('3', '4'); 
  myGraph.addEdge('4', '2'); 
  myGraph.addEdge('4', '5'); 
  myGraph.addEdge('1', '2'); 
  myGraph.addEdge('1', '0'); 
  myGraph.addEdge('0', '2'); 
  myGraph.addEdge('6', '5');
  
  myGraph.showConnections(); 
  //Answer:
  // 0-->1 2 
  // 1-->3 2 0 
  // 2-->4 1 0 
  // 3-->1 4 
  // 4-->3 2 5 
  // 5-->4 6 
  // 6-->5