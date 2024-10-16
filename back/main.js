const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/interview", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const data = require('./routes/route');

app.use('/api', data);

app.listen(port, () => {
    console.log("server is running on port", port);
});
