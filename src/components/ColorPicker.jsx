import { useState } from 'react'
import './../styles/ColorPicker.css'
import brushSvg from './../assets/brush.svg'

function Palette({ setColor, color }) {
  const basicPalette = [
    '#EA580C',
    '#EAB308',
    '#22C55E',
    '#3B82F6',
    '#8B5CF6',
    '#EC4899',
    '#F43F5E',
    '#09203F',
  ]

  return (
    <div className="palette-popover">
      <div className="colors-grid">
        {basicPalette.map((c) => (
          <button
            key={c}
            className="color-swatch-btn"
            style={{ backgroundColor: c }}
            onClick={() => setColor(c)}
            type="button"
          />
        ))}
      </div>

      <input
        type="text"
        className="hex-input"
        placeholder="#000000"
        onChange={(e) => setColor(e.target.value)}
        value={color || '#'}
        autoFocus
        maxLength="7"
        id="hex-input"
      />
      <div className="palette-container">
        <input
          type="color"
          name="palette"
          id="palette"
          onChange={(e) => setColor(e.target.value)}
          value={color || '#ffffff'}
        />
      </div>
    </div>
  )
}

export default function ColorPicker({ miniMode, name, color = '', onChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const setColor = (value) => onChange({ target: { name, value } })

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
