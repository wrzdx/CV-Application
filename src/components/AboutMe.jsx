import ColorPicker from './ColorPicker.jsx'
import './../styles/AboutMe.css'
import userSvg from './../assets/user.svg'
import FormSection from './FormSection.jsx'

export default function AboutMe({
  handleToggleSection,
  isExpanded,
  data,
  handleChangeData,
}) {
  const content = (
    <div className="about-me">
      <ColorPicker
        miniMode={false}
        name="aboutMeColor"
        onChange={(e) => handleChangeData(e.target.name, e.target.value)}
        color={data.aboutMeColor?.value}
      />
      <div className="about-me-text-container">
        <label htmlFor="aboutMe">Description</label>
        <textarea
          className="about-me-text"
          style={{ width: '100%' }}
          name="aboutMe"
          id="aboutMe"
          placeholder="Write a brief description about yourself..."
          onChange={(e) =>
            handleChangeData(
              e.target.name,
              e.target.value,
              e.target.checkValidity(),
            )
          }
          value={data.aboutMe?.value}
        ></textarea>
      </div>
    </div>
  )
  return (
    <FormSection
      name="About Me"
      svgUrl={userSvg}
      isExpanded={isExpanded}
      onToggle={handleToggleSection}
    >
      {content}
    </FormSection>
  )
}
