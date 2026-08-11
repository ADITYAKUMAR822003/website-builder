import { useState, useEffect } from "react";
import axios from "axios";

const API = "http://127.0.0.1:5001/api/websites";

export default function SavedSites({ token, onLoad, onLogin }) {
  const [sites, setSites] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;
    if (!token) {
      setError("Login to view saved websites");
      return;
    }

    setLoading(true);
    setError("");
    axios
      .get(API, { headers: { Authorization: `Bearer ${token}` } })
      .then((r) => setSites(r.data))
      .catch((err) => {
        setError(err.response?.data?.message || "Unable to load saved sites");
      })
      .finally(() => setLoading(false));
  }, [open, token]);

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    try {
      await axios.delete(`${API}/${id}`, { headers: { Authorization: `Bearer ${token}` } });
      setSites((s) => s.filter((x) => (x.id || x._id) !== id));
    } catch (err) {
      setError("Failed to delete");
    }
  };

  return (
    <>
      <button
        onClick={() => {
          if (!token) {
            onLogin();
            return;
          }
          setOpen(true);
        }}
        className="text-gray-600 hover:text-gray-900 text-sm px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all"
      >
        📂 My Sites
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl" style={{border:'1px solid #e5e7eb'}}>
            <div className="flex items-center justify-between p-5" style={{borderBottom:'1px solid #e5e7eb'}}>
              <h2 className="font-bold text-lg" style={{color:'#b82025'}}>Saved Websites</h2>
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-700 text-xl leading-none">✕</button>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto space-y-2">
              {error && (
                <p className="text-red-600 text-sm text-center py-8">{error}</p>
              )}
              {loading ? (
                <p className="text-gray-500 text-sm text-center py-8">Loading...</p>
              ) : sites.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-8">No saved websites yet.</p>
              ) : (
                sites.map((site) => {
                  const siteId = site.id || site._id;
                  return (
                    <div
                      key={siteId}
                      onClick={() => { onLoad(site); setOpen(false); }}
                      className="flex items-center justify-between rounded-xl p-4 cursor-pointer transition-all group"
                      style={{background:'#f9fafb', border:'1px solid #e5e7eb'}}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor='#b82025'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor='#e5e7eb'}
                    >
                      <div>
                        <p className="text-gray-800 font-semibold text-sm">{site.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {site.components.length} components · {new Date(site.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity" style={{color:'#b82025'}}>Load →</span>
                        <button
                          onClick={(e) => handleDelete(siteId, e)}
                          className="text-red-400 hover:text-red-300 text-xs px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
