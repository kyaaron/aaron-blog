import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts, loading, error }) => {
  if (loading) {
    return (
      <div className="py-20 flex justify-center">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <p className="text-red-500 font-medium">Failed to load posts. Please try again later.</p>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="py-20 text-center text-gray-500">
        No posts found yet. Check back soon!
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 divide-y divide-gray-100">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostList;
