const express = require('express');
const User = require('./routes/user');
const Events = require('./routes/events');
const app = express();
const port = 8080;
const cors = require('cors');
// middle wares
app.use(cors());
app.use(express.json());

// routers
app.use('/user', User)
app.use('/events', Events)


// main endpoints
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})