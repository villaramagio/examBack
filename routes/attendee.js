var express = require('express');
var router = express.Router();
const attendeeController = require('../controller/attendee.controller.js');

router.post('/', attendeeController.addAttendee)
router.get('/user/:id', attendeeController.getAttendedEvents)
router.get('/event/:id', attendeeController.getAttendeesOfEvent)

module.exports = router;