import ColorPicker from './ColorPicker'
import './../styles/AboutMe.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'

function Work({ id }) {
  return (
    <div className="work-item">
      <button type="button" className="delete-work-item">
        <img src={crossSvg} alt="Delete Work Item" />
      </button>
      <p>
        <label htmlFor={'company-' + id}>Company</label>
        <input
          id={'company-' + id}
          placeholder="Enter the company's name"
          required
        />
      </p>
    </div>
  )
}

export default function AboutMe({ handleToggleSection, isExpanded }) {
  const content = (
    <div className="about-me">
      <ColorPicker miniMode={false} />
      <div className="work-list"></div>
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
