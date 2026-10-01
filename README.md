# CV and Photography Portfolio

This is a zero-build static website. Open `index.html` for the CV and `photography.html` for the separate photography page.

## Add your content

Your local customized portfolio data is in `site.data.js`. It is ignored because it contains personal contact information. The committed `site.js` fallback contains demo content only.

For local-only private testing, keep `site.data.js`, `site.private.js`, and `supabase-config.js` in the project folder. All three are ignored by Git and must never be committed.

The committed `site.js` contains only fallback demo content. Your local data and credentials stay outside the repository.

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
2. Upload `index.html`, `photography.html`, `styles.css`, `site.js`, `README.md`, and public assets.
3. Do not upload `site.data.js`, `site.private.js`, `supabase-config.js`, `cv.pdf`, or anything inside private folders.
4. In GitHub, open **Settings > Pages**.
5. Set the source to **Deploy from a branch**, choose `main`, and choose `/ (root)`.
6. Save and wait for GitHub to provide the public URL.

Keep the file and folder names unchanged after publishing, because the website uses relative paths.

## Important GitHub Pages privacy rule

GitHub Pages is a public website. The local Supabase configuration is ignored in this project. GitHub Pages will therefore use the demo fallback unless you configure a public frontend deployment with the Supabase publishable key. Never place a service-role key, passwords, private addresses, or sensitive documents in frontend files; visitors can download them from the browser.

## Supabase content JSON

Use `portfolio-content.json` when inserting the `site` row in Supabase. Copy the complete file contents into the `content` JSON field. Do not include `window.SITE_DATA =` or a trailing semicolon; those belong to JavaScript, not JSON.
