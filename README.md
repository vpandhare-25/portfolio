# Vivek Pandhare · Portfolio

My personal portfolio: experience, organizations and projects, on one page.

Built with Next.js, TypeScript, Tailwind CSS and Framer Motion. Deployed on Vercel.

## Editing the content

All of the text lives in [`src/content/site.ts`](src/content/site.ts): the intro, links,
experience, organizations and projects.

### Photos and resume

| What | Put the file at | Then in `site.ts` |
|---|---|---|
| Portrait | `public/images/portrait.jpg` | set `profile.portrait` to `"/images/portrait.jpg"` |
| Company logos | `public/images/logos/<name>.png` | set that job's `logo` |
| Organization photos or logos | `public/images/orgs/<name>.jpg` | set that organization's `image` |
| Project images | `public/images/projects/<name>.png` | set that project's `image` |
| Resume | `public/resume.pdf` | nothing, it's already linked |

Until an image is added, the site shows a green tile with the name's initials.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build, the same one Vercel runs
```

## Structure

```
src/content/site.ts        all text and data
src/app/page.tsx           the page: header, about, experience, organizations, projects
src/app/                   layout, metadata, share image, icon
src/components/            dark-mode toggle, section titles, logo tiles, fade-in
```
