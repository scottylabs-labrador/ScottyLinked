'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  User, 
  Users, 
  Briefcase, 
  BookOpen, 
  Calendar, 
  Star,
  TrendingUp,
  Plus,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  user?: {
    name: string;
    profileImage?: string;
    headline: string;
    connections: number;
  };
}

export default function Sidebar({ user }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['recent']));

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const recentItems = [
    { name: 'Machine Learning Projects', type: 'group', members: 12 },
    { name: 'Web Development', type: 'hashtag', posts: 45 },
    { name: 'CMU Robotics Club', type: 'group', members: 89 },
    { name: 'Startup Ideas', type: 'hashtag', posts: 23 },
  ];

  const groups = [
    { name: 'CMU Computer Science', members: 1200, isJoined: true },
    { name: 'CMU Robotics Club', members: 89, isJoined: true },
    { name: 'CMU Entrepreneurship', members: 456, isJoined: false },
    { name: 'CMU Design', members: 234, isJoined: false },
  ];

  const events = [
    { name: 'Tech Career Fair', date: 'Mar 15', attendees: 500 },
    { name: 'Hackathon 2024', date: 'Apr 2', attendees: 200 },
    { name: 'Startup Pitch Night', date: 'Apr 10', attendees: 150 },
  ];

  return (
    <aside className="w-80 bg-white border-r border-gray-200 h-full overflow-y-auto custom-scrollbar">
      <div className="p-4 space-y-6">
        {/* User Profile Card */}
        {user && (
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              {user.profileImage ? (
                <img
                  src={user.profileImage}
                  alt={user.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate">
                  {user.name}
                </h3>
                <p className="text-xs text-gray-500 truncate">
                  {user.headline}
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-500">
              {user.connections} connections
            </div>
          </div>
        )}

        {/* Recent Activity */}
        <div>
          <button
            onClick={() => toggleSection('recent')}
            className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-700 hover:text-gray-900 mb-2"
          >
            <span>Recent</span>
            <ChevronRight 
              className={cn(
                "h-4 w-4 transition-transform",
                expandedSections.has('recent') && "rotate-90"
              )}
            />
          </button>
          {expandedSections.has('recent') && (
            <div className="space-y-2">
              {recentItems.map((item, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    {item.type === 'group' ? (
                      <Users className="h-4 w-4 text-blue-500" />
                    ) : (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    )}
                    <span className="text-sm text-gray-700 truncate">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {item.type === 'group' ? item.members : item.posts}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Groups */}
        <div>
          <button
            onClick={() => toggleSection('groups')}
            className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-700 hover:text-gray-900 mb-2"
          >
            <span>Groups</span>
            <ChevronRight 
              className={cn(
                "h-4 w-4 transition-transform",
                expandedSections.has('groups') && "rotate-90"
              )}
            />
          </button>
          {expandedSections.has('groups') && (
            <div className="space-y-2">
              {groups.map((group, index) => (
                <div key={index} className="p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-700 truncate">
                        {group.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {group.members}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-gray-500">
                      {group.members} members
                    </span>
                    {group.isJoined ? (
                      <span className="text-xs text-green-600 font-medium">
                        Joined
                      </span>
                    ) : (
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        Join
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Events */}
        <div>
          <button
            onClick={() => toggleSection('events')}
            className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-700 hover:text-gray-900 mb-2"
          >
            <span>Events</span>
            <ChevronRight 
              className={cn(
                "h-4 w-4 transition-transform",
                expandedSections.has('events') && "rotate-90"
              )}
            />
          </button>
          {expandedSections.has('events') && (
            <div className="space-y-2">
              {events.map((event, index) => (
                <div key={index} className="p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-700 truncate">
                        {event.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {event.date}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {event.attendees} attending
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700">Quick Actions</h3>
          <button className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Plus className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-gray-700">Create Project</span>
          </button>
          <button className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <BookOpen className="h-4 w-4 text-green-500" />
            <span className="text-sm text-gray-700">Find Study Groups</span>
          </button>
          <button className="w-full flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-gray-700">Browse Opportunities</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
