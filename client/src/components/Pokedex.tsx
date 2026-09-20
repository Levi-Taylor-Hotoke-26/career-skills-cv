import { Profile, Pokedex as PokedexType } from '../api';

interface PokedexProps {
  profile: Profile;
  pokedex: PokedexType[];
}

export default function Pokedex({ profile, pokedex }: PokedexProps) {
  const technicalStats = pokedex.filter((item) => item.category.toLowerCase().includes('technical'));
  const serviceBuffs = pokedex.filter((item) => item.category.toLowerCase().includes('service'));

  return (
    <div className="bg-[#0D3B2B] text-slate-100 p-6 md:p-8 rounded-3xl shadow-2xl border-4 border-[#A2BB7C]/50 flex flex-col gap-6 relative overflow-hidden">
      
      {/* Pokedex Device Header */}
      <div className="flex justify-between items-center border-b border-[#A2BB7C]/30 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
          <span className="text-xs uppercase tracking-widest text-[#A2BB7C] font-extrabold ml-2">Pokedex OS // v2.6</span>
        </div>
        <span className="text-xs bg-[#164E3D] px-3 py-1 rounded-full text-[#A2BB7C] border border-[#A2BB7C]/30 font-semibold shadow-inner">
          ENTRY #026
        </span>
      </div>

      {/* Trainer Profile Card */}
      <div className="flex flex-col sm:flex-row items-center gap-6 bg-[#13382B]/70 p-5 rounded-2xl border border-[#A2BB7C]/20 shadow-md">
        <div className="w-24 h-24 rounded-2xl bg-[#164E3D] border-2 border-[#A2BB7C] overflow-hidden flex items-center justify-center shadow-inner shrink-0">
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt={profile.name} className="object-cover w-full h-full" />
          ) : (
            <span className="text-3xl">🦊</span>
          )}
        </div>
        <div className="text-center sm:text-left space-y-1">
          <div className="inline-block bg-[#A2BB7C]/20 text-[#A2BB7C] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
            Full-Stack Developer
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">{profile.name}</h2>
          <p className="text-sm font-medium text-slate-300">{profile.title}</p>
        </div>
      </div>

      {/* Species Description / Bio */}
      <div className="bg-[#13382B]/50 p-4 rounded-2xl border border-[#A2BB7C]/20 space-y-2 shadow-inner">
        <h3 className="text-xs uppercase tracking-wider text-[#A2BB7C] font-extrabold flex items-center gap-2">
          <span>📖</span> Species Description
        </h3>
        <p className="text-sm text-slate-200 leading-relaxed">
          {profile.bio}
        </p>
      </div>

      {/* Pokedex Stats & Buffs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Technical Stack Stats */}
        <div className="bg-[#164E3D]/80 p-4 rounded-2xl border border-[#A2BB7C]/30 space-y-3 shadow-md">
          <div className="flex items-center justify-between border-b border-[#A2BB7C]/20 pb-2">
            <h3 className="text-xs uppercase tracking-wider text-[#A2BB7C] font-extrabold flex items-center gap-1.5">
              <span>⚡</span> Technical Stack
            </h3>
            <span className="text-[10px] bg-[#0D3B2B] px-2 py-0.5 rounded text-slate-300 border border-[#A2BB7C]/20">Type: Code</span>
          </div>
          <div className="space-y-2">
            {technicalStats.map((item) => (
              <div key={item.id} className="bg-[#0D3B2B]/60 p-2.5 rounded-xl border border-[#A2BB7C]/10 space-y-1 hover:border-[#A2BB7C]/40 transition-all">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-white">{item.name}</span>
                  <span className="text-[#A2BB7C] font-mono">LVL {item.level || 90}</span>
                </div>
                <p className="text-[11px] text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Service Buffs */}
        <div className="bg-[#164E3D]/80 p-4 rounded-2xl border border-[#A2BB7C]/30 space-y-3 shadow-md">
          <div className="flex items-center justify-between border-b border-[#A2BB7C]/20 pb-2">
            <h3 className="text-xs uppercase tracking-wider text-[#A2BB7C] font-extrabold flex items-center gap-1.5">
              <span>🛡️</span> Service Buffs
            </h3>
            <span className="text-[10px] bg-[#0D3B2B] px-2 py-0.5 rounded text-slate-300 border border-[#A2BB7C]/20">Type: Soft Skills</span>
          </div>
          <div className="space-y-2">
            {serviceBuffs.map((item) => (
              <div key={item.id} className="bg-[#0D3B2B]/60 p-2.5 rounded-xl border border-[#A2BB7C]/10 space-y-1 hover:border-[#A2BB7C]/40 transition-all">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-white">{item.name}</span>
                  <span className="text-[#A2BB7C] font-mono">LVL {item.level || 95}</span>
                </div>
                <p className="text-[11px] text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}