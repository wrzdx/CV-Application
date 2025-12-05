import ColorPicker from './ColorPicker'
import './../styles/EducationHistory.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'
import { useState } from 'react'
import DatePicker from './DatePicker.jsx'

function Education({ id, handleDeleteEducation }) {
  const [achievements, setAchievements] = useState([
    { id: crypto.randomUUID() },
  ])
  return (
    <fieldset className="education-item">
      <button
        type="button"
        className="delete-education-item"
        onClick={() => handleDeleteEducation(id)}
      >
        <img src={crossSvg} alt="Delete Education Item" />
      </button>
      <div className="content">
        <p>
          <label htmlFor={'name-' + id}>School</label>
          <input
            id={'name-' + id}
            name="schoolName"
            placeholder="Enter School/University"
            maxLength="32"
            required
          />
        </p>
        <p>
          <label htmlFor={'address-' + id}>Location</label>
          <input
            id={'address-' + id}
            name="schoolAddress"
            placeholder="Enter the school's location"
            maxLength="32"
            required
          />
        </p>
        <p>
          <label htmlFor={'Degree-' + id}>Degree</label>
          <input
            id={'degree-' + id}
            name="degree"
            placeholder="Enter Degree/Field of study"
            maxLength="32"
            required
          />
        </p>
        <div className="dates">
          <DatePicker name={'startDate' + id}>Start Date</DatePicker>
          <DatePicker name={'endDate' + id}>End Date</DatePicker>
        </div>
        <fieldset className="achievements">
          <label
            key="achievement-label"
            htmlFor={'achievement-' + achievements[0]?.id}
          >
            Achievements
          </label>
          {achievements.map(({ id }) => {
            return (
              <div className="achievement-container" key={id}>
                <input
                  id={'achievement-' + id}
                  name="achievement"
                  placeholder="Achievement"
                  maxLength="32"
                  required
                />
                <button
                  type="button"
                  className="delete-achievement"
                  onClick={() =>
                    setAchievements(
                      achievements.filter(
                        (achievement) => achievement.id != id,
                      ),
                    )
                  }
                >
                  <img src={crossSvg} alt="delete achievement" />
                </button>
              </div>
            )
          })}
          <div
            className="add-achievement"
            onClick={() => {
              setAchievements([...achievements, { id: crypto.randomUUID() }])
            }}
          >
            New Achievement
          </div>
        </fieldset>
      </div>
    </fieldset>
  )
}

export default function EducationHistory({ handleToggleSection, isExpanded }) {
  const [educations, setEducations] = useState([{ id: crypto.randomUUID() }])
  const handleDeleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id != id))
  }
  const handleAddEducation = () => {
    setEducations([...educations, { id: crypto.randomUUID() }])
  }
  const content = (
    <div className="education-history">
      <ColorPicker miniMode={false} name="educationHistoryColor" />
      <div className="education-list">
        <p>Educations</p>
        {educations.map((education) => (
          <Education
            key={education.id}
            {...{ handleDeleteEducation, id: education.id }}
          />
        ))}
        <div
          className="add-education"
          onClick={() => {
            handleAddEducation()
          }}
        >
          New Education
        </div>
      </div>
    </div>
  )
  return (
    <FormSection
      name="Education History"
      svgUrl={userSvg}
      isExpanded={isExpanded}
      onToggle={handleToggleSection}
    >
      {content}
    </FormSection>
  )
}
