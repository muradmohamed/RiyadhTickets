const express = require('express');
const { generateAccessToken, authenticateToken } = require('../base/jwt');
const router = express.Router()
const {users} = require('../base/mongodb');
const md5 = require('md5');

// get user details
router.get('/', authenticateToken, function (req, res) {
  res.send('Birds home page')
});

// exchange username & password with token
router.post('/login', async (req, res) => {

  if(!req.body.email || !req.body.password) 
    return res.status(400).json({error:"Missing parameters"});

  let user = await users.findOne({email: req.body.email, password: md5(req.body.password)})
  if(user) {
    let generatedToken = await generateAccessToken(user_id);
    res.json({token: generatedToken});
  }
  return res.status(403).json({error: "Wrong email or password"});
})

// exchange register with token
router.post('/register', async function (req, res) { 

})

module.exports = router