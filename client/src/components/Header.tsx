import { Profile } from '../api';

interface HeaderProps {
  profile: Profile;
}

export default function Header({ profile }: HeaderProps) {
  return (
    <header className="bg-slate-900 text-white py-12 px-6 shadow-md text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
          {profile.name}
        </h1>
        <p className="text-xl sm:text-2xl text-emerald-400 font-medium mb-6">
          {profile.title}
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition">
              📧 Email Me
            </a>
          )}
          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition">
              🐱 GitHub
            </a>
          )}
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition">
              💼 LinkedIn
            </a>
          )}
          {profile.seek && (
            <a href={profile.seek} target="_blank" rel="noreferrer" className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition">
              🔍 SEEK Profile
            </a>
          )}
        </div>
      </div>
    </header>
  );
}