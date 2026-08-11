export default function PreviewModal({ blocks, onClose }) {
  const responsiveCss = `
    *{box-sizing:border-box;margin:0;padding:0;}body{font-family:system-ui,sans-serif;}
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
  `;
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Preview</title>
  <style>${responsiveCss}</style>
</head>
<body>
  ${blocks.map((b) => b.html).join("\n")}
</body>
</html>`;

  const handleDownload = () => {
    const blob = new Blob([fullHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "website.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col">
      {/* Modal Topbar */}
      <div className="bg-slate-900 border-b border-slate-700 px-5 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-slate-400 text-sm font-mono">Live Preview</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleDownload}
            className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-3 sm:px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
          >
            ⬇ <span className="hidden sm:inline">Export HTML</span><span className="sm:hidden">Export</span>
          </button>
          <button
            onClick={onClose}
            className="bg-slate-700 hover:bg-slate-600 text-white text-sm px-3 sm:px-4 py-1.5 rounded-lg transition-all"
          >
            ✕ Close
          </button>
        </div>
      </div>

      {/* iframe Preview */}
      <iframe
        title="preview"
        srcDoc={fullHtml}
        className="flex-1 w-full bg-white"
        sandbox="allow-scripts"
      />
    </div>
  );
}
