# Customization Guide

## Change text

Edit:

```txt
data/site.ts
```

Most text is stored in structured objects such as:

- `site`
- `metrics`
- `profile`
- `strengths`
- `selectedWork`
- `experience`
- `skills`
- `publications`

## Add a new selected work item

In `data/site.ts`, duplicate one object inside `selectedWork` and change:

- `slug`
- `title`
- `subtitle`
- `summary`
- `context`
- `role`
- `methods`
- `tools`
- `impact`
- `demonstrates`
- `priority`

A new page will automatically exist at:

```txt
/work/your-slug
```

## Add a publication

Add a new object inside `publications`:

```ts
{
  title: "Publication title",
  journal: "Journal Name",
  year: "2026",
  theme: "Theme",
  doi: "10.xxxx/xxxxx",
  url: "https://doi.org/10.xxxx/xxxxx"
}
```

## Replace the CV

Replace:

```txt
public/cv/David_Lopez_Diego_CV_Optimized_B.pdf
```

with a new file using the same filename.

## Change section order

Edit:

```txt
app/page.tsx
```

Move components up or down, for example:

```tsx
<Hero />
<Metrics />
<Profile />
<Expertise />
<SelectedWork />
```

## Recommended first updates

1. Add a professional photo if desired.
2. Export a complete publication list from ORCID/Web of Science and update `publications`.
3. Add real screenshots only for projects that reinforce the scientific-technical positioning.
4. Keep the old Google Sites out of the main navigation.
