const express = require('express');
const { events } = require('../base/mongodb');
const router = express.Router()

router.get('/', async (req, res) => {
    const data = await events.find({}).toArray();
    res.json(data)
});

router.get('/:id', async (req, res) => {
    const data = await events.findOne({id:req.params.id});
    res.json(data);
});





module.exports = router;