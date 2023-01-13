const models = require ('../models');

const Attendee = models.Attendees

const addAttendee = async(req,res) =>{
  const data = req.body;
  try{
    await Attendee.create(
      data
    );
    res.status(201);
    res.json({
      'statusCode' : 201,
      'message': 'Added Successful',
      'body': data
    });

  }catch(err){
    res.status(400);
    console.log(err)
  }
}

async function getAttendedEvents(req, res) {
  try {
    const userId = req.params.id;
    const data = await models.sequelize.query(
      `SELECT events.id, events.name, events.dateFrom, events.dateTo FROM events
      INNER JOIN attendees ON events.id = attendees.eventId
      INNER JOIN users ON attendees.userId = users.id
      WHERE users.id = ${userId}`
    );
    res.json(data[0]);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
}

const getAttendeesOfEvent = async(req,res) =>{
  try{
    const eventId = req.params.id;
    const data = await models.sequelize.query(
      `SELECT DISTINCT users.id ,users.name, users.email FROM users 
      INNER JOIN attendees ON users.id = attendees.userId
      INNER JOIN events ON attendees.eventId = events.id
      WHERE events.id = ${eventId}`, {type: models.sequelize.QueryTypes.SELECT}
    );
    console.log(data)
    res.status(200);
    res.json(data);
  }catch(err){
    res.status(400);
    console.log(err)
  }
}

module.exports = {
  addAttendee,
  getAttendedEvents,
  getAttendeesOfEvent
}