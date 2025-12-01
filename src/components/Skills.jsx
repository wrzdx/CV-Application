import ColorPicker from './ColorPicker'
import './../styles/Skills.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'
import { useState } from 'react'

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
        <label htmlFor={skill.id}></label>
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

export default function Skills({ handleToggleSection, isExpanded }) {
  const [skills, setSkills] = useState([
    { id: crypto.randomUUID(), name: '', level: 'Novice' },
  ])

  const MAX_SKILLS = 10

  const addSkill = ([name, level]) => {
    const newSkill = { id: crypto.randomUUID(), name, level }
    setSkills((prevSkills) => [...prevSkills, newSkill])
  }

  const updateSkill = (id, updatedData) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.id === id ? { ...skill, ...updatedData } : skill,
      ),
    )
  }

  const removeSkill = (id) => {
    setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== id))
  }
  const content = (
    <div className="skills-container">
      <ColorPicker miniMode={false} />
      <div className="skills">
        <p>Skills</p>
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
            className={
              'add-skill' + (skills.length >= MAX_SKILLS ? ' disabled' : '')
            }
            onClick={() => addSkill(['', ''])}
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
