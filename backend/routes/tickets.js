const express = require('express');
const router = express.Router();
const {tickets} = require('../base/mongodb');

router.get('/tickets', function (req, res) {
    res.send('')
  });
  
  
  router.post('/tickets', async function (req, res) { 
    // tickets.insertOne(req.body);
    //   return res.json({status:"success"})
  })
  




module.exports = router;