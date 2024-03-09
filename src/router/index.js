const express = require('express');
const v1Router = require('./v1/index');
const v2Router = require('./v2/index');

const router = express.Router();

router.use('/v1', v1Router);//localhost:3000/api/v1/ping
router.use('/v2', v2Router);//localhost:3000/api/v2/ping


module.exports =  router ;
