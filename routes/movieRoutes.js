// routes/movie.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Base URL of the OMDb API
const OMDb_URL = 'http://www.omdbapi.com/';

// Route to search for movies
router.get('/', async (req, res) => {
  const query = req.query.query;  // Get the search term from the query
  const apiKey = process.env.OMDB_API_KEY;

  // Check if the search parameter is provided
  if (!query) {
    return res.status(400).json({ message: 'O parâmetro de consulta é obrigatório!' });
  }

  try {
    // Make a request to the OMDb API
    const response = await axios.get(OMDb_URL, {
      params: {
        s: query, // Search term
        apikey: apiKey
      },
    });

    // Check if the response indicates no movies were found
    if (response.data.Response === 'False') {
      return res.status(404).json({ message: 'Filme não encontrado' });
    }

    // Return the movie data
    res.json(response.data);
  } catch (error) {
    // If something goes wrong, log the error and send a response
    console.error(error);
    res.status(500).json({ message: 'Erro ao buscar dados da API do OMDb' });
  }
});

module.exports = router;
