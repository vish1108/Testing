const express = require('express');
const routes = require('./routes');

// Create an instance of the express application
const app = express();

const url = "mongodb://127.0.0.1/Manus"
const port = 5500; 
mongoose.connect(url, {})
    .then(result => console.log("Finally Done Congrats..."))
    .catch(err =>console.log(err))

app.get('/', (req, res) =>{
    res.send("<h1>Hello from node js app by Vishal</h1>")
})


app.listen(port, () =>{
    console.log("Server is running on this port" + port)
})