import { useState, useEffect, useCallback } from "react";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PreviewModal from "./components/PreviewModal";
import SavedSites from "./components/SavedSites";
import EditPanel from "./components/EditPanel";
import AuthModal from "./components/AuthModal";

const API = "http://127.0.0.1:5001/api/websites";

export default function App() {
  const [blocks, setBlocks] = useState([]);
  const [siteName, setSiteName] = useState("My Website");
  const [activeItem, setActiveItem] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [savedId, setSavedId] = useState(null);
  const [toast, setToast] = useState(null);
  const [editingBlock, setEditingBlock] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken) setAuthToken(storedToken);
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }, [authToken]);

  const handleAuthSuccess = ({ token, user }) => {
    setAuthToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setShowAuth(false);
    showToast(`Welcome ${user.email}`, "success");
  };

  const handleLogout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    showToast("Logged out", "success");
  };

  const handleDragStart = ({ active }) => {
    // From sidebar
    if (active.data.current?.item) {
      setActiveItem(active.data.current.item);
    }
  };

  const handleDragEnd = ({ active, over }) => {
    setActiveItem(null);

    // Dropped onto canvas from sidebar — must be over canvas, not sidebar
    if (active.data.current?.item && over?.id === "canvas-drop") {
      const item = active.data.current.item;
      const newBlock = {
        ...item,
        instanceId: `${item.id}-${Date.now()}`,
      };
      setBlocks((prev) => [...prev, newBlock]);
      return;
    }

    // Ignore drops back onto sidebar
    if (active.data.current?.item) return;

    // Reordering within canvas
    if (active.id !== over?.id) {
      setBlocks((prev) => {
        const oldIndex = prev.findIndex((b) => b.instanceId === active.id);
        const newIndex = prev.findIndex((b) => b.instanceId === over?.id);
        if (oldIndex === -1 || newIndex === -1) return prev;
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  const handleRemove = useCallback((instanceId) => {
    setBlocks((prev) => prev.filter((b) => b.instanceId !== instanceId));
    setEditingBlock((prev) => prev?.instanceId === instanceId ? null : prev);
  }, []);

  const handleEdit = useCallback((block) => {
    setEditingBlock((prev) => prev?.instanceId === block.instanceId ? null : block);
  }, []);

  const handleBlockUpdate = useCallback((instanceId, newHtml) => {
    setBlocks((prev) => prev.map((b) => b.instanceId === instanceId ? { ...b, html: newHtml } : b));
    setEditingBlock((prev) => prev?.instanceId === instanceId ? { ...prev, html: newHtml } : prev);
  }, []);

  const handleSave = async () => {
    if (!authToken) {
      showToast("Please login to save websites", "error");
      setShowAuth(true);
      return;
    }

    if (!siteName.trim()) return showToast("Please enter a website name", "error");
    setIsSaving(true);
    try {
      const payload = { name: siteName, components: blocks };
      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      };
      if (savedId) {
        await axios.put(`${API}/${savedId}`, payload, config);
      } else {
        const res = await axios.post(API, payload, config);
        setSavedId(res.data.id);
      }
      showToast("Website saved successfully!");
    } catch (err) {
      console.error(err);
      showToast(err.response?.data?.message || "Failed to save. Is the server running?", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLoad = (site) => {
    setBlocks(site.components);
    setSiteName(site.name);
    setSavedId(site.id);
    showToast(`Loaded "${site.name}"`);
  };

  const handleNew = () => {
    setBlocks([]);
    setSiteName("My Website");
    setSavedId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col h-screen overflow-hidden" style={{background:'#f5f5f5'}}>
        {/* Topbar */}
        <div className="flex items-center gap-2 h-14 border-b px-3 sm:px-5 shrink-0 z-30" style={{background:'#b82025', borderColor:'#9a1b1f'}}>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {/* Mobile sidebar toggle */}
            <button
              className="md:hidden text-white/80 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-all shrink-0"
              onClick={() => setSidebarOpen((v) => !v)}
            >
              ☰
            </button>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0" style={{background:'#fff', color:'#b82025'}}>
              W
            </div>
            <input
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="text-sm font-medium px-3 py-1.5 rounded-lg border focus:outline-none w-28 sm:w-48 transition-colors min-w-0" style={{background:'rgba(255,255,255,0.2)', borderColor:'rgba(255,255,255,0.4)', color:'#fff'}}
              placeholder="Website name..."
            />
          </div>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <span className="text-white/60 text-xs hidden sm:block">
              {blocks.length} block{blocks.length !== 1 ? "s" : ""}
            </span>
            {savedId && (
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`http://localhost:5001/api/websites/${savedId}/preview`);
                  showToast("Link copied to clipboard!");
                }}
                className="text-white/80 hover:text-white text-sm px-2 sm:px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all hidden sm:block"
              >
                🔗
              </button>
            )}
            <SavedSites token={authToken} onLoad={handleLoad} onLogin={() => setShowAuth(true)} />
            <button
              onClick={handleNew}
              className="text-white/80 hover:text-white text-sm px-2 sm:px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all"
            >
              + New
            </button>
            {user ? (
              <button
                onClick={handleLogout}
                className="text-white/80 hover:text-white text-sm px-2 sm:px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setShowAuth(true)}
                className="text-white/80 hover:text-white text-sm px-2 sm:px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all"
              >
                Login
              </button>
            )}
            <button
              onClick={() => setShowPreview(true)}
              className="text-sm px-3 sm:px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 font-semibold" style={{background:'#fff', color:'#b82025'}}
            >
              <span>👁</span><span className="hidden sm:inline"> Preview</span>
            </button>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden relative">
          {/* Mobile overlay */}
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-20 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}
          {/* Sidebar — drawer on mobile, static on desktop */}
          <div className={`
            fixed md:static inset-y-0 left-0 z-30
            transform transition-transform duration-300 ease-in-out
            md:transform-none md:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:flex md:shrink-0
          `}>
            <Sidebar onSave={handleSave} isSaving={isSaving} onClose={() => setSidebarOpen(false)} />
          </div>
          <Canvas blocks={blocks} onRemove={handleRemove} onEdit={handleEdit} editingId={editingBlock?.instanceId} />
          {editingBlock && (
            <EditPanel
              block={editingBlock}
              onUpdate={handleBlockUpdate}
              onClose={() => setEditingBlock(null)}
            />
          )}
        </div>
      </div>

      {/* Drag Overlay */}
      <DragOverlay>
        {activeItem && (
          <div className="text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-2xl backdrop-blur cursor-grabbing" style={{background:'rgba(184,32,37,0.9)', border:'1px solid rgba(184,32,37,0.5)'}}>
            ⠿ {activeItem.label}
          </div>
        )}
      </DragOverlay>

      {/* Preview Modal */}
      {showPreview && (
        <PreviewModal blocks={blocks} onClose={() => setShowPreview(false)} />
      )}

      <AuthModal
        open={showAuth}
        onClose={() => setShowAuth(false)}
        onSuccess={handleAuthSuccess}
      />

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-5 py-3 rounded-xl text-sm font-semibold shadow-2xl transition-all duration-300 ${
            toast.type === "error"
              ? "bg-red-600 text-white"
              : "bg-emerald-600 text-white"
          }`}
        >
          {toast.msg}
        </div>
      )}
    </DndContext>
  );
}
