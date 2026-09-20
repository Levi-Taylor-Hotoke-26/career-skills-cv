import { useEffect, useState } from 'react';
import { fetchCvData, CvData } from './api';
import NookPhoneNav from './components/NookPhoneNav';
import Pokedex from './components/Pokedex';
import QualificationsView from './components/QualificationsView';
import ProjectsView from './components/ProjectsView';
import ExperienceView from './components/ExperienceView';

export default function App() {
  const [cvData, setCvData] = useState<CvData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [activeTab, setActiveTab] = useState<string>('projects');

  useEffect(() => {
    fetchCvData()
      .then((data) => {
        console.log("Fetched CV Data:", data);
        if (data) {
          setCvData(data);
        } else {
          setError('Failed to load portfolio data from server.');
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading-screen min-h-screen bg-[#0D3B2B] text-slate-100 flex items-center justify-center font-bold">Loading your developer portfolio...</div>;
  }

  if (error || !cvData) {
    return <div className="error-screen min-h-screen bg-[#0D3B2B] text-red-300 flex items-center justify-center">Error: {error || 'Could not fetch data'}</div>;
  }

  return (
    <div className="min-h-screen bg-[#0D3B2B] text-slate-100 p-6 md:p-12 flex flex-col gap-8 max-w-7xl mx-auto">
      
      {/* Top Split Layout: NookPhone Navigation (Left) & RotomDex Profile / Skills (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: NookPhone UI */}
        <div className="lg:col-span-4 lg:sticky lg:top-6">
          <NookPhoneNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Right Side: RotomDex Profile & Skills */}
        <div className="lg:col-span-8">
          <Pokedex profile={cvData.profile} pokedex={cvData.pokedex} />
        </div>

      </div>

      {/* Bottom Dynamic Section: Appears based on NookPhone button selection */}
      <div className="w-full bg-[#13382B]/90 border-4 border-[#A2BB7C]/40 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md">
        <div className="border-b border-[#A2BB7C]/30 pb-4 mb-6 flex justify-between items-center">
          <h3 className="text-xl font-bold uppercase tracking-wider text-[#A2BB7C]">
            📂 Active View // {activeTab.toUpperCase()}
          </h3>
          <span className="text-xs bg-[#164E3D] px-3 py-1 rounded-full text-slate-300 border border-[#A2BB7C]/20">
            System Online ⚡
          </span>
        </div>

        {/* Dynamic Component Switching */}
        <div className="transition-all duration-300">
          {activeTab === 'qualifications' && <QualificationsView qualifications={[]} />}
          {activeTab === 'projects' && <ProjectsView projects={cvData.projects} />}
          {activeTab === 'experience' && <ExperienceView experiences={cvData.experiences} />}
        </div>
      </div>

    </div>
  );
}