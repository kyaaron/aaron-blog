/**
 * GitHub Integration Service
 * Fetches and parses Markdown posts from a GitHub repository using the Contents API.
 */

const GITHUB_USERNAME = 'kyaaron'; 
const GITHUB_REPO = 'aaron-blog'; 
const POSTS_FOLDER = 'posts';

const cache = {
  postList: null,
  posts: new Map(),
};

/**
 * Parses simple YAML frontmatter from a Markdown string.
 * Returns { frontmatter: {}, body: "" }
 */
function parseFrontmatter(text) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = text.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, body: text };
  }

  const [, yamlStr, body] = match;
  const frontmatter = {};

  // Simple key-value parser for frontmatter
  yamlStr.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > -1) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      // Basic cleanup for quoted strings
      frontmatter[key] = value.replace(/^['"](.*)['"]$/, '$1');
    }
  });

  return { frontmatter, body };
}

/**
 * Decodes a base64 string including UTF-8 characters.
 */
function decodeBase64(str) {
  // Replace newlines which GitHub API might include in base64
  const cleanedStr = str.replace(/\s/g, '');
  try {
    // Correctly handle UTF-8 characters in base64
    return decodeURIComponent(
      atob(cleanedStr)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  } catch (e) {
    console.error('Base64 decode failed:', e);
    // Fallback to simple atob if UTF-8 decode fails
    return atob(cleanedStr);
  }
}

/**
 * Fetches the list of posts from GitHub.
 * Files should be named with a date prefix like YYYY-MM-DD-title.md
 */
export async function fetchPostList() {
  if (cache.postList) return cache.postList;

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${POSTS_FOLDER}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch posts from GitHub: ${response.statusText}`);
    }

    const files = await response.json();

    // Filter for markdown files and sort by name descending (newest first)
    const posts = files
      .filter((file) => file.name.endsWith('.md'))
      .sort((a, b) => b.name.localeCompare(a.name))
      .map((file) => {
        const slug = file.name.replace('.md', '');
        return {
          slug,
          name: file.name,
          path: file.path,
        };
      });

    cache.postList = posts;
    return posts;
  } catch (error) {
    console.error('Error fetching post list:', error);
    throw error;
  }
}

/**
 * Fetches and parses a single post's content and frontmatter.
 */
export async function fetchPostContent(slug) {
  if (cache.posts.has(slug)) return cache.posts.get(slug);

  try {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USERNAME}/${GITHUB_REPO}/contents/${POSTS_FOLDER}/${slug}.md`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch post: ${slug}`);
    }

    const data = await response.json();
    
    // Use browser-native decoding
    const rawContent = decodeBase64(data.content);
    
    // Parse frontmatter manually
    const { frontmatter, body } = parseFrontmatter(rawContent);

    const post = {
      slug,
      title: frontmatter.title || slug.split('-').slice(3).join(' ') || slug,
      date: frontmatter.date || slug.split('-').slice(0, 3).join('-'),
      description: frontmatter.description || '',
      content: body,
    };

    cache.posts.set(slug, post);
    return post;
  } catch (error) {
    console.error(`Error fetching post content for ${slug}:`, error);
    throw error;
  }
}
