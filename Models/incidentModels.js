const mongoose = require('mongoose');
const Counter = require('./counter');

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
    default: Date.now,
    select: false
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

async function getNextSequenceValue(sequenceName) {
  const counter = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { sequence_value: 1 } },
    { new: true, upsert: true } 
  );
  return counter.sequence_value;
}

incidentSchema.pre('save', async function (next) {
  if (this.isNew && this.id == null) {
    this.id = await getNextSequenceValue('incident_id');
  }
  next();
});

module.exports = mongoose.model('Incident', incidentSchema);
