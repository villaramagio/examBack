const models = require ('../models');
const Event = models.Event;

const createEvent = async (req, res) => {
    const data = req.body;
    await Event.create(
     data
    );
    res.json("Event Created");
    }

const updateEvent = async(req,res) =>{
    const data = req.body;
    const userId = req.params.id;
    
    try{
        await Event.update(data, { where: {id : userId}})
        console.log()
        res.status(201);
        res.json({
        'statusCode' : 201,
        'message': 'Update Successful'
        });
    
    }catch(err){
        res.status(400);
        console.log(err)
    }
    
}

const deleteEvent = async(req,res) =>{
    const userId = req.params.id;
    
    try{
        await Event.destroy({ where: {id : userId}})
        console.log()
        res.status(200);
        res.json({
        'statusCode' : 200,
        'message': 'Event Deleted'
        });
    
    }catch(err){
        res.status(400);
        console.log(err)
    }
    
}

const getSpecificEvent = async(req,res) =>{
  const userId = req.params.id;
  try{
    const data = await Event.findOne({ where: {id: userId}});
    res.status(200);
    res.json(data || '');
  }catch(err){
    res.status(400);
    console.log(err)
  }
}

const getEventCreatedBy = async(req,res) =>{
    const userId = req.params.id;
    try{
      const data = await Event.findOne({ where: {createdBy: userId}});
      res.status(200);
      res.json(data || '');
    }catch(err){
      res.status(400);
      console.log(err)
    }
  }

const getEvents = async(req,res) =>{
    
    try{
        const data = await Event.findAll();
        res.status(200);
        res.json(data);
    
    }catch(err){
        res.status(400);
        console.log(err);
    }
    
}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getSpecificEvent,
    getEventCreatedBy,
    getEvents

}

