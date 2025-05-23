const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const cors = require('cors');
const app = express() 
 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello There! You are in Node.");               
})  

app.get('/api/products', async (req, res) => { 
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get('/api/products/:id', async (req, res) => { 
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.put('/api/products/:id', async (req, res) => { 
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(400).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/api/products', async (req, res) => { 
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


mongoose.connect("mongodb+srv://hemanthchiluka792:ZT1k9rSzXoU0MNe6@backend-api.nukz26e.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend-API")
.then(() => {
    console.log("Connected to Database");
    app.listen(5000, () => {
        console.log("Hello User. Server is running on http://localhost:5000");
    })
})
.catch(() => {
    console.log("Connection Failed");
})