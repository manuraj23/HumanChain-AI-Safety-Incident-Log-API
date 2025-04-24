require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const incidentRoutes = require('./Routes/incidentRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/incidents', incidentRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
