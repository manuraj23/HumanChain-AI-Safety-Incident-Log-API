const express = require('express');
const router = express.Router();
const incidentController = require('../Controller/incidentController');

router.get('/', incidentController.getAllIncidents);
router.get('/:id', incidentController.getIncidentById);
router.post('/', incidentController.createIncident);
router.delete('/:id', incidentController.deleteIncidentById);
router.put('/:id', incidentController.updateIncidentById);
module.exports = router;
