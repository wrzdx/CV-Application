import envelopeSvg from './../assets/envelope.svg'
import phoneSvg from './../assets/phone-call.svg'
import markerSvg from './../assets/marker.svg'
import linkedinSvg from './../assets/linkedin.svg'
import globeSvg from './../assets/globe.svg'

export default function PersonalDataSection({ data }) {
  return (
    <div className="personal-data">
      {data.profilePicture?.isValid && (
        <div className="profile-photo">
          <img src={data.profilePicture.value} alt="Profile Photo" />
        </div>
      )}
      <div
        className={
          'text-container' + (data.profilePicture?.isValid ? '' : ' center')
        }
      >
        {data.fullName?.isValid && (
          <h1 className="fullName">{data.fullName.value}</h1>
        )}
        <div className="contact-info">
          {data.email?.isValid && (
            <a href={'mailto:' + data.email.value} target="_blank">
              <div style={{ backgroundColor: data.emailColor?.value }}>
                <img src={envelopeSvg} alt="envelope" />
              </div>
              <span>{data.email.value}</span>
            </a>
          )}
          {data.phone?.isValid && (
            <a href={'tel:' + data.phone.value} target="_blank">
              <div style={{ backgroundColor: data.phoneColor?.value }}>
                <img src={phoneSvg} alt="phone" />
              </div>
              <span>{data.phone.value}</span>
            </a>
          )}
          {data.address?.isValid && (
            <a
              href={
                'https://www.google.com/maps/search/?api=1&query=' +
                data.address.value
              }
              target="_blank"
            >
              <div style={{ backgroundColor: data.addressColor?.value }}>
                <img src={markerSvg} alt="location marker" />
              </div>
              <span>{data.address.value}</span>
            </a>
          )}
          {data.linkedIn?.isValid && (
            <a
              href={'https://linkedin.com/in/' + data.linkedIn.value}
              target="_blank"
            >
              <div style={{ backgroundColor: data.linkedInColor?.value }}>
                <img
                  src={linkedinSvg}
                  alt="linkedIn"
                  style={{ borderRadius: '18%' }}
                />
              </div>
              <span>{data.linkedIn.value}</span>
            </a>
          )}
          {data.website?.isValid && (
            <a href={data.website.value} target="_blank">
              <div style={{ backgroundColor: data.websiteColor?.value }}>
                <img src={globeSvg} alt="website" />
              </div>
              <span>{data.website.value.slice(8)}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
