import React from 'react';
import UserDetails from './UserDetails';
import Comments from './Comments';

export default function PostCard({ getPostsData }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Összes adat</h1>
      {getPostsData.map((getPost) => (
        <div key={getPost.id}>
          <h2 className="text-2xl font-bold mb-2">
            Post Címe: {getPost.title}
          </h2>
          <p className="mb-2">Tartalom: {getPost.body}</p>
          <p className="mb-2">Post ID: {getPost.id}</p>
          <p>Szerző ID: {getPost.userId}</p>

          <h3 className="text-xl font-bold mt-6 mb-3">Szerző teljes adatai</h3>

          <UserDetails user={getPost.user} />

          <h3 className="text-xl font-bold mt-6 mb-3">Kommentek</h3>

          <Comments comments={getPost.comments} />

          <hr className="my-6 border-2 border-gray-300" />
        </div>
      ))}
    </div>
  );
}
