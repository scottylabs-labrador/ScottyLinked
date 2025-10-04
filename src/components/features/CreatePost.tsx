'use client';

import { useState } from 'react';
import { Image, Video, Calendar, Briefcase, Award, FileText } from 'lucide-react';
import { User } from '@/types';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';

interface CreatePostProps {
  user: User;
  onSubmit?: (content: string, type: string, visibility: string) => void;
}

export default function CreatePost({ user, onSubmit }: CreatePostProps) {
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('text');
  const [visibility, setVisibility] = useState('public');
  const [isExpanded, setIsExpanded] = useState(false);

  const postTypes = [
    { id: 'text', label: 'Text', icon: FileText, color: 'text-gray-600' },
    { id: 'project', label: 'Project', icon: Briefcase, color: 'text-blue-600' },
    { id: 'achievement', label: 'Achievement', icon: Award, color: 'text-yellow-600' },
    { id: 'job', label: 'Job', icon: Briefcase, color: 'text-green-600' },
    { id: 'event', label: 'Event', icon: Calendar, color: 'text-purple-600' },
  ];

  const visibilityOptions = [
    { id: 'public', label: 'Public', description: 'Visible to everyone' },
    { id: 'cmu-only', label: 'CMU Only', description: 'Visible to CMU students' },
    { id: 'connections', label: 'Connections', description: 'Visible to your connections' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onSubmit?.(content, postType, visibility);
      setContent('');
      setIsExpanded(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-3">
          <Avatar
            src={user.profileImage}
            name={user.name}
            size="md"
          />
          <div className="flex-1">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onFocus={() => setIsExpanded(true)}
              placeholder="What's on your mind?"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={isExpanded ? 4 : 2}
            />
            
            {isExpanded && (
              <div className="mt-3 space-y-3">
                {/* Post Type Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Post Type
                  </label>
                  <div className="flex space-x-2">
                    {postTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setPostType(type.id)}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg border transition-colors ${
                          postType === type.id
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <type.icon className="h-4 w-4" />
                        <span className="text-sm">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Visibility Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Visibility
                  </label>
                  <div className="space-y-2">
                    {visibilityOptions.map((option) => (
                      <label key={option.id} className="flex items-center space-x-3">
                        <input
                          type="radio"
                          name="visibility"
                          value={option.id}
                          checked={visibility === option.id}
                          onChange={(e) => setVisibility(e.target.value)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                        />
                        <div>
                          <span className="text-sm font-medium text-gray-900">
                            {option.label}
                          </span>
                          <p className="text-xs text-gray-500">
                            {option.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Media Options */}
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
                  >
                    <Image className="h-5 w-5" />
                    <span className="text-sm">Photo</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center space-x-2 text-gray-500 hover:text-gray-700"
                  >
                    <Video className="h-5 w-5" />
                    <span className="text-sm">Video</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {isExpanded && (
          <div className="flex items-center justify-end space-x-3 mt-4 pt-3 border-t border-gray-100">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsExpanded(false);
                setContent('');
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!content.trim()}
            >
              Post
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
