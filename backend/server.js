const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Motherlode CMMS API is live.');
});

// Placeholder for future endpoints

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
