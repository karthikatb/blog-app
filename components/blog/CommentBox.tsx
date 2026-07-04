"use client";

import { useEffect, useState } from "react";

interface Comment {
  id: number;
  name: string;
  message: string;
}

export default function CommentBox({
  postId,
}: {
  postId: string;
}) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(`comments-${postId}`);
    if (saved) {
      setComments(JSON.parse(saved));
    }
  }, [postId]);

  const addComment = () => {
    if (!name.trim() || !message.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
    };

    const updated = [...comments, newComment];

    setComments(updated);
    localStorage.setItem(
      `comments-${postId}`,
      JSON.stringify(updated)
    );

    setName("");
    setMessage("");
  };

  return (
    <div className="mt-16 rounded-2xl bg-gray-900 p-8 shadow-lg text-white">
      <h2 className="mb-6 text-3xl font-bold text-white">
        Comments ({comments.length})
      </h2>

      <input
        className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        rows={5}
        className="mb-4 w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Write your comment..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={addComment}
        className="rounded-lg bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700"
      >
        Post Comment
      </button>

      <div className="mt-8">
        {comments.length === 0 ? (
          <p className="text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="mb-4 rounded-lg border border-gray-700 bg-gray-800 p-4"
            >
              <h3 className="font-bold text-white">{comment.name}</h3>
              <p className="mt-2 text-gray-300">{comment.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}