"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface LikeButtonProps {
  postId: string;
}

export default function LikeButton({ postId }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(125);

  useEffect(() => {
    const saved = localStorage.getItem(`liked-${postId}`);

    if (saved === "true") {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  }, [postId]);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes((prev) => prev - 1);
      localStorage.setItem(`liked-${postId}`, "false");
    } else {
      setLiked(true);
      setLikes((prev) => prev + 1);
      localStorage.setItem(`liked-${postId}`, "true");
    }
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 rounded-full border px-5 py-3 transition hover:bg-red-50 dark:hover:bg-red-900/20"
    >
      <Heart
        size={20}
        className={liked ? "fill-red-500 text-red-500" : "text-gray-500"}
      />

      <span className="font-medium">{likes}</span>
    </button>
  );
}