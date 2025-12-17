import ColorPicker from './ColorPicker'
import './../styles/CustomInformation.css'
import infoSvg from './../assets/info.svg'
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
        color={data.customInfoColor?.value}
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
            value: data.customInfoTitle?.value || '',
            onChange: (e) => handleChangeData(e.target.name, e.target.value),
          }}
        />
        <span className="hint">Something like "Fun facts"</span>
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
            value: data.customInfoDesc?.value || '',
            onChange: (e) => handleChangeData(e.target.name, e.target.value),
          }}
        />
      </p>
    </div>
  )
  return (
    <FormSection
      name="Custom Information"
      svgUrl={infoSvg}
      isExpanded={isExpanded}
      onToggle={handleToggleSection}
    >
      {content}
    </FormSection>
  )
}
