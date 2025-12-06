import './../styles/PersonalInfo.css'
import ColorPicker from './ColorPicker'
import userSvg from './../assets/user.svg'
import FormSection from './FormSection.jsx'

function InputGroup({
  id,
  name,
  inputProps,
  value = '',
  onChange,
  colorPicker = false,
  color,
}) {
  const isFile = inputProps.type === 'file'

  return (
    <div className={'input-group'}>
      <label htmlFor={id}>{name}</label>
      {colorPicker && (
        <ColorPicker
          miniMode={true}
          name={inputProps.name + 'Color'}
          onChange={onChange}
          color={color}
        />
      )}
      <input
        id={id}
        {...inputProps}
        value={isFile ? undefined : value}
        onChange={onChange}
      />
    </div>
  )
}

export default function PersonalInfo({
  handleToggleSection,
  isExpanded,
  data,
  handleChangeData,
}) {
  const content = (
    <div className="personal-info">
      <InputGroup
        {...{
          id: 'profilePicture',
          name: 'Profile Picture',
          inputProps: {
            type: 'file',
            name: 'profilePicture',
            accept: 'image/*',
          },
          value: data.profilePicture,
          onChange: (e) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0]

              const previewUrl = URL.createObjectURL(file)

              handleChangeData('profilePicture', previewUrl)
            }
          },
        }}
      />
      <InputGroup
        {...{
          id: 'fullName',
          name: 'Full Name',
          inputProps: {
            type: 'text',
            name: 'fullName',
            placeholder: 'Enter your full name',
            required: true,
            maxLength: 32,
          },
          value: data.fullName,
          onChange: (e) => handleChangeData(e.target.name, e.target.value),
        }}
      />
      <InputGroup
        {...{
          id: 'email',
          name: 'Email',
          inputProps: {
            type: 'email',
            name: 'email',
            placeholder: 'Enter your email address',
            required: true,
            maxLength: 32,
            autoComplete: 'on',
          },
          colorPicker: true,
          value: data.email,
          color: data.emailColor,
          onChange: (e) => handleChangeData(e.target.name, e.target.value),
        }}
      />
      <InputGroup
        {...{
          id: 'phone',
          name: 'Phone Number',
          inputProps: {
            type: 'tel',
            name: 'phone',
            placeholder: 'Enter your phone number',
            required: true,
            maxLength: 15,
            autoComplete: 'on',
          },
          colorPicker: true,
          value: data.phone,
          color: data.phoneColor,
          onChange: (e) => handleChangeData(e.target.name, e.target.value),
        }}
      />
      <InputGroup
        {...{
          id: 'address',
          name: 'Address',
          inputProps: {
            type: 'text',
            name: 'address',
            placeholder: 'Enter your address',
            required: true,
            maxLength: 64,
            autoComplete: 'on',
          },
          colorPicker: true,
          value: data.address,
          color: data.addressColor,
          onChange: (e) => handleChangeData(e.target.name, e.target.value),
        }}
      />
      <InputGroup
        {...{
          id: 'linkedin',
          name: 'LinkedIn Profile',
          inputProps: {
            type: 'url',
            name: 'linkedIn',
            placeholder: 'Enter your LinkedIn profile URL',
            maxLength: 64,
          },
          colorPicker: true,
          value: data.linkedIn,
          color: data.linkedInColor,
          onChange: (e) => handleChangeData(e.target.name, e.target.value),
        }}
      />
      <InputGroup
        {...{
          id: 'website',
          name: 'Website',
          inputProps: {
            type: 'url',
            name: 'website',
            placeholder: 'Enter your website URL',
            maxLength: 64,
          },
          colorPicker: true,
          value: data.website,
          color: data.websiteColor,
          onChange: (e) => handleChangeData(e.target.name, e.target.value),
        }}
      />
    </div>
  )
  return (
    <FormSection
      name="Personal Information"
      svgUrl={userSvg}
      isExpanded={isExpanded}
      onToggle={handleToggleSection}
    >
      {content}
    </FormSection>
  )
}
