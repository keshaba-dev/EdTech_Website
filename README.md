# SkillBridge Career Academy 
A small marketing landing page built with React and Vite that demonstrates a mentor-led online learning platform. The site includes a responsive navigation header, a conversion-focused hero, program cards, platform highlights, outcomes, and an admissions CTA.

**Overview**

SkillBridge is a single-page marketing layout (no router) composed from two main React components: a header (`NavBar`) and the page content (`Body`). The layout is responsive and styled with local CSS files.


**Tech Stack**
- **Framework:** React (see [package.json](package.json))
- **Bundler:** Vite
- **Styling:** Plain CSS (component-scoped files in `src/Components_CSS`)
- **Linting:** ESLint

**Features**
- Sticky navigation with brand, links, and CTA.
- Hero with primary and secondary CTAs, trust/stats panel, and a dashboard preview.
- Program cards and outcome sections illustrating content-driven marketing blocks.
- Responsive design with utility-first CSS variables and component styles.


**Project Structure (key files)**

- **index.html** — app entry and Vite mount point.
- **main.jsx** — renders the app, imports `NavBar` and `Body`.
- **NavBar.jsx** — header/navigation component.
- **Body.jsx** — page content (hero, programs, platform, outcomes, footer).
- **index.css** — global CSS variables and base styles.
- **Navbar.css** — header styling.
- **Body.css** — layout and component styles.

**Component notes**
- `NavBar.jsx` defines navigation links `['Programs', 'Platform', 'Outcomes', 'Pricing']` and actions for "Sign in" / "Book demo".
- `Body.jsx` contains sample program data (Full-stack, Data Analytics, AI Product Skills), outcome items, and small UI widgets (progress, mentor card, stats).
.

**Accessibility & semantics**
- Navigation uses `nav` and `aria-label` attributes. Sections use appropriate headings and `aria-label` on interactive panels.

