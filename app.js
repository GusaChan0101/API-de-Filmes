// import Apps.JS
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');

// .env
dotenv.config();

const app = express();

// midware
app.use(express.json());
app.use(cors());

// Routes 
app.use('/api/movies', movieRoutes)

// Routes Test

app.get('/', (req, res) => {
    res.send('A API de pesquisa de filmes está ativa e funcionando!')
});

// Set the port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});