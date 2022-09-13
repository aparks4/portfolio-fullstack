const express = require('express');
const cors = require('cors');
const PORT = 4000;

// Import JSON files
const projects = require('./projects.json');
const about = require('./about.json');

const app = express();

// MIDDLEWARE
app.use(cors());

// home route
app.get('/', (req, res) => {
    res.send('hello world');
})

// route for retreiving projects
app.get('/projects', (req, res) => {
    res.json(projects);
})

// route for retrieving about info
app.get('/about', (req, res) => {
    res.json(about);
})

// SERVER
app.listen(PORT, () => {
    console.log('listening on port 4000...');
})

