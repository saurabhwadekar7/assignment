
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;


mongoose.connect('mongodb://localhost:5000/sampleDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/samples', require('./routes/samples'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
