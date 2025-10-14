const Category = require('../models/Category');

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categorias', error });
  }
};

const addCategory = async (req, res) => {
  try {
    const { name, movies } = req.body;
    const newCategory = await Category.create({ name, movies });
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao adicionar categoria', error });
  }
};

module.exports = { getCategories, addCategory };