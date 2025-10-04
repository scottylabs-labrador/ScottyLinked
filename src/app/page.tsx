'use client';

import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CreatePost from '@/components/features/CreatePost';
import PostCard from '@/components/features/PostCard';
import ProjectCard from '@/components/features/ProjectCard';
import { mockUser, mockPosts, mockProjects } from '@/lib/mockData';

export default function Home() {
  const [posts] = useState(mockPosts);
  const [featuredProjects] = useState(mockProjects.slice(0, 3));

  const handleCreatePost = (content: string, type: string, visibility: string) => {
    console.log('Creating post:', { content, type, visibility });
    // In a real app, this would make an API call
  };

  const handleLike = (postId: string) => {
    console.log('Liking post:', postId);
    // In a real app, this would make an API call
  };

  const handleComment = (postId: string) => {
    console.log('Commenting on post:', postId);
    // In a real app, this would open a comment modal or focus the comment input
  };

  const handleShare = (postId: string) => {
    console.log('Sharing post:', postId);
    // In a real app, this would open a share modal
  };

  const handleJoinProject = (projectId: string) => {
    console.log('Joining project:', projectId);
    // In a real app, this would make an API call
  };

  const handleViewProject = (projectId: string) => {
    console.log('Viewing project:', projectId);
    // In a real app, this would navigate to the project page
  };

  return (
    <Layout user={mockUser}>
      <div className="max-w-4xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] rounded-lg p-6 mb-6 text-white">
          <h1 className="text-2xl font-bold mb-2">
            Welcome back, {mockUser.name}! 👋
          </h1>
          <p className="text-blue-100">
            Discover new projects, connect with fellow CMU students, and build something amazing together.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onJoin={handleJoinProject}
                onView={handleViewProject}
              />
            ))}
          </div>
        </div>

        {/* Create Post */}
        <CreatePost user={mockUser} onSubmit={handleCreatePost} />

        {/* Posts Feed */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onLike={handleLike}
              onComment={handleComment}
              onShare={handleShare}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </Layout>
  );
}