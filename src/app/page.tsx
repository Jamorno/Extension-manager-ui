'use client'

import { useState } from "react";
import data from "@/../data/data.json"
import { dataExtension } from "@/types/types"
import NavigationBar from "@/components/navigationBar";
import ExtensionCard from "@/components/extensionCard";

export default function Home() {

  const [selected, setSelected] = useState("All")
  const [extension, setExtension] = useState(data)
  const filteredItem = extension.filter((item: dataExtension) => {
    if (selected === "All") return true
    if (selected === "Active") return item.isActive
    if (selected === "Inactive") return !item.isActive
  })

  // for remove button
  const handleRemove = (name: string) => {
    setExtension(prev => prev.filter(item => item.name !== name))
  }

  // for toggle
  const handleToggle = (name: string) => {
    setExtension(prev =>
      prev.map(item => item.name === name ? { ...item, isActive: !item.isActive } : item))
  }

  return (
    <div>
      <NavigationBar selected={selected} setSelected={setSelected} />

      <div className="cards-container">
        {filteredItem.map((item) => (
          <ExtensionCard
            key={item.name}
            item={item}
            onRemove={() => handleRemove((item.name))}
            onToggle={() => handleToggle((item.name))}
          />
        ))}
      </div>
    </div>
  )
}
