const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('')
});


router.post('/', async function (req, res) { 
    // events.insertOne(req.body);
    //   return res.json({status:"success"})
})



module.exports = router;