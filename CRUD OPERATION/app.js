const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


// to connect to MongoDB first then run our server
mongoose.connect('mongodb+srv://admin:Amal1949!@backenddb.ltiqgpi.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB')
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {

      console.log('server is runing on port 3000');

    });
  })
  .catch(() => {
    console.log("connection failed")
  });