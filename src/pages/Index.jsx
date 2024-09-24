import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Story from '../components/Story';

const Index = () => {
  const stories = [
    { id: 1, username: 'user1', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, username: 'user2', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, username: 'user3', avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  const posts = [
    { id: 1, username: 'john_doe', avatar: 'https://i.pravatar.cc/150?img=4', image: 'https://source.unsplash.com/random/800x600?sig=1', likes: 123, caption: 'Beautiful day!' },
    { id: 2, username: 'jane_smith', avatar: 'https://i.pravatar.cc/150?img=5', image: 'https://source.unsplash.com/random/800x600?sig=2', likes: 456, caption: 'Amazing view!' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex space-x-4 overflow-x-auto pb-4 mb-8">
          {stories.map(story => (
            <Story key={story.id} username={story.username} avatar={story.avatar} />
          ))}
        </div>
        <div className="space-y-8">
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
