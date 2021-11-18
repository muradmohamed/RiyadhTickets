const { MongoClient } = require('mongodb');
let config = {mongoUrl: process.env?.mongoUrl};
if(!process.env.mongoUrl) config = require('./config.json')

const client = new MongoClient(config.mongoUrl);

client.connect().then(() => console.log('Connected successfully to mongodb'));

const db = client.db("main");

module.exports = {
    db,
    users: db.collection("users"),
    tickets: db.collection("tickets"),
    events: db.collection("events")
};
