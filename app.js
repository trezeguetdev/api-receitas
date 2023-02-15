const express = require('express');
const app = express();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.get('/receitas/entrada', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM entrada');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas de entrada.');
  }
});

app.get('/receitas/pratoprincipal', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pratoprincipal');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas de prato principal.');
  }
});

app.get('/receitas/sobremesa', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM sobremesa');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas de sobremesa.');
  }
});

app.get('/receitas/vegano', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM pratovegano');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas veganas.');
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}.`);
});
