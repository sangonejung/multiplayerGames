/**
 * 1) require() Method:
 * require() is a built-in function to include external modules that 
 * exist in separate files. 
 * require() statement basically reads a JavaScript file, executes it,
 * and then proceeds to return the export object.
 * 
 * 2) path Object:
 * Links both url/dir
 */
const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000
/**
 * Need some clarification here
 * io object has a backend connection to '/socket.io/socket.io.js' 
 */
let app = express()
let server = http.createServer(app)
let io = socketIO(server) 

app.use(express.static(publicPath)) //Serving static files

/**
 * io.on() listens to an event
 */
io.on('connection',(socket) => {
    console.log("A new user just connected")
    
    socket.on('disconnect',() => {
        console.log("A new user just disconnected")
    })
})


server.listen(port, () =>{
    console.log(`Server is up on port ${port}`)
})
