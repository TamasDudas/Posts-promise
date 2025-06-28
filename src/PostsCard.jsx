import React from 'react';
import { Link } from 'react-router-dom';

export default function PostsCard({ getPostsData }) {
  return (
    <>
      <h1 className="text-2xl font-bold my-6 text-center">
        Posztok megjelenítése
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {getPostsData.map((getPost) => (
          <Link
            key={getPost.id}
            to={`/post/${getPost.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer hover:bg-gray-50 text-decoration-none"
          >
            <div className="flex flex-col gap-2 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="font-medium">Post ID: </span>
                <span className="ml-1">#{getPost.id}</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium whitespace-nowrap">Title: </span>
                <span className="ml-1">{getPost.title}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Author: </span>
                <span className="ml-1">
                  {getPost.user?.name || 'Ismeretlen szerző'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
