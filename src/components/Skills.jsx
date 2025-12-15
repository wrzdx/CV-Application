import ColorPicker from './ColorPicker'
import './../styles/Skills.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'

const SKILL_LEVELS = [
  'Novice - Just started learning',
  'Beginner - Basic understanding',
  'Intermediate - Good working knowledge',
  'Advanced - Strong expertise',
  'Expert - Deep specialized knowledge',
]

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
      <select
        value={skill.level || 'Novice'}
        name={skill.name}
        id={'skill-level' + skill.id}
        onChange={(e) =>
          updateSkill(skill.id, {
            level: e.target.value,
          })
        }
      >
        {SKILL_LEVELS.map((levelDesc) => {
          const level = levelDesc.split(' - ')[0]
          return (
            <option key={level} value={level}>
              {levelDesc}
            </option>
          )
        })}
      </select>
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
  const MAX_SKILLS = 10

  const addSkill = (name, level) => {
    const newSkill = { id: crypto.randomUUID(), name, level }
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
            onClick={() => addSkill('', '')}
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
