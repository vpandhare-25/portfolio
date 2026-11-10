# Vivek Pandhare · Portfolio

My personal portfolio: experience, organizations and projects, on one page.

Built with Next.js, TypeScript and Tailwind CSS. Deployed on Vercel.

## Editing the content

All of the text lives in [`src/content/site.ts`](src/content/site.ts): the intro, links,
experience, organizations, and each project's description, headline numbers and stack.

### Photos and resume

| What | Put the file at | Then in `site.ts` |
|---|---|---|
| Portrait | `public/images/portrait.jpg` | set `profile.portrait` to `"/images/portrait.jpg"` |
| Imagine Software | `public/images/orgs/imagine-software.jpg` | set that organization's `image` |
| MSU AI Club | `public/images/orgs/msu-ai-club.jpg` | set that organization's `image` |
| Spartan Virasat | `public/images/orgs/spartan-virasat.jpg` | set that organization's `image` |
| Resume | `public/resume.pdf` | nothing, it's already linked |

Until a photo is added, its frame shows a labeled grid placeholder.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, the same one Vercel runs
```

## Structure

```
src/content/site.ts               all text and data
src/app/page.tsx                  the page, in order: hero, experience, organizations, projects
src/app/                          layout, fonts, metadata, share image, icon
src/components/Hero.tsx           name, portrait, intro and contact links
src/components/Experience.tsx     roles as a ruled ledger
src/components/Organizations.tsx  index of teams with a photo frame that swaps on hover
src/components/Projects.tsx       spec sheets with headline numbers
```
