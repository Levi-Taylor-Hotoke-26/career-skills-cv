import express from 'express';
import cors from 'cors';
import db from './db/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test API route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running and connected to Knex!' });
});

// Get profile
app.get('/api/profile', async (req, res) => {
  try {
    const profile = await db('profile').first()
    res.json(profile);
  } catch (err) {
    console.error('Error fetching profile:', err)
    res.status(500).json({ err: 'Internal server error' })
  }
});

// Get work experience
app.get('/api/experiences', async (req, res) => {
  try {
    const experiences = await db('experiences').select()
    res.json(experiences)
  } catch (err) {
    console.error('Error fetching experiences:', err)
    res.status(500).json({ err: 'Internal server error' })
  }
});

// Get projects
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await db('projects').select()
    res.json(projects) // Fixed from res.jason
  } catch (err) {
    console.error('Error fetching projects:', err)
    res.status(500).json({ err: 'Internal server error' })
  }
});

// Get skills
app.get('/api/skills', async (req, res) => {
  try {
    const skills = await db('skills').select()
    res.json(skills) // Fixed from res.jason
  } catch (err) {
    console.error('Error fetching skills:', err)
    res.status(500).json({ err: 'Internal server error' })
  }
});

app.get('/api/pokedex', async (req, res) => {
  try {
    const pokedex = await db('pokedex').select()
    res.json(pokedex)
  } catch (err) {
    console.error('Error fetching pokedex:', err)
    res.status(500).json({ err: 'Internal server error' })
  }
});

app.get('/api/qualifications', async (req, res) => {
  try {
    const qualifications = await db('qualifications').select()
    res.json(qualifications)
  } catch (err) {
    console.error('Error fetching qualifications:', err)
    res.status(500).json({ err: 'Internal server error' })
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});