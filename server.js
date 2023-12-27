// server.js
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Load routes from the routes/index.js file
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

