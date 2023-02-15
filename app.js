const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

const pool = mysql.createPool({
  host:
  user:
  password:
  database: 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.get('/receitas/entrada', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.query('SELECT * FROM entrada');
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas de entrada.');
  }
});

app.get('/receitas/pratoprincipal', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.query('SELECT * FROM pratoprincipal');
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas de prato principal.');
  }
});

app.get('/receitas/sobremesa', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.query('SELECT * FROM sobremesa');
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas de sobremesa.');
  }
});

app.get('/receitas/vegano', async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const [rows] = await conn.query('SELECT * FROM pratovegano');
    conn.release();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao buscar as receitas veganas.');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
