// server.js
const express = require('express');
const connectDB = require('./configuration/db');

const productRoutes = require('./routes/prodRoutes');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', productRoutes);

const PORT = process.env.PORT || 4100;
//app.listen(PORT);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
