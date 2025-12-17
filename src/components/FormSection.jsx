import downSvg from './../assets/angle-down.svg'

export default function FormSection({
  name = 'Section Name',
  svgUrl,
  children,
  isExpanded,
  onToggle,
}) {
  return (
    <form
      className={'formSection' + (isExpanded ? ' expanded' : '')}
      aria-expanded={isExpanded}
    >
      <legend className="sr-only">{name}</legend>

      <header className="formSectionHeader" onClick={onToggle}>
        <img className="sectionIcon" src={svgUrl} alt="" aria-hidden="true" />
        <span className="visual-title">{name}</span>
        <img className="arrow" src={downSvg} alt="" aria-hidden="true" />
      </header>

      <div className="sectionContent">{children}</div>
    </form>
  )
}
