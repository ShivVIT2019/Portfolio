# Atchyut Portfolio

Personal portfolio website showcasing ML engineering projects, hackathons, and experience.

**Live site:** https://portfolio-nine-rho-36.vercel.app

## Where the content lives

All text on the site (projects, hackathons, experience, skills) is in **`src/App.jsx`**, in the `projects`, `experience`, and `skills` arrays near the top of the file. The page title and search description are in `index.html`.

## Updating the site

Every merge to `main` deploys to production automatically on Vercel. Changes go through a pull request first, so you can check a preview before anything goes live.

```bash
# 1. Start from the latest main
git switch main && git pull

# 2. Make your edits in src/App.jsx (or index.html), then check the build
npm run build

# 3. Create a branch and commit only the files you changed
git checkout -b update-portfolio
git add src/App.jsx index.html
git commit -m "Describe the change"
git push -u origin update-portfolio

# 4. Open a pull request
gh pr create --title "Describe the change" --body "What changed and why"
```

5. On the pull request page, open the **Vercel Preview** link and check the site.
6. Merge it:

```bash
gh pr merge --squash --delete-branch && git switch main && git pull
```

7. Confirm the production deploy finished (look for `"state": "success"`):

```bash
gh api repos/ShivVIT2019/Portfolio/commits/$(git rev-parse HEAD)/status --jq '.statuses[] | {context, state}'
```

Then open the live site and refresh with `Cmd+Shift+R`.

> Avoid `git add .` in this folder: add only the files you changed.

## Local development

```bash
npm install       # install dependencies
npm run dev       # start the dev server
npm run build     # build for production
npm run preview   # preview the production build
```

## Project structure
portfolio-deployment/
├── src/
│ ├── App.jsx # All site content and layout
│ ├── main.jsx # React entry point
│ └── index.css # Global styles
├── index.html # Page title and description
├── package.json # Dependencies
├── vite.config.js # Vite configuration
└── tailwind.config.js # Tailwind configuration

## First-time setup

Setting up a new Vercel project from scratch is covered step by step in [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md).

## Technologies

- React 18
- Vite
- Tailwind CSS
- Lucide React Icons
- Deployed on Vercel

---

Built by Sivasai Atchyut Akella | [GitHub](https://github.com/ShivVIT2019) | [LinkedIn](https://www.linkedin.com/in/atchyut/)
