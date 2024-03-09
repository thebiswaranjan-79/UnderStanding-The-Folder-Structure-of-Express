const express = require('express');
const homePingController = require('../../controller/mainController');
const router = express.Router();

router.get('/ping', homePingController);//localhost:3000/api/v1/ping


module.exports = router;