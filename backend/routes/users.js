const express = require('express')
const router = express.Router()
const {users} = require('../base/mongodb');


// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page')
});


router.post('/', async function (req, res) { 
    users.insertOne(req.body);
    return res.json({status:"success"})
})

module.exports = router