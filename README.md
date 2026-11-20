# GramaGlow — Digital Gram Panchayat Portal (Pipri)

A bilingual (**English & Hindi**) rural e-governance and public transparency web portal built with pure **HTML5**, **CSS3** (Liquid Glass design system), and **Vanilla JavaScript (ES6+)** — requiring zero build steps or external dependencies.

---

## Project Structure

```text
gramaglow-digital-panchayat/
├── index.html      # Semantic HTML5 layout, SVG village map, and accessible navigation
├── styles.css      # Liquid glass styling, ambient orbs, responsive breakpoints & Devanagari typography
├── app.js          # Bilingual dictionary (EN/HI), Pipri village dataset, Web Speech API & view controllers
└── README.md       # Setup, usage, and architecture guide
```

---

## Quick Setup & Local Run

Because this project uses standard web technologies with zero third-party packages (`node_modules` or `venv` are not needed), you can run it immediately:

### Option 1: Direct Browser Open (Fastest)
1. Extract the ZIP archive to any folder on your computer.
2. Open the `gramaglow-digital-panchayat` directory.
3. Double-click **`index.html`** to launch the portal in Chrome, Edge, Safari, or Firefox.

### Option 2: Local HTTP Server (Recommended for Development)
If you prefer serving the files over `http://localhost` (for example, when testing Web Speech API voices across browsers):

* **Using VS Code Live Server:**
  1. Open the `gramaglow-digital-panchayat` folder in Visual Studio Code.
  2. Right-click `index.html` and select **Open with Live Server**.

* **Using Python (built-in):**
  ```bash
  cd gramaglow-digital-panchayat
  python -m http.server 8080
  ```
  Then open `http://localhost:8080` in your browser.

* **Using Node.js (`npx`):**
  ```bash
  cd gramaglow-digital-panchayat
  npx serve .
  ```

---

## Key Features Included

* **Bilingual Interface (`अ / A` Toggle):** Instant switching between **English** and **Hindi (`हिंदी`)** across all navigation items, category filters, status badges, leadership details, and project cards using `Noto Sans Devanagari` and `Mukta` typography.
* **Overview & Governance Roster:** Highlights the upcoming Gram Sabha meeting, Panchayat Seva Kendra operating hours, village KPIs (`3,420` population, `8` wards, `₹18.5L` funds, `92%` resolution rate), Sarpanch contact card, and a collapsible 8-ward council roster.
* **Official Notices & Audio Broadcaster:** Categorized circulars (`Gram Sabha`, `Agriculture`, `Health`, `Education`) with a spoken Hindi script reader powered by the browser's `window.speechSynthesis` API.
* **Dual-Bar Public Budget Tracker:** Displays separate progress bars for **Physical Progress (Emerald)** and **Funds Utilized (Amber)**, automatically flagging projects where expenditure exceeds physical completion.
* **Public Grievance & SLA Status Board:** Displays ward complaints sorted by 48-hour SLA priority with a connected 4-step progress tracker (`Submitted` → `Assigned` → `In Progress` → `Resolved`) and field photo evidence modal.
* **Village Assets Geo-Directory:** Interactive SVG map and filterable directory of Pipri's Primary Health Sub-Center, Zilla Parishad School, Anganwadi Center, and Community Solar Borewell.
