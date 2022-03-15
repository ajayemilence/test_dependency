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

            // 
        });

        taskArray.map((task) => {
            //if (!check) {
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
            //}
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

    // var ans1 = sortingResult(["a", "b", "c", "d", "e", "f"],
    //     ["a => b", "a => c", "b => d", "c => d", "e => f"])

    // var ans1 = sortingResult(["a", "g", "b", "c", "d", "e", "f"],
    //     ["a => b", "c => d"])

    var ans2 = sortingResult(["a", "g", "b", "c", "d", "e", "f"],
        ["a => b", "c => d"])

    // var dd = changeArraytoLink(["a", "g", "b", "c", "d", "e", "f"],
    //     ["a => b", "c => d"]);







    // var sortingBinaryTreeans = sortingBinaryTree()

    // console.log(JSON.stringify(listToTree(arr), undefined, 4));

    return res.status(200).json({ success: 1, message: 'Request successful', Result: ans2, Result2: ans2 });
});

app.listen(3000)