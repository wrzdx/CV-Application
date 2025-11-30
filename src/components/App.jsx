import './../styles/App.css'
import userSvg from './../assets/user.svg'
import downSvg from './../assets/angle-down.svg'
import Buttons from './Buttons.jsx'
import { useState } from 'react'

function FormSection({
  name = 'Section Name',
  svgUrl,
  children,
  isExpanded,
  onToggle,
}) {
  return (
    <fieldset className="formSection">
      <legend className="sr-only">{name}</legend>

      <header className="formSectionHeader" onClick={onToggle}>
        <div className="title-wrapper">
          <img src={svgUrl} alt="" aria-hidden="true" />
          <span className="visual-title">{name}</span>
        </div>

        <button
          type="button"
          className={'expandCollapse' + (isExpanded ? ' expanded' : '')}
          aria-expanded={isExpanded}
          onClick={(e) => {
            e.stopPropagation()
            onToggle()
          }}
        >
          <img
            src={downSvg}
            alt={isExpanded ? 'Collapse section' : 'Expand section'}
          />
        </button>
      </header>

      {isExpanded && <div className="sectionContent">{children}</div>}
    </fieldset>
  )
}

function PersonalInfo() {
  return (
    <div className="personal-info">
      <p className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName" />
      </p>
      <p className="input-group">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" name="fullName" id="fullName" />
      </p>
    </div>
  )
}

function Form() {
  const [expandedSectionId, setExpandedSectionId] = useState(null)

  function handleToggleSection(sectionId) {
    setExpandedSectionId((prevId) => (prevId === sectionId ? null : sectionId))
  }

  const formSections = [
    {
      name: 'Personal Information',
      content: <PersonalInfo />,
      svgUrl: userSvg,
    },
    {
      name: 'Work Experience',
      content: <PersonalInfo />,
      svgUrl: userSvg,
    },
  ]
  return (
    <form className="form">
      {formSections.map((section, id) => (
        <FormSection
          name={section.name}
          svgUrl={section.svgUrl}
          isExpanded={id === expandedSectionId}
          onToggle={() => handleToggleSection(id)}
        >
          {section.content}
        </FormSection>
      ))}
    </form>
  )
}

function Pdf() {
  return <div className="pdf"></div>
}

function Menu() {
  return (
    <div className="menu">
      <Buttons />
      <Form />
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <Menu />
      <Pdf />
    </div>
  )
}

export default App
