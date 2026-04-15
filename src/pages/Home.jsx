import React, { useState, useEffect } from 'react';
import { fetchPostList, fetchPostContent } from '../services/github';
import PostList from '../components/PostList';
import Header from '../components/Header';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        const postList = await fetchPostList();
        
        // Fetch each post's content to get frontmatter (title, date, description)
        const postsWithDetails = await Promise.all(
          postList.map(async (p) => {
            try {
              return await fetchPostContent(p.slug);
            } catch (err) {
              console.error(`Failed to load details for ${p.slug}`, err);
              return null;
            }
          })
        );

        // Filter out any that failed and sort by date descending
        const sortedPosts = postsWithDetails
          .filter(p => p !== null)
          .sort((a, b) => new Date(b.date) - new Date(a.date));

        setPosts(sortedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Recent Writing
          </h1>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            My personal blog exploring technology, software development, AI, and more.
          </p>
        </div>
        <PostList posts={posts} loading={loading} error={error} />
      </main>
    </div>
  );
};

export default Home;
