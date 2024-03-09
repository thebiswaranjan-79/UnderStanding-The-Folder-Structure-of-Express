const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const { PORT } = require('./config/server.config');
const { router } = require('./router');

const app = express();
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});
