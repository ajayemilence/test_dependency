const express = require('express');
let bodyParser = require('body-parser');

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
        taskArray.map((task) => {
            let check = false;

            dependencyArray.map((curDepen) => {
                let dependent = curDepen.substr(0, 1); // first letter of string
                let dependentOn = curDepen.substr(-1, 1);// last letter of string

                if (task === dependent) {
                    check = true;
                    let dependArray = matchArrKey.filter(x => x.dep === dependent);
                    if (dependArray.length <= 0) {
                        let dependArray = matchArrKey.filter(x => x.dep === dependentOn);
                        if (dependArray.length > 0) {
                            result = [];
                            return result = "Error - this is a cyclic dependency";
                        }
                        else {
                            matchArrKey.push({ "dep": dependent, "value": dependentOn });
                        }
                    }

                }
            })

            if (!check) {
                let dependArraySecond = matchArrKey.filter(x => x.value === task);
                if (dependArraySecond.length > 0) {
                    result.push(dependArraySecond[0].value);
                    let dep = dependArraySecond[0].dep;
                    let Dependent = matchArrKey.filter(x => x.value === dep);
                    if (Dependent.length > 0) {
                        result.push(Dependent[0].value);
                        result.push(Dependent[0].dep);
                    }
                    else {
                        result.push(dep);
                    }
                }
            }
        })
        return result;
    }
};


newSort = (taskArray, dependencyArray) => {
    let result = []
    if (taskArray.length == 0 && dependencyArray.length == 0) {
        return result
    } if (dependencyArray.length == 0) {
        return result = taskArray
    } else {

        taskArray.map((task) => {

            let dependentArray = []
            let reverseDependny = []
            dependencyArray.map((curDepen) => {
                let dependent = curDepen.substr(0, 1); // first letter of string
                let dependentOn = curDepen.substr(-1, 1);// last letter of string

                let depArr = [dependent, dependentOn]
                let depArrRev = [dependentOn, dependent]

                dependentArray.push(depArr);
                reverseDependny.push(depArrRev);
            })

        });
    }



    return result;

}


// Routes
app.post('/ques', (req, res) => {

    let taskArray = req.body.task
    let dependenciesArray = req.body.dependencies;
    var ans = sortingResult(taskArray, dependenciesArray);

    var ans2 = sortingResult(['a', 'b', 'c', 'd', 'e', 'f'],
        ['a =>b', 'a => c', 'a =>b', 'a =>c', 'b => d', 'c=> d', 'e=>f']);

    // var ans2 = sortingResult(['a', 'b', 'c', 'd', 'e', 'f'],
    // ["a => b", "c => d"]);

        
    //  var ans2 = newSort(["a","b","c"],
    //  ["a => b","b => c"]);



    return res.status(200).json({ success: 1, message: 'Request successful', Result: ans, Result2: ans2 });
});

app.listen(3000)