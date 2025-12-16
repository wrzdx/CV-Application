import { useRef, useState } from 'react'
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
import { useReactToPrint } from 'react-to-print'

function App() {
  const [formData, setFormData] = useState({
    personalInfo: {
      Section: PersonalInfo,
      data: {},
    },
    aboutMe: {
      Section: AboutMe,
      data: {},
    },
    skills: {
      Section: Skills,
      data: {
        skills: { value: [] },
      },
    },
    workHistory: {
      Section: WorkHistory,
      data: {
        works: { value: [] },
      },
    },
    educationHistory: {
      Section: EducationHistory,
      data: {
        educations: { value: [] },
      },
    },
    customInformation: {
      Section: CustomInformation,
      data: {},
    },
  })

  const cvRef = useRef()
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: 'CV',
  })

  return (
    <div className="container">
      <Buttons {...{ setFormData, handlePrint }} />
      <Forms {...{ formData, setFormData }} />
      <Pdf data={formData} ref={cvRef} />
    </div>
  )
}

export default App
