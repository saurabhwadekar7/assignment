const express = require('express');
const router = express.Router();
const Sample = require('../models/Sample');

router.get('/', async (req, res) => {
  try {
    const samples = await Sample.find();
    res.json(samples);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
