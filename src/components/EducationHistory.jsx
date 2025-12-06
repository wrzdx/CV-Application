import ColorPicker from './ColorPicker'
import './../styles/EducationHistory.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'
import DatePicker from './DatePicker.jsx'

function Education({ education, setEducation, handleDeleteEducation }) {
  return (
    <fieldset className="education-item">
      <button
        type="button"
        className="delete-education-item"
        onClick={() => handleDeleteEducation(education.id)}
      >
        <img src={crossSvg} alt="Delete Education Item" />
      </button>
      <div className="content">
        <p>
          <label htmlFor={'name-' + education.id}>School</label>
          <input
            id={'name-' + education.id}
            name="schoolName"
            placeholder="Enter School/University"
            maxLength="32"
            value={education.schoolName}
            onChange={(e) =>
              setEducation({ ...education, schoolName: e.target.value })
            }
            required
          />
        </p>
        <p>
          <label htmlFor={'address-' + education.id}>Location</label>
          <input
            id={'address-' + education.id}
            name="schoolAddress"
            placeholder="Enter the school's location"
            maxLength="32"
            value={education.schoolAddress}
            onChange={(e) =>
              setEducation({ ...education, schoolAddress: e.target.value })
            }
            required
          />
        </p>
        <p>
          <label htmlFor={'Degree-' + education.id}>Degree</label>
          <input
            id={'degree-' + education.id}
            name="degree"
            placeholder="Enter Degree/Field of study"
            maxLength="32"
            value={education.degree}
            onChange={(e) =>
              setEducation({ ...education, degree: e.target.value })
            }
            required
          />
        </p>
        <div className="dates">
          <DatePicker
            name={'startDate' + education.id}
            setDate={(value) =>
              setEducation({ ...education, startDate: value })
            }
            date={education.startDate}
            upperBound={education.endDate}
          >
            Start Date
          </DatePicker>
          <DatePicker
            name={'endDate' + education.id}
            setDate={(value) => setEducation({ ...education, endDate: value })}
            date={education.endDate}
            lowerBound={education.startDate}
          >
            End Date
          </DatePicker>
        </div>
        <fieldset className="achievements">
          <label
            key="achievement-label"
            htmlFor={'achievement-' + education.achievements[0]?.id}
          >
            Achievements
          </label>
          {education.achievements.map(({ id, value }) => {
            return (
              <div className="achievement-container" key={id}>
                <input
                  id={'achievement-' + id}
                  name="achievement"
                  placeholder="Achievement"
                  maxLength="32"
                  value={value}
                  onChange={(e) =>
                    setEducation({
                      ...education,
                      achievements: education.achievements.map((achievement) =>
                        achievement.id == id
                          ? { ...achievement, value: e.target.value }
                          : achievement,
                      ),
                    })
                  }
                  required
                />
                <button
                  type="button"
                  className="delete-achievement"
                  onClick={() =>
                    setEducation({
                      ...education,
                      achievements: education.achievements.filter(
                        (achievement) => achievement.id != id,
                      ),
                    })
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
              setEducation({
                ...education,
                achievements: [
                  ...education.achievements,
                  { id: crypto.randomUUID(), value: '' },
                ],
              })
            }}
          >
            New Achievement
          </div>
        </fieldset>
      </div>
    </fieldset>
  )
}

export default function EducationHistory({
  handleToggleSection,
  isExpanded,
  data,
  handleChangeData,
}) {
  const educations = data.educations
  const setEducations = (newEducations) =>
    handleChangeData('educations', newEducations)

  const handleDeleteEducation = (id) => {
    setEducations(educations.filter((education) => education.id != id))
  }
  const handleAddEducation = () => {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        achievements: [],
        startDate: new Date(),
        endDate: new Date(),
      },
    ])
  }
  const handleUpdateEducation = (updatedEducation) => {
    setEducations(
      educations.map((education) => {
        return education.id === updatedEducation.id
          ? updatedEducation
          : education
      }),
    )
  }
  const content = (
    <div className="education-history">
      <ColorPicker
        miniMode={false}
        name="educationHistoryColor"
        onChange={(e) => handleChangeData(e.target.name, e.target.value)}
        color={data.educationHistoryColor}
      />
      <div className="education-list">
        <p>Educations</p>
        {educations.map((education) => (
          <Education
            key={education.id}
            {...{
              handleDeleteEducation,
              education,
              setEducation: (updatedEducation) =>
                handleUpdateEducation(updatedEducation),
            }}
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
