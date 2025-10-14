const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

async function connectToDatabase() {
  try {
    const client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log('Conexão com o MongoDB Atlas estabelecida com sucesso!');
    client.close();
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB Atlas:', error);
  }
}

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  connectToDatabase();
});