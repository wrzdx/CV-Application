import { useState } from 'react'
import './../styles/App.css'

import Buttons from './Buttons.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import WorkHistory from './WorkHistory.jsx'
import EducationHistory from './EducationHistory.jsx'
import CustomInformation from './CustomInformation.jsx'

function Forms({ formData, setFormData }) {
  const [expandedSectionId, setExpandedSectionId] = useState(null)

  function handleToggleSection(sectionId) {
    setExpandedSectionId((prevId) => (prevId === sectionId ? null : sectionId))
  }

  function handleChangeData(sectionId, fieldName, fieldValue) {
    setFormData(
      formData.map((section, id) =>
        sectionId == id
          ? { ...section, data: { ...section.data, [fieldName]: fieldValue } }
          : section,
      ),
    )
  }

  return (
    <div className="form-list">
      {formData.map(({ Section, data }, id) => (
        <Section
          key={id}
          {...{
            isExpanded: id === expandedSectionId,
            handleToggleSection: () => handleToggleSection(id),
            data,
            handleChangeData: (fieldName, fieldValue) =>
              handleChangeData(id, fieldName, fieldValue),
          }}
        />
      ))}
    </div>
  )
}

function Pdf() {
  return <div className="pdf"></div>
}

function App() {
  const [formData, setFormData] = useState([
    {
      Section: PersonalInfo,
      data: {},
    },
    {
      Section: AboutMe,
      data: {},
    },
    {
      Section: Skills,
      data: {
        skills: [],
      },
    },
    {
      Section: WorkHistory,
      data: {
        works: [],
      },
    },
    {
      Section: EducationHistory,
      data: {
        educations: [],
      },
    },
    {
      Section: CustomInformation,
      data: {},
    },
  ])

  return (
    <div className="container">
      <Buttons />
      <Forms {...{ formData, setFormData }} />
      <Pdf />
    </div>
  )
}

export default App
