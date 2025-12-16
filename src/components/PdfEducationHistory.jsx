import { format } from 'date-fns'

export default function EducationHistorySection({ data }) {
  return (
    data.educations?.value?.length != 0 && (
      <div className="educationHistory-data">
        <h3 style={{ backgroundColor: data.educationHistoryColor?.value }}>
          EDUCATION & ACHIEVEMENTS
        </h3>
        <div className="content-wrapper">
          <ul className="educations-data">
            {data.educations?.value?.map((education) => (
              <li key={education.id}>
                <div>
                  <span className="bold">{education.schoolName}</span>
                  <span>|</span> <span>{education.schoolAddress}</span>
                  <span>
                    {format(education.startDate, 'MMM yyyy') +
                      ' – ' +
                      format(education.endDate, 'MMM yyyy')}
                  </span>
                </div>
                <p
                  className="degree"
                  style={{ color: data.educationHistoryColor?.value }}
                >
                  {education.degree}
                </p>
                <ul className="achievements">
                  {education.achievements.map((achievement) => (
                    <li key={achievement.id}>{achievement.value}</li>
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
