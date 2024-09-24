import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

const Post = ({ username, avatar, image, initialLikes, caption }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-md mb-4">
      <div className="flex items-center p-4">
        <img src={avatar} alt={username} className="w-8 h-8 rounded-full mr-3 object-cover" />
        <span className="font-semibold">{username}</span>
      </div>
      <img src={image} alt="Post" className="w-full h-96 object-cover" />
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <Heart
              className={`cursor-pointer ${isLiked ? 'text-red-500 fill-red-500' : 'text-blue-600'}`}
              onClick={handleLike}
            />
            <MessageCircle className="text-blue-600" />
            <Send className="text-blue-600" />
          </div>
          <Bookmark className="text-blue-600" />
        </div>
        <p className="font-semibold mb-2">{likes} likes</p>
        <p><span className="font-semibold">{username}</span> {caption}</p>
      </div>
    </div>
  );
};

export default Post;
