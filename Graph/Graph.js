class Graph {
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.Edges = new Map();
        this.dfsString = '';
    }
    // add vertex
    addVertex(v) {
        // initialize the adjacent list with a null array
        this.Edges.set(v, []);
    }
    // add edge
    addEdge(v, w) {
        // get the list for vertex v and put the vertex w denoting edge between v and w
        if (!this.Edges.has(v)) {
            this.addVertex(v);
        }
        this.Edges.get(v).push(w);
    }
    // printGraph
    printGraph() {gtgyu
        this.Edges.forEach((vertex, key) => {
            console.log(key + ": " + vertex);
        });
    }
    // dfs(v)
    dfs(startingNode) {
        this.dfsString = '';
        let visited = [];
        for (let i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        }
        this.DFSUtil(startingNode, visited);
        console.log(this.dfsString.substr(0, this.dfsString.length - 4));
    }

    DFSUtil(vert, visited) {
        visited[vert] = true;
        this.dfsString += vert + ' -> ';

        var get_neighbors = this.Edges.get(vert);
        for (let i in get_neighbors) {
            var get_elem = get_neighbors[i];
            if (!visited[get_elem]) {
                this.DFSUtil(get_elem, visited);
            }
        }
    }
}


let g = new Graph(2);
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph();
g.dfs('A');