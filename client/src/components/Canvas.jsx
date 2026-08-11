import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const RED = "#b82025";
const RESPONSIVE_CSS = `<style>
  @media(max-width:640px){
    section,header,footer{padding-left:16px!important;padding-right:16px!important;}
    [style*="grid-template-columns:repeat(4"],[style*="grid-template-columns:repeat(3"],[style*="grid-template-columns:repeat(2"],[style*="grid-template-columns:1fr 1fr"],[style*="grid-template-columns:1fr 1.4fr"],[style*="grid-template-columns:1.6fr 1fr"],[style*="grid-template-columns:1.5fr 1fr"],[style*="grid-template-columns:2fr 1fr 1fr 1fr"],[style*="grid-template-columns:1.5fr 1fr 1fr 1fr"]{grid-template-columns:1fr!important;}
    [style*="font-size:52px"],[style*="font-size:56px"],[style*="font-size:46px"],[style*="font-size:44px"],[style*="font-size:42px"],[style*="font-size:38px"],[style*="font-size:36px"]{font-size:26px!important;}
    [style*="font-size:34px"],[style*="font-size:32px"]{font-size:24px!important;}
    [style*="padding:100px"],[style*="padding:120px"]{padding-top:48px!important;padding-bottom:48px!important;}
    [style*="padding:80px"],[style*="padding:72px"]{padding-top:40px!important;padding-bottom:40px!important;}
    [style*="display:flex"][style*="justify-content:space-between"]{flex-wrap:wrap;gap:16px!important;}
    [style*="height:380px"],[style*="height:360px"],[style*="height:340px"],[style*="height:320px"]{height:200px!important;}
    [style*="gap:60px"],[style*="gap:48px"],[style*="gap:40px"]{gap:24px!important;}
    input[type=email],input[type=text]{width:100%!important;}
    table{font-size:12px!important;}table td,table th{padding:8px!important;}
  }
</style>`;

function SortableBlock({ block, onRemove, onEdit, isEditing }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: block.instanceId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group">
      {/* Toolbar */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-white text-xs font-bold px-2 py-0.5 rounded" style={{ background: RED }}>
          {block.type.toUpperCase()}
        </span>
        <button
          {...listeners}
          {...attributes}
          className="text-white text-xs px-2 py-1 rounded cursor-grab active:cursor-grabbing"
          style={{ background: "#6b7280" }}
          title="Drag to reorder"
        >
          ⠿
        </button>
        <button
          onClick={() => onEdit(block)}
          className="text-white text-xs px-2 py-1 rounded"
          style={{ background: isEditing ? RED : "#6b7280" }}
          title="Edit"
        >
          ✎
        </button>
        <button
          onClick={() => onRemove(block.instanceId)}
          className="text-white text-xs px-2 py-1 rounded"
          style={{ background: "#dc2626" }}
          title="Remove"
        >
          ✕
        </button>
      </div>

      {/* Rendered HTML */}
      <div
        className="w-full border-2 transition-all duration-200 rounded-sm overflow-hidden"
        style={{ borderColor: "transparent" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(184,32,37,0.3)"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
        dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS + block.html }}
      />
    </div>
  );
}

export default function Canvas({ blocks, onRemove, onEdit, editingId }) {
  const { setNodeRef, isOver } = useDroppable({ id: "canvas-drop" });

  return (
    <div className="flex-1 overflow-y-auto" style={{ background: "#f5f5f5" }}>
      {/* Toolbar bar */}
      <div className="sticky top-0 z-20 backdrop-blur px-6 py-3 flex items-center justify-between" style={{ background: "rgba(255,255,255,0.9)", borderBottom: "1px solid #e5e7eb" }}>
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs font-mono" style={{ color: RED }}>preview.html</span>
        </div>
        <span className="text-gray-400 text-xs">{blocks.length} component{blocks.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Drop Zone */}
      <div
        ref={setNodeRef}
        className="min-h-[calc(100vh-56px)] transition-all duration-200"
        style={isOver ? { background: "rgba(184,32,37,0.04)", boxShadow: "inset 0 0 0 2px rgba(184,32,37,0.25)" } : {}}
      >
        {blocks.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] text-center px-8">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6" style={{ background: "#fff", border: `2px dashed rgba(184,32,37,0.3)` }}>
              🖱️
            </div>
            <h2 className="text-gray-700 text-xl font-bold mb-2">Drop components here</h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Drag headers, footers, and sections from the sidebar to start building your website.
            </p>
            <div className="mt-6 flex gap-2">
              {["Header", "Section", "Footer"].map((t) => (
                <span key={t} className="text-xs px-3 py-1.5 rounded-full" style={{ background: "#fff", border: `1px solid rgba(184,32,37,0.3)`, color: RED }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <SortableContext items={blocks.map((b) => b.instanceId)} strategy={verticalListSortingStrategy}>
            {blocks.map((block) => (
              <SortableBlock key={block.instanceId} block={block} onRemove={onRemove} onEdit={onEdit} isEditing={editingId === block.instanceId} />
            ))}
          </SortableContext>
        )}
      </div>
    </div>
  );
}
