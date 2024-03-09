const express = require('express');
const homePingController = require('../../controller/mainController');
const todoRouter = require('./todo.routes');
const router = express.Router();

router.use('/todos', todoRouter);
router.get('/ping', homePingController);//localhost:3000/api/v1/ping


module.exports = router;