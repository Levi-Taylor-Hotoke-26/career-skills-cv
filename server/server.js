import express from 'express';
import cors from 'cors';
import db from './db/database.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test API route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running and connected to Knex!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});