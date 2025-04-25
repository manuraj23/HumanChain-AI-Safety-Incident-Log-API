const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [3, 'Title must be at least 3 characters long'],
    maxlength: [100, 'Title must be at most 100 characters long'],
    unique: true,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [500, 'Description must be at most 500 characters long'],
    trim: true
  },
  severity: {
    type: String,
    required: [true, 'Severity is required'],
    enum: {
      values: ['Low', 'Medium', 'High'],
      message: 'Severity must be either Low, Medium, or High'
    }
  },
  reported_at: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Incident', incidentSchema);
