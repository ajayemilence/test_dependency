const express = require('express');
let bodyParser = require('body-parser');
const res = require('express/lib/response');

const app = express();

app.use(bodyParser.json());


// Acceptance Criteria

// tasks : []

// dependencies: []

// result: []

// tasks: [a,b]

// dependencies: []

// result: [a,b]

// tasks: [a,b]

// dependencies: [a => b]

// result: [b,a]

// tasks: [a,b,c,d]

// dependencies: [a => b,c => d]

// result: [b,a,d,c]

// tasks: [a,b,c]

// dependencies: [a => b,b => c]

// result: [c,b,a]

// tasks: [a,b,c,d]

// dependencies: [a => b,b => c,c => a]

// result: Error - this is a cyclic dependency

const sortingResult = (taskArray, dependencyArray) => {
    let result = [];

    if (taskArray.length <= 0 && dependencyArray.length <= 0) {
        return result;
    }
    else if (taskArray.length > 0 && dependencyArray.length === 0) {
        return result = taskArray;
    }
    else if (taskArray.length > 0 && dependencyArray.length > 0) {
        let matchArrKey = [];
        cyclic = 0;
        // loop of task and check it in dependency Array
        taskArray.map((task) => {
            let check = false;
            // loop of dependices and distrubute the string 
            dependencyArray.map((curDepen) => {
                let dependent = curDepen.substr(0, 1); // first letter of string
                let dependentOn = curDepen.substr(-1, 1);// last letter of string

                if (task === dependent) {
                    check = true;
                    // filter the  keys with values and  dependencies 
                    let dependArray = matchArrKey.filter(obj => obj.key === dependentOn);
                    if (dependArray.length > 0) {
                        result = [];
                        cyclic = 1;
                        return result = "Error - this is a cyclic dependency";
                    }
                    else {
                        matchArrKey.push({ "key": dependent, "value": dependentOn });
                        if (taskArray[taskArray.length - 1] == matchArrKey) {
                        }
                    }
                }
            })

            if (!check) {
                // if the depency of key is not there
                let dependArraythird = []

                let persentInDependent = matchArrKey.some(function (el) {
                    return el.key === task;
                });
                let persentInDependentOn = matchArrKey.some(function (el) {
                    return el.value === task;
                });



                let dependArraySecond = matchArrKey.filter(obj => obj.value === task);

                dependArraythird = matchArrKey.filter(obj => obj.value === taskArray[taskArray.length - 1]);
                if (dependArraythird.length !== 0) {
                    missArraythird = matchArrKey.filter(obj => {
                        if (result[result.length - 1] === obj.key) {
                            if (!result.includes(obj.value)) {
                                result.splice(result.length - 1, 0, obj.value)
                            }
                        }
                        obj.value === result[result.length - 1]
                    });
                    console.log(missArraythird, missArraythird)
                }

                if (dependArraySecond.length > 0) {
                    result.push(dependArraySecond[0].value);
                    // match and filter the key in depencency array
                    let key = dependArraySecond[0].key;
                    let Dependent = matchArrKey.filter(obj => obj.value === key);
                    if (Dependent.length > 0) {
                        result.push(Dependent[0].value);
                        result.push(Dependent[0].key);
                    }
                    else {
                        console.log("matchArrKey -->", matchArrKey);
                        console.log("task", task);
                        console.log("matchArrKey -->", matchArrKey);
                        taskArray.map((tasknotAssigned) => {
                            console.log()
                            if (!result.includes(task)) {
                                // if(task )
                                result.push(task)
                            }
                        });
                        result.push(key);

                    }
                }

                console.log("tttask", persentInDependent, persentInDependentOn, task);
                console.log("tttask", persentInDependent, persentInDependentOn, task, result)

                if (!persentInDependent && !persentInDependentOn) {
                    result.push(task);
                }
            }
        })
        // if (cyclic == 0) {
        //     taskArray.map((task) => {
        //         console.log()
        //         if (!result.includes(task)) {
        //             // if(task )
        //             result.push(task)
        //         }
        //     });
        // }
        return result;
    }
};


// function add(arr, name) {
//     const { length } = arr;
//     const id = length + 1;
//     const found = arr.some(el => el.username === name);
//     if (!found) arr.push({ id, username: name });
//     return arr;
//   }


