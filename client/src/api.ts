export interface Profile {
  avatarUrl: string;
  id: number;
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  seek: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  description: string;
  start_date: string;
  end_date: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  repo_url: string;
  deployed: string;
}

export interface Skill {
  id: number;
  category: string;
  name: string;
}

export interface Pokedex {
  description: string;
  level: number;
  id: number;
  category: string;
  name: string;
}

export interface Qualification {
  id: number;
  title: string;
  institution: string;
  year: string;
  description: string;
}

export interface CvData {
  pokedex: Pokedex[];
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  qualifications: Qualification[];
}

const API_URL = import.meta.env.VITE_API_URL || '';

export async function fetchCvData(): Promise<CvData | null> {
  try {
    const [profileRes, expRes, projRes, skillsRes, pokedexRes, qualRes] = await Promise.all([
      fetch(`${API_URL}/api/profile`),
      fetch(`${API_URL}/api/experiences`),
      fetch(`${API_URL}/api/projects`),
      fetch(`${API_URL}/api/skills`),
      fetch(`${API_URL}/api/pokedex`),
      fetch(`${API_URL}/api/qualifications`),
    ]);

    return {
      profile: await profileRes.json(),
      experiences: await expRes.json(),
      projects: await projRes.json(),
      skills: await skillsRes.json(),
      pokedex: await pokedexRes.json(),
      qualifications: await qualRes.json(),
    };
  } catch (error) {
    console.error('Failed to fetch CV data:', error);
    return null;
  }
}