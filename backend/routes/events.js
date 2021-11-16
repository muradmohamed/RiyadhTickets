const express = require('express');
const { ObjectId } = require('mongodb');
const { authenticateToken } = require('../base/jwt');
const { events, users } = require('../base/mongodb');
const router = express.Router()

router.get('/', async (req, res) => {
    const data = await events.find({}).toArray();
    res.json(data)
});

router.get('/:id', async (req, res) => {
    const data = await events.findOne({id:req.params.id});
    if(!data) res.status(404).json({error: 404});
    res.json(data);
});

router.post('/:id/book', authenticateToken,async (req, res) => {
    const data = await events.findOne({id:req.params.id});
    if(!data) res.status(404).json({error: 404});

    users.updateOne({_id: ObjectId(req.user._id)}, {$push: {tickets: {
        event_id: req.params.id,
        ...req.body
    }}});

    res.json(data);
});




module.exports = router;