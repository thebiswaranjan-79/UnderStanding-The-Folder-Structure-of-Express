const express = require('express');
const homePingController = require('../../controller/mainController');

const router = express.Router();


router.get('/ping', homePingController);



module.exports =  router ;
