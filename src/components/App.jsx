import { useState } from 'react'
import './../styles/App.css'
import userSvg from './../assets/user.svg'
import downSvg from './../assets/angle-down.svg'
import Buttons from './Buttons.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import AboutMe from './AboutMe.jsx'

function FormSection({
  name = 'Section Name',
  svgUrl,
  children,
  isExpanded,
  onToggle,
}) {
  return (
    <fieldset
      className={'formSection' + (isExpanded ? ' expanded' : '')}
      aria-expanded={isExpanded}
    >
      <legend className="sr-only">{name}</legend>

      <header className="formSectionHeader" onClick={onToggle}>
        <img className="sectionIcon" src={svgUrl} alt="" aria-hidden="true" />
        <span className="visual-title">{name}</span>
        <img className="arrow" src={downSvg} alt="" aria-hidden="true" />
      </header>

      {isExpanded && (
        <>
          <div className="sectionContent">{children}</div>
          <button className="submit">Submit</button>
        </>
      )}
    </fieldset>
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
      content: <AboutMe />,
      svgUrl: userSvg,
    },
  ]
  return (
    <form className="form">
      {formSections.map((section, id) => (
        <FormSection
          key={id}
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
