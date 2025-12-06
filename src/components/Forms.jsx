/* eslint-disable no-unused-vars */
import { useState } from 'react'

export default function Forms({ formData, setFormData }) {
  const [expandedSectionId, setExpandedSectionId] = useState(null)

  function handleToggleSection(sectionId) {
    setExpandedSectionId((prevId) => (prevId === sectionId ? null : sectionId))
  }

  function handleChangeData(sectionId, fieldName, fieldValue) {
    setFormData(
      formData.map((section, id) =>
        sectionId == id
          ? { ...section, data: { ...section.data, [fieldName]: fieldValue } }
          : section,
      ),
    )
  }

  return (
    <div className="form-list">
      {formData.map(({ Section, data }, id) => (
        <Section
          key={id}
          {...{
            isExpanded: id === expandedSectionId,
            handleToggleSection: () => handleToggleSection(id),
            data,
            handleChangeData: (fieldName, fieldValue) =>
              handleChangeData(id, fieldName, fieldValue),
          }}
        />
      ))}
    </div>
  )
}
