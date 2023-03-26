// express is used to make routes to be used for other applications
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const cors = require('cors');
const port = 5000
// create application/json parser (this is used to read incoming json messages)
var jsonParser = bodyParser.json()
 

//Defining cors to accept incoming traffic from all sources (ip addresses)
app.use(cors({
    origin: '*'
}));


//route (function) to get data from server1 that it's posting after 7 seconds after startup
app.post('/postDataFromServer1', jsonParser, (req, res) => {
  console.log("Got data from server1...", req.body);
  res.send({data: 'Hello from server2, we got your data!'})
})


//launcing our application (server)...
app.listen(port, () => {
  console.log(`Server2 listening on port ${port}`)
})