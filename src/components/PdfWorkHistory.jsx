import { format } from 'date-fns'

export default function WorkHistorySection({ data }) {
  return (
    data.works?.value?.length != 0 && (
      <div className="workHistory-data">
        <h3 style={{ backgroundColor: data.workHistoryColor?.value }}>
          WORK HISTORY
        </h3>
        <div className="content-wrapper">
          <ul className="works-data">
            {data.works?.value?.map((work) => (
              <li key={work.id}>
                <div>
                  <span className="bold">{work.companyName}</span>
                  <span>|</span> <span>{work.companyAddress}</span>
                  <span>
                    {format(work.startDate, 'MMM yyyy') +
                      ' – ' +
                      format(work.endDate, 'MMM yyyy')}
                  </span>
                </div>
                <p
                  className="role"
                  style={{ color: data.workHistoryColor?.value }}
                >
                  {work.roleInCompany}
                </p>
                <ul className="jobs">
                  {work.jobDescs.map((job) => (
                    <li key={job.id}>{job.value}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  )
}
