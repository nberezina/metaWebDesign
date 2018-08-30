/*task 1*/
let sayHello = function (name, surname) {
    let helloStr = "Hello, " + name + " " + surname
    console.log(helloStr)
}

/*task 2*/
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

/*task 3*/
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
/*task 4*/
let square_equation = function (a, b, c) {
    if (isNaN(a)) {
        console.log("a is not a number")
        return
    }
    if (isNaN(b)) {
        console.log("b is not a number")
        return
    }
    if (isNaN(c)) {
        console.log("c is not a number")
        return
    }
    return function (x) {
        if (isNaN(x)) {
            console.log("x is not a number")
            return
        }
        let res= a*x^2+b*x+c
        return res
    }
}

/*task 5*/
let age_checker = function (obj) {
    if (obj.age) {
        if (!isNaN(obj.age)) {
            if (obj.age > 18 && obj.age < 65) {
                return true
            } else {
                return false
            }
        } else {
            console.log("ERR: age property is not numerical")
            return "ERROR"
        }
    } else {
        console.log("ERR: age property is not defined")
        return "ERROR"
    }

}
