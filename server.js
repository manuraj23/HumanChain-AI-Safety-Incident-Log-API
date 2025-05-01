const  dotenv=require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const incidentRoutes = require('./Routes/incidentRoutes');
const cors = require('cors');
const path = require('path');
require('dotenv').config();


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/incidents', incidentRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
