import './../styles/buttons.css'
import AboutMe from './AboutMe'
import CustomInformation from './CustomInformation'
import EducationHistory from './EducationHistory'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'
import WorkHistory from './WorkHistory'
import exampleData from './../exampleData.json'

const clearData = {
  personalInfo: {
    Section: PersonalInfo,
    data: {
      profilePicture: {
        value: 'reset',
        isValid: false,
      },
    },
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
}

export default function Buttons({ setFormData, handlePrint }) {
  const loadData = (data) => {
    const newData = { ...clearData }
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        newData[key] = { ...newData[key], data: value.data }
      }
    }
    setFormData(newData)
  }

  return (
    <div className="buttons">
      <button
        type="button"
        className="loadExample"
        onClick={() => loadData(exampleData)}
      >
        Load Example
      </button>
      <button type="button" className="clearResume" onClick={() => loadData()}>
        Clear Resume
      </button>
      <button type="button" className="savePdf" onClick={handlePrint}>
        Save as PDF
      </button>
    </div>
  )
}
