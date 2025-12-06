import ColorPicker from './ColorPicker'
import './../styles/WorkHistory.css'
import userSvg from './../assets/user.svg'
import crossSvg from './../assets/cross.svg'
import FormSection from './FormSection.jsx'
import DatePicker from './DatePicker.jsx'

function Work({ work, handleDeleteWork, setWork }) {
  return (
    <fieldset className="work-item">
      <button
        type="button"
        className="delete-work-item"
        onClick={() => handleDeleteWork(work.id)}
      >
        <img src={crossSvg} alt="Delete Work Item" />
      </button>
      <div className="content">
        <p>
          <label htmlFor={'name-' + work.id}>Company</label>
          <input
            id={'name-' + work.id}
            name="companyName"
            placeholder="Enter the company's name"
            maxLength="32"
            value={work.companyName}
            onChange={(e) => setWork({ ...work, companyName: e.target.value })}
            required
          />
        </p>
        <p>
          <label htmlFor={'address-' + work.id}>Address</label>
          <input
            id={'address-' + work.id}
            name="companyAddress"
            placeholder="Enter the company's address"
            maxLength="32"
            value={work.companyAddress}
            onChange={(e) =>
              setWork({ ...work, companyAddress: e.target.value })
            }
            required
          />
        </p>
        <p>
          <label htmlFor={'role-' + work.id}>Role</label>
          <input
            id={'role-' + work.id}
            name="roleInCompany"
            placeholder="Enter your Role/Job Title"
            maxLength="32"
            value={work.roleInCompany}
            onChange={(e) =>
              setWork({ ...work, roleInCompany: e.target.value })
            }
            required
          />
        </p>
        <fieldset className="job-descs">
          <label
            key="desc-label"
            htmlFor={'description-' + work.jobDescs[0]?.id}
          >
            Description
          </label>
          {work.jobDescs.map(({ id, value }) => {
            return (
              <div className="job-desc-container" key={id}>
                <input
                  id={'description-' + id}
                  name="jobDescription"
                  placeholder="Job Responsibility"
                  maxLength="32"
                  value={value}
                  onChange={(e) =>
                    setWork({
                      ...work,
                      jobDescs: work.jobDescs.map((job) =>
                        job.id == id ? { ...job, value: e.target.value } : job,
                      ),
                    })
                  }
                  required
                />
                <button
                  type="button"
                  className="delete-job-desc"
                  onClick={() => {
                    setWork({
                      ...work,
                      jobDescs: work.jobDescs.filter(
                        (jobDesc) => jobDesc.id != id,
                      ),
                    })
                  }}
                >
                  <img src={crossSvg} alt="delete job description" />
                </button>
              </div>
            )
          })}
          <div
            className="add-job-desc"
            onClick={() => {
              setWork({
                ...work,
                jobDescs: [...work.jobDescs, { id: crypto.randomUUID() }],
              })
            }}
          >
            New Description
          </div>
        </fieldset>
        <div className="dates">
          <DatePicker
            name={'startDate' + work.id}
            setDate={(value) => setWork({ ...work, startDate: value })}
            date={work.startDate}
            upperBound={work.endDate}
          >
            Start Date
          </DatePicker>
          <DatePicker
            name={'endDate' + work.id}
            setDate={(value) => setWork({ ...work, endDate: value })}
            date={work.endDate}
            lowerBound={work.startDate}
          >
            End Date
          </DatePicker>
        </div>
      </div>
    </fieldset>
  )
}

export default function WorkHistory({
  handleToggleSection,
  isExpanded,
  data,
  handleChangeData,
}) {
  const works = data.works
  const setWorks = (newWorks) => handleChangeData('works', newWorks)
  const handleDeleteWork = (id) => {
    setWorks(works.filter((work) => work.id != id))
  }
  const handleAddWork = () => {
    setWorks([
      ...works,
      {
        id: crypto.randomUUID(),
        jobDescs: [],
        startDate: new Date(),
        endDate: new Date(),
      },
    ])
  }
  const handleUpdateWork = (updatedWork) => {
    setWorks(
      works.map((work) => {
        return work.id === updatedWork.id ? updatedWork : work
      }),
    )
  }
  const content = (
    <div className="work-history">
      <ColorPicker
        miniMode={false}
        name="workHistoryColor"
        onChange={(e) => handleChangeData(e.target.name, e.target.value)}
        color={data.workHistoryColor}
      />
      <div className="work-list">
        <p>Work Histories</p>
        {works.map((work) => (
          <Work
            key={work.id}
            {...{
              handleDeleteWork,
              work,
              setWork: (updatedWork) => handleUpdateWork(updatedWork),
            }}
          />
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
