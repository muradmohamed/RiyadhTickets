const SECRET_TOKEN = "THIS-IS-JUST-A-SECRET-RIYADH";
const jwt = require('jsonwebtoken');
const { users } = require('./mongodb');

const generateAccessToken = (user_id) => {
    return jwt.sign(user_id, SECRET_TOKEN);
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, SECRET_TOKEN, async (err, user_id) => {
      console.log(err);
      if (err) return res.sendStatus(403)
  
      req.user = await users.findOne({_id: user_id});
  
      next()
    });

  }

  module.exports = {generateAccessToken, authenticateToken};