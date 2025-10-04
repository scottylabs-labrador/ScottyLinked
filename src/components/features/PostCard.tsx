'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, ThumbsUp } from 'lucide-react';
import { Post } from '@/types';
import { formatRelativeTime } from '@/lib/utils';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';

interface PostCardProps {
  post: Post;
  onLike?: (postId: string) => void;
  onComment?: (postId: string) => void;
  onShare?: (postId: string) => void;
}

export default function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(post.id);
  };

  const handleComment = () => {
    setShowComments(!showComments);
    onComment?.(post.id);
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'project':
        return '🚀';
      case 'achievement':
        return '🏆';
      case 'job':
        return '💼';
      case 'event':
        return '📅';
      default:
        return '📝';
    }
  };

  const getPostTypeColor = (type: string) => {
    switch (type) {
      case 'project':
        return 'bg-blue-100 text-blue-800';
      case 'achievement':
        return 'bg-yellow-100 text-yellow-800';
      case 'job':
        return 'bg-green-100 text-green-800';
      case 'event':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <Avatar
            src={post.author.profileImage}
            name={post.author.name}
            size="md"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {post.author.name}
              </h3>
              {post.author.isVerified && (
                <span className="text-blue-500 text-xs">✓</span>
              )}
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPostTypeColor(post.type)}`}>
                {getPostTypeIcon(post.type)} {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {post.author.headline}
            </p>
            <p className="text-xs text-gray-400">
              {formatRelativeTime(post.createdAt)}
            </p>
          </div>
        </div>
        <button className="p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-900 whitespace-pre-wrap">
          {post.content}
        </p>
        {post.images && post.images.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </div>

      {/* Post Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
        <div className="flex items-center space-x-4">
          <span>{post.likes.length} likes</span>
          <span>{post.comments.length} comments</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs">
            {post.visibility === 'public' ? 'Public' : 
             post.visibility === 'connections' ? 'Connections only' : 
             'CMU only'}
          </span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex items-center justify-between border-t border-gray-100 pt-3">
        <div className="flex items-center space-x-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`flex items-center space-x-2 ${isLiked ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
          >
            <ThumbsUp className="h-4 w-4" />
            <span>Like</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleComment}
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Comment</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onShare?.(post.id)}
            className="flex items-center space-x-2 text-gray-500 hover:text-blue-600"
          >
            <Share className="h-4 w-4" />
            <span>Share</span>
          </Button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && post.comments.length > 0 && (
        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="space-y-3">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-3">
                <Avatar
                  src={comment.author.profileImage}
                  name={comment.author.name}
                  size="sm"
                />
                <div className="flex-1 min-w-0">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-sm font-semibold text-gray-900">
                        {comment.author.name}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {formatRelativeTime(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">
                      {comment.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Add Comment */}
          <div className="mt-4 flex items-center space-x-3">
            <Avatar
              src={post.author.profileImage}
              name={post.author.name}
              size="sm"
            />
            <div className="flex-1">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <Button size="sm">Post</Button>
          </div>
        </div>
      )}
    </div>
  );
}
