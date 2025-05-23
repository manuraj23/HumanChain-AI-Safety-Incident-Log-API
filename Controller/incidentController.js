const Incident = require('../Models/incidentModels');

exports.getAllIncidents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const total = await Incident.countDocuments();
    const incidents = await Incident.find()
      .sort({ reported_at: -1 }) 
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      status: 'success',
      page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
      data: incidents
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.getIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findOne({ id: req.params.id });
    if (!incident) {
      return res.status(404).json({ status: 'fail', message: 'Incident not found' });
    }
    res.status(200).json({ status: 'success', data: incident });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.createIncident = async (req, res) => {
  try {
    const { title, description, severity } = req.body;
    const newIncident = new Incident({ title, description, severity });
    await newIncident.save();
    res.status(201).json({ status: 'success', data: newIncident });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.deleteIncidentById = async (req, res) => {
  try {
    const incident = await Incident.findOneAndDelete({ id: req.params.id });
    if (!incident) {
      return res.status(404).json({ status: 'fail', message: 'Incident not found' });
    }
    res.status(204).json({ status: 'success', data: null });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

exports.updateIncidentById = async (req, res) => {
  try {
    const { title, description, severity } = req.body;
    const incident = await Incident.findOneAndUpdate(
      { id: req.params.id },
      { title, description, severity },
      { new: true, runValidators: true }
    );
    if (!incident) {
      return res.status(404).json({ status: 'fail', message: 'Incident not found' });
    }
    res.status(200).json({ status: 'success', data: incident });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};