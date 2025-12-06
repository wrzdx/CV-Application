import './../styles/buttons.css'

const clearData = [
  {
    data: {},
  },
  {
    data: {},
  },
  {
    data: {
      skills: [],
    },
  },
  {
    data: {
      works: [],
    },
  },
  {
    data: {
      educations: [],
    },
  },
  {
    data: {},
  },
]
const exampleData = [
  {
    data: {
      fullName: 'Rudolph Christian Razul',
      email: 'razulchristian@gmail.com',
      phone: '09167482075',
      address: 'Davao City',
      linkedIn: 'profile.ru',
      website: 'gg.co',
    },
  },
  {
    data: {},
  },
  {
    data: {
      skills: [],
    },
  },
  {
    data: {
      works: [],
    },
  },
  {
    data: {
      educations: [],
    },
  },
  {
    data: {},
  },
]
export default function Buttons({ formData, setFormData }) {
  const loadData = (data) => {
    setFormData(
      formData.map((form, idx) => ({ ...form, data: data[idx].data })),
    )
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
      <button
        type="button"
        className="clearResume"
        onClick={() => loadData(clearData)}
      >
        Clear Resume
      </button>
      <button type="button" className="savePdf">
        Save as PDF
      </button>
    </div>
  )
}
