# Aaron's Blog

A modern, lightweight blog built with React and Vite, featuring a "GitHub as a CMS" architecture.

## Description
This project is a personal blog that leverages the GitHub Contents API to serve as a headless CMS. Instead of using a traditional database or a heavy CMS platform, all blog posts are written in Markdown and stored directly in the repository's `posts/` directory. The application dynamically fetches, parses, and renders these files, providing a seamless writing-to-publishing workflow through version control.

## How it's made
The application is built using a modern frontend stack designed for performance and developer experience:

- **React 19 & Vite**: The core framework and build tool, providing a fast development environment with Hot Module Replacement (HMR).
- **Tailwind CSS v4**: Utilizes the latest version of Tailwind for styling, including the new Vite plugin for zero-config integration.
- **GitHub Contents API**: A custom service (`src/services/github.js`) fetches Markdown files from GitHub. It includes a custom frontmatter parser to extract metadata like titles, dates, and descriptions.
- **Markdown Rendering**: Powered by `react-markdown` and `remark-gfm` to support GitHub Flavored Markdown, including tables and task lists.
- **Typography**: Uses `@tailwindcss/typography` to ensure markdown content is beautifully styled and readable.
- **Routing**: `react-router-dom` handles navigation between the home feed and individual post pages.
- **Deployment**: Fully automated via GitHub Actions, deploying the production build to GitHub Pages on every push to the `main` branch.

## How to download
To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kyaaron/aaron-blog.git
   cd aaron-blog
   ```

2. **Install dependencies**:
   This project uses `pnpm` for package management.
   ```bash
   pnpm install
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for production**:
   ```bash
   pnpm build
   ```

## Lessons learned
