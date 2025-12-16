import ColorPicker from './ColorPicker'
import './../styles/Skills.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'

function SkillItem({ skill, updateSkill, removeSkill }) {
  return (
    <div key={skill.id} className="skill-item">
      <p>
        <input
          type="text"
          name="skill"
          id={skill.id}
          value={skill.name}
          maxLength="32"
          onChange={(event) => {
            updateSkill(skill.id, { name: event.target.value })
          }}
          placeholder="Python..."
        />
      </p>
      <button
        type="button"
        className="delete-skill"
        onClick={() => removeSkill(skill.id)}
      >
        <img src={crossSvg} alt="Delete Skill" />
      </button>
    </div>
  )
}

export default function Skills({
  handleToggleSection,
  isExpanded,
  data,
  handleChangeData,
}) {
  const skills = data.skills.value
  const setSkills = (newSkills) => handleChangeData('skills', newSkills)

  const addSkill = (name) => {
    const newSkill = { id: crypto.randomUUID(), name }
    setSkills([...skills, newSkill])
  }

  const updateSkill = (id, updatedData) => {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, ...updatedData } : skill,
      ),
    )
  }

  const removeSkill = (id) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }
  const content = (
    <div className="skills-container">
      <ColorPicker
        miniMode={false}
        name="skillsColor"
        onChange={(e) => handleChangeData(e.target.name, e.target.value)}
        color={data.skillsColor?.value}
      />
      <div className="skills">
        <label htmlFor={skills[0]?.id}>Skills</label>
        <div className="skill-list">
          {skills.map((skill) => (
            <SkillItem
              key={skill.id}
              skill={skill}
              updateSkill={updateSkill}
              removeSkill={removeSkill}
            />
          ))}
          <div
            key="new-skill"
            className="add-skill"
            onClick={() => addSkill('')}
          >
            New skill
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <FormSection
      name="Skills"
      svgUrl={userSvg}
      isExpanded={isExpanded}
      onToggle={handleToggleSection}
    >
      {content}
    </FormSection>
  )
}
