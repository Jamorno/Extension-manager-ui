'use client'

import { dataExtension } from "@/types/types"

export default function ExtensionCard({
  item, onRemove, onToggle
}: {
  item: dataExtension
  onRemove: () => void
  onToggle: () => void
}) {
  return (
    <div className="extension-cards">
      <div className="card">
        {/* image */}
        <img src={item.logo} alt={item.name} />

        {/* title and description */}
        <div>
          <h1 className="name">{item.name}</h1>
          <p className="description">{item.description}</p>
        </div>
      </div>

      {/* toggle */}
      <div className="bottom-card">
        <button className="remove-btn" onClick={onRemove}>Remove</button>

        <label className="toggle">
          <input type="checkbox" checked={item.isActive} onChange={onToggle} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  )
}
