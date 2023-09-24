const usermap = new Map();

// adduser function
function addUser(name , age , email){
    usermap.set(name , {name , age , email});
};

//updateuser function
function updateuser(name , newname , newage , newemail){
    if (usermap.has(name)) {
        usermap.set(`updated details ${name}` , {name: newname , age: newage ,email: newemail})
        usermap.delete(name)
    } else {
        console.log(`invalid user!`);
    }
};

//deleteuser function
function deleteuser(name){
    if (usermap.has(name)) {
        usermap.delete(name);    
    } else {
        console.log(`invalid user!`);
    }
};

//some adduser
addUser("vinay", 22 , "vinay60242@gmail.com");
addUser("dipak",22,"dipak@gmail.com");

//print after adduser
usermap.forEach(function (value){
    console.log(`Name:${value.name} Age:${value.age} Email:${value.email}`)
});

//output : 
// Name:vinay Age:22 Email:vinay60242@gmail.com
// Name:dipak Age:22 Email:dipak@gmail.com

//some updateuser detail function
updateuser("vinay" , "sahil" , 21 , "sahil@gmail.com");

//print after updateuser details
usermap.forEach(function (value){
    console.log(`Name:${value.name} Age:${value.age} Email:${value.email}`)
});

//output :
// Name:dipak Age:22 Email:dipak@gmail.com
// Name:sahil Age:21 Email:sahil@gmail.com

//some delete user details
deleteuser("dipak");

//print after delete user
usermap.forEach(function (value){
    console.log(`Name:${value.name} Age:${value.age} Email:${value.email}`)
});

//output:
// Name:sahil Age:21 Email:sahil@gmail.com
