const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootmac24', // cambia si usas otra
  database: 'cifradoCesar'
});

app.post('/guardar', (req, res) => {
  const { normal, cifrada } = req.body;
  db.query('INSERT INTO registros (palabra_normal, palabra_cifrada) VALUES (?, ?)', [normal, cifrada],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ mensaje: 'Registro guardado correctamente' });
    });
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});