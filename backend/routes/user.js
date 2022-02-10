const express = require('express');
const { generateAccessToken, authenticateToken } = require('../base/jwt');
const router = express.Router()
const {users, events} = require('../base/mongodb');
const md5 = require('md5');
const { ObjectId } = require('mongodb');
    
// get user details
router.get('/', authenticateToken, async (req, res) => {
  const myEvents = await events.find({id: {$in: req.user.tickets.map(ticket => ticket.event_id)}}).toArray();
  return res.json({...req.user, tickets: req.user.tickets.map(ticket => ({...ticket, event: myEvents.find(eve => eve.id === ticket.event_id)}))});
});

// exchange username & password with token
router.post('/login', async (req, res) => {

  if(!req.body.email || !req.body.password) 
    return res.status(400).json({error:"Missing parameters"});

  let user = await users.findOne({email: req.body.email, password: md5(req.body.password)})
  if(user) {
    const generatedToken = await generateAccessToken(`${user._id}`);
    return res.json({token: generatedToken});
  }
  return res.status(403).json({error: "Wrong Email or Password"});
})

// exchange register with token
router.post('/register', async function (req, res) {
    if(!Object.keys(req.body).every((key) => ["email", "password", "name"].includes(key)))
      return res.status(400).json({"error": "Missing parameters"});

      try {
        const u = await users.insertOne({
          email: req.body.email,
          name: req.body.name,
          password: md5(req.body.password)
        })
  
        const generatedToken = await generateAccessToken(`${u.insertedId}`)
        return res.json({token: generatedToken});
      } catch (err) {
        // error when it's duplicated email -- (email should be "unique index" in the monogdb)
        return res.status(403).json({error:"Already registered."})
      }

});


router.delete(`/ticket/:index`, authenticateToken, (req, res)=> {
  users.updateOne({_id: ObjectId(req.user._id)}, {$set : {tickets: req.user.tickets.filter((t,i) => i !== parseInt(req.params.index))}})
  return res.json({success: true});
});

module.exports = router
