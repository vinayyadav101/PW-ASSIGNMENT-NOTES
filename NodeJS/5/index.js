const fs = require('fs');



fs.unlink('nodejs_architecture.txt' , (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log('file deleted successfully ');
    }

})