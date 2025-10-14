const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar filmes', error });
  }
};

const addMovie = async (req, res) => {
  try {
    const { title, description, genre, releaseDate, coverImage } = req.body;
    const newMovie = await Movie.create({ title, description, genre, releaseDate, coverImage });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar filme', error });
  }
};

module.exports = { getMovies, addMovie };