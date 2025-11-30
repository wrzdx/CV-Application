import { useState } from 'react'
import './../styles/App.css'
import userSvg from './../assets/user.svg'
import Buttons from './Buttons.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import AboutMe from './AboutMe.jsx'
import FormSection from './FormSection.jsx'

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
