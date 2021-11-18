const fs = require('fs');
const path = require('path');
const express = require('express');
const User = require('./routes/user');
const Events = require('./routes/events');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
// middle wares
app.use(cors());
app.use(express.json());

// routers
app.use('/api/user', User)
app.use('/api/events', Events)

// front end
if(fs.existsSync(path.join(__dirname, '../frontend/build'))) {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}


app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})