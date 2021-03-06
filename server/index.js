const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router/routes.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());

app.use('/api', router);

app.listen(8000, () => {
  console.log('listening on port 8000');
});