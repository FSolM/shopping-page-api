const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('API is running!')
});

require('./api/cartOperations')(app);
require('./api/shirtOperations')(app);
require('./api/penOperations')(app);
require('./api/mugOperations')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
