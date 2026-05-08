# Abhinav Portfolio

Static portfolio for Abhinav Naidu Chintala, built with Astro and Tailwind CSS.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

The site builds to `dist/` and can be hosted on Cloudflare Pages, Vercel, Netlify, or GitHub Pages.

### Vercel

Deploy the latest local version to production:

```bash
npm run build
npx vercel --prod
```

If this is the first deploy, Vercel may ask for project settings:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
Install command: npm install
```

For a prebuilt deploy:

```bash
npx vercel build --prod
npx vercel deploy --prebuilt --prod
```

If Vercel blocks deployment because of the Git commit author email, set the repo email and amend the latest commit:

```bash
git config user.name "Abhinav Naidu Chintala"
git config user.email "abhinavch53@gmail.com"
git commit --amend --reset-author --no-edit
git push --force-with-lease
```
