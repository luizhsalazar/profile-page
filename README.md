# Developer Portfolio Website

A modern, dark-themed single-page portfolio website built with React and Tailwind CSS, following a comprehensive design system.

## Features

- **Hero Section**: Full viewport height with gradient background, professional photo placeholder, and technology icons
- **About Section**: Service offerings sidebar with stat cards showcasing experience
- **Projects Section**: Alternating layout project cards with technology tags
- **Contact Section**: Contact form with footer and social links
- **Responsive Design**: Mobile-first approach with breakpoints at 640px, 768px, 1024px, and 1280px
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Modern UI**: Dark theme with coral accent colors, gradients, and subtle animations

## Design System

The website follows a comprehensive design system defined in `design.json`, featuring:

- **Color Palette**: Dark navy backgrounds with coral (#FF6B6B) and orange (#FF8A4C) accents
- **Typography**: Inter font family with clear hierarchy
- **Spacing**: Consistent spacing scale from 4px to 128px
- **Components**: Reusable button styles, cards, tags, and form inputs

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment to platforms like Netlify, Vercel, or GitHub Pages.

## Customization

### Personal Information

Update the following files to customize with your information:

- **Hero Section** (`src/components/Hero.js`): Change name, title, and technology icons
- **About Section** (`src/components/About.js`): Update the about text and statistics
- **Projects Section** (`src/components/Projects.js`): Replace with your actual projects
- **Contact Section** (`src/components/Contact.js`): Update footer name and social links

### Colors

All colors are defined in the Tailwind configuration file (`tailwind.config.js`). Modify the `theme.extend.colors` section to change the color scheme.

### Images

Replace the placeholder SVG in the Hero section with your actual professional photo. Update the project image placeholders with real screenshots or mockups.

## Project Structure

```
profile-page/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── design.json
└── package.json
```

## Technologies Used

- React 18.2.0
- Tailwind CSS 3.3.6
- Inter Font Family (Google Fonts)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.
