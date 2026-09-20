import { Profile } from '../api';

interface AboutProps {
  profile: Profile;
}

export default function About({ profile }: AboutProps) {
  return (
    <section className="about-container">
      <h3>About Me</h3>
      <p>{profile.bio}</p>
    </section>
  );
}