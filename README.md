# partum-partner
Checklist for prenatal and postpartum partner support.

## Contribution Guide

### How it works (what you can do next)

- `bundle exec jekyll serve` (if Ruby bundler + jekyll installed)
- Open `http://127.0.0.1:4000/`
- Visit:
  - `/labor/`, `/birth/`, `/postpartum/`, `/diapers/`, `/chores/`
- Edit text in Markdown; Jekyll picks up changes.

### 🔧 Optional refinements

- `assets/js/checklist.js` now saves checkbox state in `localStorage` and unlocks list toggles.
- `index.md` has YAML-controlled fields (`clinical_intro`, `actions_by_stage`) for configurable markup.
- README is intentionally the repo-level summary and can remain as top-level contributor guidance.
- Add Lighthouse accessibility checks:
  - run `npm install -g lighthouse` and `lighthouse http://127.0.0.1:4000/ --view`
  - optionally add GitHub Action for automated audits in `.github/workflows/lighthouse.yml`
