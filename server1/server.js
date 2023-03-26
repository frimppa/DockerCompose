// express is used to make routes to be used for other applications
const express = require('express')
const app = express()
const cors = require('cors');

//defininf the port to be used
const port = 4000

//Defining cors to accept incoming traffic from all sources (ip addresses)
app.use(cors({
    origin: '*'
}));

// basic route for client to fetch data, try changing the text from data and see that it's changed in the client too
// after restarting both apps
app.get('/', (req, res) => {
  res.send({data: 'Hello World!'})
})

//after 7 seconds (7000ms) an important message "asd" is sent to server2 to specific route that has a handler for this
//this is 7 sec loop
const fetchData = () => {
setTimeout(()=>{
  //local testing address: http://localhost:5000/postDataFromServer1


  //because of the docker-compose, we have to (for some reason?) to name the fetched address as it is named
  //inside of the docker-compose file (so in this case as "server2"). Localhost address won't work between
  //two nodejs containers but if you are fetching from react-client container, you can actually use localhost there.

  fetch('http://server2:5000/postDataFromServer1', 
  {
    method: "POST",
    //you can try without this no-cors setting too
    mode: "no-cors",
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({data: "asd"})
  })
        .then(response => response.json())
        .then(data => {
          console.log("data", data)
        })
        .catch(err => {
          console.log("ERROR: ", err)
          fetchData();
        })
        ;
}, 7000)
}
fetchData();
//launcing our application (server)...
app.listen(port, () => {
  console.log(`Server1 listening on port ${port}`)
})