const express = require('express');
const connectDB = require('./DB/connection');
const app = express();

connectDB();

app.use(express.json({extended: false}));
app.use('/api/userModel', require('./API/User'));

const PORT = process.env.Port || 5000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));