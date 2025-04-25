const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load env
dotenv.config(); // Assumes .env in root

// Load model
const Incident = require('../Models/incidentModels');

// Mongo connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ Connection error:', err);
    process.exit(1);
  });

// Load incidents data
const dataPath = path.join(__dirname, 'incidents.json');
const incidents = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Insert data
const insertData = async () => {
  try {
    for (const item of incidents) {
      try {
        const incident = new Incident(item);
        await incident.save();
        console.log(`✅ Inserted: ${incident.title}`);
      } catch (err) {
        console.error(`❌ Error inserting ${item.title || 'an incident'}:`, err.message);
      }
    }
    console.log('🎉 All data processed.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Error during insert process:', err.message);
    process.exit(1);
  }
};

insertData();
