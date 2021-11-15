const express = require('express');
const { $events } = require('../base/mongodb');
const router = express.Router()

router.get('/', async (req, res) => {
    const events = await $events.find({}).toArray();
    res.json(events)
});




module.exports = router;