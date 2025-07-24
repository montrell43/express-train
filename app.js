const express = require('express');
const morgan = require('morgan');
const storeRouter = require("./routes/storeRouter");
// const logger = require('morgan');

const app = express(); // app represents the server

app.use(morgan("dev")); // this will logg the incoming requests// npm morgan in the search bar to visit  package site
app.use(express.json());
app.use("/api/store", storeRouter);



app.get('/', (req, res) => { // how does the server handles a request to '/'
   res.json("Welcome to my store");
}) // request type

app.use("/", storeRouter);


app.listen(3000, () => { // starts listening to the port we give it
    console.log("Server Started on port 3000");
    
})
