const express = require('express');
const morgan = require('morgan');
// const logger = require('morgan');

const app = express(); // app represents the server

app.use(morgan("dev")); // this will logg the incoming requests// npm morgan in the search bar to visit  package site
app.use(express.json());

let store = [

    {
        name: 'apple',
        price: 1.5
    }

];

app.get('/', (req, res) => { // how does the server handles a request to '/'
   res.json(store);
}) // request type

// Get
app.get('/get-all-products',(req, res) => {
    let names = [];

    for (let i = 0; i < store.length; i++) {
        names.push(store[i].name);
    }
    res.json(names)
})

// Post
app.post('/create-product', (req, res) => {
    //console.log(req.body)
    const found = store.find(product => product.name === req.body.name) //grab the body
    if(found) {
        res.end("Product already exists")
    } else {
        store.push({ name: req.body.name, price: req.body.price });
        res.end("Product added")
    }
    //data.push({...req.body, id: uuidv4()}) // spread operators
    //res.end({message:"Team Created"})
});

// PUT -updated
app.put('/update-product/:name', (req, res) => {
//console.log(req.params.name)
// id => find the team with that id
const foundProduct = store.find(product => product.name === req.params.name)
//console.log(foundTeam)
if(!foundProduct){
    res.end("Product not found");
} else {
 foundProduct.price = req.body.price;
    // edit info
 res.end("Product Updated")
}
})

app.listen(3000, () => { // starts listening to the port we give it
    console.log("Server Started on port 3000");
    
})
