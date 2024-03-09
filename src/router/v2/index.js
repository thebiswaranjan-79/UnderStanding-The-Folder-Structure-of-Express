const express = require('express');
const homePingController = require('../../controller/mainController');

const router = express.Router();


router.get('/home', homePingController);



module.exports =  router ;
