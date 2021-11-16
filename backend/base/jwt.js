const SECRET_TOKEN = "THIS-IS-JUST-A-SECRET-RIYADH";
const jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { users } = require('./mongodb');

const generateAccessToken = (user_id) => {
    return jwt.sign(user_id, SECRET_TOKEN);
}

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.status(401).json({error: "Wrong auth"});

    jwt.verify(token, SECRET_TOKEN, async (err, user_id) => {
      //console.log(err);
      if (err) return res.sendStatus(403)
      req.user = await users.findOne({_id: ObjectId(user_id)});
      if(!req.user.tickets) req.user.tickets = []; 
      
      next()
    });

  }

  module.exports = {generateAccessToken, authenticateToken};