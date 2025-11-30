import './../styles/PersonalInfo.css'

function InputGroup({ id, name, inputProps }) {
  return (
    <p className="input-group">
      <label htmlFor={id}>{name}</label>
      <input id={id} {...inputProps} />
    </p>
  )
}

export default function PersonalInfo() {
  return (
    <div className="personal-info">
      <InputGroup
        {...{
          id: 'profilePicture',
          name: 'Profile Picture',
          inputProps: {
            type: 'file',
            name: 'profilePicture',
            accept: 'image/png, image/jpeg, image/jpg',
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
          },
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
          },
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
          },
        }}
      />
      <InputGroup
        {...{
          id: 'linkedin',
          name: 'LinkedIn Profile',
          inputProps: {
            type: 'url',
            name: 'linkedin',
            placeholder: 'Enter your LinkedIn profile URL',
            maxLength: 64,
          },
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
        }}
      />
    </div>
  )
}
