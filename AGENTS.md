# Agent instructions

## Repository purpose

This repository is David López Diego’s professional scientific portfolio. It communicates work in physics, materials characterisation and metrology, nanomaterials, scientific instrumentation, advanced characterisation and reproducible scientific data analysis. Programming and software development are complementary skills, not the primary professional identity.

## Architecture

The site is a Next.js 14 App Router application using TypeScript and Tailwind CSS. It is content-driven and static-friendly: the home page composes reusable components, while selected-work pages are generated from typed records and static parameters.

Important locations:

- `app/`: routes, global styles, metadata, robots and sitemap
- `components/`: reusable UI and selected-work rendering primitives
- `data/site.ts`: primary profile and professional content
- `data/work/`: selected-work records, case-study copy, assets and links
- `types/`: shared TypeScript models
- `public/cv/`: public CV PDF
- `public/images/work/`: project figures and screenshots
- `docs/`: content strategy, customization and implementation references

Edit content in `data/site.ts` and `data/work/*.ts` before changing components. Keep presentation logic separate from professional source content.

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run start` requires a successful `npm run build`. Do not add a testing framework solely to claim coverage; use deterministic checks that provide real value for this mostly content-driven site.

## Coding and content conventions

- Use strict TypeScript and existing path aliases.
- Prefer small, local changes over broad refactors or visual redesigns.
- Reuse existing components and typed data structures.
- Keep repository-facing documentation and new comments in English.
- Preserve existing scientific terminology and professional facts.
- Never invent jobs, qualifications, publications, dates, organisations, metrics, technologies, projects or scientific conclusions.
- Do not exaggerate software seniority or reposition David as a senior software engineer, software architect or expert data scientist.
- Treat external links and publication metadata as unverified unless repository evidence or an approved source supports a change.

## Accessibility expectations

Preserve semantic headings, landmarks, accessible names, keyboard operation, visible focus, meaningful alternative text, labelled controls, reduced-motion support and colour-independent meaning. Use links for navigation and buttons for actions. Review new dialogs, menus and image interactions for focus management before handoff.

## SEO and links

Keep page titles, descriptions, canonical URLs, Open Graph metadata, robots, sitemap and Schema.org data accurate and claim-preserving. Do not add keyword spam. New public routes should have a deliberate canonical URL and sitemap decision. Check internal asset paths and inspect external URLs without making side-effecting requests; if an external URL cannot be verified, document that limitation instead of deleting it.

## Git and production restrictions

- Do not change branches or modify `main`.
- Do not commit, push, merge, rebase, force-push or create remote pull requests.
- Do not run destructive resets or overwrite unrelated user changes.
- Do not deploy, run production deployment commands, change Vercel settings, domains or environment variables.
- Do not perform broad dependency upgrades. Add or change dependencies only with a clear, documented benefit.

## Required verification

Before completing a task, run every relevant available check: `npm ci`, lint, typecheck, build and `git diff --check`. Inspect `git status`, `git diff --stat` and the complete diff. Confirm no secrets or accidental professional-content changes were introduced, no unjustified dependency changes occurred, the branch is still `professionalize/v1`, and no commit or push was made. Report failures as failures; never imply a command passed without running it.
