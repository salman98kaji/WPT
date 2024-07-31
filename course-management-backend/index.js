const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');

app.use('/api', userRoutes);
app.use('/api', courseRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});