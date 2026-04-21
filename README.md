# Karl Onugha — Portfolio

A personal portfolio site for Karl Onugha, Cloud-Focused Developer. Built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React** — UI components
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icon library

## Features

- **Hero** — intro with availability status and call-to-action links
- **About** — background summary
- **Skills** — categorised skill grid (Cloud, Networking, Systems, Development)
- **Projects** — featured project cards with live/GitHub links:
  - **KaliscoRush — Food Delivery Platform** (`🍔`) — full-stack food delivery app (React + Express + PostgreSQL) deployed on AWS (Elastic Beanstalk, S3, CloudFront, RDS). Live at [d3801nx5humfo6.cloudfront.net](https://d3801nx5humfo6.cloudfront.net) with source at [karlonugha/Kiro_Projects](https://github.com/karlonugha/Kiro_Projects)
  - **Cloud Task Manager API** (`☁️`) — RESTful task management API live at `http://3.249.216.92:3000` with source at [karlonugha/cloud-task-manager-api](https://github.com/karlonugha/cloud-task-manager-api)
- **Contact** — contact info panel and a Formspree-powered contact form

## Contact Form

The contact form (`src/components/Contact.jsx`) submits via [Formspree](https://formspree.io). The endpoint is configured and active. To swap it out, update the `FORMSPREE_URL` constant in `Contact.jsx` with a different Formspree form ID.

The form includes:
- Controlled inputs with client-side `required` validation
- Loading state with spinner during submission
- Success state with confirmation message and option to send another
- Error state with inline alert and fallback prompt to email directly

The email button opens in a new tab (`window.open`) rather than redirecting the current page.

## Social Sharing / SEO

`index.html` includes Open Graph and Twitter Card meta tags so the site renders a rich preview when shared on LinkedIn, Twitter/X, and other platforms. The tags reference:

- **Title**: Karl Onugha | Cloud-Focused Developer
- **Description**: Cloud-focused developer building and deploying applications using Node.js and AWS
- **Image**: `/og-image.png` (served from the deployed site root)
- **URL**: `https://portfolio-topaz-psi-82.vercel.app`

To update the preview content, edit the `<meta>` tags in `index.html`.

### OG Image Generator

`generate-og-image.html` is a standalone HTML utility that renders the OG image on a `<canvas>` (1200×630) and lets you download it as PNG. Open the file in a browser, click **Download as PNG**, and place the resulting `og-image.png` in the `public/` directory so Vite serves it at the site root. Re-run the generator whenever you change your name, title, tech tags, or tagline.

### SVG to PNG Converter

`convert-og.js` is a Node.js script that uses Puppeteer to convert `public/og-image.svg` into a 1200×630 PNG at `public/og-image.png`. This is useful when the OG image source is an SVG file rather than the canvas-based HTML generator.

```bash
# Requires puppeteer (install if not already present)
npm install puppeteer

# Run the converter
node convert-og.js
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
  components/     # Page sections (Hero, About, Skills, Projects, Contact, Footer)
  data/
    portfolio.js  # All content — personal info, skills, projects, experience, education
  App.jsx
  main.jsx
```

All site content (name, links, projects, skills, etc.) is centralised in `src/data/portfolio.js`.
