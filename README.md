# Karl Onugha — Portfolio

A personal portfolio site for Karl Onugha, IT Operations & Cloud Engineer. Built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React** — UI components
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icon library

## Features

- **Hero** — intro with availability status and call-to-action links
- **About** — background summary
- **Skills** — categorised skill grid (Cloud, Networking, Systems, Development)
- **Projects** — featured project cards with live/GitHub links
- **Contact** — contact info panel and a Formspree-powered contact form

## Contact Form

The contact form (`src/components/Contact.jsx`) submits via [Formspree](https://formspree.io). To activate it:

1. Sign up at [formspree.io](https://formspree.io) and create a new form
2. Copy your form endpoint URL
3. Replace `YOUR_FORM_ID` in `Contact.jsx`:

```js
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'
```

The form includes:
- Controlled inputs with client-side `required` validation
- Loading state with spinner during submission
- Success state with confirmation message and option to send another
- Error state with inline alert and fallback prompt to email directly

The email button opens in a new tab (`window.open`) rather than redirecting the current page.

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
