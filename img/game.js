// our project is to build an automation, a little program that performs a task in a virtual world. our automation will be a mail-delivery robot picking up and dropping mail//
const roads = [
    "Allice House-Bob's House", "Allice's House Carbin",
    "Alice's House post office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grate's House", "Grate's House-Farm",
    "Grate's House-shop", "Marketplace-Farm",
    "Marketplace-Post office", "Market-shop",
    "Marketplace-Town Hall", "shop-Town Hall",
];

// Let's convert the list of roads to  data structure that for each place, tells us what can be reached fom there.//
function buildGraph(edge){
    let graph = object.create(null);
    function addEdge(from, to){
        if(graph[from])==null){
            graph [from] = [to];
        } 
    }else{
        graph[from].push(to);
    }
}

for (let [from, to] of edge.map(r=>r.split("-"))){
    addEdge(from, to);
    addEdge(to, from)
} 
return graph;
}
const roadGraph = buildGraph(roads)