const changeArraytoLink = (taskArray, dependencyArray) => {
    let result = [];

    if (taskArray.length <= 0 && dependencyArray.length <= 0) {
        return result;
    }
    else if (taskArray.length > 0 && dependencyArray.length === 0) {
        return result = taskArray;
    }
    else if (taskArray.length > 0 && dependencyArray.length > 0) {
        let matchArrKey = [];
        cyclic = 0;
        // loop of task and check it in dependency Array
        taskArray.map((task) => {
            let check = false;
            // loop of dependices and distrubute the string 
            dependencyArray.map((curDepen) => {
                let dependent = curDepen.substr(0, 1); // first letter of string
                let dependentOn = curDepen.substr(-1, 1);// last letter of string

                if (task === dependent) {
                    check = true;
                    // filter the  keys with values and  dependencies 
                    let dependArray = matchArrKey.filter(obj => obj.key === dependentOn);
                    if (dependArray.length > 0) {
                        result = [];
                        cyclic = 1;
                        return result = "Error - this is a cyclic dependency";
                    }
                    else {
                        matchArrKey.push({ "key": dependent, "parentKey": dependentOn, });
                    }
                }
            })
        });


        taskArray.map((task) => {

            // const { length } = taskArray;
            // const id = length + 1;
            // const found = taskArray.some(el => el.parentKey == task);
            // if (!found) taskArray.push({ id, parentKey: task });
            // return taskArray;

            const checkParent = obj => obj.parentKey === task;
            matchArrKey.some(task);
            let rr = [];
            let rrn = [];

            if (checkParent) {
                rr.push(task)
            } else {
                rrn.push(task)
            }

            console.log("rr -->", rr);
            console.log("rrn -->", rrn)
        })


    }
}


//  -----------triyanhu -------------

let allDependency = [];

const sortingResulttri = (taskArray, dependencyArray) => {
    let result = [];

    if (taskArray.length <= 0 && dependencyArray.length <= 0) {
        return result;
    }
    else if (taskArray.length > 0 && dependencyArray.length === 0) {
        return result = taskArray;
    }
    else if (taskArray.length > 0 && dependencyArray.length > 0) {
        let matchArrKey = [];
        cyclic = 0;
        // loop of task and check it in dependency Array
        taskArray.map((task) => {
            let check = false;
            // loop of dependices and distrubute the string 
            dependencyArray.map((curDepen) => {
                let dependent = curDepen.substr(0, 1); // first letter of string
                let dependentOn = curDepen.substr(-1, 1);// last letter of string


                if (task === dependent) {
                    check = true;
                    // filter the  keys with values and  dependencies 
                    let dependArray = matchArrKey.filter(obj => obj.key === dependentOn);
                    if (dependArray.length > 0) {
                        result = [];
                        cyclic = 1;
                        return result = "Error - this is a cyclic dependency";
                    }
                    else {
                        matchArrKey.push({ "key": dependent, "value": dependentOn });
                        this.allDependency = matchArrKey;
                    }
                }
            })

        })


        const objCreate = Object.fromEntries(taskArray);
        console.log("objCreate", objCreate);

        // const g = new Graph();
        // vertexs.forEach((v) => g.addVertex(v));
        // edges.forEach(v => {
        //     g.addEdge(v.split("=>")[0].trim(), v.split("=>")[1].trim());
        // })

        const g = new Graph();
        taskArray.forEach((v) => g.addVertex(v));
        dependencyArray.forEach(v => {
                g.addEdge(v.split("=>")[0].trim(), v.split("=>")[1].trim());
            })
        var tt=  dfsTopSort(g);
        console.log("tt -->" , tt)


        //     var obj = {
        //         task :[]
        //     }

        //     // var arrobj = matchArrKey.filter(obj => {
        //     //     var key = obj.key
        //     //     var obj ={
        //     //         key :[obj.key === task]
        //     //     }
        //     //     return 
        //     // })
        //     //console.log("arrobj" , arrobj)
        // });
        // console.log("obj ===>" , obj)

        // taskArray.map((task) => {

        //     // var checkKeyDepend = recursiveCheckKey(taskArray, taskArray[0], matchArrKey);
        //     console.log("checkKeyDepend", checkKeyDepend)
        //     var checkKeyDepend = sendNodes( task, matchArrKey);
        //     return checkKeyDepend;

        // })
        //if()


        var checkKeyDepend = sendNodes(taskArray[0], matchArrKey);
        return checkKeyDepend;


    }
}
//allDependency
// let resultFinal = []

