const EventEmitter = require('events');



const myemit = new EventEmitter()

let set_Maxlistener = 'false'

const MaxListeners = function(){
    if (set_Maxlistener == 'true') {
        console.log(`Teh updated maximume number of event listeners are : ${myemit.getMaxListeners()}`);
    }else{
        console.log(`Teh deafult maximume number of event listeners are : ${myemit.getMaxListeners()}`);
    }
}

const update_MaxListeners = function(n){

    myemit.setMaxListeners(n)
    set_Maxlistener = 'true'

}

myemit.on('get_max_listener' , MaxListeners)
myemit.on('set_max_listener' , update_MaxListeners)



myemit.emit('get_max_listener')
myemit.emit('set_max_listener' , 5)
myemit.emit('get_max_listener')



