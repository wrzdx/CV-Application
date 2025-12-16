import { useState } from 'react'
import './../styles/ColorPicker.css'
import brushSvg from './../assets/brush.svg'

function Palette({ setColor, color }) {
  const basicPalette = [
    '#66c2a5',
    '#fc8d62',
    '#8da0cb',
    '#e78ac3',
    '#a6d854',
    '#ffd92f',
    '#e5c494',
    '#b3b3b3',
  ]
  const [textColor, setTextColor] = useState('#')

  return (
    <div className="palette-popover">
      <div className="colors-grid">
        {basicPalette.map((c) => (
          <button
            key={c}
            className="color-swatch-btn"
            style={{ backgroundColor: c }}
            onClick={() => {
              setColor(c)
              setTextColor(c)
            }}
            type="button"
          />
        ))}
      </div>

      <input
        type="text"
        className="hex-input"
        placeholder="#000000"
        onChange={(e) => {
          setTextColor(e.target.value || '#')
          const isEmpty = e.target.value === '#'
          const isValid =
            e.target.value.length === 7 && e.target.value[0] === '#'
          if (isValid) {
            setColor(e.target.value)
          }
          if (isEmpty) {
            setColor('')
          }
        }}
        value={textColor}
        autoFocus
        maxLength="7"
        id="hex-input"
      />
      <div className="palette-container">
        <input
          type="color"
          name="palette"
          id="palette"
          onChange={(e) => {
            setColor(e.target.value)
            setTextColor(e.target.value)
          }}
          value={color || '#ffffff'}
        />
      </div>
    </div>
  )
}

export default function ColorPicker({ miniMode, name, color = '', onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const setColor = (value) => {
    onChange({ target: { name, value, checkValidity: () => true } })
  }

  return (
    <div className="color-picker-container">
      {!miniMode && <p onClick={() => setIsOpen(!isOpen)}>Pick a tab color</p>}

      <div className="color-picker-trigger" onClick={() => setIsOpen(!isOpen)}>
        {color ? (
          <span
            className="current-color-swatch"
            style={{ backgroundColor: color }}
          ></span>
        ) : (
          <img
            src={brushSvg}
            alt="Color Picker Icon"
            className="color-picker-icon"
          />
        )}

        {!miniMode && <span>{color || 'Pick a color'}</span>}
      </div>

      {isOpen && (
        <>
          <div className="backdrop" onClick={() => setIsOpen(false)} />
          <Palette setColor={setColor} color={color} />
        </>
      )}
    </div>
  )
}
