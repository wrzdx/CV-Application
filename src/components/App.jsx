import { useState } from 'react'
import './../styles/App.css'

import Buttons from './Buttons.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'

function Form() {
  const [expandedSectionId, setExpandedSectionId] = useState(null)

  function handleToggleSection(sectionId) {
    setExpandedSectionId((prevId) => (prevId === sectionId ? null : sectionId))
  }

  const formSections = [PersonalInfo, AboutMe, Skills]
  return (
    <form className="form">
      {formSections.map((Section, id) => (
        <Section
          key={id}
          isExpanded={id === expandedSectionId}
          handleToggleSection={() => handleToggleSection(id)}
        />
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
