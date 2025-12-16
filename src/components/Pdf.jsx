import './../styles/pdf.css'
import AboutMeSection from './PdfAboutMe'
import CustomInfoSection from './PdfCustomInfo'
import EducationHistorySection from './PdfEducationHistory'
import PersonalDataSection from './PdfPersonalData'
import SkillsSection from './PdfSkills'
import WorkHistorySection from './PdfWorkHistory'

export default function Pdf({ data }) {
  return (
    <div className="pdf">
      <PersonalDataSection data={data.personalInfo.data} />
      <AboutMeSection data={data.aboutMe.data} />
      <SkillsSection data={data.skills.data} />
      <WorkHistorySection data={data.workHistory.data} />
      <EducationHistorySection data={data.educationHistory.data} />
      <CustomInfoSection data={data.customInformation.data} />
    </div>
  )
}
