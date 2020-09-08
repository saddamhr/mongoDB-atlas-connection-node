const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const connectDB = require('./DB/connection');
const app = express();
const mongoose = require('mongoose');
var cors = require('cors');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.r5usd.mongodb.net/test?retryWrites=true&w=majority";
let client = new MongoClient(URI, { useNewUrlParser: true });

app.use(cors());

connectDB();

// BLOG POST
app.use(express.json({extended: false}));
app.use('/api/userModel', require('./API/User'));

// APPLY FORM
// app.use(express.json({extended: false}));
app.use('/api/formModel', require('./API/Form'));
// app.use('/api/formModel', require('./API/Form'));

app.get('/api/getForm', (req, res) => {
    client = new MongoClient(URI, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("test").collection("forms");
        collection.find().toArray((err, documents) => {
            if (err) {
                console.log(err)
                res.status(500).send({ message: err });
            }
            else {
                res.send(documents);
            }
        });
        client.close();
    });
});



const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));