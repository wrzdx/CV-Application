import ColorPicker from './ColorPicker'
import './../styles/AboutMe.css'

export default function AboutMe() {
  return (
    <div className="about-me">
      <ColorPicker miniMode={false} />
      <div className="about-me-text-container">
        <p>Description</p>
        <textarea
          className="about-me-text"
          style={{ width: '100%' }}
          name="aboutMe"
          id="aboutMe"
          placeholder="Write a brief description about yourself..."
        ></textarea>
      </div>
    </div>
  )
}
