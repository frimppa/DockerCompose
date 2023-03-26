# DOCKER TEST

## CLIENT
Client is a react (used a create-react-app template) that fetches data from server1 from startup. 
For local testing WITHOUT docker: Go to client folder and run: "npm install", and then "npm start"
All the "logic" can be found in App.js file...

## SERVER1
Nodejs application that responds to client fetch by sending to it text "Hello world".
This application also sends (posts) data to server2 after 7 seconds and stays in loop doing it.
For local testing WITHOUT docker: go to folder and "npm install", then "node server.js"

## SERVER2
Nodejs application to receive data from server1. prints the data to console after getting it. You can test this from postman too...
For local testing WITHOUT docker: go to folder and "npm install", then "node server.js"

## RUNNING THE CONTAINERS
in this root folder run "docker-compose up -d". This launches all the containers...

if you want to run only one docker container without compose-file, you can move into the specific folder that you
want to run and type "docker build . -t "insert your tagname" "

If you make changes to code, you have to update the images that compose is using with "docker build".
After this you have to do "docker-compose up -d" again so the updates will flow to it too.