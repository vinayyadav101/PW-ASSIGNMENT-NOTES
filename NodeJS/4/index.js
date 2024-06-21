const fs = require('fs');



const new_content = " Compared to other server-si de Languages, langua Made is has distinct advantages. Its asynchronous model and non-blocking 1/0 operation Improve the scalability and performance of web applications built on other frameworks. Nude js can easily handle multiple client requests without requiring multiple threads, consusing less menory and resources. Additionally, is highly scalable and provides high performance. Node is is also flexible ith multiple francworks and makes the development process easter. Compared to other server side languages, Node s vantages. Its asynchronous on other frameworks. Node 1s d resources. distinct ad and non-blocking 1/0 operation improve the scalability and performance of wab applications built aasily handle multiple client requests without requiring multiple threads, consuming less seenry Additionally, it is highly scalable provides high performance. Node Nadu is also flexible with multiple frameworks and makes the development process easier. "

fs.appendFile('nodejs_architecture.txt' , new_content , (err)=>{
    if(err){
        console.log(err);
    }
})