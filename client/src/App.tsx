import { useEffect, useState } from 'react';
import { fetchCvData, CvData } from './api';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  const [cvData, setCvData] = useState<CvData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCvData()
      .then((data) => {
        if (data) {
          setCvData(data);
        } else {
          setError('Failed to load portfolio data from server.');
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-screen">Loading your developer portfolio...</div>;
  }

  if (error || !cvData) {
    return <div className="error-screen">Error: {error || 'Could not fetch data'}</div>;
  }

  return (
    <div className="portfolio-app">
      <Header profile={cvData.profile} />
      <main className="portfolio-content">
        <About profile={cvData.profile} />
        <Experience experiences={cvData.experiences} />
        <Projects projects={cvData.projects} />
        <Skills skills={cvData.skills} />
      </main>
    </div>
  );
}