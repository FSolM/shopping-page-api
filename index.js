const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running!')
});

// External operations
require('./api/cartOperations')(app);
require('./api/shirtOperations')(app);
require('./api/penOperations')(app);
require('./api/mugOperations')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
