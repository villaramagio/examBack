const eventController = require('../controller/event.controller');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/createEvent', eventController.createEvent)
router.put('/updateEvent/:id', eventController.updateEvent)
router.delete('/deleteEvent/:id', eventController.deleteEvent)
router.get('/', eventController.getEvents)
router.get('/getSpecificEvent/:id', eventController.getSpecificEvent)
router.get('/getEventCreatedBy/:id', eventController.getEventCreatedBy)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;