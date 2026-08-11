import { useState, useEffect } from "react";

const RED = "#b82025";
const BORDER = "#e5e7eb";
const INPUT_STYLE = { background: "#f9fafb", borderColor: BORDER, color: "#111827" };

const FONT_OPTIONS = [
  "inherit", "Arial", "Georgia", "Verdana", "Trebuchet MS",
  "Times New Roman", "Courier New", "system-ui", "sans-serif", "serif",
];

function parseEditableFields(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const fields = [];
  const seen = new Set();

  doc.body.querySelectorAll("*").forEach((el) => {
    const tag = el.tagName.toLowerCase();
    const text = Array.from(el.childNodes)
      .filter((n) => n.nodeType === Node.TEXT_NODE)
      .map((n) => n.textContent.trim())
      .join("");

    if (text && !seen.has(text)) {
      seen.add(text);
      fields.push({ type: "text", tag, text, original: text });
    }

    const style = el.getAttribute("style") || "";
    const colorMatch = style.match(/(?:^|;)\s*color\s*:\s*([^;]+)/);
    const bgMatch = style.match(/(?:^|;)\s*background(?:-color)?\s*:\s*([^;]+)/);
    const fontMatch = style.match(/(?:^|;)\s*font-family\s*:\s*([^;]+)/);

    const colorKey = `color:${el.tagName}:${text?.slice(0, 20)}`;
    if (colorMatch && !seen.has(colorKey)) {
      const val = colorMatch[1].trim();
      if (/^#[0-9a-fA-F]{3,6}$/.test(val)) {
        seen.add(colorKey);
        fields.push({ type: "color", label: `${tag} text color`, prop: "color", elText: text, value: val });
      }
    }

    const bgKey = `bg:${el.tagName}:${text?.slice(0, 20)}`;
    if (bgMatch && !seen.has(bgKey)) {
      const val = bgMatch[1].trim();
      if (/^#[0-9a-fA-F]{3,6}$/.test(val)) {
        seen.add(bgKey);
        fields.push({ type: "color", label: `${tag} background`, prop: "background", elText: text, value: val });
      }
    }

    const fontKey = `font:${el.tagName}`;
    if (fontMatch && !seen.has(fontKey)) {
      seen.add(fontKey);
      fields.push({ type: "font", label: `${tag} font`, prop: "font-family", elText: text, value: fontMatch[1].trim() });
    }
  });

  return fields;
}

function parseLinks(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  return Array.from(doc.body.querySelectorAll("a")).map((el, i) => ({
    index: i,
    text: el.textContent.trim(),
    href: el.getAttribute("href") || "",
  }));
}

function applyLinkChange(html, linkIndex, field, newValue) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const el = doc.body.querySelectorAll("a")[linkIndex];
  if (!el) return html;
  if (field === "href") el.setAttribute("href", newValue);
  else if (field === "text") el.textContent = newValue;
  return doc.body.innerHTML;
}

function applyChange(html, field, newValue) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  if (field.type === "text") {
    doc.body.querySelectorAll("*").forEach((el) => {
      el.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() === field.original) {
          node.textContent = newValue;
        }
      });
    });
  } else {
    doc.body.querySelectorAll("*").forEach((el) => {
      const text = Array.from(el.childNodes)
        .filter((n) => n.nodeType === Node.TEXT_NODE)
        .map((n) => n.textContent.trim())
        .join("");
      if (text !== field.elText && field.elText) return;
      const style = el.getAttribute("style") || "";
      const propRegex = new RegExp(`((?:^|;)\\s*${field.prop}\\s*:\\s*)[^;]+`, "i");
      if (propRegex.test(style)) {
        el.setAttribute("style", style.replace(propRegex, `$1${newValue}`));
      }
    });
  }

  return doc.body.innerHTML;
}

