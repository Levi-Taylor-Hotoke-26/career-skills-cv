import { Skill } from '../api';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section className="skills-container">
      <h3>Skills</h3>
      <div className="skills-grid">
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <div key={category} className="skill-category-card">
            <h4>{category}</h4>
            <ul>
              {categorySkills.map((skill) => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}