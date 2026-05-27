# Dopa-X Pager

Dopa-X is a non-profit, open-source initiative developing a multidimensional measurement system integrating AI, neurophysiology, sensing, computational biology, and cellular biology to create the first objective ruler for Parkinson's disease.

This repository hosts the **Dopa-X Pager** landing page and collaboration portal, built with a modern, high-performance tech stack featuring React, Vite, Tailwind CSS v4, Framer Motion, and Resend.

---

## 🚀 Key Features

* **Premium Visual Design**: Vibrant colors, sleeker dark modes, glassmorphism, responsive flow layouts, and meticulously polished visual accents.
* **Dynamic Animations**: Implemented using **Framer Motion** for an engaging user experience, hovering transitions, and reactive micro-interactions.
* **Large-Format Storytelling Card**: The **Intelligence Layer** features a premium, linear storytelling card layout with giant numeric indicators (`01`, `02`, `03`), executive-scale typography, and a dynamic vertical gradient connector line on desktop.
* **Coded Responsive Support Options**: The **Join Us** options are built as modular, pure-CSS responsive cards featuring custom peachy gradients, generous padding, and robust vertical stacking on mobile viewports for optimal readability.
* **Roadmap & Timeline**: Interactive visualization of Dopa-X development progress from 2026 foundation to 2027 clinical adoption.
* **Secure Collaboration Form**: An integrated, production-ready contact form powered by serverless API handlers and **Resend** for partner, philanthropic, and academic inquiries.


---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + PostCSS
* **Routing**: [React Router v7](https://reactrouter.com/)
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Email Service**: [Resend](https://resend.com/)

---

## 📂 Project Structure

```bash
DopaX-Pager/
├── api/                    # Serverless API functions
│   └── emailService.js     # Contact/Collaboration form mailer (Resend API)
├── docs/                   # Reference and source materials
│   ├── DopaX-pager.pdf     # The original Dopa-X Pitch Deck/Presentation
│   ├── pdf_text.txt        # Copy and textual resources extracted from the deck
│   └── preview.html        # Dev utility to render logo SVGs in-browser
├── public/                 # Static assets (favicons, apple icons, static nodes)
├── src/                    # Main application code
│   ├── assets/             # Unified project assets (processed by Vite)
│   │   ├── backgrounds/    # Page backgrounds, card grids, section overlays
│   │   ├── icons/          # Visual ticks, underscores, SVGs
│   │   └── images/         # Profile avatars, graphs, illustrations, partner logos
│   ├── components/         # Reusable UI components
│   │   ├── Footer/         # Sticky/footer component
│   │   │   └── index.jsx
│   │   ├── Header/         # Top navigation bar
│   │   │   └── index.jsx
│   │   ├── Hero/           # Landing page hero spotlight
│   │   │   └── index.jsx
│   │   ├── Infrastructure/ # Open infrastructure details
│   │   │   └── index.jsx
│   │   ├── IntelligenceLayer/ # Sense, Analyze, Deliver loop
│   │   │   └── index.jsx
│   │   ├── JoinUs/         # Collaboration form and CTAs
│   │   │   └── index.jsx
│   │   ├── Measurements/   # Objective ruler measurements
│   │   │   └── index.jsx
│   │   ├── MissingX/       # Continuous measurement details
│   │   │   └── index.jsx
│   │   ├── TeamIntro/      # Founder & team introduction spotlight
│   │   │   └── index.jsx
│   │   └── Timeline/       # Roadmap timeline nodes
│   │       └── index.jsx
│   ├── pages/              # Routing pages
│   │   ├── Home/           # Main landing page
│   │   │   └── index.jsx
│   │   ├── Partners/       # Partnerships and board members page
│   │   │   └── index.jsx
│   │   └── Team/           # Complete team bios page
│   │       └── index.jsx
│   ├── App.jsx             # React app entry & router configuration
│   ├── index.css           # Styling system utilities
│   └── main.jsx            # App mounting point
├── scripts/
│   └── script.py           # Dev utility to extract dominant brand colors from SVGs
├── tailwind.config.js      # Tailwind compiler settings
├── vite.config.js          # Vite build config
└── package.json            # Scripts and dependencies
```

---

## ⚙️ Development Utilities

To maintain cleanliness and accelerate developer workflows, a couple of custom helper utilities are included:

1. **`scripts/script.py` (Color Extractor)**: 
   A Python utility that automatically reads partner SVG logos (`src/assets/images/partner-logo-1.svg` to `partner-logo-5.svg`), extracts embedded base64-encoded PNG data, filters out neutral/grayscale values, and returns the top 5 dominant brand colors. Excellent for automatically determining active brand accent colors.
   * *Requires:* `Pillow` (`pip install Pillow`)
   * *Run:* `cd scripts && python script.py`

2. **`docs/preview.html` (SVG Previewer)**: 
   A standalone, lightweight HTML page (located in `docs/`) to preview rendering of the logo SVGs in the browser.

---

## 🏃 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v18+)
* [npm](https://www.npmjs.com/)

### Setup and Installation

1. **Clone the repository and navigate to the project directory:**
   ```bash
   cd DopaX-Pager
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📝 License

This initiative is developed as a **non-profit, open-source initiative**, built on existing open technologies to make tools available to the entire scientific and clinical community.
