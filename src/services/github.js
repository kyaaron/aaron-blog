import matter from 'gray-matter';
import { Buffer } from 'buffer';

const GITHUB_USERNAME = 'kyaaron'; // TODO: Update with actual username
const GITHUB_REPO = 'aaron-blog'; // TODO: Update with actual repo
const POSTS_FOLDER = 'posts';

const cache = {
  postList: null,
  posts: new Map(),
};

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
      throw new Error('Failed to fetch posts from GitHub');
    }

    const files = await response.json();

    // Filter for markdown files and sort by name descending (newest first)
    const posts = files
      .filter((file) => file.name.endsWith('.md'))
      .sort((a, b) => b.name.localeCompare(a.name))
      .map((file) => {
        // Basic slug from filename
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
    // GitHub API returns content as base64
    const content = Buffer.from(data.content, 'base64').toString('utf8');
    
    // Parse frontmatter
    const { data: frontmatter, content: body } = matter(content);

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
