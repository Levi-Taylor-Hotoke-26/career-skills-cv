import { Experience as ExperienceType } from '../api';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section className="experience-container">
      <h3>Work Experience</h3>
      <div className="experience-list">
        {experiences.map((exp) => (
          <article key={exp.id} className="experience-card">
            <h4>{exp.role}</h4>
            <h5 className="company">{exp.company}</h5>
            <p className="dates">
              {exp.start_date} – {exp.end_date || 'Present'}
            </p>
            <p className="description">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}