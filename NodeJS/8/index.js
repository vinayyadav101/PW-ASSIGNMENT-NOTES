const EventEmitter = require('events');


const myemit = new EventEmitter()



myemit.on('subscribe' , (channelName)=>{
    console.log(`Thanks for subscribing  to ${channelName} `);
    
})
myemit.emit('subscribe' , 'college wall')

// output : - Thanks for subscribing  to college wall 