const sendNodes = (taskElement, matchArrKey) => {

    let sendMatch = matchArrKey;

    let resultFinal = recursiveCheckKey2(taskElement, sendMatch)
    console.log("resultFinal -->", resultFinal);
    console.log("sendMatch", sendMatch)

}


const recursiveCheckKey2 = (taskElement, matchArrKey) => {

    sendArray = []
    matchArrKey.some(function (el) {
        if (el.key !== taskElement) {
            result = []
            if (!result.includes(taskElement)) {
                result.push(taskElement);
                var index = matchArrKey.map(function (e) { return e.value; }).indexOf(taskElement);
                console.log(index);
                //let removeObj = matchArrKey.splice(0,1)
                //sendArray = [{"result" : result} , ]
            }
        }
        else {
            // if(!result.includes(el.value)){
            recursiveCheckKey2(el.value, matchArrKey);
            // }
            // else{
            //     result.push(taskElement);
            // }

        }
    });
    return result

}

const recursiveCheckKey = (taskArray, taskElement, matchArrKey) => {

    let allTask = taskArray
    result = []
    console.log("taskArray --->", allTask, "31000000")
    let firstElement = true;
    // let lastElement = 

    // allTask.map((task) => {
    console.log("matchArrKey", matchArrKey)
    checkValue = null;
    // result = []


    matchArrKey.some(function (el) {


        if (el.key !== taskElement) {
            console.log(taskElement);
            if (!result.includes(taskElement)) {
                result.push(taskElement);
                // result.push(task);
                console.log("result --->", result)

            }

        }

        else {
            recursiveCheckKey(allTask, el.value, matchArrKey);
        }
    });

    // if(result.includes(task[taskArray.length -1])){
    //     return;
    // }

    //});

    return result;

    // matchArrKey.some(function (el) {
    //     // if (el.key !== task && el.value !== task) {
    //     //     if (!result.includes(task)) {
    //     //         result.push(task);
    //     //     }
    //     //     console.log(task)
    //     // }
    //     if (el.key !== task) {
    //         if (!result.includes(task)) {
    //             result.push(task);
    //         }
    //         recursiveCheckKey(el.key, matchArrKey);

    //     } else {
    //         recursiveCheckKey(el.value, matchArrKey);
    //         console.log(result);
    //     }
    // });



    //});

    // return result;
}


const sortingResultNode = (taskArray, dependencyArray) => {
    let result = [];
    let g = new Graph();
    let directedOrder = []
    if (taskArray.length <= 0 && dependencyArray.length <= 0) {
        return result;
    }
    else if (taskArray.length > 0 && dependencyArray.length === 0) {
        return result = taskArray;
    }

    else if (taskArray.length > 0 && dependencyArray.length > 0) {
        let matchArrKey = [];
        cyclic = 0;
        // loop of task and check it in dependency Array
        taskArray.map((task) => {
            let check = false;
            // loop of dependices and distrubute the string 
            dependencyArray.map((curDepen) => {
                let dependent = curDepen.substr(0, 1); // first letter of string
                let dependentOn = curDepen.substr(-1, 1);// last letter of string


                if (task === dependent) {
                    check = true;
                    // filter the  keys with values and  dependencies 
                    let dependArray = matchArrKey.filter(obj => obj.key === dependentOn);
                    if (dependArray.length > 0) {
                        result = [];
                        cyclic = 1;
                        return result = "Error - this is a cyclic dependency";
                    }
                    else {
                        matchArrKey.push({ "key": dependent, "value": dependentOn });

                        directedOrder = matchArrKey.push({ dependent, dependentOn });
                        g.addNode(task);


                    }
                }
            })

        })


        console.log("directedOrder --->", directedOrder)
        console.log("g nodes", g)


        

        taskArray.map((task) => {
            // matchArrKey




            var checkKeyDepend = recursiveCheckKey(taskArray, taskArray[0], matchArrKey);

            console.log("checkKeyDepend", checkKeyDepend)

            return checkKeyDepend;

        })


    }
}


