import { useState } from 'react'
import './../styles/App.css'

import Buttons from './Buttons.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'

function Forms() {
  const [expandedSectionId, setExpandedSectionId] = useState(null)

  function handleToggleSection(sectionId) {
    setExpandedSectionId((prevId) => (prevId === sectionId ? null : sectionId))
  }

  const formSections = [PersonalInfo, AboutMe, Skills]
  return (
    <div className="form-list">
      {formSections.map((Section, id) => (
        <Section
          key={id}
          isExpanded={id === expandedSectionId}
          handleToggleSection={() => handleToggleSection(id)}
        />
      ))}
    </div>
  )
}

function Pdf() {
  return <div className="pdf"></div>
}

function Menu() {
  return (
    <div className="menu">
      <Buttons />
      <Forms />
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
