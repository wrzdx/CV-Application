import { useState } from 'react'
import './../styles/App.css'

import Buttons from './Buttons.jsx'
import PersonalInfo from './PersonalInfo.jsx'
import AboutMe from './AboutMe.jsx'
import Skills from './Skills.jsx'
import WorkHistory from './WorkHistory.jsx'
import EducationHistory from './EducationHistory.jsx'
import CustomInformation from './CustomInformation.jsx'
import Forms from './Forms.jsx'
import Pdf from './Pdf.jsx'

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
      <Buttons {...{ formData, setFormData }} />
      <Forms {...{ formData, setFormData }} />
      <Pdf data={formData} />
    </div>
  )
}

export default App
