// server.js
const express = require('express');
const connectDB = require('./configuration/db');

const productRoutes = require('./routes/prodRoutes');
const userRoutes= require ('./routes/userRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);
app.use('/api/users', userRoutes);
const PORT =  4100; //process.env.PORT ||
//app.listen(PORT);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
