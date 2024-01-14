let person = {
    "firstName": "vinay",
    "lastName" : "yadav",
    age: 22 
}

let ageInDays = (per , callback) =>{
    let ageInDays = per.age * 365
    let fullName = per.firstName + " " + per.lastName
    return callback(fullName , ageInDays)
}
let logResult = (name , ageinday) => {
    return `"The person's full name is ${name} and thire age in days is ${ageinday}`
}
console.log(ageInDays(person , logResult ))