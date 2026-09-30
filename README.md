# CV and Photography Portfolio

This is a zero-build static website. Open `index.html` for the CV and `photography.html` for the separate photography page.

## Add your content

For local editing, copy `site.private.example.js` to `site.private.js` and replace its values. The two pages will use that local file automatically. `site.private.js` is ignored by Git and must never be committed.

The committed `site.js` contains only fallback demo content so the public project remains safe if the private file is absent. Remember that any information rendered by GitHub Pages is public. Use a public email or contact form instead of a private phone number or home address.

## Add images and the CV PDF

1. Put your profile photo in `assets/profile/`.
2. Put project screenshots in `assets/projects/`.
3. Put photography images in `assets/photography/`.
4. Put your downloadable PDF beside `index.html` and name it `cv.pdf`, or change the `cv` value in `site.private.js`.
5. Update each matching path in `site.private.js`, for example `assets/profile/me.jpg`.

Use lowercase filenames without spaces when possible. JPG, PNG, and WebP all work.

## Preview locally

From this folder, run a static server such as:

```powershell
py -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `photography.html`, `styles.css`, `site.js`, `README.md`, and the public `assets` folder. Do not upload `site.private.js`.
3. In GitHub, open **Settings > Pages**.
4. Set the source to **Deploy from a branch**, choose `main`, and choose `/ (root)`.
5. Save and wait for GitHub to provide the public URL.

Keep the file and folder names unchanged after publishing, because the website uses relative paths.

## Important GitHub Pages privacy rule

GitHub Pages is a public website. An ignored file is not uploaded, so `site.private.js` cannot provide your personal content on the published site. Before publishing, put only information you intentionally want public into the committed `site.js` fallback, or use a separate public data file. Never place passwords, API keys, private addresses, or sensitive documents in frontend files; visitors can download them from the browser.
