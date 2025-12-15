export default function Pdf({ data }) {
  return (
    <div className="pdf">
      {data.personalInfo.isValid && (
        <div className="personal-data">
          {data.personalInfo.data.profilePicture && (
            <div className="profile-photo">
              <img
                src={data.personalInfo.data.profilePicture}
                alt="Profile Photo"
              />
            </div>
          )}
          {data.personalInfo.data.fullName && (
            <h1 className="fullName">{data.personalInfo.data.fullName}</h1>
          )}
          <div className="contact-info">
            {data.personalInfo.data.email && (
              <a href={'mailto:' + data.personalInfo.data.email}>
                <img src="#" alt="#" />
                <span>{data.personalInfo.data.email}</span>
              </a>
            )}
            {data.personalInfo.data.phone && (
              <a href={'tel:' + data.personalInfo.data.phone}>
                <img src="#" alt="#" />
                <span>{data.personalInfo.data.phone}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
