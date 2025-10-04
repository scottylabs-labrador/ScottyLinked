'use client';

import { Project } from '@/types';
import { formatRelativeTime } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Users, Clock, Star, MessageCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onJoin?: (projectId: string) => void;
  onView?: (projectId: string) => void;
}

export default function ProjectCard({ project, onJoin, onView }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'on-hold':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {project.description}
            </p>
          </div>
          <div className="flex flex-col space-y-1">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status.replace('-', ' ')}
            </span>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
              {project.difficulty}
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {project.skills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 4 && (
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                +{project.skills.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            <span>{project.teamMembers.length} team members</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>{project.timeCommitment}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Star className="h-4 w-4 mr-2" />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Looking For */}
        {project.lookingFor.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Looking for:</h4>
            <div className="flex flex-wrap gap-1">
              {project.lookingFor.map((role, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-800"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-xs text-gray-500">
          Created {formatRelativeTime(project.createdAt)}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onView?.(project.id)}
        >
          View Details
        </Button>
        {project.lookingFor.length > 0 && (
          <Button
            size="sm"
            onClick={() => onJoin?.(project.id)}
          >
            Join Project
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
