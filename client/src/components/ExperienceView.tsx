import { Experience } from '../api';

interface ExperienceViewProps {
  experiences: Experience[];
}

export default function ExperienceView({ experiences }: ExperienceViewProps) {
  return (
    <div className="space-y-6">
      
      {/* Section Header */}
      <div>
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>💼</span> Professional Experience & Milestones
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          A track record of customer service excellence, stakeholder coordination, and high-volume problem solving.
        </p>
      </div>

      {/* Experience List / Timeline Grid */}
      <div className="grid grid-cols-1 gap-4">
        {experiences && experiences.length > 0 ? (
          experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-[#164E3D]/80 border-2 border-[#A2BB7C]/30 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#A2BB7C] transition-all"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <span className="text-xs font-mono font-bold bg-[#0D3B2B] text-[#A2BB7C] px-2.5 py-0.5 rounded-full border border-[#A2BB7C]/20">
                    {exp.company}
                  </span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>

              {/* Date Badge */}
              <div className="shrink-0 bg-[#0D3B2B]/60 px-3 py-1.5 rounded-xl border border-[#A2BB7C]/20 text-right">
                <span className="text-[11px] font-mono text-[#A2BB7C] font-semibold">
                  {exp.start_date} — {exp.end_date}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-400">No experience records found.</p>
        )}
      </div>

    </div>
  );
}