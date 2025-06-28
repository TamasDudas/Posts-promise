import React from 'react';
import { useParams, Link } from 'react-router-dom';
import UserDetails from './UserDetails';
import Comments from './Comments';

export default function PostCard({ getPostsData }) {
  const params = useParams();
  console.log('useParams tartalmaz:', params);
  const { id } = useParams();
  const postId = parseInt(id);

  // Csak az adott ID-jú post szűrése
  const selectedPost = getPostsData.find((post) => post.id === postId);

  if (!selectedPost) {
    return (
      <div className="p-4">
        <Link
          to="/"
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors inline-block text-decoration-none"
        >
          ← Vissza a postokhoz
        </Link>
        <div className="text-center text-red-500">Post nem található!</div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Link
        to="/"
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors inline-block text-decoration-none"
      >
        ← Vissza a postokhoz
      </Link>

      <h1 className="text-3xl font-bold mb-4">Post részletei:</h1>

      <div key={selectedPost.id}>
        <h2 className="text-2xl font-bold mb-2">
          Post Címe: {selectedPost.title}
        </h2>
        <p className="mb-2">Tartalom: {selectedPost.body}</p>
        <p className="mb-2">Post ID: {selectedPost.id}</p>
        <p>Szerző ID: {selectedPost.userId}</p>

        <h3 className="text-xl font-bold mt-6 mb-3">Szerző teljes adatai</h3>
        <UserDetails user={selectedPost.user} />

        <h3 className="text-xl font-bold mt-6 mb-3">Kommentek</h3>
        <Comments comments={selectedPost.comments} />
      </div>
    </div>
  );
}
