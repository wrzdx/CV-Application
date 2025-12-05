import ColorPicker from './ColorPicker'
import './../styles/WorkHistory.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'
import { useState } from 'react'
import DatePicker from './DatePicker.jsx'

function Work({ id, handleDeleteWork }) {
  const [jobDescs, setJobDescs] = useState([{ id: crypto.randomUUID() }])
  return (
    <fieldset className="work-item">
      <button
        type="button"
        className="delete-work-item"
        onClick={() => handleDeleteWork(id)}
      >
        <img src={crossSvg} alt="Delete Work Item" />
      </button>
      <div className="content">
        <p>
          <label htmlFor={'name-' + id}>Company</label>
          <input
            id={'name-' + id}
            name="companyName"
            placeholder="Enter the company's name"
            maxLength="32"
            required
          />
        </p>
        <p>
          <label htmlFor={'address-' + id}>Address</label>
          <input
            id={'address-' + id}
            name="companyAddress"
            placeholder="Enter the company's address"
            maxLength="32"
            required
          />
        </p>
        <p>
          <label htmlFor={'role-' + id}>Role</label>
          <input
            id={'role-' + id}
            name="roleInCompany"
            placeholder="Enter your Role/Job Title"
            maxLength="32"
            required
          />
        </p>
        <fieldset className="job-descs">
          <label key="desc-label" htmlFor={'description-' + jobDescs[0]?.id}>
            Description
          </label>
          {jobDescs.map(({ id }) => {
            return (
              <div className="job-desc-container" key={id}>
                <input
                  id={'description-' + id}
                  name="jobDescription"
                  placeholder="Job Responsibility"
                  maxLength="32"
                  required
                />
                <button
                  type="button"
                  className="delete-job-desc"
                  onClick={() =>
                    setJobDescs(jobDescs.filter((jobDesc) => jobDesc.id != id))
                  }
                >
                  <img src={crossSvg} alt="delete job description" />
                </button>
              </div>
            )
          })}
          <div
            className="add-job-desc"
            onClick={() => {
              setJobDescs([...jobDescs, { id: crypto.randomUUID() }])
            }}
          >
            New Description
          </div>
        </fieldset>
        <div className="dates">
          <DatePicker name={'startDate' + id}>Start Date</DatePicker>
          {/* <DatePicker name={'endDate' + id}>End Date</DatePicker> */}
        </div>
      </div>
    </fieldset>
  )
}

export default function WorkHistory({ handleToggleSection, isExpanded }) {
  const [works, setWorks] = useState([{ id: crypto.randomUUID() }])
  const handleDeleteWork = (id) => {
    setWorks(works.filter((work) => work.id != id))
  }
  const handleAddWork = () => {
    setWorks([...works, { id: crypto.randomUUID() }])
  }
  const content = (
    <div className="work-history">
      <ColorPicker miniMode={false} name="workHistoryColor" />
      <div className="work-list">
        <p>Work Histories</p>
        {works.map((work) => (
          <Work key={work.id} {...{ handleDeleteWork, id: work.id }} />
        ))}
        <div
          className="add-work"
          onClick={() => {
            handleAddWork()
          }}
        >
          New Work History
        </div>
      </div>
    </div>
  )
  return (
    <FormSection
      name="Work History"
      svgUrl={userSvg}
      isExpanded={isExpanded}
      onToggle={handleToggleSection}
    >
      {content}
    </FormSection>
  )
}
