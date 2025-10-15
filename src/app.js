const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// const datasetRoutes = require('./routes/datasetRoutes');
// const analysisRoutes = require('./routes/analysisRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());

// connect to Mongo
connectDB();

// app.get('/', (req, res) => {
//   res.send('Spatio-Temporal Analysis API is running ✅');
// });

// Routes
// app.use('/api/datasets', datasetRoutes);
// app.use('/api/analysis', analysisRoutes);

module.exports = app;
