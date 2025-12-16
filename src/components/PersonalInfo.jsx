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
        key={data.profilePicture?.value === 'reset' ? '' : undefined}
        {...{
          id: 'profilePicture',
          name: 'Profile Picture',
          inputProps: {
            type: 'file',
            name: 'profilePicture',
            accept: 'image/*',
          },
          value: data.profilePicture?.value,
          onChange: (e) => {
            if (e.target.files && e.target.files[0]) {
              const file = e.target.files[0]

              const previewUrl = URL.createObjectURL(file)

              handleChangeData(
                'profilePicture',
                previewUrl,
                e.target.checkValidity(),
              )
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
            className:
              data.fullName === undefined || data.fullName.isValid
                ? ''
                : 'invalid',
          },
          value: data.fullName?.value,
          onChange: (e) =>
            handleChangeData(
              e.target.name,
              e.target.value,
              e.target.checkValidity(),
            ),
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
            className:
              data.email === undefined || data.email.isValid ? '' : 'invalid',
          },
          colorPicker: true,
          value: data.email?.value,
          color: data.emailColor?.value,
          onChange: (e) =>
            handleChangeData(
              e.target.name,
              e.target.value,
              e.target.checkValidity(),
            ),
        }}
      />
      <InputGroup
        {...{
          id: 'phone',
          name: 'Phone Number',
          inputProps: {
            type: 'tel',

            pattern: '[+]?[0-9 \\(\\)\\-]{7,}',
            title: 'Enter correct phone number (min 7 number)',
            name: 'phone',
            placeholder: 'Enter your phone number',
            required: true,
            maxLength: 18,
            autoComplete: 'on',
            className:
              data.phone === undefined || data.phone.isValid ? '' : 'invalid',
          },
          colorPicker: true,
          value: data.phone?.value,
          color: data.phoneColor?.value,
          onChange: (e) =>
            handleChangeData(
              e.target.name,
              e.target.value,
              e.target.checkValidity(),
            ),
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
            className:
              data.address === undefined || data.address.isValid
                ? ''
                : 'invalid',
          },
          colorPicker: true,
          value: data.address?.value,
          color: data.addressColor?.value,
          onChange: (e) =>
            handleChangeData(
              e.target.name,
              e.target.value,
              e.target.checkValidity(),
            ),
        }}
      />
      <InputGroup
        {...{
          id: 'linkedin',
          name: 'LinkedIn Profile',
          inputProps: {
            name: 'linkedIn',
            placeholder: 'Username',
            title:
              'Enter username of your linkedin profile: https://linkedin.com/in/Username',
            maxLength: 64,
            className:
              data.linkedIn === undefined || data.linkedIn.isValid
                ? ''
                : 'invalid',
          },
          colorPicker: true,
          value: data.linkedIn?.value,
          color: data.linkedInColor?.value,
          onChange: (e) =>
            handleChangeData(
              e.target.name,
              e.target.value,
              e.target.checkValidity(),
            ),
        }}
      />
      <InputGroup
        {...{
          id: 'website',
          name: 'Website',
          inputProps: {
            type: 'url',
            name: 'website',
            maxLength: 64,
            className:
              data.website === undefined || data.website.isValid
                ? ''
                : 'invalid',
            pattern: 'https?://.+\\..+',
            placeholder: 'https://mywebsite.com',
            title: 'Enter valid URL (starts with http:// or https://)',
          },
          colorPicker: true,
          value: data.website?.value,
          color: data.websiteColor?.value,
          onChange: (e) =>
            handleChangeData(
              e.target.name,
              e.target.value,
              e.target.checkValidity(),
            ),
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
