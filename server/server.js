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
const express = require('express')

const publicPath = path.join(__dirname, '/../public')
const port = process.env.PORT || 3000

let app = express()
app.use(express.static(publicPath)) //Serving static files

app.listen(port, () =>{
    console.log(`Server is up on port ${port}`)
})
