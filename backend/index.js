const express = require('express');
const Users = require('./routes/users');
const app = express();
const port = 8080;
const cors = require('cors');
// middle wares
app.use(cors());
app.use(express.json());

// routers
app.use('/users', Users)

// main endpoints
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
})