# Professional Portfolio

This project is a starting point for your professional portfolio website built with **Next.js**, **Tailwind CSS**, MDX and other modern tools. It follows the [app directory](https://nextjs.org/docs/app/building-your-application/routing) structure introduced in Next.js 13 and is configured to output a purely static site, making it well‑suited for deployment on services like [Vercel](https://vercel.com) or AWS S3/CloudFront.

## Getting started

1. **Install dependencies** – From within the project directory, run:

   ```bash
   npm install
   ```

2. **Run the development server** – To see your site locally, run:

   ```bash
   npm run dev
   ```

   Then open [http://localhost:3000](http://localhost:3000) in your browser. You should see the hero section on the home page.

3. **Build for production** – Create an optimized, static build with:

   ```bash
   npm run build
   npm run start
   ```

   The `next build` command compiles your application into a static site stored in the `.next/` folder. When deployed to Vercel or another hosting platform, this becomes your production build.

## Key features

### ✅ MDX support

Write long‑form content and case studies using Markdown with embedded JSX. Place your files in the `content/` directory. The example `example.mdx` file demonstrates how to include frontmatter for metadata and how headings become linkable sections automatically.

### 🎨 Tailwind CSS

Tailwind provides utility‑first styles out of the box. Your global styles live in `app/globals.css`, and the Tailwind configuration is defined in `tailwind.config.js`. Feel free to extend the theme with your own colours, fonts and sizes.

### 🧱 App router

The new file‑based router introduced with the Next.js app directory powers the layout system. `app/layout.tsx` defines the root layout for every page, and `app/page.tsx` is the home page. Add new pages by creating files in the `app/` directory.

### 🔌 SEO and metadata

This starter includes [next-seo](https://github.com/garmeeh/next-seo) as a dependency. You can configure your site’s SEO settings in each page by exporting `metadata` objects. Structured data and social sharing tags can easily be added here.

### 💅 UI components

For a cohesive and elegant look, consider installing [shadcn/ui](https://ui.shadcn.com) after your initial setup:

```bash
npx shadcn-ui@latest init
```

This command will scaffold the library into your project so that you can import components like cards, buttons and more from `@/components/ui`. The hero section in `components/Hero.tsx` uses simple Tailwind classes, but you can replace or enhance it with shadcn UI components as needed.

## Project structure

```
nextjs-site/
├── app/
│   ├── layout.tsx       # Global layout and metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global CSS with Tailwind directives
├── components/
│   ├── Hero.tsx         # Hero section used on the home page
│   └── MDXComponents.tsx# Components used inside MDX
├── content/
│   └── example.mdx      # Example case study content
├── lib/
│   └── mdx.ts           # Helper functions for reading MDX files
├── next.config.mjs      # MDX configuration and Next.js settings
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── package.json         # npm dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # This file
```

## Deploying to Vercel

To deploy on [Vercel](https://vercel.com), push this repository to GitHub and create a new Vercel project from that repository. Vercel automatically detects your Next.js setup and configures the build & output settings. You can also connect to your domain and enable analytics or a contact form.

If you’d like to host on AWS S3 and CloudFront instead, run `next build` followed by `next export` to emit static HTML into the `out/` folder. Then upload that folder to S3 behind a CloudFront distribution, making sure to configure caching and security headers as described in your research plan.

---

Feel free to customise the structure, components and copy to suit your professional story. Happy building!