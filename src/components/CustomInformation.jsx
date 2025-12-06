import ColorPicker from './ColorPicker'
import './../styles/CustomInformation.css'
import userSvg from './../assets/user.svg'
import FormSection from './FormSection.jsx'

export default function CustomInformation({
  handleToggleSection,
  isExpanded,
  data,
  handleChangeData,
}) {
  const content = (
    <div className="custom-info">
      <ColorPicker
        miniMode={false}
        name="customInfoColor"
        onChange={(e) => handleChangeData(e.target.name, e.target.value)}
        color={data.customInfoColor}
      />
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          {...{
            type: 'text',
            name: 'customInfoTitle',
            placeholder: 'Enter title',
            required: true,
            maxLength: 32,
            value: data.customInfoTitle,
            onChange: (e) => handleChangeData(e.target.name, e.target.value),
          }}
        />
        <p className="hint">Something like "Fun facts"</p>
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          {...{
            type: 'text',
            name: 'customInfoDesc',
            placeholder: 'Enter description',
            required: true,
            value: data.customInfoDesc,
            onChange: (e) => handleChangeData(e.target.name, e.target.value),
            maxLength: 32,
          }}
        />
      </p>
    </div>
  )
  return (
    <FormSection
      name="Custom Information"
      svgUrl={userSvg}
      isExpanded={isExpanded}
      onToggle={handleToggleSection}
    >
      {content}
    </FormSection>
  )
}
