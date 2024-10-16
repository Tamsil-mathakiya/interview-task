const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/interview", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const data = require('./routes/route');
app.use('/api', data);

app.listen(port, () => {
    console.log("Server is running on port", port);
});
