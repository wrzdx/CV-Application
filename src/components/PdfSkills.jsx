export default function SkillsSection({ data }) {
  return (
    data.skills?.value?.length != 0 && (
      <div className="skills-data">
        <h3 style={{ backgroundColor: data.skillsColor?.value }}>SKILLS</h3>
        <div className="content-wrapper">
          <ul className="skills-data">
            {data.skills?.value?.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  )
}
