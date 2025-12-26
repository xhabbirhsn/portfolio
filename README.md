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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Home Section** (`components/sections/Home.tsx`):
   - Update your name, title, and introduction
   - Change social media links (GitHub, LinkedIn, email)

2. **Experience Section** (`components/sections/Experience.tsx`):
   - Add/edit your work experience
   - Update job titles, companies, and achievements

3. **About Section** (`components/sections/About.tsx`):
   - Write your personal bio
   - Update values and passions

4. **Projects Section** (`components/sections/Projects.tsx`):
   - Add your projects with descriptions
   - Update tech stacks and links

5. **Skills Section** (`components/sections/Skills.tsx`):
   - Update skill levels and categories
   - Add/remove technologies

6. **Contact Section** (`components/sections/Contact.tsx`):
   - Update contact information
   - Configure form submission (connect to API/service)

### Color Scheme

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  primary: {
    // Your custom primary colors
  },
  accent: {
    // Your custom accent colors
  },
}
```

### Metadata

Update SEO information in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer",
  description: "Your description",
  keywords: ["your", "keywords"],
};
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

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## Performance Optimizations

- Server-side rendering with Next.js 15
- Optimized animations with Framer Motion
- Lazy loading for sections
- Minimal JavaScript bundle
- Custom scrollbar styling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own portfolio!

## Credits

Built with ❤️ using modern web technologies.
