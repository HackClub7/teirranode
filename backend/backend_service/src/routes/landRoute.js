const express = require('express');
const { verifyLands }  = require('../controllers/verifyLandController');
const router = express.Router();


router.post('/verify', verifyLands);

module.exports = router;
