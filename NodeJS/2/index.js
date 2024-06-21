const fs = require('fs');


const file_content = "Node.js is a platform that utilizes javascript and is primarily employed for developing web application that are highly focused on input/output operation, including but not limited to chat application and multimedia streaming websites.the platform is const ructed using google chromes v8 javascript engine. a web application is a type of software that executes on a server and is displayed by a client's browser that obtaines all the application's resources over the internet."

fs.writeFile('nodejs_architecture.txt' , file_content , (err)=>{
    if(err){
        console.log(err);
    }
})