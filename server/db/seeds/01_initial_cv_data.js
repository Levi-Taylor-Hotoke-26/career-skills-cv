/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('profile').del();
  await knex('experiences').del();
  await knex('projects').del();
  await knex('skills').del();

  // Profile data
  await knex('profile').insert([
    {
      name: 'Levi Taylor',
      title: 'Full-Stack Junior Web Developer',
      bio: 'Passionate developer building dynamic web apps with React, Node.js, and SQLite.',
      email: 'kinosj74@gmail.com',
      github: 'https://github.com/Levi-Taylor-Hotoke-26',
      linkedin: 'https://www.linkedin.com/in/levi-taylor-660710188/',
      seek: 'https://www.nz.seek.com/profiles/levi-taylor-7gGVVN6NKD',
    }
  ]);
  // Experience data
  await knex('experiences').insert([
    {
      company: 'ANZ',
      role: 'Service Consultant',
      description: 'Inbound phone representative tasked with first contact resolution for customers',
      start_date: 'Nov 2024',
      end_date: 'Nov 2025'
    },
    {
      company: 'Buoy',
      role: 'Hair Style Apprentice',
      description: 'An apprenticeship in hairdressing',
      start_date: 'Feb 2024',
      end_date: 'Nov 2024'
    },
    {
      company: 'MITO',
      role: 'Regional Coordinator',
      description: 'Coordinated external contractors and training resource distribution, maintained data integrity for TEC',
      start_date: 'Mar 2020',
      end_date: 'Feb 2024'
    },
    {
      company: 'Farmers',
      role: 'Merchandiser',
      description: 'Arranged and stocked products displays, assisted customers with skincare and beauty advice',
      start_date: 'Oct 2017',
      end_date: 'Mar 2020'
    }
  ]);

  // Projects data
  await knex('projects').insert([
    {
      title: 'Momodex',
      description: 'A gamified citizen-science app turning real-world nature observations of New Zealand species into a collectible card and battle game.',
      tech_stack: 'React, TypeScript, Node.js, Express, Knex, SQLite, Turso/libSQL, Gemini API',
      repo_url: 'https://github.com/Hotoke-2026/Momodex',
      deployment: 'https://momodex.onrender.com/'
    },
    {
      title: 'Dev Academy Blog',
      description: 'A personal technical and reflective blog documenting learning milestones, reflections, and projects.',
      tech_stack: 'HTML, CSS, JavaScript, Vite',
      repo_url: 'https://github.com/Levi-Taylor-Hotoke-26/blog',
      deployed: 'https://levi-taylor-hotoke-26.github.io/blog/'
    },
    {
      title: 'Poliwrath Romp',
      description: 'An interactive web-based repository showcasing JavaScript development assets, audio, and custom styling.',
      tech_stack: 'JavaScript, HTML, CSS',
      repo_url: 'https://github.com/Levi-Taylor-Hotoke-26/poliwrath-romp',
      deployed: 'https://levi-taylor-hotoke-26.github.io/poliwrath-romp/'
    },
    {
      title: 'Quilava Quiz',
      description: 'An interactive trivia game featuring dynamic elements, custom audio soundbites, and badge rewards.',
      tech_stack: 'JavaScript, HTML, CSS',
      repo_url: 'https://github.com/Levi-Taylor-Hotoke-26/quilava-quiz',
      deployed: 'https://levi-taylor-hotoke-26.github.io/quilava-quiz/'
    },
    {
      title: 'Who Is That?',
      description: 'An interactive Pokémon guessing and identification minigame built with JavaScript, HTML, and CSS.',
      tech_stack: 'JavaScript, HTML, CSS, Vite',
      repo_url: 'https://github.com/Levi-Taylor-Hotoke-26/who-is-that',
      deployed: 'https://levi-taylor-hotoke-26.github.io/who-is-that/'
    }
  ]);

  // skills
  await knex('skills').insert([
    { category: 'Frontend', name: 'React & TypeScript' },
    { category: 'Frontend', name: 'JavaScript / HTML / CSS' },
    { category: 'Backend', name: 'Node.js' },
    { category: 'Backend', name: 'Express' },
    { category: 'Database', name: 'Knex.js & SQLite3 / libSQL' }
  ]);
};
