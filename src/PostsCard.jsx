import React from 'react';

export default function PostsCard({ getPostsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {getPostsData.map((getPost) => (
        <div
          key={getPost.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
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
        </div>
      ))}
    </div>
  );
}
