const express = require('express');
//const morgan = require('morgan');
const router = express.Router();

let store = [

    {
        name: 'apple',
        price: 1.5
    }

];

// Get
router.get('/get-all-products',(req, res) => {
    let names = [];

    for (let i = 0; i < store.length; i++) {
        names.push(store[i].name);
    }
    res.json(names)
})

// Post
router.post('/create-product', (req, res) => {
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
router.put('/update-product/:name', (req, res) => {
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

// Delete
router.delete("/delete-product/:name", (req, res) => {
    const newArray = store.filter(product => product.name === req.params.name);
    if (newArray === -1) {
        res.end("Product not found")
    } else {
        store.splice(newArray, 1);
        res.end("Product Deleted")
    };
})

module.exports = router;