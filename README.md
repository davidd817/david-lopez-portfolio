# David López Diego — Portfolio v2

This is a strategic rebuild of the original Google Sites portfolio into a more credible, scientific-technical personal website.

## Strategic direction

The site is no longer positioned primarily as a generic Data Analyst / Data Science portfolio. Instead, it is positioned around David's strongest and most credible market fit:

**Materials Characterization & Metrology Scientist**  
**Nanomaterials · Scientific Data Analysis · PhD Candidate**

The portfolio emphasizes advanced characterization, nanoscale metrology, instrumentation, R&D execution, publications and scientific data workflows.

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS 3.4.17
- App Router
- Static-friendly architecture
- SEO metadata + Schema.org structured data

Versions are pinned to avoid the Tailwind 4 / PostCSS issue encountered in the first version.

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Build for production

```bash
npm run build
npm run start
```

## Main editable file

Most content is in:

```txt
data/site.ts
```

Edit this file to update:

- Profile text
- Metrics
- Selected work
- Experience
- Publications
- Skills
- Links
- Target roles

## CV

The CV is stored in:

```txt
public/cv/David_Lopez_Diego_CV_Optimized_B.pdf
```

Replace that file with a new PDF using the same filename if you want the existing CV buttons to continue working.

## Deployment on Vercel

1. Create a GitHub repository.
2. Upload the project files.
3. Go to Vercel.
4. Import the repository.
5. Framework should be detected as Next.js.
6. Click Deploy.
7. Add `davidlopezdiego.com` under Project Settings → Domains.

## Important strategic decision

The old Google Sites is not used as the destination for project links. It can remain as an archive, but the public professional experience should stay inside this new website.
