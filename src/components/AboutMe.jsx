import ColorPicker from './ColorPicker'
import './../styles/AboutMe.css'
import userSvg from './../assets/user.svg'
import FormSection from './FormSection.jsx'

export default function AboutMe({ handleToggleSection, isExpanded }) {
  const content = (
    <div className="about-me">
      <ColorPicker miniMode={false} name="aboutMeColor" />
      <div className="about-me-text-container">
        <label htmlFor="aboutMe">Description</label>
        <textarea
          className="about-me-text"
          style={{ width: '100%' }}
          name="aboutMe"
          id="aboutMe"
          placeholder="Write a brief description about yourself..."
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
