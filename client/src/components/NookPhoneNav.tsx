interface NookPhoneNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: string;
  desc: string;
}

export default function NookPhoneNav({ activeTab, setActiveTab }: NookPhoneNavProps) {
  const navItems: NavItem[] = [
    { id: 'qualifications', label: 'Qualifications', icon: '📜', desc: 'Certificates & education' },
    { id: 'projects', label: 'Projects', icon: '📱', desc: 'Critterpedia & web apps' },
    { id: 'experience', label: 'Experience', icon: '💼', desc: 'Work history & milestones' },
  ];

  return (
    <div className="bg-[#164E3D] border-4 border-[#A2BB7C]/60 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-6 relative overflow-hidden">
      
      {/* Phone Speaker Notch */}
      <div className="w-16 h-2 bg-[#0D3B2B] rounded-full"></div>

      {/* Screen Header */}
      <div className="text-center">
        <span className="text-[10px] uppercase tracking-widest text-[#A2BB7C] font-extrabold">NookPhone OS</span>
        <h2 className="text-lg font-bold text-slate-100">Quick Navigation</h2>
      </div>

      {/* App Grid Buttons */}
      <div className="w-full flex flex-col gap-3">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 border text-left ${
                isActive
                  ? 'bg-[#A2BB7C] text-[#0D3B2B] border-white shadow-lg translate-x-1 font-bold'
                  : 'bg-[#13382B] text-slate-200 border-[#A2BB7C]/20 hover:bg-[#13382B]/80 hover:border-[#A2BB7C]/50'
              }`}
            >
              <span className="text-2xl p-2 bg-[#0D3B2B]/20 rounded-xl">{item.icon}</span>
              <div>
                <div className="text-sm font-semibold">{item.label}</div>
                <div className={`text-[11px] ${isActive ? 'text-[#0D3B2B]/80' : 'text-slate-400'}`}>
                  {item.desc}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Home Indicator Bar */}
      <div className="w-32 h-1 bg-[#A2BB7C]/40 rounded-full mt-2"></div>
    </div>
  );
}