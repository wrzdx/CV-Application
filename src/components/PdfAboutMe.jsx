export default function AboutMeSection({ data }) {
  return (
    data.aboutMe?.value && (
      <div className="aboutMe-data">
        <h3 style={{ backgroundColor: data.aboutMeColor?.value }}>
          PROFESSIONAL SUMMARY
        </h3>
        <div className="content-wrapper">{data.aboutMe.value}</div>
      </div>
    )
  )
}
