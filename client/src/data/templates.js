export const componentTemplates = {
  headers: [
    {
      id: "header-1",
      type: "header",
      label: "Header 1 – Dark Nav",
      preview: "Dark navbar with logo + links + CTA button",
      html: `<style>.h1-nav{display:flex;gap:24px;}.h1-btn{display:block;}.h1-wrap{display:flex;align-items:center;justify-content:space-between;}@media(max-width:640px){.h1-nav{display:none;}.h1-wrap{flex-wrap:wrap;gap:10px;padding:12px 16px!important;}}</style>
<header class="h1-wrap" style="background:#1e293b;padding:16px 40px;">
  <span style="color:#6366f1;font-size:22px;font-weight:700;">MyBrand</span>
  <nav class="h1-nav">
    <a href="#" style="color:#cbd5e1;text-decoration:none;font-size:14px;">Home</a>
    <a href="#" style="color:#cbd5e1;text-decoration:none;font-size:14px;">About</a>
    <a href="#" style="color:#cbd5e1;text-decoration:none;font-size:14px;">Services</a>
    <a href="#" style="color:#cbd5e1;text-decoration:none;font-size:14px;">Contact</a>
  </nav>
  <button class="h1-btn" style="background:#6366f1;color:#fff;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:14px;">Get Started</button>
</header>`,
    },
    {
      id: "header-2",
      type: "header",
      label: "Header 2 – White Clean",
      preview: "White minimal header with centered logo",
      html: `<style>.h2-wrap{display:flex;align-items:center;justify-content:space-between;}.h2-nav{display:flex;gap:28px;}@media(max-width:640px){.h2-nav{display:none;}.h2-wrap{padding:12px 16px!important;}}</style>
<header class="h2-wrap" style="background:#fff;padding:18px 40px;border-bottom:1px solid #e2e8f0;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
  <span style="color:#0f172a;font-size:20px;font-weight:800;letter-spacing:-0.5px;">⚡ Nexus</span>
  <nav class="h2-nav">
    <a href="#" style="color:#475569;text-decoration:none;font-size:14px;font-weight:500;">Home</a>
    <a href="#" style="color:#475569;text-decoration:none;font-size:14px;font-weight:500;">Portfolio</a>
    <a href="#" style="color:#475569;text-decoration:none;font-size:14px;font-weight:500;">Blog</a>
  </nav>
  <button style="background:#0f172a;color:#fff;border:none;padding:9px 22px;border-radius:8px;cursor:pointer;font-size:13px;font-weight:600;">Sign Up Free</button>
</header>`,
    },
    {
      id: "header-3",
      type: "header",
      label: "Header 3 – Gradient",
      preview: "Purple-to-blue gradient header with tagline",
      html: `<style>.h3-wrap{display:flex;align-items:center;justify-content:space-between;}.h3-nav{display:flex;gap:24px;}@media(max-width:640px){.h3-nav{display:none;}.h3-wrap{padding:14px 16px!important;}}</style>
<header class="h3-wrap" style="background:linear-gradient(135deg,#6366f1,#3b82f6);padding:20px 40px;">
  <div>
    <span style="color:#fff;font-size:22px;font-weight:800;">🚀 LaunchPad</span>
    <p style="color:rgba(255,255,255,0.75);font-size:11px;margin:2px 0 0;">Build. Ship. Grow.</p>
  </div>
  <nav class="h3-nav">
    <a href="#" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:14px;">Features</a>
    <a href="#" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:14px;">Pricing</a>
    <a href="#" style="color:rgba(255,255,255,0.9);text-decoration:none;font-size:14px;">Docs</a>
  </nav>
  <button style="background:#fff;color:#6366f1;border:none;padding:9px 22px;border-radius:20px;cursor:pointer;font-size:13px;font-weight:700;">Try Free</button>
</header>`,
    },
    {
      id: "header-4",
      type: "header",
      label: "Header 4 – Transparent Hero",
      preview: "Full-width hero header with background image overlay",
      html: `<style>.h4-wrap{padding:60px 40px;text-align:center;}.h4-title{font-size:42px;}.h4-btns{display:inline-flex;flex-wrap:wrap;gap:12px;justify-content:center;}@media(max-width:640px){.h4-wrap{padding:40px 16px!important;}.h4-title{font-size:28px!important;}}</style>
<header class="h4-wrap" style="background:linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200') center/cover;">
  <h1 class="h4-title" style="color:#fff;font-weight:800;margin:0 0 12px;">Welcome to the Future</h1>
  <p style="color:rgba(255,255,255,0.8);font-size:18px;margin:0 0 28px;">Build stunning websites in minutes</p>
  <div class="h4-btns">
    <button style="background:#6366f1;color:#fff;border:none;padding:14px 36px;border-radius:8px;cursor:pointer;font-size:16px;font-weight:600;">Get Started</button>
    <button style="background:transparent;color:#fff;border:2px solid #fff;padding:14px 36px;border-radius:8px;cursor:pointer;font-size:16px;">Learn More</button>
  </div>
</header>`,
    },
    {
      id: "header-5",
      type: "header",
      label: "Header 5 – Centered Logo",
      preview: "Centered logo with nav links on both sides",
      html: `<style>.h5-wrap{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;}.h5-leftnav{display:flex;gap:24px;}.h5-rightnav{display:flex;gap:12px;justify-content:flex-end;align-items:center;}@media(max-width:640px){.h5-wrap{grid-template-columns:1fr auto;padding:12px 16px!important;}.h5-leftnav{display:none;}}</style>
<header class="h5-wrap" style="background:#fff;padding:16px 40px;border-bottom:1px solid #f1f5f9;">
  <nav class="h5-leftnav">
    <a href="#" style="color:#475569;text-decoration:none;font-size:14px;font-weight:500;">Products</a>
    <a href="#" style="color:#475569;text-decoration:none;font-size:14px;font-weight:500;">Solutions</a>
    <a href="#" style="color:#475569;text-decoration:none;font-size:14px;font-weight:500;">Pricing</a>
  </nav>
  <span style="color:#0f172a;font-size:20px;font-weight:900;letter-spacing:-1px;text-align:center;">◈ APEX</span>
  <div class="h5-rightnav">
    <a href="#" style="color:#475569;text-decoration:none;font-size:14px;font-weight:500;">Login</a>
    <button style="background:#0f172a;color:#fff;border:none;padding:8px 20px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;">Get Started</button>
  </div>
</header>`,
    },
    {
      id: "header-6",
      type: "header",
      label: "Header 6 – Dark Minimal",
      preview: "Sleek dark header with pill-style nav",
      html: `<style>.h6-wrap{display:flex;align-items:center;justify-content:space-between;}.h6-nav{display:flex;gap:4px;}.h6-btns{display:flex;gap:8px;align-items:center;}@media(max-width:640px){.h6-nav{display:none;}.h6-wrap{padding:12px 16px!important;}}</style>
<header class="h6-wrap" style="background:#09090b;padding:14px 40px;">
  <span style="color:#fff;font-size:18px;font-weight:800;letter-spacing:-0.5px;">▲ Vercel</span>
  <nav class="h6-nav">
    <a href="#" style="color:#a1a1aa;text-decoration:none;font-size:13px;padding:6px 14px;border-radius:6px;">Docs</a>
    <a href="#" style="color:#a1a1aa;text-decoration:none;font-size:13px;padding:6px 14px;border-radius:6px;">Blog</a>
    <a href="#" style="color:#a1a1aa;text-decoration:none;font-size:13px;padding:6px 14px;border-radius:6px;">Showcase</a>
    <a href="#" style="color:#a1a1aa;text-decoration:none;font-size:13px;padding:6px 14px;border-radius:6px;">Enterprise</a>
  </nav>
  <div class="h6-btns">
    <button style="background:transparent;color:#fff;border:1px solid #27272a;padding:7px 16px;border-radius:6px;cursor:pointer;font-size:13px;">Log In</button>
    <button style="background:#fff;color:#09090b;border:none;padding:7px 16px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:600;">Sign Up</button>
  </div>
</header>`,
    },
    {
      id: "header-7",
      type: "header",
      label: "Header 7 – Colorful Agency",
      preview: "Bold agency header with colored accent bar",
      html: `<style>.h7-inner{display:flex;align-items:center;justify-content:space-between;}.h7-nav{display:flex;gap:28px;}@media(max-width:640px){.h7-nav{display:none;}.h7-inner{padding:12px 16px!important;}}</style>
<header style="background:#fff;border-top:4px solid #f97316;">
  <div class="h7-inner" style="padding:16px 40px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="width:36px;height:36px;background:#f97316;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:900;font-size:16px;">C</div>
      <span style="color:#1c1917;font-size:18px;font-weight:800;">Craft Studio</span>
    </div>
    <nav class="h7-nav">
      <a href="#" style="color:#57534e;text-decoration:none;font-size:14px;font-weight:500;">Work</a>
      <a href="#" style="color:#57534e;text-decoration:none;font-size:14px;font-weight:500;">Services</a>
      <a href="#" style="color:#57534e;text-decoration:none;font-size:14px;font-weight:500;">About</a>
      <a href="#" style="color:#57534e;text-decoration:none;font-size:14px;font-weight:500;">Journal</a>
    </nav>
    <button style="background:#f97316;color:#fff;border:none;padding:9px 22px;border-radius:6px;cursor:pointer;font-size:13px;font-weight:700;">Let's Talk</button>
  </div>
</header>`,
    },
    {
      id: "header-8",
      type: "header",
      label: "Header 8 – SaaS with Badge",
      preview: "SaaS header with announcement badge and dual CTA",
      html: `<style>.h8-inner{display:flex;align-items:center;justify-content:space-between;}.h8-nav{display:flex;gap:24px;}.h8-btns{display:flex;gap:8px;}@media(max-width:640px){.h8-nav{display:none;}.h8-inner{padding:12px 16px!important;}.h8-btns .h8-signin{display:none;}}  </style>
<header style="background:#fafafa;border-bottom:1px solid #e5e7eb;">
  <div style="padding:10px 40px;background:#f0fdf4;border-bottom:1px solid #bbf7d0;text-align:center;">
    <span style="font-size:12px;color:#15803d;font-weight:600;">🎉 We just raised $10M Series A — <a href="#" style="color:#15803d;font-weight:700;">Read the announcement →</a></span>
  </div>
  <div class="h8-inner" style="padding:14px 40px;">
    <span style="color:#111827;font-size:19px;font-weight:800;">🌿 GreenSaaS</span>
    <nav class="h8-nav">
      <a href="#" style="color:#6b7280;text-decoration:none;font-size:14px;">Features</a>
      <a href="#" style="color:#6b7280;text-decoration:none;font-size:14px;">Pricing</a>
      <a href="#" style="color:#6b7280;text-decoration:none;font-size:14px;">Customers</a>
      <a href="#" style="color:#6b7280;text-decoration:none;font-size:14px;">Docs</a>
    </nav>
    <div class="h8-btns">
      <button class="h8-signin" style="background:transparent;color:#374151;border:1px solid #d1d5db;padding:8px 18px;border-radius:7px;cursor:pointer;font-size:13px;">Sign In</button>
      <button style="background:#16a34a;color:#fff;border:none;padding:8px 18px;border-radius:7px;cursor:pointer;font-size:13px;font-weight:600;">Start Free Trial</button>
    </div>
  </div>
</header>`,
    },
  ],

  footers: [
    {
      id: "footer-1",
      type: "footer",
      label: "Footer 1 – Dark Multi-col",
      preview: "Dark footer with 4 columns and social links",
      html: `<style>.f1-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:32px;}@media(max-width:640px){.f1-grid{grid-template-columns:1fr 1fr!important;}}</style>
<footer style="background:#0f172a;color:#94a3b8;padding:48px 40px 24px;">
  <div class="f1-grid" style="margin-bottom:40px;">
    <div>
      <h3 style="color:#fff;font-size:16px;font-weight:700;margin:0 0 12px;">MyBrand</h3>
      <p style="font-size:13px;line-height:1.6;">Building the web, one pixel at a time.</p>
    </div>
    <div>
      <h4 style="color:#e2e8f0;font-size:13px;font-weight:600;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">Product</h4>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
        <li><a href="#" style="color:#94a3b8;text-decoration:none;font-size:13px;">Features</a></li>
        <li><a href="#" style="color:#94a3b8;text-decoration:none;font-size:13px;">Pricing</a></li>
        <li><a href="#" style="color:#94a3b8;text-decoration:none;font-size:13px;">Changelog</a></li>
      </ul>
    </div>
    <div>
      <h4 style="color:#e2e8f0;font-size:13px;font-weight:600;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">Company</h4>
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px;">
        <li><a href="#" style="color:#94a3b8;text-decoration:none;font-size:13px;">About</a></li>
        <li><a href="#" style="color:#94a3b8;text-decoration:none;font-size:13px;">Blog</a></li>
        <li><a href="#" style="color:#94a3b8;text-decoration:none;font-size:13px;">Careers</a></li>
      </ul>
    </div>
    <div>
      <h4 style="color:#e2e8f0;font-size:13px;font-weight:600;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">Connect</h4>
      <div style="display:flex;gap:12px;">
        <a href="#" style="color:#94a3b8;font-size:20px;text-decoration:none;">🐦</a>
        <a href="#" style="color:#94a3b8;font-size:20px;text-decoration:none;">💼</a>
        <a href="#" style="color:#94a3b8;font-size:20px;text-decoration:none;">📸</a>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid #1e293b;padding-top:20px;text-align:center;font-size:12px;">© 2024 MyBrand. All rights reserved.</div>
</footer>`,
    },
    {
      id: "footer-2",
      type: "footer",
      label: "Footer 2 – Simple Light",
      preview: "Clean white footer with centered links",
      html: `<footer style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:32px 40px;text-align:center;">
  <span style="color:#0f172a;font-size:18px;font-weight:700;">⚡ Nexus</span>
  <nav style="display:flex;justify-content:center;gap:24px;margin:16px 0;">
    <a href="#" style="color:#64748b;text-decoration:none;font-size:13px;">Privacy</a>
    <a href="#" style="color:#64748b;text-decoration:none;font-size:13px;">Terms</a>
    <a href="#" style="color:#64748b;text-decoration:none;font-size:13px;">Support</a>
    <a href="#" style="color:#64748b;text-decoration:none;font-size:13px;">Contact</a>
  </nav>
  <p style="color:#94a3b8;font-size:12px;margin:0;">© 2024 Nexus Inc. Made with ❤️</p>
</footer>`,
    },
    {
      id: "footer-3",
      type: "footer",
      label: "Footer 3 – Gradient",
      preview: "Purple gradient footer with newsletter signup",
      html: `<footer style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:48px 40px;color:#fff;text-align:center;">
  <h3 style="font-size:22px;font-weight:700;margin:0 0 8px;">Stay in the loop</h3>
  <p style="color:rgba(255,255,255,0.75);font-size:14px;margin:0 0 20px;">Get the latest updates delivered to your inbox.</p>
  <div style="display:flex;justify-content:center;gap:8px;margin-bottom:32px;">
    <input type="email" placeholder="Enter your email" style="padding:10px 18px;border-radius:6px;border:none;font-size:14px;width:260px;outline:none;" />
    <button style="background:#fff;color:#4f46e5;border:none;padding:10px 22px;border-radius:6px;font-weight:700;cursor:pointer;font-size:14px;">Subscribe</button>
  </div>
  <p style="color:rgba(255,255,255,0.5);font-size:12px;margin:0;">© 2024 LaunchPad. All rights reserved.</p>
</footer>`,
    },
    {
      id: "footer-4",
      type: "footer",
      label: "Footer 4 – Minimal Dark",
      preview: "Minimal single-line dark footer",
      html: `<style>@media(max-width:640px){.f4-wrap{flex-direction:column!important;gap:12px!important;padding:16px!important;}}</style>
<footer class="f4-wrap" style="background:#18181b;padding:20px 40px;display:flex;align-items:center;justify-content:space-between;">
  <span style="color:#71717a;font-size:13px;">© 2024 MyWebsite</span>
  <div style="display:flex;gap:20px;">
    <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">Privacy</a>
    <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">Terms</a>
    <a href="#" style="color:#71717a;text-decoration:none;font-size:13px;">Sitemap</a>
  </div>
</footer>`,
    },
    {
      id: "footer-5",
      type: "footer",
      label: "Footer 5 – Agency Style",
      preview: "Bold agency footer with large brand name",
      html: `<style>.f5-top{display:flex;justify-content:space-between;align-items:flex-start;}.f5-cols{display:flex;gap:60px;}.f5-bot{display:flex;justify-content:space-between;align-items:center;}@media(max-width:640px){.f5-top{flex-direction:column!important;gap:32px!important;}.f5-cols{gap:32px!important;}.f5-bot{flex-direction:column!important;gap:12px!important;text-align:center;}}</style>
<footer style="background:#0f172a;padding:60px 40px 32px;">
  <div class="f5-top" style="margin-bottom:48px;">
    <div style="max-width:320px;">
      <h2 style="color:#fff;font-size:32px;font-weight:900;margin:0 0 12px;letter-spacing:-1px;">Craft Studio</h2>
      <p style="color:#64748b;font-size:14px;line-height:1.7;margin:0 0 20px;">We design and build digital experiences that people love.</p>
      <div style="display:flex;gap:10px;">
        <a href="#" style="width:36px;height:36px;background:#1e293b;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#94a3b8;text-decoration:none;font-size:16px;">🐦</a>
        <a href="#" style="width:36px;height:36px;background:#1e293b;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#94a3b8;text-decoration:none;font-size:16px;">💼</a>
        <a href="#" style="width:36px;height:36px;background:#1e293b;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#94a3b8;text-decoration:none;font-size:16px;">📸</a>
      </div>
    </div>
    <div class="f5-cols">
      <div>
        <p style="color:#fff;font-size:13px;font-weight:700;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;">Services</p>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">Web Design</a>
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">Branding</a>
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">Development</a>
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">SEO</a>
        </div>
      </div>
      <div>
        <p style="color:#fff;font-size:13px;font-weight:700;margin:0 0 16px;text-transform:uppercase;letter-spacing:1px;">Company</p>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">About</a>
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">Work</a>
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">Journal</a>
          <a href="#" style="color:#64748b;text-decoration:none;font-size:14px;">Contact</a>
        </div>
      </div>
    </div>
  </div>
  <div class="f5-bot" style="border-top:1px solid #1e293b;padding-top:24px;">
    <p style="color:#475569;font-size:12px;margin:0;">© 2024 Craft Studio. All rights reserved.</p>
    <div style="display:flex;gap:20px;">
      <a href="#" style="color:#475569;text-decoration:none;font-size:12px;">Privacy Policy</a>
      <a href="#" style="color:#475569;text-decoration:none;font-size:12px;">Terms of Service</a>
    </div>
  </div>
</footer>`,
    },
    {
      id: "footer-6",
      type: "footer",
      label: "Footer 6 – Warm Light",
      preview: "Warm off-white footer with logo and tagline",
      html: `<style>.f6-top{display:flex;justify-content:space-between;align-items:flex-start;}.f6-cols{display:flex;gap:48px;}@media(max-width:640px){.f6-top{flex-direction:column!important;gap:24px!important;}.f6-cols{gap:24px!important;}}</style>
<footer style="background:#fffbf5;border-top:1px solid #fed7aa;padding:40px 40px 24px;">
  <div class="f6-top" style="margin-bottom:32px;">
    <div>
      <span style="color:#ea580c;font-size:22px;font-weight:900;">🔥 Ignite</span>
      <p style="color:#78716c;font-size:13px;margin:8px 0 0;max-width:220px;">Fueling ideas that change the world.</p>
    </div>
    <div class="f6-cols">
      <div>
        <p style="color:#1c1917;font-size:12px;font-weight:700;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">Product</p>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <a href="#" style="color:#78716c;text-decoration:none;font-size:13px;">Features</a>
          <a href="#" style="color:#78716c;text-decoration:none;font-size:13px;">Pricing</a>
          <a href="#" style="color:#78716c;text-decoration:none;font-size:13px;">Roadmap</a>
        </div>
      </div>
      <div>
        <p style="color:#1c1917;font-size:12px;font-weight:700;margin:0 0 12px;text-transform:uppercase;letter-spacing:1px;">Support</p>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <a href="#" style="color:#78716c;text-decoration:none;font-size:13px;">Help Center</a>
          <a href="#" style="color:#78716c;text-decoration:none;font-size:13px;">Community</a>
          <a href="#" style="color:#78716c;text-decoration:none;font-size:13px;">Status</a>
        </div>
      </div>
    </div>
  </div>
  <div style="border-top:1px solid #fed7aa;padding-top:20px;text-align:center;">
    <p style="color:#a8a29e;font-size:12px;margin:0;">© 2024 Ignite Inc. Made with ❤️ in San Francisco</p>
  </div>
</footer>`,
    },
    {
      id: "footer-7",
      type: "footer",
      label: "Footer 7 – Dark with Newsletter",
      preview: "Dark footer with newsletter + 3-col links",
      html: `<style>.f7-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;}.f7-bot{display:flex;justify-content:space-between;align-items:center;}@media(max-width:640px){.f7-grid{grid-template-columns:1fr 1fr!important;gap:24px!important;}.f7-bot{flex-direction:column!important;gap:12px!important;}}</style>
<footer style="background:#111827;color:#9ca3af;padding:56px 40px 28px;">
  <div class="f7-grid" style="margin-bottom:48px;">
    <div>
      <span style="color:#fff;font-size:20px;font-weight:800;display:block;margin-bottom:12px;">⚡ Nexus</span>
      <p style="font-size:13px;line-height:1.7;margin:0 0 20px;">The platform for modern teams to build, ship, and scale.</p>
      <div style="display:flex;gap:6px;">
        <input type="email" placeholder="your@email.com" style="flex:1;background:#1f2937;border:1px solid #374151;color:#fff;padding:8px 12px;border-radius:6px;font-size:13px;outline:none;" />
        <button style="background:#6366f1;color:#fff;border:none;padding:8px 14px;border-radius:6px;font-size:13px;cursor:pointer;">Join</button>
      </div>
    </div>
    <div>
      <p style="color:#f9fafb;font-size:12px;font-weight:700;margin:0 0 14px;text-transform:uppercase;letter-spacing:1px;">Platform</p>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Analytics</a>
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Automation</a>
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Integrations</a>
      </div>
    </div>
    <div>
      <p style="color:#f9fafb;font-size:12px;font-weight:700;margin:0 0 14px;text-transform:uppercase;letter-spacing:1px;">Resources</p>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Docs</a>
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Blog</a>
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Changelog</a>
      </div>
    </div>
    <div>
      <p style="color:#f9fafb;font-size:12px;font-weight:700;margin:0 0 14px;text-transform:uppercase;letter-spacing:1px;">Legal</p>
      <div style="display:flex;flex-direction:column;gap:9px;">
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Privacy</a>
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Terms</a>
        <a href="#" style="color:#9ca3af;text-decoration:none;font-size:13px;">Cookies</a>
      </div>
    </div>
  </div>
  <div class="f7-bot" style="border-top:1px solid #1f2937;padding-top:20px;">
    <p style="font-size:12px;margin:0;">© 2024 Nexus Technologies, Inc.</p>
    <div style="display:flex;gap:16px;">
      <a href="#" style="color:#9ca3af;font-size:18px;text-decoration:none;">🐦</a>
      <a href="#" style="color:#9ca3af;font-size:18px;text-decoration:none;">💼</a>
      <a href="#" style="color:#9ca3af;font-size:18px;text-decoration:none;">🐙</a>
    </div>
  </div>
</footer>`,
    },
    {
      id: "footer-8",
      type: "footer",
      label: "Footer 8 – Startup Minimal",
      preview: "Clean startup footer with logo left, links right",
      html: `<style>@media(max-width:640px){.f8-wrap{flex-direction:column!important;gap:16px!important;padding:20px 16px!important;}.f8-nav{flex-wrap:wrap!important;justify-content:center!important;}}</style>
<footer class="f8-wrap" style="background:#fff;border-top:1px solid #e5e7eb;padding:28px 40px;display:flex;align-items:center;justify-content:space-between;">
  <div style="display:flex;align-items:center;gap:24px;">
    <span style="color:#111827;font-size:16px;font-weight:800;">◆ Mono</span>
    <p style="color:#9ca3af;font-size:12px;margin:0;">© 2024 Mono Inc.</p>
  </div>
  <nav class="f8-nav" style="display:flex;gap:20px;">
    <a href="#" style="color:#6b7280;text-decoration:none;font-size:13px;">About</a>
    <a href="#" style="color:#6b7280;text-decoration:none;font-size:13px;">Blog</a>
    <a href="#" style="color:#6b7280;text-decoration:none;font-size:13px;">Careers</a>
    <a href="#" style="color:#6b7280;text-decoration:none;font-size:13px;">Privacy</a>
    <a href="#" style="color:#6b7280;text-decoration:none;font-size:13px;">Terms</a>
  </nav>
  <div style="display:flex;gap:12px;">
    <a href="#" style="color:#9ca3af;font-size:18px;text-decoration:none;">🐦</a>
    <a href="#" style="color:#9ca3af;font-size:18px;text-decoration:none;">🐙</a>
  </div>
</footer>`,
    },
  ],

  about: [
    {
      id: "about-1",
      type: "about",
      label: "About – Split with Image",
      preview: "Left image + right text with stats",
      html: `<style>.ab1-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;}.ab1-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;}@media(max-width:640px){.ab1-grid{grid-template-columns:1fr!important;}.ab1-stats{grid-template-columns:repeat(3,1fr)!important;}}</style>
<section style="background:#fff;padding:80px 40px;">
  <div class="ab1-grid" style="max-width:1100px;margin:0 auto;">
    <div style="background:linear-gradient(135deg,#ede9fe,#dbeafe);border-radius:20px;height:380px;display:flex;align-items:center;justify-content:center;font-size:80px;">🏢</div>
    <div>
      <span style="background:#ede9fe;color:#7c3aed;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">ABOUT US</span>
      <h2 style="font-size:36px;font-weight:800;color:#0f172a;margin:16px 0 16px;line-height:1.2;">We Build Things That Matter</h2>
      <p style="color:#64748b;font-size:15px;line-height:1.8;margin:0 0 32px;">Founded in 2018, we are a passionate team of designers and developers dedicated to crafting digital experiences that make a real difference for our clients and their users.</p>
      <div class="ab1-stats">
        <div style="text-align:center;padding:16px;background:#f8fafc;border-radius:12px;">
          <p style="font-size:28px;font-weight:800;color:#6366f1;margin:0;">50+</p>
          <p style="font-size:12px;color:#64748b;margin:4px 0 0;">Projects Done</p>
        </div>
        <div style="text-align:center;padding:16px;background:#f8fafc;border-radius:12px;">
          <p style="font-size:28px;font-weight:800;color:#6366f1;margin:0;">12</p>
          <p style="font-size:12px;color:#64748b;margin:4px 0 0;">Team Members</p>
        </div>
        <div style="text-align:center;padding:16px;background:#f8fafc;border-radius:12px;">
          <p style="font-size:28px;font-weight:800;color:#6366f1;margin:0;">98%</p>
          <p style="font-size:12px;color:#64748b;margin:4px 0 0;">Happy Clients</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      id: "about-2",
      type: "about",
      label: "About – Dark Team Grid",
      preview: "Dark section with team member cards",
      html: `<style>.ab2-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}@media(max-width:640px){.ab2-grid{grid-template-columns:1fr 1fr!important;}}</style>
<section style="background:#0f172a;padding:80px 40px;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:56px;">
      <span style="background:#1e293b;color:#818cf8;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:600;">OUR TEAM</span>
      <h2 style="font-size:36px;font-weight:800;color:#fff;margin:16px 0 12px;">Meet the People Behind the Magic</h2>
      <p style="color:#94a3b8;font-size:15px;max-width:500px;margin:0 auto;">A diverse team of thinkers, makers, and problem solvers.</p>
    </div>
    <div class="ab2-grid">
      ${[{name:"Alex Ray",role:"CEO & Founder",emoji:"👨‍💼",grad:"#6366f1,#8b5cf6"},{name:"Sara Kim",role:"Lead Designer",emoji:"👩‍🎨",grad:"#ec4899,#f43f5e"},{name:"Mike Chen",role:"Head of Dev",emoji:"👨‍💻",grad:"#10b981,#059669"},{name:"Priya S.",role:"Marketing",emoji:"👩‍💼",grad:"#f59e0b,#f97316"}].map(m=>`<div style="background:#1e293b;border-radius:16px;padding:28px;text-align:center;border:1px solid #334155;">
        <div style="width:72px;height:72px;border-radius:50%;background:linear-gradient(135deg,${m.grad});display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 16px;"></div>
        <p style="color:#fff;font-weight:700;font-size:15px;margin:0 0 4px;">${m.name}</p>
        <p style="color:#94a3b8;font-size:13px;margin:0;">${m.role}</p>
      </div>`).join("")}
    </div>
  </div>
</section>`,
    },
    {
      id: "about-3",
      type: "about",
      label: "About – Mission & Values",
      preview: "Centered mission statement with value cards",
      html: `<style>.ab3-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;text-align:left;}@media(max-width:640px){.ab3-grid{grid-template-columns:1fr!important;}}</style>
<section style="background:#f8fafc;padding:80px 40px;">
  <div style="max-width:1000px;margin:0 auto;text-align:center;">
    <span style="background:#dbeafe;color:#2563eb;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">OUR MISSION</span>
    <h2 style="font-size:36px;font-weight:800;color:#0f172a;margin:16px 0 16px;">Why We Do What We Do</h2>
    <p style="color:#64748b;font-size:16px;line-height:1.8;max-width:640px;margin:0 auto 56px;">We believe great software should be accessible to everyone. Our mission is to empower businesses of all sizes to build beautiful, functional digital products without barriers.</p>
    <div class="ab3-grid">
      <div style="background:#fff;border-radius:16px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <div style="font-size:36px;margin-bottom:16px;">🎯</div>
        <h3 style="font-size:17px;font-weight:700;color:#0f172a;margin:0 0 10px;">Purpose Driven</h3>
        <p style="color:#64748b;font-size:14px;line-height:1.7;margin:0;">Every decision we make is guided by our core purpose — to create meaningful impact.</p>
      </div>
      <div style="background:#fff;border-radius:16px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <div style="font-size:36px;margin-bottom:16px;">🤝</div>
        <h3 style="font-size:17px;font-weight:700;color:#0f172a;margin:0 0 10px;">People First</h3>
        <p style="color:#64748b;font-size:14px;line-height:1.7;margin:0;">We put our team and clients at the center of everything we build and deliver.</p>
      </div>
      <div style="background:#fff;border-radius:16px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
        <div style="font-size:36px;margin-bottom:16px;">🚀</div>
        <h3 style="font-size:17px;font-weight:700;color:#0f172a;margin:0 0 10px;">Always Innovating</h3>
        <p style="color:#64748b;font-size:14px;line-height:1.7;margin:0;">We never stop learning, iterating, and pushing the boundaries of what's possible.</p>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      id: "about-4",
      type: "about",
      label: "About – Timeline Story",
      preview: "Company journey timeline",
      html: `<section style="background:#fff;padding:80px 40px;">
  <div style="max-width:700px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:56px;">
      <span style="background:#fef3c7;color:#d97706;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">OUR STORY</span>
      <h2 style="font-size:36px;font-weight:800;color:#0f172a;margin:16px 0 12px;">How We Got Here</h2>
      <p style="color:#64748b;font-size:15px;">A journey of growth, learning, and impact.</p>
    </div>
    <div style="position:relative;padding-left:32px;border-left:2px solid #e2e8f0;display:flex;flex-direction:column;gap:36px;">
      ${[{year:"2018",title:"Founded",desc:"Started in a small garage with a big dream to make web building accessible.",color:"#6366f1"},{year:"2020",title:"First 100 Clients",desc:"Reached our first major milestone and expanded the team to 8 people.",color:"#10b981"},{year:"2022",title:"Series A Funding",desc:"Raised $5M to accelerate product development and global expansion.",color:"#f59e0b"},{year:"2024",title:"10,000+ Users",desc:"Now serving thousands of businesses across 40+ countries worldwide.",color:"#ec4899"}].map(e=>`<div style="position:relative;">
        <div style="position:absolute;left:-41px;top:4px;width:18px;height:18px;border-radius:50%;background:${e.color};border:3px solid #fff;box-shadow:0 0 0 2px ${e.color};"></div>
        <span style="font-size:12px;font-weight:700;color:${e.color};">${e.year}</span>
        <h3 style="font-size:17px;font-weight:700;color:#0f172a;margin:4px 0 6px;">${e.title}</h3>
        <p style="color:#64748b;font-size:14px;line-height:1.7;margin:0;">${e.desc}</p>
      </div>`).join("")}
    </div>
  </div>
</section>`,
    },
  ],

  contacts: [
    {
      id: "contact-1",
      type: "contact",
      label: "Contact – Split with Info",
      preview: "Left info panel + right contact form",
      html: `<section style="background:#f8fafc;padding:72px 40px;">
  <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1.4fr;gap:60px;align-items:start;">
    <div>
      <h2 style="font-size:34px;font-weight:800;color:#0f172a;margin:0 0 12px;">Get in Touch</h2>
      <p style="color:#64748b;font-size:15px;line-height:1.7;margin:0 0 32px;">Have a question or want to work together? We'd love to hear from you.</p>
      <div style="display:flex;flex-direction:column;gap:20px;">
        <div style="display:flex;align-items:center;gap:14px;">
          <div style="width:44px;height:44px;background:#ede9fe;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">📧</div>
          <div><p style="margin:0;font-size:13px;color:#94a3b8;">Email</p><p style="margin:0;font-size:14px;font-weight:600;color:#0f172a;">hello@mybrand.com</p></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;">
          <div style="width:44px;height:44px;background:#ede9fe;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">📞</div>
          <div><p style="margin:0;font-size:13px;color:#94a3b8;">Phone</p><p style="margin:0;font-size:14px;font-weight:600;color:#0f172a;">+1 (555) 000-0000</p></div>
        </div>
        <div style="display:flex;align-items:center;gap:14px;">
          <div style="width:44px;height:44px;background:#ede9fe;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;">📍</div>
          <div><p style="margin:0;font-size:13px;color:#94a3b8;">Office</p><p style="margin:0;font-size:14px;font-weight:600;color:#0f172a;">123 Main St, San Francisco, CA</p></div>
        </div>
      </div>
    </div>
    <div style="background:#fff;border-radius:16px;padding:36px;box-shadow:0 4px 24px rgba(0,0,0,0.07);">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
        <div><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px;">First Name</label><input type="text" placeholder="John" style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;" /></div>
        <div><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px;">Last Name</label><input type="text" placeholder="Doe" style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;" /></div>
      </div>
      <div style="margin-bottom:16px;"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px;">Email</label><input type="email" placeholder="john@example.com" style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;" /></div>
      <div style="margin-bottom:16px;"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px;">Subject</label><input type="text" placeholder="How can we help?" style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;" /></div>
      <div style="margin-bottom:24px;"><label style="display:block;font-size:13px;font-weight:600;color:#374151;margin-bottom:6px;">Message</label><textarea placeholder="Tell us more..." rows="4" style="width:100%;padding:10px 14px;border:1px solid #e2e8f0;border-radius:8px;font-size:14px;outline:none;resize:vertical;box-sizing:border-box;"></textarea></div>
      <button style="width:100%;background:#6366f1;color:#fff;border:none;padding:13px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;">Send Message →</button>
    </div>
  </div>
</section>`,
    },
    {
      id: "contact-2",
      type: "contact",
      label: "Contact – Dark Centered",
      preview: "Dark background centered contact form",
      html: `<section style="background:#0f172a;padding:80px 40px;">
  <div style="max-width:600px;margin:0 auto;text-align:center;">
    <span style="background:#1e293b;color:#818cf8;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:600;">CONTACT US</span>
    <h2 style="font-size:36px;font-weight:800;color:#fff;margin:16px 0 10px;">Let's Start a Conversation</h2>
    <p style="color:#94a3b8;font-size:15px;margin:0 0 40px;">Drop us a message and we'll get back to you within 24 hours.</p>
    <div style="background:#1e293b;border-radius:16px;padding:36px;text-align:left;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
        <div><label style="display:block;font-size:13px;font-weight:600;color:#94a3b8;margin-bottom:6px;">Name</label><input type="text" placeholder="Your name" style="width:100%;padding:10px 14px;background:#0f172a;border:1px solid #334155;color:#fff;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;" /></div>
        <div><label style="display:block;font-size:13px;font-weight:600;color:#94a3b8;margin-bottom:6px;">Email</label><input type="email" placeholder="your@email.com" style="width:100%;padding:10px 14px;background:#0f172a;border:1px solid #334155;color:#fff;border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;" /></div>
      </div>
      <div style="margin-bottom:16px;"><label style="display:block;font-size:13px;font-weight:600;color:#94a3b8;margin-bottom:6px;">Message</label><textarea placeholder="What's on your mind?" rows="5" style="width:100%;padding:10px 14px;background:#0f172a;border:1px solid #334155;color:#fff;border-radius:8px;font-size:14px;outline:none;resize:vertical;box-sizing:border-box;"></textarea></div>
      <button style="width:100%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;border:none;padding:13px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;">Send Message</button>
    </div>
  </div>
</section>`,
    },
    {
      id: "contact-3",
      type: "contact",
      label: "Contact – Minimal Clean",
      preview: "Simple white form with subtle shadow",
      html: `<section style="background:#fff;padding:80px 40px;">
  <div style="max-width:520px;margin:0 auto;">
    <h2 style="font-size:32px;font-weight:800;color:#111827;margin:0 0 8px;">Say Hello 👋</h2>
    <p style="color:#6b7280;font-size:15px;margin:0 0 36px;">Fill out the form below and we'll be in touch soon.</p>
    <div style="display:flex;flex-direction:column;gap:18px;">
      <input type="text" placeholder="Your full name" style="padding:12px 16px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;" />
      <input type="email" placeholder="Email address" style="padding:12px 16px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;" />
      <input type="tel" placeholder="Phone number (optional)" style="padding:12px 16px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;" />
      <textarea placeholder="Your message" rows="5" style="padding:12px 16px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:14px;outline:none;resize:vertical;"></textarea>
      <button style="background:#111827;color:#fff;border:none;padding:14px;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">Send Message</button>
    </div>
  </div>
</section>`,
    },
    {
      id: "contact-4",
      type: "contact",
      label: "Contact – Gradient Banner",
      preview: "Gradient section with email + social links",
      html: `<section style="background:linear-gradient(135deg,#6366f1,#3b82f6);padding:80px 40px;text-align:center;">
  <h2 style="color:#fff;font-size:36px;font-weight:800;margin:0 0 12px;">We'd Love to Hear From You</h2>
  <p style="color:rgba(255,255,255,0.8);font-size:16px;margin:0 0 40px;">Reach out via email or connect with us on social media.</p>
  <div style="display:flex;justify-content:center;gap:16px;margin-bottom:40px;flex-wrap:wrap;">
    <a href="mailto:hello@mybrand.com" style="background:rgba(255,255,255,0.15);color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:600;border:1px solid rgba(255,255,255,0.3);">📧 hello@mybrand.com</a>
    <a href="#" style="background:rgba(255,255,255,0.15);color:#fff;text-decoration:none;padding:12px 28px;border-radius:8px;font-size:14px;font-weight:600;border:1px solid rgba(255,255,255,0.3);">📞 +1 (555) 000-0000</a>
  </div>
  <div style="max-width:480px;margin:0 auto;display:flex;gap:10px;">
    <input type="email" placeholder="Enter your email for a quick reply" style="flex:1;padding:12px 18px;border-radius:8px;border:none;font-size:14px;outline:none;" />
    <button style="background:#fff;color:#6366f1;border:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;white-space:nowrap;">Contact Us</button>
  </div>
</section>`,
    },
  ],

  hero: [
    {
      id: "hero-section-1",
      type: "hero",
      label: "Hero – Bold Centered",
      preview: "Large centered headline with CTA buttons",
      html: `<section style="background:#fff;padding:100px 40px;text-align:center;">
  <span style="background:#fee2e2;color:#b82025;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:700;">🚀 NOW LIVE</span>
  <h1 style="font-size:52px;font-weight:900;color:#111827;margin:20px 0 16px;line-height:1.1;">Build Your Dream<br/>Website Today</h1>
  <p style="color:#6b7280;font-size:18px;max-width:560px;margin:0 auto 36px;line-height:1.7;">The fastest way to create stunning websites. No code required. Launch in minutes.</p>
  <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;">
    <button style="background:#b82025;color:#fff;border:none;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;">Get Started Free</button>
    <button style="background:#fff;color:#111827;border:2px solid #e5e7eb;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">Watch Demo ▶</button>
  </div>
  <p style="color:#9ca3af;font-size:13px;margin-top:20px;">No credit card required · Free forever plan</p>
</section>`,
    },
    {
      id: "hero-section-2",
      type: "hero",
      label: "Hero – Dark Full Screen",
      preview: "Dark hero with animated gradient background",
      html: `<section style="background:linear-gradient(135deg,#0f172a 0%,#1e1b4b 50%,#0f172a 100%);padding:120px 40px;text-align:center;">
  <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(184,32,37,0.15);border:1px solid rgba(184,32,37,0.3);padding:6px 16px;border-radius:20px;margin-bottom:24px;">
    <span style="width:8px;height:8px;background:#b82025;border-radius:50%;display:inline-block;"></span>
    <span style="color:#fca5a5;font-size:12px;font-weight:600;">Trusted by 10,000+ teams</span>
  </div>
  <h1 style="font-size:56px;font-weight:900;color:#fff;margin:0 0 20px;line-height:1.1;">The Platform for<br/><span style="color:#b82025;">Modern Teams</span></h1>
  <p style="color:#94a3b8;font-size:18px;max-width:540px;margin:0 auto 40px;line-height:1.7;">Collaborate, build, and ship faster than ever before with our all-in-one workspace.</p>
  <button style="background:#b82025;color:#fff;border:none;padding:16px 44px;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;">Start Building →</button>
</section>`,
    },
    {
      id: "hero-section-3",
      type: "hero",
      label: "Hero – Split with Stats",
      preview: "Left text with stats + right visual",
      html: `<section style="background:#fff;padding:80px 40px;">
  <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
    <div>
      <h1 style="font-size:46px;font-weight:900;color:#111827;margin:0 0 20px;line-height:1.15;">Grow Your Business <span style="color:#b82025;">10x Faster</span></h1>
      <p style="color:#6b7280;font-size:16px;line-height:1.8;margin:0 0 32px;">Our platform gives you all the tools you need to attract customers, close deals, and scale your business.</p>
      <button style="background:#b82025;color:#fff;border:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;">Get Started Free</button>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px;">
        <div><p style="font-size:28px;font-weight:900;color:#b82025;margin:0;">50K+</p><p style="font-size:12px;color:#9ca3af;margin:4px 0 0;">Active Users</p></div>
        <div><p style="font-size:28px;font-weight:900;color:#b82025;margin:0;">99%</p><p style="font-size:12px;color:#9ca3af;margin:4px 0 0;">Uptime SLA</p></div>
        <div><p style="font-size:28px;font-weight:900;color:#b82025;margin:0;">4.9★</p><p style="font-size:12px;color:#9ca3af;margin:4px 0 0;">User Rating</p></div>
      </div>
    </div>
    <div style="background:linear-gradient(135deg,#fee2e2,#fecaca);border-radius:24px;height:360px;display:flex;align-items:center;justify-content:center;font-size:80px;">📈</div>
  </div>
</section>`,
    },
  ],

  pricing: [
    {
      id: "pricing-1",
      type: "pricing",
      label: "Pricing – 3 Tier Cards",
      preview: "Free, Pro, Enterprise pricing cards",
      html: `<section style="background:#f9fafb;padding:80px 40px;">
  <div style="text-align:center;margin-bottom:56px;">
    <h2 style="font-size:38px;font-weight:900;color:#111827;margin:0 0 12px;">Simple, Transparent Pricing</h2>
    <p style="color:#6b7280;font-size:16px;margin:0;">Choose the plan that works best for you</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1000px;margin:0 auto;">
    <div style="background:#fff;border-radius:16px;padding:36px;border:1px solid #e5e7eb;">
      <p style="font-size:14px;font-weight:700;color:#6b7280;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Free</p>
      <p style="font-size:42px;font-weight:900;color:#111827;margin:0 0 4px;">$0<span style="font-size:16px;font-weight:500;color:#9ca3af;">/mo</span></p>
      <p style="color:#9ca3af;font-size:13px;margin:0 0 28px;">Perfect for getting started</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">
        <p style="margin:0;font-size:14px;color:#374151;">✓ 3 projects</p>
        <p style="margin:0;font-size:14px;color:#374151;">✓ Basic templates</p>
        <p style="margin:0;font-size:14px;color:#374151;">✓ Community support</p>
        <p style="margin:0;font-size:14px;color:#9ca3af;">✗ Custom domain</p>
      </div>
      <button style="width:100%;background:#f3f4f6;color:#374151;border:none;padding:12px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">Get Started</button>
    </div>
    <div style="background:#b82025;border-radius:16px;padding:36px;border:1px solid #b82025;position:relative;">
      <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:#111827;color:#fff;font-size:11px;font-weight:700;padding:4px 14px;border-radius:20px;">MOST POPULAR</div>
      <p style="font-size:14px;font-weight:700;color:rgba(255,255,255,0.7);margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Pro</p>
      <p style="font-size:42px;font-weight:900;color:#fff;margin:0 0 4px;">$29<span style="font-size:16px;font-weight:500;color:rgba(255,255,255,0.7);">/mo</span></p>
      <p style="color:rgba(255,255,255,0.7);font-size:13px;margin:0 0 28px;">For growing businesses</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">
        <p style="margin:0;font-size:14px;color:#fff;">✓ Unlimited projects</p>
        <p style="margin:0;font-size:14px;color:#fff;">✓ All templates</p>
        <p style="margin:0;font-size:14px;color:#fff;">✓ Priority support</p>
        <p style="margin:0;font-size:14px;color:#fff;">✓ Custom domain</p>
      </div>
      <button style="width:100%;background:#fff;color:#b82025;border:none;padding:12px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;">Start Free Trial</button>
    </div>
    <div style="background:#fff;border-radius:16px;padding:36px;border:1px solid #e5e7eb;">
      <p style="font-size:14px;font-weight:700;color:#6b7280;margin:0 0 8px;text-transform:uppercase;letter-spacing:1px;">Enterprise</p>
      <p style="font-size:42px;font-weight:900;color:#111827;margin:0 0 4px;">$99<span style="font-size:16px;font-weight:500;color:#9ca3af;">/mo</span></p>
      <p style="color:#9ca3af;font-size:13px;margin:0 0 28px;">For large organizations</p>
      <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:32px;">
        <p style="margin:0;font-size:14px;color:#374151;">✓ Everything in Pro</p>
        <p style="margin:0;font-size:14px;color:#374151;">✓ SSO & advanced security</p>
        <p style="margin:0;font-size:14px;color:#374151;">✓ Dedicated manager</p>
        <p style="margin:0;font-size:14px;color:#374151;">✓ SLA guarantee</p>
      </div>
      <button style="width:100%;background:#111827;color:#fff;border:none;padding:12px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;">Contact Sales</button>
    </div>
  </div>
</section>`,
    },
    {
      id: "pricing-2",
      type: "pricing",
      label: "Pricing – Comparison Table",
      preview: "Feature comparison table across plans",
      html: `<section style="background:#fff;padding:80px 40px;">
  <div style="text-align:center;margin-bottom:48px;">
    <h2 style="font-size:36px;font-weight:900;color:#111827;margin:0 0 12px;">Compare Plans</h2>
    <p style="color:#6b7280;font-size:15px;">Everything you need to make the right choice</p>
  </div>
  <div style="max-width:800px;margin:0 auto;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;">
    <div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;background:#f9fafb;padding:16px 24px;border-bottom:1px solid #e5e7eb;">
      <p style="margin:0;font-size:13px;font-weight:700;color:#374151;">Feature</p>
      <p style="margin:0;font-size:13px;font-weight:700;color:#374151;text-align:center;">Free</p>
      <p style="margin:0;font-size:13px;font-weight:700;color:#b82025;text-align:center;">Pro</p>
      <p style="margin:0;font-size:13px;font-weight:700;color:#374151;text-align:center;">Enterprise</p>
    </div>
    ${[["Projects","3","Unlimited","Unlimited"],["Storage","1 GB","50 GB","500 GB"],["Custom Domain","✗","✓","✓"],["Analytics","Basic","Advanced","Custom"],["Support","Community","Priority","Dedicated"]].map((r,i)=>`<div style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr;padding:14px 24px;${i%2===0?"background:#fff":"background:#f9fafb"};border-bottom:1px solid #f3f4f6;">
      <p style="margin:0;font-size:14px;color:#374151;">${r[0]}</p>
      <p style="margin:0;font-size:14px;color:#6b7280;text-align:center;">${r[1]}</p>
      <p style="margin:0;font-size:14px;color:#b82025;font-weight:600;text-align:center;">${r[2]}</p>
      <p style="margin:0;font-size:14px;color:#6b7280;text-align:center;">${r[3]}</p>
    </div>`).join("")}
  </div>
</section>`,
    },
  ],

  blog: [
    {
      id: "blog-1",
      type: "blog",
      label: "Blog – 3 Card Grid",
      preview: "Three blog post cards with image placeholders",
      html: `<section style="background:#fff;padding:80px 40px;">
  <div style="text-align:center;margin-bottom:48px;">
    <h2 style="font-size:36px;font-weight:900;color:#111827;margin:0 0 12px;">Latest from Our Blog</h2>
    <p style="color:#6b7280;font-size:15px;">Insights, tips, and stories from our team</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;max-width:1100px;margin:0 auto;">
    ${[["How to Build a Website in 2024","Design","Jan 12"],["10 Tips for Better UX","UX","Jan 8"],["The Future of Web Development","Tech","Jan 3"]].map((p,i)=>`<div style="border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="height:180px;background:linear-gradient(135deg,${["#fee2e2,#fecaca","#fef3c7,#fde68a","#dbeafe,#bfdbfe"][i]});display:flex;align-items:center;justify-content:center;font-size:48px;">${["✍️","🎨","💻"][i]}</div>
      <div style="padding:24px;">
        <span style="background:#fee2e2;color:#b82025;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;">${p[1]}</span>
        <h3 style="font-size:16px;font-weight:700;color:#111827;margin:12px 0 8px;line-height:1.4;">${p[0]}</h3>
        <p style="color:#9ca3af;font-size:12px;margin:0 0 16px;">${p[2]} · 5 min read</p>
        <a href="#" style="color:#b82025;font-size:13px;font-weight:600;text-decoration:none;">Read More →</a>
      </div>
    </div>`).join("")}
  </div>
</section>`,
    },
    {
      id: "blog-2",
      type: "blog",
      label: "Blog – Featured Post",
      preview: "Large featured article with sidebar posts",
      html: `<section style="background:#f9fafb;padding:80px 40px;">
  <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr;gap:40px;">
    <div style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="height:240px;background:linear-gradient(135deg,#fee2e2,#b82025);display:flex;align-items:center;justify-content:center;font-size:64px;">🚀</div>
      <div style="padding:32px;">
        <span style="background:#fee2e2;color:#b82025;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;">FEATURED</span>
        <h2 style="font-size:24px;font-weight:800;color:#111827;margin:14px 0 10px;line-height:1.3;">The Complete Guide to Modern Web Design in 2024</h2>
        <p style="color:#6b7280;font-size:14px;line-height:1.7;margin:0 0 20px;">Everything you need to know about building beautiful, performant websites that users love.</p>
        <a href="#" style="background:#b82025;color:#fff;text-decoration:none;padding:10px 24px;border-radius:8px;font-size:13px;font-weight:600;">Read Article →</a>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:16px;">
      ${["5 Design Trends Dominating 2024","Why Performance Matters More Than Ever","Building Accessible Websites"].map(t=>`<div style="background:#fff;border-radius:12px;padding:20px;border:1px solid #e5e7eb;display:flex;gap:16px;align-items:center;">
        <div style="width:56px;height:56px;background:#fee2e2;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:24px;">📝</div>
        <div><h4 style="font-size:14px;font-weight:700;color:#111827;margin:0 0 4px;">${t}</h4><a href="#" style="color:#b82025;font-size:12px;font-weight:600;text-decoration:none;">Read →</a></div>
      </div>`).join("")}
    </div>
  </div>
</section>`,
    },
  ],

  services: [
    {
      id: "services-1",
      type: "services",
      label: "Services – Icon Grid",
      preview: "6 service cards with icons and descriptions",
      html: `<section style="background:#fff;padding:80px 40px;">
  <div style="text-align:center;margin-bottom:56px;">
    <span style="background:#fee2e2;color:#b82025;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:700;">WHAT WE DO</span>
    <h2 style="font-size:38px;font-weight:900;color:#111827;margin:16px 0 12px;">Our Services</h2>
    <p style="color:#6b7280;font-size:16px;max-width:500px;margin:0 auto;">We offer a full range of digital services to help your business grow</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:0 auto;">
    ${[["🎨","UI/UX Design","Beautiful, user-centered designs that convert visitors into customers."],["💻","Web Development","Fast, scalable websites built with modern technologies."],["📱","Mobile Apps","Native and cross-platform apps for iOS and Android."],["📈","SEO & Marketing","Data-driven strategies to grow your online presence."],["☁️","Cloud Solutions","Reliable, secure cloud infrastructure for your business."],["🔒","Cybersecurity","Protect your digital assets with enterprise-grade security."]].map(s=>`<div style="padding:32px;border-radius:16px;border:1px solid #e5e7eb;transition:all 0.2s;">
      <div style="width:56px;height:56px;background:#fee2e2;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:26px;margin-bottom:20px;">${s[0]}</div>
      <h3 style="font-size:17px;font-weight:700;color:#111827;margin:0 0 10px;">${s[1]}</h3>
      <p style="color:#6b7280;font-size:14px;line-height:1.7;margin:0;">${s[2]}</p>
    </div>`).join("")}
  </div>
</section>`,
    },
    {
      id: "services-2",
      type: "services",
      label: "Services – Process Steps",
      preview: "Step-by-step process with numbered cards",
      html: `<section style="background:#f9fafb;padding:80px 40px;">
  <div style="text-align:center;margin-bottom:56px;">
    <h2 style="font-size:38px;font-weight:900;color:#111827;margin:0 0 12px;">How We Work</h2>
    <p style="color:#6b7280;font-size:16px;">Our proven 4-step process to deliver exceptional results</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;max-width:1100px;margin:0 auto;position:relative;">
    ${[["Discovery","We learn about your business, goals, and target audience in depth."],["Strategy","We craft a tailored plan to achieve your specific objectives."],["Execution","Our team builds and delivers with precision and quality."],["Growth","We measure, optimize, and scale for long-term success."]].map((s,i)=>`<div style="background:#fff;border-radius:16px;padding:32px;border:1px solid #e5e7eb;text-align:center;">
      <div style="width:48px;height:48px;background:#b82025;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:20px;font-weight:900;margin:0 auto 20px;">${i+1}</div>
      <h3 style="font-size:17px;font-weight:700;color:#111827;margin:0 0 10px;">${s[0]}</h3>
      <p style="color:#6b7280;font-size:14px;line-height:1.7;margin:0;">${s[1]}</p>
    </div>`).join("")}
  </div>
</section>`,
    },
  ],

  gallery: [
    {
      id: "gallery-1",
      type: "gallery",
      label: "Gallery – Masonry Grid",
      preview: "Responsive image gallery with colored placeholders",
      html: `<section style="background:#fff;padding:80px 40px;">
  <div style="text-align:center;margin-bottom:48px;">
    <h2 style="font-size:36px;font-weight:900;color:#111827;margin:0 0 12px;">Our Work</h2>
    <p style="color:#6b7280;font-size:15px;">A showcase of our latest projects and creations</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1100px;margin:0 auto;">
    ${[{h:240,bg:"#fee2e2,#fecaca",e:"🏠"},{h:180,bg:"#dbeafe,#bfdbfe",e:"💼"},{h:240,bg:"#d1fae5,#a7f3d0",e:"🎨"},{h:200,bg:"#fef3c7,#fde68a",e:"📱"},{h:240,bg:"#ede9fe,#ddd6fe",e:"🚀"},{h:180,bg:"#fee2e2,#fecaca",e:"🌐"}].map(g=>`<div style="height:${g.h}px;background:linear-gradient(135deg,${g.bg});border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:48px;cursor:pointer;">${g.e}</div>`).join("")}
  </div>
  <div style="text-align:center;margin-top:40px;">
    <button style="background:#b82025;color:#fff;border:none;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;">View All Projects</button>
  </div>
</section>`,
    },
    {
      id: "gallery-2",
      type: "gallery",
      label: "Gallery – Stats Showcase",
      preview: "Portfolio stats with project highlights",
      html: `<section style="background:#111827;padding:80px 40px;">
  <div style="max-width:1100px;margin:0 auto;">
    <div style="text-align:center;margin-bottom:56px;">
      <h2 style="font-size:38px;font-weight:900;color:#fff;margin:0 0 12px;">Our Impact in Numbers</h2>
      <p style="color:#9ca3af;font-size:16px;">Results that speak for themselves</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:48px;">
      ${[["200+","Projects Delivered"],["50+","Happy Clients"],["5★","Average Rating"],["8yr","In Business"]].map(s=>`<div style="background:#1f2937;border-radius:16px;padding:32px;text-align:center;border:1px solid #374151;">
        <p style="font-size:40px;font-weight:900;color:#b82025;margin:0 0 8px;">${s[0]}</p>
        <p style="font-size:14px;color:#9ca3af;margin:0;">${s[1]}</p>
      </div>`).join("")}
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
      ${["#fee2e2,#b82025","#1f2937,#374151","#fee2e2,#b82025"].map((g,i)=>`<div style="height:200px;background:linear-gradient(135deg,${g});border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:48px;">${["🏆","💡","🎯"][i]}</div>`).join("")}
    </div>
  </div>
</section>`,
    },
  ],

  sections: [
    {
      id: "hero-1",
      type: "section",
      label: "Hero – Split Layout",
      preview: "Two-column hero with text and image",
      html: `<section style="background:#fff;padding:80px 40px;display:flex;align-items:center;gap:60px;max-width:1200px;margin:0 auto;">
  <div style="flex:1;">
    <span style="background:#ede9fe;color:#7c3aed;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">NEW RELEASE</span>
    <h2 style="font-size:44px;font-weight:800;color:#0f172a;margin:16px 0 20px;line-height:1.15;">Build Faster,<br/>Ship Smarter</h2>
    <p style="color:#64748b;font-size:16px;line-height:1.7;margin:0 0 32px;">The all-in-one platform to design, build, and launch your next big idea without writing a single line of code.</p>
    <button style="background:#6366f1;color:#fff;border:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;margin-right:12px;">Start Building</button>
    <button style="background:transparent;color:#6366f1;border:2px solid #6366f1;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:600;cursor:pointer;">Watch Demo</button>
  </div>
  <div style="flex:1;background:linear-gradient(135deg,#ede9fe,#dbeafe);border-radius:16px;height:320px;display:flex;align-items:center;justify-content:center;font-size:64px;">🖥️</div>
</section>`,
    },
    {
      id: "features-1",
      type: "section",
      label: "Features – 3 Cards",
      preview: "Three feature cards with icons",
      html: `<section style="background:#f8fafc;padding:72px 40px;">
  <div style="text-align:center;margin-bottom:48px;">
    <h2 style="font-size:34px;font-weight:800;color:#0f172a;margin:0 0 12px;">Everything you need</h2>
    <p style="color:#64748b;font-size:16px;margin:0;">Powerful features to accelerate your workflow</p>
  </div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:0 auto;">
    <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 1px 8px rgba(0,0,0,0.06);">
      <div style="font-size:36px;margin-bottom:16px;">⚡</div>
      <h3 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 10px;">Lightning Fast</h3>
      <p style="color:#64748b;font-size:14px;line-height:1.6;margin:0;">Optimized for speed with zero compromises on performance.</p>
    </div>
    <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 1px 8px rgba(0,0,0,0.06);">
      <div style="font-size:36px;margin-bottom:16px;">🔒</div>
      <h3 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 10px;">Secure by Default</h3>
      <p style="color:#64748b;font-size:14px;line-height:1.6;margin:0;">Enterprise-grade security built into every layer of the stack.</p>
    </div>
    <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 1px 8px rgba(0,0,0,0.06);">
      <div style="font-size:36px;margin-bottom:16px;">🎨</div>
      <h3 style="font-size:18px;font-weight:700;color:#0f172a;margin:0 0 10px;">Fully Customizable</h3>
      <p style="color:#64748b;font-size:14px;line-height:1.6;margin:0;">Tailor every component to match your brand perfectly.</p>
    </div>
  </div>
</section>`,
    },
    {
      id: "testimonial-1",
      type: "section",
      label: "Testimonials",
      preview: "Customer testimonial cards",
      html: `<section style="background:#fff;padding:72px 40px;">
  <h2 style="text-align:center;font-size:34px;font-weight:800;color:#0f172a;margin:0 0 48px;">Loved by thousands</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:0 auto;">
    <div style="background:#f8fafc;border-radius:12px;padding:28px;border:1px solid #e2e8f0;">
      <p style="color:#334155;font-size:14px;line-height:1.7;margin:0 0 20px;">"This tool completely transformed how we build websites. Absolutely love it!"</p>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">A</div>
        <div><p style="margin:0;font-weight:600;font-size:14px;color:#0f172a;">Alex Johnson</p><p style="margin:0;font-size:12px;color:#94a3b8;">CEO, TechCorp</p></div>
      </div>
    </div>
    <div style="background:#f8fafc;border-radius:12px;padding:28px;border:1px solid #e2e8f0;">
      <p style="color:#334155;font-size:14px;line-height:1.7;margin:0 0 20px;">"Saved us weeks of development time. The drag and drop is incredibly intuitive."</p>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#f43f5e);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">S</div>
        <div><p style="margin:0;font-weight:600;font-size:14px;color:#0f172a;">Sara Lee</p><p style="margin:0;font-size:12px;color:#94a3b8;">Designer, Studio X</p></div>
      </div>
    </div>
    <div style="background:#f8fafc;border-radius:12px;padding:28px;border:1px solid #e2e8f0;">
      <p style="color:#334155;font-size:14px;line-height:1.7;margin:0 0 20px;">"Best investment we made this year. Our clients are blown away by the results."</p>
      <div style="display:flex;align-items:center;gap:12px;">
        <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#10b981,#059669);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">M</div>
        <div><p style="margin:0;font-weight:600;font-size:14px;color:#0f172a;">Mike Chen</p><p style="margin:0;font-size:12px;color:#94a3b8;">Founder, GrowthLab</p></div>
      </div>
    </div>
  </div>
</section>`,
    },
    {
      id: "cta-1",
      type: "section",
      label: "CTA Banner",
      preview: "Call-to-action banner with gradient",
      html: `<section style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:72px 40px;text-align:center;">
  <h2 style="color:#fff;font-size:38px;font-weight:800;margin:0 0 16px;">Ready to get started?</h2>
  <p style="color:rgba(255,255,255,0.8);font-size:18px;margin:0 0 36px;">Join 10,000+ teams already building with us.</p>
  <button style="background:#fff;color:#6366f1;border:none;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;margin-right:12px;">Start for Free</button>
  <button style="background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.6);padding:16px 40px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">Talk to Sales</button>
</section>`,
    },
  ],
  hero: [
    {
      id: "hero-s-1",
      type: "hero",
      label: "Hero – Bold Centered",
      preview: "Large centered headline with CTA buttons",
      html: `<section style="background:#fff;padding:100px 40px;text-align:center;"><span style="background:#fee2e2;color:#b82025;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:600;">WELCOME</span><h1 style="font-size:52px;font-weight:900;color:#111827;margin:20px 0 16px;line-height:1.1;">Build Your Dream<br/>Website Today</h1><p style="color:#6b7280;font-size:18px;max-width:560px;margin:0 auto 36px;line-height:1.7;">The fastest way to create stunning websites without writing a single line of code.</p><div style="display:flex;gap:12px;justify-content:center;"><button style="background:#b82025;color:#fff;border:none;padding:15px 36px;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;">Get Started Free</button><button style="background:#fff;color:#111827;border:2px solid #e5e7eb;padding:15px 36px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">See Demo</button></div></section>`,
    },
    {
      id: "hero-s-2",
      type: "hero",
      label: "Hero – Split Image",
      preview: "Left text right image hero layout",
      html: `<section style="background:#fff;padding:80px 40px;"><div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;"><div><span style="background:#fee2e2;color:#b82025;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:600;">NEW</span><h1 style="font-size:44px;font-weight:900;color:#111827;margin:16px 0 20px;line-height:1.15;">Grow Your Business Faster</h1><p style="color:#6b7280;font-size:16px;line-height:1.8;margin:0 0 32px;">Powerful tools to help you design, launch, and scale your online presence.</p><button style="background:#b82025;color:#fff;border:none;padding:14px 32px;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;">Start Now →</button></div><div style="background:linear-gradient(135deg,#fee2e2,#fecaca);border-radius:20px;height:340px;display:flex;align-items:center;justify-content:center;font-size:80px;">🚀</div></div></section>`,
    },
    {
      id: "hero-s-3",
      type: "hero",
      label: "Hero – Dark Full Width",
      preview: "Dark background full-width hero",
      html: `<section style="background:#111827;padding:100px 40px;text-align:center;"><h1 style="font-size:56px;font-weight:900;color:#fff;margin:0 0 20px;line-height:1.1;">The Future of <span style="color:#b82025;">Web Design</span></h1><p style="color:#9ca3af;font-size:18px;max-width:540px;margin:0 auto 40px;line-height:1.7;">Create professional websites in minutes with our drag-and-drop builder.</p><button style="background:#b82025;color:#fff;border:none;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:700;cursor:pointer;">Get Started Free</button></section>`,
    },
  ],

  pricing: [
    {
      id: "pricing-1",
      type: "pricing",
      label: "Pricing – 3 Tier Cards",
      preview: "Free, Pro, Enterprise pricing cards",
      html: `<section style="background:#f9fafb;padding:80px 40px;"><div style="text-align:center;margin-bottom:48px;"><h2 style="font-size:36px;font-weight:800;color:#111827;margin:0 0 12px;">Simple, Transparent Pricing</h2><p style="color:#6b7280;font-size:16px;margin:0;">No hidden fees. Cancel anytime.</p></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1000px;margin:0 auto;"><div style="background:#fff;border-radius:16px;padding:36px;border:1px solid #e5e7eb;"><p style="font-size:14px;font-weight:700;color:#6b7280;margin:0 0 8px;">FREE</p><p style="font-size:40px;font-weight:900;color:#111827;margin:0 0 4px;">$0<span style="font-size:16px;font-weight:400;color:#9ca3af;">/mo</span></p><p style="color:#6b7280;font-size:13px;margin:0 0 24px;">Perfect to get started</p><div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;"><p style="font-size:14px;color:#374151;margin:0;">✓ 3 pages</p><p style="font-size:14px;color:#374151;margin:0;">✓ Basic templates</p><p style="font-size:14px;color:#374151;margin:0;">✓ Community support</p></div><button style="width:100%;padding:12px;border:2px solid #b82025;background:#fff;color:#b82025;border-radius:8px;font-weight:700;cursor:pointer;">Get Started</button></div><div style="background:#b82025;border-radius:16px;padding:36px;border:1px solid #b82025;"><p style="font-size:14px;font-weight:700;color:rgba(255,255,255,0.7);margin:0 0 8px;">PRO</p><p style="font-size:40px;font-weight:900;color:#fff;margin:0 0 4px;">$29<span style="font-size:16px;font-weight:400;color:rgba(255,255,255,0.7);">/mo</span></p><p style="color:rgba(255,255,255,0.7);font-size:13px;margin:0 0 24px;">For growing businesses</p><div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;"><p style="font-size:14px;color:#fff;margin:0;">✓ Unlimited pages</p><p style="font-size:14px;color:#fff;margin:0;">✓ All templates</p><p style="font-size:14px;color:#fff;margin:0;">✓ Priority support</p></div><button style="width:100%;padding:12px;background:#fff;color:#b82025;border:none;border-radius:8px;font-weight:700;cursor:pointer;">Start Free Trial</button></div><div style="background:#fff;border-radius:16px;padding:36px;border:1px solid #e5e7eb;"><p style="font-size:14px;font-weight:700;color:#6b7280;margin:0 0 8px;">ENTERPRISE</p><p style="font-size:40px;font-weight:900;color:#111827;margin:0 0 4px;">$99<span style="font-size:16px;font-weight:400;color:#9ca3af;">/mo</span></p><p style="color:#6b7280;font-size:13px;margin:0 0 24px;">For large teams</p><div style="display:flex;flex-direction:column;gap:10px;margin-bottom:28px;"><p style="font-size:14px;color:#374151;margin:0;">✓ Everything in Pro</p><p style="font-size:14px;color:#374151;margin:0;">✓ Custom domain</p><p style="font-size:14px;color:#374151;margin:0;">✓ Dedicated support</p></div><button style="width:100%;padding:12px;border:2px solid #b82025;background:#fff;color:#b82025;border-radius:8px;font-weight:700;cursor:pointer;">Contact Sales</button></div></div></section>`,
    },
    {
      id: "pricing-2",
      type: "pricing",
      label: "Pricing – Comparison Table",
      preview: "Feature comparison table with tiers",
      html: `<section style="background:#fff;padding:80px 40px;"><div style="text-align:center;margin-bottom:48px;"><h2 style="font-size:36px;font-weight:800;color:#111827;margin:0 0 12px;">Compare Plans</h2><p style="color:#6b7280;font-size:16px;">Find the right plan for your needs</p></div><div style="max-width:800px;margin:0 auto;border:1px solid #e5e7eb;border-radius:16px;overflow:hidden;"><table style="width:100%;border-collapse:collapse;"><thead><tr style="background:#f9fafb;"><th style="padding:16px 20px;text-align:left;font-size:14px;color:#374151;">Feature</th><th style="padding:16px;text-align:center;font-size:14px;color:#374151;">Free</th><th style="padding:16px;text-align:center;font-size:14px;color:#fff;background:#b82025;">Pro</th><th style="padding:16px;text-align:center;font-size:14px;color:#374151;">Enterprise</th></tr></thead><tbody><tr style="border-top:1px solid #e5e7eb;"><td style="padding:14px 20px;font-size:14px;color:#374151;">Pages</td><td style="padding:14px;text-align:center;font-size:14px;color:#6b7280;">3</td><td style="padding:14px;text-align:center;font-size:14px;color:#374151;background:#fff8f8;">Unlimited</td><td style="padding:14px;text-align:center;font-size:14px;color:#374151;">Unlimited</td></tr><tr style="border-top:1px solid #e5e7eb;background:#f9fafb;"><td style="padding:14px 20px;font-size:14px;color:#374151;">Custom Domain</td><td style="padding:14px;text-align:center;">✗</td><td style="padding:14px;text-align:center;background:#fff8f8;">✓</td><td style="padding:14px;text-align:center;">✓</td></tr><tr style="border-top:1px solid #e5e7eb;"><td style="padding:14px 20px;font-size:14px;color:#374151;">Analytics</td><td style="padding:14px;text-align:center;">✗</td><td style="padding:14px;text-align:center;background:#fff8f8;">✓</td><td style="padding:14px;text-align:center;">✓</td></tr><tr style="border-top:1px solid #e5e7eb;background:#f9fafb;"><td style="padding:14px 20px;font-size:14px;color:#374151;">Priority Support</td><td style="padding:14px;text-align:center;">✗</td><td style="padding:14px;text-align:center;background:#fff8f8;">✓</td><td style="padding:14px;text-align:center;">✓</td></tr></tbody></table></div></section>`,
    },
  ],

  blog: [
    {
      id: "blog-1",
      type: "blog",
      label: "Blog – 3 Card Grid",
      preview: "Three blog post cards with image and excerpt",
      html: `<section style="background:#f9fafb;padding:80px 40px;"><div style="text-align:center;margin-bottom:48px;"><h2 style="font-size:36px;font-weight:800;color:#111827;margin:0 0 12px;">Latest from Our Blog</h2><p style="color:#6b7280;font-size:16px;">Insights, tips, and updates from our team</p></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:0 auto;"><div style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;"><div style="height:180px;background:linear-gradient(135deg,#fee2e2,#fecaca);display:flex;align-items:center;justify-content:center;font-size:48px;">📝</div><div style="padding:24px;"><span style="background:#fee2e2;color:#b82025;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;">DESIGN</span><h3 style="font-size:17px;font-weight:700;color:#111827;margin:12px 0 8px;">10 Tips for Better UI Design</h3><p style="color:#6b7280;font-size:13px;line-height:1.6;margin:0 0 16px;">Learn the fundamentals of great user interface design that converts.</p><a href="#" style="color:#b82025;font-size:13px;font-weight:600;text-decoration:none;">Read More →</a></div></div><div style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;"><div style="height:180px;background:linear-gradient(135deg,#dbeafe,#bfdbfe);display:flex;align-items:center;justify-content:center;font-size:48px;">💡</div><div style="padding:24px;"><span style="background:#dbeafe;color:#2563eb;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;">TIPS</span><h3 style="font-size:17px;font-weight:700;color:#111827;margin:12px 0 8px;">How to Launch Your MVP Fast</h3><p style="color:#6b7280;font-size:13px;line-height:1.6;margin:0 0 16px;">A step-by-step guide to shipping your product in record time.</p><a href="#" style="color:#b82025;font-size:13px;font-weight:600;text-decoration:none;">Read More →</a></div></div><div style="background:#fff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;"><div style="height:180px;background:linear-gradient(135deg,#d1fae5,#a7f3d0);display:flex;align-items:center;justify-content:center;font-size:48px;">📈</div><div style="padding:24px;"><span style="background:#d1fae5;color:#059669;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;">GROWTH</span><h3 style="font-size:17px;font-weight:700;color:#111827;margin:12px 0 8px;">SEO Strategies That Work in 2024</h3><p style="color:#6b7280;font-size:13px;line-height:1.6;margin:0 0 16px;">Proven tactics to rank higher and drive organic traffic.</p><a href="#" style="color:#b82025;font-size:13px;font-weight:600;text-decoration:none;">Read More →</a></div></div></div></section>`,
    },
    {
      id: "blog-2",
      type: "blog",
      label: "Blog – Featured Post",
      preview: "Large featured post with sidebar list",
      html: `<section style="background:#fff;padding:80px 40px;"><div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.6fr 1fr;gap:48px;"><div><div style="height:280px;background:linear-gradient(135deg,#fee2e2,#fecaca);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:64px;margin-bottom:24px;">🌟</div><span style="background:#fee2e2;color:#b82025;padding:3px 10px;border-radius:20px;font-size:11px;font-weight:600;">FEATURED</span><h2 style="font-size:28px;font-weight:800;color:#111827;margin:12px 0 12px;">The Complete Guide to Building a Successful Online Business</h2><p style="color:#6b7280;font-size:15px;line-height:1.7;margin:0 0 20px;">Everything you need to know about starting, growing, and scaling your digital business from scratch.</p><a href="#" style="background:#b82025;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;">Read Article →</a></div><div><h3 style="font-size:16px;font-weight:700;color:#111827;margin:0 0 20px;padding-bottom:12px;border-bottom:2px solid #b82025;">Recent Posts</h3><div style="display:flex;flex-direction:column;gap:20px;">${["How to Write Copy That Converts","Top 5 Design Trends of 2024","Building a Brand from Scratch","Email Marketing Best Practices"].map((t,i)=>`<div style="display:flex;gap:14px;align-items:center;"><div style="width:56px;height:56px;border-radius:10px;background:#f9fafb;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">${["✍️","🎨","🏷️","📧"][i]}</div><div><p style="font-size:13px;font-weight:600;color:#111827;margin:0 0 4px;">${t}</p><p style="font-size:12px;color:#9ca3af;margin:0;">5 min read</p></div></div>`).join("")}</div></div></div></section>`,
    },
  ],

  team: [
    {
      id: "team-1",
      type: "team",
      label: "Team – 4 Card Grid",
      preview: "Four team member cards with role",
      html: `<section style="background:#fff;padding:80px 40px;"><div style="text-align:center;margin-bottom:48px;"><h2 style="font-size:36px;font-weight:800;color:#111827;margin:0 0 12px;">Meet Our Team</h2><p style="color:#6b7280;font-size:16px;">The talented people behind our success</p></div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;max-width:1100px;margin:0 auto;">${[{name:"Sarah Johnson",role:"CEO & Founder",emoji:"👩‍💼",bg:"#fee2e2"},{name:"Mark Williams",role:"Lead Developer",emoji:"👨‍💻",bg:"#dbeafe"},{name:"Priya Patel",role:"Head of Design",emoji:"👩‍🎨",bg:"#d1fae5"},{name:"James Lee",role:"Marketing Lead",emoji:"👨‍💼",bg:"#fef3c7"}].map(m=>`<div style="background:#f9fafb;border-radius:16px;padding:28px;text-align:center;border:1px solid #e5e7eb;"><div style="width:80px;height:80px;border-radius:50%;background:${m.bg};display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 16px;"></div><p style="font-size:15px;font-weight:700;color:#111827;margin:0 0 4px;">${m.name}</p><p style="font-size:13px;color:#b82025;font-weight:600;margin:0 0 12px;">${m.role}</p><div style="display:flex;justify-content:center;gap:10px;"><a href="#" style="color:#6b7280;font-size:16px;text-decoration:none;">🐦</a><a href="#" style="color:#6b7280;font-size:16px;text-decoration:none;">💼</a></div></div>`).join("")}</div></section>`,
    },
    {
      id: "team-2",
      type: "team",
      label: "Team – Dark Style",
      preview: "Dark background team section",
      html: `<section style="background:#111827;padding:80px 40px;"><div style="text-align:center;margin-bottom:48px;"><h2 style="font-size:36px;font-weight:800;color:#fff;margin:0 0 12px;">Our Leadership</h2><p style="color:#9ca3af;font-size:16px;">Experienced leaders driving innovation</p></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;max-width:900px;margin:0 auto;">${[{name:"Alex Turner",role:"Chief Executive",emoji:"👨‍💼"},{name:"Nina Ross",role:"Chief Design Officer",emoji:"👩‍🎨"},{name:"David Kim",role:"Chief Technology",emoji:"👨‍💻"}].map(m=>`<div style="background:#1f2937;border-radius:16px;padding:32px;text-align:center;border:1px solid #374151;"><div style="width:80px;height:80px;border-radius:50%;background:#b82025;display:flex;align-items:center;justify-content:center;font-size:36px;margin:0 auto 16px;"></div><p style="font-size:16px;font-weight:700;color:#fff;margin:0 0 4px;">${m.name}</p><p style="font-size:13px;color:#b82025;font-weight:600;margin:0;">${m.role}</p></div>`).join("")}</div></section>`,
    },
  ],

  services: [
    {
      id: "services-1",
      type: "services",
      label: "Services – Icon Grid",
      preview: "6 service cards with icons",
      html: `<section style="background:#fff;padding:80px 40px;"><div style="text-align:center;margin-bottom:48px;"><h2 style="font-size:36px;font-weight:800;color:#111827;margin:0 0 12px;">What We Offer</h2><p style="color:#6b7280;font-size:16px;">Comprehensive solutions for your business</p></div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;max-width:1100px;margin:0 auto;">${[{icon:"🎨",title:"UI/UX Design",desc:"Beautiful, user-centered designs that convert visitors into customers."},{icon:"💻",title:"Web Development",desc:"Fast, scalable websites built with modern technologies."},{icon:"📱",title:"Mobile Apps",desc:"Native and cross-platform apps for iOS and Android."},{icon:"📈",title:"SEO & Marketing",desc:"Data-driven strategies to grow your online presence."},{icon:"☁️",title:"Cloud Solutions",desc:"Reliable cloud infrastructure to power your business."},{icon:"🔒",title:"Cybersecurity",desc:"Protect your business with enterprise-grade security."}].map(s=>`<div style="padding:32px;border-radius:16px;border:1px solid #e5e7eb;transition:all 0.2s;"><div style="width:56px;height:56px;background:#fee2e2;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:16px;">${s.icon}</div><h3 style="font-size:17px;font-weight:700;color:#111827;margin:0 0 10px;">${s.title}</h3><p style="color:#6b7280;font-size:14px;line-height:1.6;margin:0;">${s.desc}</p></div>`).join("")}</div></section>`,
    },
    {
      id: "services-2",
      type: "services",
      label: "Services – Red Accent List",
      preview: "Services list with red left border accents",
      html: `<section style="background:#f9fafb;padding:80px 40px;"><div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;"><div><span style="background:#fee2e2;color:#b82025;padding:4px 14px;border-radius:20px;font-size:12px;font-weight:600;">OUR SERVICES</span><h2 style="font-size:36px;font-weight:800;color:#111827;margin:16px 0 16px;">Everything You Need to Succeed</h2><p style="color:#6b7280;font-size:15px;line-height:1.8;margin:0 0 32px;">We provide end-to-end digital solutions tailored to your unique business goals.</p><button style="background:#b82025;color:#fff;border:none;padding:13px 28px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;">View All Services</button></div><div style="display:flex;flex-direction:column;gap:16px;">${[{icon:"🎯",title:"Strategy & Consulting",desc:"Expert guidance to align your digital strategy with business goals."},{icon:"🛠️",title:"Product Development",desc:"From concept to launch, we build products users love."},{icon:"📊",title:"Analytics & Insights",desc:"Turn data into actionable insights for smarter decisions."},{icon:"🤝",title:"Ongoing Support",desc:"Dedicated support to keep your business running smoothly."}].map(s=>`<div style="display:flex;gap:16px;align-items:flex-start;background:#fff;padding:20px;border-radius:12px;border-left:4px solid #b82025;"><div style="font-size:28px;flex-shrink:0;">${s.icon}</div><div><h3 style="font-size:15px;font-weight:700;color:#111827;margin:0 0 6px;">${s.title}</h3><p style="color:#6b7280;font-size:13px;line-height:1.6;margin:0;">${s.desc}</p></div></div>`).join("")}</div></div></section>`,
    },
  ],
};
