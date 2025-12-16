import './../styles/buttons.css'
import AboutMe from './AboutMe'
import CustomInformation from './CustomInformation'
import EducationHistory from './EducationHistory'
import PersonalInfo from './PersonalInfo'
import Skills from './Skills'
import WorkHistory from './WorkHistory'

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
const exampleData = {
  personalInfo: {
    data: {
      fullName: {
        value: 'Evgenii Khovalyg',
        isValid: true,
      },
      email: {
        value: 'e.khovalyg@innopolis.university',
        isValid: true,
      },
      phone: {
        value: '+7 901 137 8809',
        isValid: true,
      },
      address: {
        value: 'Innopolis',
        isValid: true,
      },
      linkedIn: {
        value: 'wrzdx',
        isValid: true,
      },
      website: {
        value: 'https://wrzdx.com',
        isValid: true,
      },
      emailColor: {
        value: '#EA580C',
        isValid: true,
      },
      phoneColor: {
        value: '#EAB308',
        isValid: true,
      },
      addressColor: {
        value: '#F43F5E',
        isValid: true,
      },
      linkedInColor: {
        value: '#3B82F6',
        isValid: true,
      },
      websiteColor: {
        value: '#8B5CF6',
        isValid: true,
      },
    },
  },
  aboutMe: {
    data: {
      aboutMe: {
        value:
          'Recent Computer Science graduate proficient in the ReactJS framework and modern web technologies. Skilled in developing responsive, user-friendly websites and applications. Demonstrates strong problem-solving abilities and effective communication skills. Eager to apply technical knowledge and innovative solutions in a dynamic web development role.',
        isValid: true,
      },
      aboutMeColor: {
        value: '#EA580C',
        isValid: true,
      },
    },
  },
  skills: {
    data: {
      skills: {
        value: [
          {
            id: '2c7c07e5-eede-409b-9617-a392aece7181',
            name: 'Python',
          },
          {
            id: '21e2cc10-bf33-4fa0-9745-447d02abfcb1',
            name: 'JavaScript',
          },
          {
            id: 'bd10e21d-c51e-41d9-8ae1-54207259563e',
            name: 'ReactJS',
          },
          {
            id: '85083b46-8cc1-441c-bb14-5244e4002c46',
            name: 'TailWindCSS',
          },
          {
            id: '5530ae9d-319d-4815-a2df-4276575f225d',
            name: 'NodeJS',
          },
          {
            id: '7b94f3cb-3736-4579-a082-6cacfbf7cb71',
            name: 'Critical Thinking',
          },
          {
            id: '1cab0c8f-aafe-4d30-ac16-8b284f66830e',
            name: 'Effective Interpersonal Skills',
          },
          {
            id: '7c336764-4b85-48c5-8eda-bfed808d3779',
            name: 'Flexibility and Adaptability',
          },
          {
            id: 'c70f0a57-63bf-45bb-969d-3775f9e8dd5d',
            name: 'Resourcefulness',
          },
          {
            id: 'e7450802-5035-46c2-8528-b7b651c66882',
            name: 'Adobe Photoshop',
          },
        ],
        isValid: true,
      },
      skillsColor: {
        value: '#EAB308',
        isValid: true,
      },
    },
  },
  workHistory: {
    data: {
      works: {
        value: [],
      },
    },
  },
  educationHistory: {
    data: {
      educations: {
        value: [],
      },
    },
  },
  customInformation: {
    data: {},
  },
}

export default function Buttons({ setFormData }) {
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
      <button type="button" className="savePdf">
        Save as PDF
      </button>
    </div>
  )
}
