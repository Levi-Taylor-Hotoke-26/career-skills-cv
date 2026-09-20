import { Qualification } from '../api';

interface QualificationsViewProps {
  qualifications: Qualification[];
}

export default function QualificationsView({ qualifications }: QualificationsViewProps) {
  return (
    <div className="space-y-6">
      
      {/* Section Header */}
      <div>
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>📜</span> Certifications & Education
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          Formal academic achievements and intensive training credentials earned in Aotearoa.
        </p>
      </div>

      {/* Qualifications List Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {qualifications && qualifications.length > 0 ? (
          qualifications.map((qual) => (
            <div 
              key={qual.id} 
              className="bg-[#164E3D]/80 border-2 border-[#A2BB7C]/30 rounded-2xl p-5 shadow-lg flex flex-col justify-between hover:border-[#A2BB7C] transition-all"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-wider bg-[#0D3B2B] text-[#A2BB7C] px-2.5 py-1 rounded-full font-mono font-semibold border border-[#A2BB7C]/20">
                    {qual.year}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">🏛️ {qual.institution}</span>
                </div>
                <h4 className="text-lg font-bold text-white">{qual.title}</h4>
                <p className="text-xs text-slate-200 leading-relaxed">{qual.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#A2BB7C]/20 flex items-center justify-between text-[11px] text-[#A2BB7C]">
                <span>Status: Verified & Completed</span>
                <span>✨ Badge Unlocked</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-400">No qualifications data found.</p>
        )}
      </div>

    </div>
  );
}