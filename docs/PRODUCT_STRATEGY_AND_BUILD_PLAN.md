# Universal Shopping Skill: implementation plan

Decision, 13 September 2026: retain the universal AI-commerce capability as a bounded strategic investment, with one proposed Purchase Router and platform-specific adapters. Share is the second surface, not a substitute claim of AI success.

Canonical case: `content/case.md`. Detailed evidence and gates: `content/research.md`. Interfaces, economics, GTM and ITT experiment: `content/experiment.md`. Prototype source: `content/prototype.html`, `assets/prototype.js`, `assets/router-model.js`.

The site preserves the static Node/marked/Vite architecture. A deterministic fixture model exercises route checks and consent, and original CSS illustrates fictional products. No CashKaro APIs, AI recommendations, payouts or affiliate transactions run on the site. Public distribution uses an explicit build allowlist; private raw source attachments remain outside it.

Build path: original PDF audit → primary-source checks → balanced case → interaction state machine → supplemental evidence/measurement/history → skeptical review → QA → GitHub and Vercel. Production implementation would first require the host/partner spike described in the technical plan.
