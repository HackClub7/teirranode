const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const landRoutes = require('./routes/landRoute.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', landRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
