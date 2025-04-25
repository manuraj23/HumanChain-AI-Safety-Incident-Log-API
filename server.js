const  dotenv=require('dotenv');
const express = require('express');
const connectDB = require('./config/db');
const incidentRoutes = require('./Routes/incidentRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use('/incidents', incidentRoutes);

app.get('/', (req, res) => {
    res.send('Journal API Running...');
  });

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
