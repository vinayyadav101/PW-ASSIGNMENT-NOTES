const fs = require('fs');


fs.readFile('nodejs_architecture.txt' , (err , data) => {
    if (err) {
        console.log(err);
    }else{
        console.log(data.toString());
    }
})