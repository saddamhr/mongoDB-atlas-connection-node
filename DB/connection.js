const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbUser@cluster0.r5usd.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async() => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Database has been connected successfully!');
}

module.exports = connectDB;