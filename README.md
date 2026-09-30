# CV and Photography Portfolio

This is a zero-build static website. Open `index.html` for the CV and `photography.html` for the separate photography page.

## Add your content

Your editable public portfolio content is in `site.data.js`. Both pages load this file, so it can be uploaded manually to GitHub with the rest of the project.

For local-only private testing, you can still copy `site.private.example.js` to `site.private.js`. The renderer will use `site.data.js` first, then `site.private.js` as a fallback. `site.private.js` is ignored by Git and must never be committed.

The committed `site.js` contains only fallback demo content. Remember that anything inside `site.data.js`, including your email, phone, CV, and images, becomes public when uploaded to GitHub Pages.

## Add images and the CV PDF

1. Put your profile photo in `assets/profile/`.
2. Put project screenshots in `assets/projects/`.
3. Put photography images in `assets/photography/`.
4. Put your downloadable PDF beside `index.html` and name it `cv.pdf`, or change the `cv` value in `site.data.js`.
5. Update each matching path in `site.data.js`, for example `assets/profile/me.jpg`.

Use lowercase filenames without spaces when possible. JPG, PNG, and WebP all work.

## Preview locally

From this folder, run a static server such as:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `photography.html`, `styles.css`, `site.js`, `site.data.js`, `README.md`, `cv.pdf` if you want the download button to work, and the `assets` folder.
3. In GitHub, open **Settings > Pages**.
4. Set the source to **Deploy from a branch**, choose `main`, and choose `/ (root)`.
5. Save and wait for GitHub to provide the public URL.

Keep the file and folder names unchanged after publishing, because the website uses relative paths.

## Important GitHub Pages privacy rule

GitHub Pages is a public website. The uploadable `site.data.js` is intentionally public. Never place passwords, API keys, private addresses, or sensitive documents in frontend files; visitors can download them from the browser.
