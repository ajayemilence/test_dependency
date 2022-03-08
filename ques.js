const sortingResult = (taskArray, dependencyArray) => {
    let result = [];

    // conditions for empty task and dependency
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
                    // checks tp swap they keys of dependencies 
                    let dependArray = matchArrKey.filter(x => x.key === dependent);
                    if (dependArray.length <= 0) {
                        let dependArray = matchArrKey.filter(x => x.key === dependentOn);
                        if (dependArray.length > 0) {
                            result = [];
                            return result = "Error - this is a cyclic dependency";
                        }
                        else {
                            matchArrKey.push({ "key": dependent, "value": dependentOn });
                        }
                    }

                }
            })

            if (!check) {
                // multiple dependinces for same variable
                let dependArraySecond = matchArrKey.filter(x => x.value === task);
                if (dependArraySecond.length > 0) {
                    result.push(dependArraySecond[0].value);
                    let key = dependArraySecond[0].key;
                    let Dependent = matchArrKey.filter(x => x.value === key);
                    if (Dependent.length > 0) {
                        result.push(Dependent[0].value);
                        result.push(Dependent[0].key);
                    }
                    else {
                        result.push(key);
                    }
                }
            }
        })
        return result;
    }
};

export default sortingResult;