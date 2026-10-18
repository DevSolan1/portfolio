# Solan Abate – Personal Portfolio

A static personal portfolio for **Solan Abate**, Software Engineering student at Dembi Dollo University and full-stack developer. Plain HTML, Tailwind CSS (CDN) and vanilla JavaScript. No build step, no npm, no backend.

## Folder structure

```
/index.html            Main page
/404.html              Page-not-found page for GitHub Pages
/README.md
/.nojekyll             Tells GitHub Pages to skip Jekyll
/.gitignore
/assets/css/styles.css Theme variables and small reusable classes
/assets/js/content.js  All editable content (window.SITE)
/assets/js/main.js     Behavior: rendering, theme, menu, reveal, copy email
/assets/img/favicon.svg
/assets/img/pro1.jpg   Profile photo (add your own)
/assets/Resume.pdf     Resume (add your own)
```

## Editing content

Open `assets/js/content.js`. Change `name`, `email`, `github`, `linkedin`, `resume`, the `skills` object (category -> list) or the `projects` array. Each project has `title`, `status` ("Completed" | "In Progress" | "Learning Project"), `description`, `problem`, `features`, `tech`, `repo`, `demo`, `image`. Leave `repo` or `demo` as `""` to hide that button.

## Run locally

```
python -m http.server 8080
```

Then open http://localhost:8080. You can also just open `index.html` directly.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (for example `portfolio`, or `DevSolan1.github.io` for a user site).
2. Upload all files, keeping the exact folder names and letter case.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
5. Wait a minute, then open `https://devsolan1.github.io/portfolio/` (or `https://devsolan1.github.io/` for a user site).
6. In `404.html`, set `var BASE` to `"/portfolio/"` (your repo name) or `"/"` for a user site.

## Checklist before publishing

- [ ] Add your photo as `assets/img/pro1.jpg` (exact lowercase name)
- [ ] Add your resume as `assets/Resume.pdf` (capital R)
- [ ] Set `BASE` in `404.html` to match your repository name
- [ ] Add the portfolio `repo` and `demo` links in `content.js` once published
