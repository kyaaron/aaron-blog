# AGENTS.md

## Project Overview
A React + Vite + Tailwind CSS blog that uses GitHub as a CMS. Blog posts are written as Markdown files in a /posts folder in a public GitHub repo. Posts are fetched via the GitHub Contents API and rendered in the browser, sorted newest-first.

## Tech Stack
- React (via Vite)
- Tailwind CSS
- React Router DOM (client-side routing)
- react-markdown + remark-gfm (Markdown rendering)
- pnpm for node package management

## Project Structure
src/
  components/
    Header.jsx
    PostCard.jsx
    PostList.jsx
  pages/
    Home.jsx
    Post.jsx
  services/
    github.js
  App.jsx
  main.jsx
posts/          ← in GitHub repo (not in this app)
  my-first-post.md
  another-post.md

## GitHub Integration (src/services/github.js)
- Config variables at top: GITHUB_USERNAME, GITHUB_REPO, POSTS_FOLDER (posts)
- fetchPostList() — hits https://api.github.com/repos/{user}/{repo}/contents/posts, returns files sorted by filename descending (use date-prefixed filenames like 2024-04-13-my-post.md for ordering)
- fetchPostContent(filename) — fetches a single file, decodes base64 content, returns raw Markdown string
- Parse frontmatter manually or with a lightweight lib (title, date, description)

## Routing (app.jsx)
- / → Home.jsx (post list)
- /post/:slug → Post.jsx (single post view)

## Components
- PostCard.jsx — displays title, date, and description excerpt; links to /post/:slug
- PostList.jsx — maps over fetched posts, renders PostCards, handles loading/error states
- Header.jsx — blog name/logo, minimal nav

## Pages
- Home.jsx — calls fetchPostList() on mount, passes results to PostList
- Post.jsx — reads :slug from URL, calls fetchPostContent(), renders with <ReactMarkdown>

## Markdown File Conversion
---
title: My Post Title
date: 2024-04-13
description: A short summary.
---

Post body here...

- Filenames should be date-prefixed: 2024-04-13-my-post.md
- Sort post list by date field in frontmatter (or filename prefix) descending — newest post first on the homepage.

## Design
- Clean and minimal aesthetic
- Tailwind utility classes only — no custom CSS files
- Responsive layout (mobile-first)
- Simple typography: large post titles, muted metadata, generous whitespace

## Environment
- No .env needed for a public repo
- Vite config should have base set correctly if deploying to GitHub Pages (set base in vite.config.js)

## Separation of Concerns
All GitHub API logic lives exclusively in src/services/github.js — components never call the API directly
Components only handle rendering; pages handle data fetching

## Configuration in One Place
GITHUB_USERNAME, GITHUB_REPO, and POSTS_FOLDER defined once at the top of github.js — easy to swap repos without hunting through code

## Error Boundaries
Handle loading, error, and empty states explicitly in every data-fetching component — never assume the API succeeds

## Caching
Cache fetched post list and post content in memory (a simple JS object/Map in github.js) so navigating back to the homepage doesn't re-hit the API unnecessarily

## Single Responsibility
Each component does one thing: PostCard displays a post preview, PostList renders a list, Header is navigation — no god components

## URL-driven State
Post identity lives in the URL slug, not in React state — so posts are shareable and deep-linkable, and the browser back button works naturally

## Consistent Data Shape
fetchPostList() always returns the same normalized shape { slug, title, date, description } — pages never parse raw API responses themselves

## Scalability Consideration
Date-prefixed filenames (2024-04-13-my-post.md) mean sorting never requires an extra API call — it's derivable from the filename alone