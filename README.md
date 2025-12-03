# Helpers Hub

 A small React + Vite demo app showcasing local services, a cart, and a clean UI — now with built-in dark mode.

 ## Features
 - Services listing and details
 - Add-to-cart UI with cart drawer
 - Simple client-side routing with `react-router-dom`
 - Theme toggle (light / dark) persisted in `localStorage`
 - Responsive layout and components

 ## Quick start

 These commands assume you have Node.js (16+) and npm installed.

 ```powershell
 npm install
 npm run dev
 ```

 Open the dev URL printed by Vite (usually `http://localhost:5173`).

 ## Project structure
 - `src/` — application source
 - `src/components/` — reusable components (Header, Footer, Cart, etc.)
 - `src/pages/` — route views
 - `src/styles.css` — global styles and theme variables
 - `data/` — sample/static data used by the site

 ## Theming

 The app uses CSS variables. The current theme is stored under `localStorage.key = "theme"` and set on the document root as `data-theme` (values: `light` or `dark`). The header contains a theme toggle (sun/moon) to switch modes.

 ## Development notes

 - The project uses Vite for development and build. See `package.json` scripts: `dev`, `build`, `preview`.
 - UI is intentionally minimal and easy to extend — add more services to `src/data/services.js` and create additional pages under `src/pages/`.

 ## Contributing

 Contributions are welcome. Open an issue or submit a pull request with a clear description and tests/demos as needed.

 ## License

 This project is available under the MIT License — see `LICENSE.md`.

 ---
