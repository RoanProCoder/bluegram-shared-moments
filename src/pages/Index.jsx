import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Story from '../components/Story';

const generateRandomPosts = (count) => {
  const posts = Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    username: `user${index + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${index + 1}`,
    image: `https://picsum.photos/800/600?random=${index + 1}`,
    likes: Math.floor(Math.random() * 1000),
    caption: `This is a random caption for post ${index + 1}!`
  }));

  // Replace the second post (index 1) with a news-related post
  posts[1] = {
    id: 2,
    username: 'user2',
    avatar: 'https://i.pravatar.cc/150?img=2',
    image: 'https://picsum.photos/800/600?random=news',
    likes: Math.floor(Math.random() * 1000),
    caption: 'Breaking News: Scientists discover a new species of deep-sea creature in the Mariana Trench!'
  };

  return posts;
};

const generateRandomStories = (count) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    username: `user${index + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${index + 1}`
  }));
};

const Index = () => {
  const stories = generateRandomStories(10); // Generate 10 random stories
  const posts = generateRandomPosts(10); // Generate 10 random posts

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
