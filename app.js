// Imports
const express = require("express")
const app = express()
const port = 3000


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(_dirname + 'public/css'))
app.use('/images', express.static(_dirname + 'public/images'))
app.use('/js', express.static(_dirname + 'public/js'))





// Listen on port 3000
app.listen(port,() => console)