export default function Topbar({ siteName, setSiteName, onNew, onPreview, blockCount }) {
  return (
    <header className="h-14 bg-slate-900 border-b border-slate-700/50 flex items-center justify-between px-5 shrink-0 z-30">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
          W
        </div>
        <input
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          className="bg-slate-800 text-white text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-violet-500 w-48 transition-colors"
          placeholder="Website name..."
        />
      </div>

      <div className="flex items-center gap-2">
        <span className="text-slate-500 text-xs hidden sm:block">
          {blockCount} block{blockCount !== 1 ? "s" : ""}
        </span>
        <button
          onClick={onNew}
          className="text-slate-400 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-slate-800 transition-all"
        >
          + New
        </button>
        <button
          onClick={onPreview}
          className="bg-slate-700 hover:bg-slate-600 text-white text-sm px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
        >
          <span>👁</span> Preview
        </button>
      </div>
    </header>
  );
}
