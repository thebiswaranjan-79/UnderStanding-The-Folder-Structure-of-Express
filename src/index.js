const express = require('express');
const { PORT } = require('./config/server.config');
const { router } = require('./router');

const app = express();

app.use('/api', router);//localhost:3000/api/v1

app.listen(PORT, () => {
    console.log(`Started server at port: ${PORT}`);
});
