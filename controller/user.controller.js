const models = require ('../models');
const User = models.User;

const register = async (req, res) => {
    const data = req.body;
    await User.create(
    data
    );
    return res.json({
        'message' : 'Register Successful',
        'statusCode' : 201,
        'userId' : user.id
    });
    }

const login = async(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;

    try{
      const user = await User.findOne({
      where:{ email : email }
     });
     console.log("This is user: " +user.email)
        if(password != user.password){
            res.status(401);
            return res.json({
                'message' : 'Incorrect Password',
                'statusCode' : 401
            });
        }else{
        const payload = {
            id:user.id,
        }
        res.json({
            'message' : 'Login Successful',
            'user' : user,
            'statusCode' : 200
        });
    }
}catch(err){
    res.status(401);
    res.json({
    'statusCode' : 401,
    'message': 'Wrong email or password'
    })
}
}
module.exports = {
    register,
    login
}