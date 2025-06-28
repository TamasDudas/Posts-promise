import React from 'react';

export default function Comments({ comments }) {
  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-4">
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div
            key={comment.id}
            className="mb-4 p-3 bg-white rounded border-l-4 border-blue-400"
          >
            <h4 className="text-md font-semibold mb-2">Komment #{index + 1}</h4>
            <p className="mb-1">
              <strong>Post ID:</strong> {comment.postId || 'Nincs Post ID'}
            </p>
            <p className="mb-1">
              <strong>Komment ID:</strong> {comment.id || 'Nincs ID'}
            </p>
            <p className="mb-1">
              <strong>Komment címe:</strong> {comment.name || 'Nincs cím'}
            </p>
            <p className="mb-1">
              <strong>Kommentelő email:</strong>{' '}
              {comment.email || 'Nincs email'}
            </p>
            <p className="mb-1">
              <strong>Komment tartalma:</strong>
            </p>
            <div className="bg-gray-100 p-2 rounded text-sm">
              {comment.body
                ? comment.body.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-1">
                      {line}
                    </p>
                  ))
                : 'Nincs tartalom'}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600 italic">
          Nincsenek kommentek ehhez a posthoz.
        </p>
      )}
    </div>
  );
}
