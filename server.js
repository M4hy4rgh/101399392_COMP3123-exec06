const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Note = require('./routes/NoteRoutes');

const DB_URL = "mongodb+srv://mahyargh:M~4hy4rgh1@cluster0.rjnawtv.mongodb.net/comp3123_fullStack_lab_exec_06"
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/todo', Note);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});