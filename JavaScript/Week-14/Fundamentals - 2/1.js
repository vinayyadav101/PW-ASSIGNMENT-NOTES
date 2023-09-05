let alluser = [
    "vinay",
    "dipak",
    "sahil",
    "meet",
    "Mithun"
]; 

function isUserPresent(user) {
    if (alluser.includes(user)) {
        console.log('Yes, ' + user + ' is a valid user.');        
    } else {
        console.log('No, ' + user + ' is not a valid user.');
    }
}

isUserPresent("vinay");
// output :- Yes, vinay is a valid user.

isUserPresent("bhavik");
// output :- No, bhavik is not a valid user.