const topologicalSortHelper = (node, explored, s) => {
    explored.add(node);
    // Marks this node as visited and goes on to the nodes
    // that are dependent on this node, the edge is node ----> n
    this.edges[node].forEach(n => {
        if (!explored.has(n)) {
            this.topologicalSortHelper(n, explored, s);
        }
    });
    // All dependencies are resolved for this node, we can now add
    // This to the stack.
    s.push(node);
}

const topologicalSort = () => {
    // Create a Stack to keep track of all elements in sorted order
    let s = new Stack(this.nodes.length);
    let explored = new Set();

    // For every unvisited node in our graph, call the helper.
    this.nodes.forEach(node => {
        if (!explored.has(node)) {
            this.topologicalSortHelper(node, explored, s);
        }
    });

    while (!s.isEmpty()) {
        //console.log(s.pop());
        console.log(s);
    }
}

//----------------




module.exports.array = toposort

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
    }
}

function dfsTopSortHelper(graph, v, n, visited, topNums) {
    visited[v] = true;
    const neighbors = graph.adjacencyList[v];
    for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
            n = dfsTopSortHelper(graph, neighbor, n, visited, topNums);
        }
    }
    topNums[v] = n;
    return n - 1;
}
function dfsTopSort(graph) {
    const vertices = Object.keys(graph.adjacencyList);
    const visited = {};
    const topNums = {};
    let n = vertices.length - 1;
    for (const v of vertices) {
        if (!visited[v]) {
            n = dfsTopSortHelper(graph, v, n, visited, topNums)
        }
    }
    return topNums;
}
function toposort(vertexs, edges) {
    const g = new Graph();
    vertexs.forEach((v) => g.addVertex(v));
    edges.forEach(v => {
        g.addEdge(v.split("=>")[0].trim(), v.split("=>")[1].trim());
    })
    return dfsTopSort(g);
}
//-------------------
// Routes
app.post('/ques', (req, res) => {

    let taskArray = req.body.task
    let dependenciesArray = req.body.dependencies;
    // var ans = sortingResult(taskArray, dependenciesArray);

    // var ans2 = sortingResult(['a', 'b', 'c', 'd', 'e', 'f'],
    //     ['a =>b', 'a => c', 'a =>b', 'a =>c', 'b => d', 'c=> d', 'e=>f']);

    // var ans1 = sortingResult(['a', 'b', 'c', 'd', 'e', 'f'],
    // ["a => b", "c => d"]);

    // var ans1 = sortingResulttri(["a", "b", "c", "d", "e", "f"],
    // ["a => b" , "a => c" , "b => d" , "c => d" , "e => f"])
    var ans1 = sortingResulttri(["a", "b", "c", "d", "e", "f"],
        ["a => b", "a => c", "b => d", "c => d", "e => f"])

    //console.log(toposort(["a", "b", "c", "d", "e", "f"], ["a => b", "a => c", "b => d", "c => d", "e => f"]))

    // var ans1 =  sortingResultNode(["a", "b", "c", "d", "e", "f"],
    // ["a => b", "a => c", "b => d", "c => d", "e => f"])

    // var ans1 = sortingResult(["a", "g", "b", "c", "d", "e", "f"],
    //     ["a => b", "c => d"])

    // var ans2 = sortingResult(["a", "g", "b", "c", "d", "e", "f"],
    //     ["a => b", "c => d"]);

    // var ans1 = sortingResulttri(["a", "g", "b", "c", "d", "e", "f"],
    // ["a => b", "c => d"]);

    // var dd = changeArraytoLink(["a", "g", "b", "c", "d", "e", "f"],
    //     ["a => b", "c => d"]);







    // var sortingBinaryTreeans = sortingBinaryTree()

    // console.log(JSON.stringify(listToTree(arr), undefined, 4));

    return res.status(200).json({ success: 1, message: 'Request successful', Result: ans1, Result2: ans1 });
});

app.listen(3000)