export default function EditPanel({ block, onUpdate, onClose }) {
  const [fields, setFields] = useState([]);
  const [values, setValues] = useState({});
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const parsed = parseEditableFields(block.html);
    setFields(parsed);
    const init = {};
    parsed.forEach((f, i) => { init[i] = f.type === "text" ? f.text : f.value; });
    setValues(init);
    setLinks(parseLinks(block.html));
  }, [block.instanceId]);

  const handleChange = (index, newValue) => {
    setValues((prev) => ({ ...prev, [index]: newValue }));
    const field = fields[index];
    const updated = applyChange(block.html, { ...field, original: values[index] ?? (field.type === "text" ? field.text : field.value) }, newValue);
    onUpdate(block.instanceId, updated);
  };

  const handleLinkChange = (linkIndex, field, newValue) => {
    setLinks((prev) => prev.map((l) => l.index === linkIndex ? { ...l, [field]: newValue } : l));
    const updated = applyLinkChange(block.html, linkIndex, field, newValue);
    onUpdate(block.instanceId, updated);
  };

  const textFields = fields.filter((f) => f.type === "text");
  const styleFields = fields.filter((f) => f.type !== "text");

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 max-h-[50vh] overflow-hidden md:static md:max-h-full md:z-auto w-full md:w-72 flex flex-col"
      style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, borderLeft: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center justify-between px-4 py-3 shrink-0" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div>
          <p className="text-sm font-semibold" style={{ color: RED }}>Edit Block</p>
          <p className="text-gray-400 text-xs">{block.label}</p>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-lg leading-none">✕</button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5" style={{ background: "#f9fafb" }}>
        {textFields.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: RED }}>Text Content</p>
            <div className="space-y-3">
              {textFields.map((f) => {
                const idx = fields.indexOf(f);
                return (
                  <div key={idx}>
                    <label className="text-gray-500 text-xs mb-1 block truncate">{f.tag}: {f.text.slice(0, 24)}{f.text.length > 24 ? "…" : ""}</label>
                    <input
                      type="text"
                      value={values[idx] ?? f.text}
                      onChange={(e) => handleChange(idx, e.target.value)}
                      className="w-full text-sm px-3 py-1.5 rounded-lg border focus:outline-none"
                      style={INPUT_STYLE}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {links.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: RED }}>Links</p>
            <div className="space-y-4">
              {links.map((link) => (
                <div key={link.index} className="rounded-lg p-3 space-y-2" style={{ background: "#fff", border: `1px solid ${BORDER}` }}>
                  <p className="text-gray-400 text-xs">Link {link.index + 1}</p>
                  <div>
                    <label className="text-gray-500 text-xs mb-1 block">Label</label>
                    <input type="text" value={link.text} onChange={(e) => handleLinkChange(link.index, "text", e.target.value)} className="w-full text-sm px-3 py-1.5 rounded border focus:outline-none" style={INPUT_STYLE} />
                  </div>
                  <div>
                    <label className="text-gray-500 text-xs mb-1 block">URL</label>
                    <input type="text" value={link.href} placeholder="https://" onChange={(e) => handleLinkChange(link.index, "href", e.target.value)} className="w-full text-sm px-3 py-1.5 rounded border focus:outline-none" style={INPUT_STYLE} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {styleFields.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: RED }}>Colors & Fonts</p>
            <div className="space-y-3">
              {styleFields.map((f) => {
                const idx = fields.indexOf(f);
                return (
                  <div key={idx} className="flex items-center justify-between gap-3">
                    <label className="text-gray-500 text-xs truncate flex-1">{f.label}</label>
                    {f.type === "color" ? (
                      <div className="flex items-center gap-2">
                        <input type="color" value={values[idx] ?? f.value} onChange={(e) => handleChange(idx, e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent" />
                        <input type="text" value={values[idx] ?? f.value} onChange={(e) => handleChange(idx, e.target.value)} className="w-20 text-xs px-2 py-1 rounded border focus:outline-none" style={INPUT_STYLE} />
                      </div>
                    ) : (
                      <select value={values[idx] ?? f.value} onChange={(e) => handleChange(idx, e.target.value)} className="text-xs px-2 py-1.5 rounded border focus:outline-none" style={{ ...INPUT_STYLE }}>
                        {FONT_OPTIONS.map((font) => (
                          <option key={font} value={font}>{font}</option>
                        ))}
                      </select>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
