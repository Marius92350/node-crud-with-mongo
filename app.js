const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require("./routes/BlogRoutes");



mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);


const app = express();

app.use(express.json());
app.use('/api/blogs', blogRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})

module.exports = app;