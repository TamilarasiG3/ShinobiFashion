# ShinobiFashion website

A static site (HTML, CSS, JavaScript). No build step and no database.

## Run it
Open `index.html` in a browser, or host the whole folder on any static host (Netlify, GitHub Pages, Vercel).

## Files
- `index.html` : all pages (Home, Blog, About, Community, Contact, Privacy, Terms)
- `css/style.css` : styles and colours (variables at the top)
- `js/data.js` : **edit this to update content**: social links, voting characters, products, blog posts
- `js/app.js` : navigation, voting, product cards, contact form

## Update products
In `js/data.js`, edit the `PRODUCTS` list. Each product has `name`, `anime`, `char`, `n` (text shown on the image), `price` (number or `null`), `desc`, `url` (your blog or affiliate link) and `img` (a photo URL you are allowed to use; leave `""` to show the drawn tee).

## Notes
- The site is an affiliate site: no checkout, no payments.
- Votes are stored in each visitor's own browser (localStorage), not shared.
- The contact form opens the visitor's email app (mailto). A real form service needs a backend.
- Privacy Policy and Terms pages are placeholders. Replace them with your own text.
