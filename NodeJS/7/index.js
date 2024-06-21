const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url == '/') {
        res.write('<h1> I an happy to learn full stack web development  from pw skill!</h1>')
    }
    res.end();
})

server.listen('5000')
console.log('server is working');