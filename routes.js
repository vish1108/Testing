const express = require('express');

const mongoose2 = require('mongoose');

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

module.exports = router;
