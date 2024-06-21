const EventEmitter = require('events');


const myemit = new EventEmitter()

const channelName = (channel)=>{

    console.log(`Thanks for subscribing to ${channel}`);
}

myemit.on('subscribe' , channelName)

myemit.emit('subscribe' , 'college wall')

// output:- Thanks for subscribing to college wall 

myemit.removeListener('subscribe', channelName)

myemit.emit('subscribe' , 'college wall')

// output:- no output 
