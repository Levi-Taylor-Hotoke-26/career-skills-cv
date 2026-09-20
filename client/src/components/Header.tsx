import { Profile } from '../api';

interface HeaderProps {
  profile: Profile;
}

export default function Header({ profile }: HeaderProps) {
  return (
    <header className="header-container">
      <h1>{profile.name}</h1>
      <h2>{profile.title}</h2>
      <p className="bio">{profile.bio}</p>
      
      <div className="contact-links">
        <a href={`mailto:${profile.email}`}>Email Me</a>
        {profile.github && (
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {profile.seek && (
          <a href={profile.seek} target="_blank" rel="noreferrer">
            Seek
          </a>
        )}
      </div>
    </header>
  );
}