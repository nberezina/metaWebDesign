let sayHello = function (name, surname) {
    let helloStr = "Hello, " + name + " " + surname
    console.log(helloStr)
}

let maxArrVal = function (arr) {
    // check if we got array
    if (Array.isArray(arr)) {
        // check if we got array of numbers
        if (arr.every(elem => !isNaN(elem))) {
            // actual calculation of max value
            let max = Math.max.apply(Math, arr)
            console.log("Got max value ", max)
        } else {
            console.log("ERR: Some list item is not a number, unable to get max value");
        }
    } else {
        console.log("Err: Provided argument is not list")
        return
    }
}

let defineAge = function (userObj) {
    // check if object has all values defined
    if (userObj.name == undefined) {
        console.log("Name is not specified")
        return
    }
    if (userObj.age == undefined) {
        console.log("Age is not specified")
        return
    }

    if (userObj.gender == undefined) {
        console.log("Gender is not specified")
        return
    }

    let toast1, toast2, gender_transformed;

    // check if gender is number
    if (!isNaN(userObj.age)) {
        if (userObj.age >= 22) {
             toast1 = "Congratulations, "
             toast2 = ", you are allowed "
        } else {
             toast1 = "Sorry, "
             toast2 = ", you are not allowed"
        }
    } else {
        console.log("ERR: use actual age ")
        return
    }

    // check gender
    if (userObj["gender"].toLowerCase() == "male") {
         gender_transformed = "mister "
    } else {
        if (userObj["gender"].toLowerCase() == "female") {
             gender_transformed = "miss "
        } else {
            console.log("ERR: You are using unknown gender")
            return
        }
    }

    let toast = toast1 + gender_transformed + userObj.name + toast2
    console.log(toast)
    return toast

}