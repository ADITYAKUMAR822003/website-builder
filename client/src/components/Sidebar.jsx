import { useState } from "react";
import { componentTemplates } from "../data/templates";
import { useDraggable } from "@dnd-kit/core";
import { useDroppable } from "@dnd-kit/core";

const RED = "#b82025";

function DraggableItem({ item }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: item.id,
    data: { item },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`group cursor-grab active:cursor-grabbing rounded-xl border p-3 transition-all duration-200 select-none
        ${isDragging ? "opacity-40 scale-95" : "hover:scale-[1.02] hover:shadow-md"}`}
      style={{ background: "#fff", borderColor: "#e5e7eb", color: "#111827" }}
      onMouseEnter={e => e.currentTarget.style.borderColor = RED}
      onMouseLeave={e => e.currentTarget.style.borderColor = "#e5e7eb"}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: RED }}>{item.type}</span>
        <span className="text-xs text-gray-400 opacity-50 group-hover:opacity-100 transition-opacity">⠿ drag</span>
      </div>
      <p className="text-sm font-semibold leading-tight text-gray-800">{item.label}</p>
      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{item.preview}</p>
    </div>
  );
}

export default function Sidebar({ onSave, isSaving, onClose }) {
  const [activeTab, setActiveTab] = useState("headers");
  const { setNodeRef } = useDroppable({ id: "sidebar-drop" });

  const tabs = [
    { key: "headers", label: "Headers", count: componentTemplates.headers.length },
    { key: "footers", label: "Footers", count: componentTemplates.footers.length },
    { key: "sections", label: "Sections", count: componentTemplates.sections.length },
    { key: "contacts", label: "Contact", count: componentTemplates.contacts.length },
    { key: "about", label: "About", count: componentTemplates.about.length },
    { key: "hero", label: "Hero", count: componentTemplates.hero.length },
    { key: "pricing", label: "Pricing", count: componentTemplates.pricing.length },
    { key: "blog", label: "Blog", count: componentTemplates.blog.length },
    { key: "team", label: "Team", count: componentTemplates.team.length },
    { key: "services", label: "Services", count: componentTemplates.services.length },
  ];

  return (
    <aside ref={setNodeRef} className="w-72 flex flex-col h-full" style={{ background: "#fff", borderRight: "1px solid #e5e7eb" }}>
      {/* Header */}
      <div className="p-4" style={{ borderBottom: "1px solid #e5e7eb" }}>
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm text-white" style={{ background: RED }}>🧱</div>
            <h1 className="font-bold text-lg" style={{ color: RED }}>WebCraft</h1>
          </div>
          <button onClick={onClose} className="md:hidden text-gray-400 hover:text-gray-700 text-xl leading-none p-1">✕</button>
        </div>
        <p className="text-gray-400 text-xs">Drag components to build your page</p>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 p-3 gap-1" style={{ borderBottom: "1px solid #e5e7eb" }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="py-2 px-1 rounded-lg text-xs font-semibold transition-all duration-200"
            style={activeTab === tab.key
              ? { background: RED, color: "#fff" }
              : { color: "#6b7280", background: "transparent" }}
          >
            {tab.label}
            <span className={`ml-1 text-xs ${activeTab === tab.key ? "opacity-80" : "opacity-50"}`}>
              ({tab.count})
            </span>
          </button>
        ))}
      </div>

      {/* Component List */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2" style={{ background: "#f9fafb" }}>
        {componentTemplates[activeTab].map((item) => (
          <DraggableItem key={item.id} item={item} />
        ))}
      </div>

      {/* Save Button */}
      <div className="p-4" style={{ borderTop: "1px solid #e5e7eb", background: "#fff" }}>
        <button
          onClick={onSave}
          disabled={isSaving}
          className="w-full text-white font-semibold py-3 rounded-xl transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ background: RED }}
        >
          {isSaving ? "Saving..." : "💾 Save Website"}
        </button>
      </div>
    </aside>
  );
}
