import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <article className="py-10 first:pt-0 last:border-b-0 border-b border-gray-100 group">
      <Link to={`/post/${post.slug}`} className="block">
        <div className="flex flex-col gap-2">
          <time className="text-sm text-gray-400 font-medium">{post.date}</time>
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
            {post.title}
          </h2>
          {post.description && (
            <p className="text-gray-600 leading-relaxed max-w-2xl mt-2 line-clamp-3">
              {post.description}
            </p>
          )}
          <div className="mt-4 text-indigo-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Read more <span>&rarr;</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
