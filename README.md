# Modern Developer Portfolio

A beautiful, minimal, single-page developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern and minimal design with soft gradients
- 🎨 Clean white sections with subtle patterns
- 🚀 Smooth scrolling and animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Active navigation highlighting
- ⚡ Optimized for performance
- ♿ Accessible and SEO-friendly

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository or navigate to the project folder:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with navigation
│   └── page.tsx             # Main page
├── components/
│   ├── Navigation.tsx       # Sticky navigation with scroll detection
│   └── sections/
│       ├── Home.tsx         # Hero section
│       ├── Experience.tsx   # Work experience timeline
│       ├── About.tsx        # About me section
│       ├── Projects.tsx     # Projects showcase
│       ├── Skills.tsx       # Skills and tech stack
│       └── Contact.tsx      # Contact form and info
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Building for Production

```bash
npm run build
npm run start
```

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Built with ❤️ using modern web technologies.
