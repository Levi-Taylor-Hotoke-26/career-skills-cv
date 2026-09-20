import { Project } from '../api';

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  return (
    <div className="space-y-6">
      
      {/* Section Header */}
      <div>
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>📱</span> Critterpedia & Projects
        </h3>
        <p className="text-sm text-slate-300 mt-1">
          Interactive full-stack applications, games, and repositories built during Dev Academy and personal explorations.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-[#164E3D]/80 border-2 border-[#A2BB7C]/30 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-[#A2BB7C] transition-all gap-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <span>⚡</span> {project.title}
                  </h4>
                  <span className="text-[10px] uppercase font-mono tracking-wider bg-[#0D3B2B] text-[#A2BB7C] px-2.5 py-1 rounded-full border border-[#A2BB7C]/20">
                    App Entry
                  </span>
                </div>
                
                <p className="text-xs text-slate-200 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech_stack.split(',').map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] bg-[#0D3B2B] text-[#A2BB7C] px-2 py-0.5 rounded-md font-mono border border-[#A2BB7C]/20"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons (Live Site & GitHub) */}
              <div className="pt-4 border-t border-[#A2BB7C]/20 flex items-center gap-3">
                {project.deployed && (
                  <a 
                    href={project.deployed} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#A2BB7C] text-[#0D3B2B] text-xs font-bold py-2 px-3 rounded-xl text-center hover:bg-white transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>🚀</span> Launch App
                  </a>
                )}
                {project.repo_url && (
                  <a 
                    href={project.repo_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#0D3B2B] text-slate-200 text-xs font-semibold py-2 px-3 rounded-xl text-center border border-[#A2BB7C]/30 hover:bg-[#13382B] hover:text-white transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>💻</span> GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-slate-400">No project records found.</p>
        )}
      </div>

    </div>
  );
}