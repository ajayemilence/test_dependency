// // const SortingResult = (taskArray, dependencyArray) => {
// //     let result = [];
// //     cyclic = 0;

// //     if (taskArray.length <= 0 && dependencyArray.length <= 0) {
// //         return result;
// //     }
// //     else if (taskArray.length > 0 && dependencyArray.length === 0) {
// //         return result = taskArray;
// //     }
// //     else if (taskArray.length > 0 && dependencyArray.length > 0) {
// //         let matchArrKey = [];
// //         taskArray.map((task) => {
// //             let check = false;

// //             dependencyArray.map((curDepen) => {
// //                 let dependent = curDepen.substr(0, 1); // first letter of string
// //                 let dependentOn = curDepen.substr(-1, 1);// last letter of string

// //                 if (task === dependent) {
// //                     check = true;
// //                     // let dependArray = matchArrKey.filter(obj => obj.key === dependent);
// //                     // if (dependArray.length <= 0) {
// //                         let dependArray = matchArrKey.filter(obj => obj.key === dependentOn);
// //                         if (dependArray.length > 0) {
// //                             cyclic = 1;
// //                             result = [];
// //                             return result = "Error - this is a cyclic dependency";
// //                         }
// //                         else {
// //                             matchArrKey.push({ "key": dependent, "value": dependentOn });
// //                         }
// //                     //}

// //                 }
// //                 console.log("task 111 -->" , task)
// //             })

// //             if (!check) {
// //                 let dependArraySecond = matchArrKey.filter(obj => obj.value === task);
// //                 if (dependArraySecond.length > 0) {
// //                     result.push(dependArraySecond[0].value);
// //                     let key = dependArraySecond[0].key;
// //                     let Dependent = matchArrKey.filter(obj => obj.value === key);
// //                     if (Dependent.length > 0) {
// //                         result.push(Dependent[0].value);
// //                         result.push(Dependent[0].key);
// //                     }
// //                     else {
// //                         result.push(key);
// //                     }
// //                 }
// //             }
// //             console.log("task -->" , task)
// //         })
// //         if(cyclic == 0){
// //         taskArray.map((task) => {
// //             if (!result.includes(task)) {
// //                 result.push(task)
// //             }
// //         });
// //     }
// //         return result;
// //     }
// // };
// const SortingResult = (taskArray, dependencyArray) => {
//     let result = [];

//     if (taskArray.length <= 0 && dependencyArray.length <= 0) {
//         return result;
//     }
//     else if (taskArray.length > 0 && dependencyArray.length === 0) {
//         return result = taskArray;
//     }
//     else if (taskArray.length > 0 && dependencyArray.length > 0) {
//         let matchArrKey = [];
//         cyclic = 0;
//         // loop of task and check it in dependency Array
//         taskArray.map((task) => {
//             let check = false;
//             // loop of dependices and distrubute the string 
//             dependencyArray.map((curDepen) => {
//                 let dependent = curDepen.substr(0, 1); // first letter of string
//                 let dependentOn = curDepen.substr(-1, 1);// last letter of string

//                 if (task === dependent) {
//                     check = true;
//                     // filter the  keys with values and  dependencies 
//                     let dependArray = matchArrKey.filter(obj => obj.key === dependentOn);
//                     if (dependArray.length > 0) {
//                         result = [];
//                         cyclic = 1;
//                         return result = "Error - this is a cyclic dependency";
//                     }
//                     else {
//                         matchArrKey.push({ "key": dependent, "value": dependentOn });
//                         if (taskArray[taskArray.length - 1] == matchArrKey) {
//                         }
//                     }
//                 }
//             })

//             if (!check) {
//                 // if the depency of key is not there
//                 let dependArraythird = []
//                 let dependArraySecond = matchArrKey.filter(obj => obj.value === task);

//                 dependArraythird = matchArrKey.filter(obj => obj.value === taskArray[taskArray.length - 1]);
//                 if (dependArraythird.length !== 0) {
//                     missArraythird = matchArrKey.filter(obj => {
//                         if (result[result.length - 1] === obj.key) {
//                             if (!result.includes(obj.value)) {
//                                 result.splice( result.length - 1, 0, obj.value )
//                             }
//                         }
//                         obj.value === result[result.length - 1]
//                     });
//                     console.log(missArraythird, missArraythird)
//                 }

                
                

//                 if (dependArraySecond.length > 0) {
//                     result.push(dependArraySecond[0].value);
//                     // match and filter the key in depencency array
//                     let key = dependArraySecond[0].key;
//                     let Dependent = matchArrKey.filter(obj => obj.value === key);
//                     if (Dependent.length > 0) {
//                         result.push(Dependent[0].value);
//                         result.push(Dependent[0].key);
//                     }
//                     else {
//                         result.push(key);
//                     }
//                 }

//                 // let persentInDependent = matchArrKey.some(function (el) {
//                 //     return el.key === task;
//                 // });
//                 // let persentInDependentOn = matchArrKey.some(function (el) {
//                 //     return el.value === task;
//                 // });
//                 // if (!persentInDependent && !persentInDependentOn) {
//                 //     result.push(task);
//                 // }
//                 //if (cyclic == 0) {
//                     if (!result.includes(task)) {
//                         // if(task)
//                         result.push(task);
//                     }
//             }
//         })
//         // if (cyclic == 0) {
//         //     taskArray.map((task) => {
//         //         let persentInDependent = matchArrKey.some(function (el) {
//         //             return el.key === task;
//         //         });
//         //         let persentInDependentOn = matchArrKey.some(function (el) {
//         //             return el.value === task;
//         //         });

//         //         if (!result.includes(task)) {
//         //             result.push(task)
//         //         }
//         //     });
//         // }
//         return result;
//     }
// };

// module.exports = SortingResult;

// module.exports = function(vertexs,edges) {
//     return toposort(vertexs, edges)
//   }
  
//   module.exports.array = toposort
  
//   class Graph {
//       constructor() {
//           this.adjacencyList = {};
//       }
//       addVertex(vertex) {
//           if (!this.adjacencyList[vertex]) {
//               this.adjacencyList[vertex] = [];
//           }
//       }
//       addEdge(v1, v2) {
//           this.adjacencyList[v1].push(v2);
//       }
//   }
  
//   function dfsTopSortHelper(graph,v, n, visited, topNums) {
//       visited[v] = true;
//       const neighbors = graph.adjacencyList[v];
//       for (const neighbor of neighbors) {
//           if (!visited[neighbor]) {
//               n = dfsTopSortHelper(graph,neighbor, n, visited, topNums);
//           }
//       }
//       topNums[v] = n;
//       return n - 1;
//   }
//   function dfsTopSort(graph) {
//       const vertices = Object.keys(graph.adjacencyList);
//       const visited = {};
//       const topNums = {};
//       let n = vertices.length - 1;
//       for (const v of vertices) {
//           if (!visited[v]) {
//               n = dfsTopSortHelper(graph,v, n, visited, topNums)
//           }
//       }
//       return topNums;
//   }
//   function toposort(vertexs,edges) {
//       const g = new Graph();
//       vertexs.forEach((v) => g.addVertex(v));
//       edges.forEach(v => {
//       g.addEdge(v.split("=>")[0].trim(), v.split("=>")[1].trim());
//       })
//       return dfsTopSort(g);
//   }