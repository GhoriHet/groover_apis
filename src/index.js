const express = require('express');
const cors = require('cors');

const connectMongoDatabase = require('./database/mongoDB_index');
connectMongoDatabase();

const app = express();
app.use(express.json());
app.use(cors());

const routs = require('./routes/routes_index');
app.use('/api', routs);

// Fallback for 404 errors
app.use('*', (req, res) => {
    res.status(404).send('Page not found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`* Server Start On Port ${port}`));
