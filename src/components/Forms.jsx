/* eslint-disable no-unused-vars */
import { useState } from 'react'

export default function Forms({ formData, setFormData }) {
  const [expandedSectionId, setExpandedSectionId] = useState(null)

  function handleToggleSection(sectionId) {
    setExpandedSectionId((prevId) => (prevId === sectionId ? null : sectionId))
  }

  function handleChangeData(
    sectionName,
    fieldName,
    fieldValue,
    isValid = true,
  ) {
    setFormData({
      ...formData,
      [sectionName]: {
        ...formData[sectionName],
        data: {
          ...formData[sectionName].data,
          [fieldName]: { value: fieldValue, isValid: isValid },
        },
      },
    })
  }

  return (
    <div className="form-list">
      {Object.entries(formData).map(([key, { Section, data }]) => (
        <Section
          key={key}
          {...{
            isExpanded: key === expandedSectionId,
            handleToggleSection: () => handleToggleSection(key),
            data,
            handleChangeData: (fieldName, fieldValue, isValid) =>
              handleChangeData(key, fieldName, fieldValue, isValid),
          }}
        />
      ))}
    </div>
  )
}
