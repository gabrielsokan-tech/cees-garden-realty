# Cees Garden Realty — Corporate Real Estate Website

A responsive, multi-page corporate web application built from scratch with semantic **HTML5**, modern **CSS3** (Flexbox, CSS Grid, and responsive media queries), and vanilla **JavaScript (ES6+)**.

## Project Overview
- **Business Name:** Cees Garden Realty
- **Head Office:** No. 20 Cees Garden Estate
- **Contact:** +234 810 782 9467 | advisory@ceesgardenrealty.com
- **Lead Developer:** Adesokan Opeoluwa Gabriel

## Folder Structure
```text
cees-garden-realty-portfolio/
├── index.html          # Home page with hero banner, metrics, and core highlights
├── about.html          # Company background, heritage, mission, vision, and objectives
├── services.html       # Filterable real estate services and portfolio grid
├── contact.html        # Corporate contact details and validated inquiry form
├── css/
│   └── styles.css      # External stylesheet (Box model, Flexbox, Grid, Media Queries)
├── js/
│   └── main.js         # Mobile menu toggle, interactive category filter, form validation
├── assets/             # Custom vector architectural illustrations
└── README.md           # Project documentation
```

## Key Technical Features
1. **Semantic HTML5 Architecture:** Structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks across four linked pages.
2. **Modern CSS Layout Systems:**
   - **CSS Flexbox:** Used for the sticky navigation bar, hero split layout, CTA banner, and mobile menu drawer.
   - **CSS Grid:** Used for the 3-column highlights/mission cards, 2-column filterable services catalog, contact layout, and multi-column footer.
   - **Responsive Design:** Breakpoints at `992px` (tablet) and `768px` (mobile) prevent horizontal overflow and adapt multi-column grids cleanly.
3. **Interactive JavaScript Functionality:**
   - Responsive hamburger menu with ARIA state updates.
   - Live category filtering (`All`, `Residential`, `Commercial`, `Advisory & Management`) on the Services page.
   - Client-side contact form validation with field-level error feedback and transparent front-end submission status.

## Local Development (VS Code)
1. Extract the project folder and open it in **Visual Studio Code**.
2. Install or launch the **Live Server** extension, right-click `index.html`, and select **Open with Live Server**.

## GitHub & Deployment Workflow
```bash
git init
git add .
git commit -m "Initial commit: Cees Garden Realty responsive website"
git branch -M main
git remote add origin https://github.com/<your-username>/cees-garden-realty.git
git push -u origin main
```
Deploy directly from your GitHub repository to **Netlify** or **Render** as a static site (publish directory: `/`).
