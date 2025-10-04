'use client';

import { useState } from 'react';
import { Edit, MapPin, Calendar, GraduationCap, Briefcase, Award, UserPlus, MessageCircle, MoreHorizontal } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { mockUser } from '@/lib/mockData';
import { formatDate } from '@/lib/utils';

export default function ProfilePage() {
  const [user] = useState(mockUser);
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', count: null },
    { id: 'experience', label: 'Experience', count: user.experience.length },
    { id: 'education', label: 'Education', count: user.education.length },
    { id: 'projects', label: 'Projects', count: user.projects.length },
    { id: 'skills', label: 'Skills', count: user.skills.length },
  ];

  return (
    <Layout user={user}>
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="relative">
                <Avatar
                  src={user.profileImage}
                  name={user.name}
                  size="xl"
                />
                <button className="absolute -bottom-2 -right-2 p-2 bg-white border-2 border-gray-200 rounded-full hover:bg-gray-50">
                  <Edit className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                  {user.isVerified && (
                    <span className="text-blue-500 text-xl">✓</span>
                  )}
                </div>
                <p className="text-lg text-gray-600 mb-2">{user.headline}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{user.school}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Class of {user.graduationYear}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{user.connections.length}</span> connections
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">{user.projects.length}</span> projects
                  </div>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Message</span>
                </Button>
                <Button className="flex items-center space-x-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Connect</span>
                </Button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                {tab.count !== null && (
                  <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'about' && (
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{user.bio}</p>
              </CardContent>
            </Card>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-4">
              {user.experience.map((exp) => (
                <Card key={exp.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-gray-600 font-medium">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.location}</p>
                        <p className="text-sm text-gray-500">
                          {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)}
                        </p>
                        <p className="text-gray-700 mt-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-1 mt-3">
                          {exp.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-4">
              {user.education.map((edu) => (
                <Card key={edu.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                        <p className="text-gray-600 font-medium">{edu.school}</p>
                        <p className="text-sm text-gray-500">
                          {formatDate(edu.startDate)} - {edu.current ? 'Present' : formatDate(edu.endDate!)}
                        </p>
                        {edu.gpa && (
                          <p className="text-sm text-gray-500">GPA: {edu.gpa}</p>
                        )}
                        <div className="mt-3">
                          <h4 className="text-sm font-medium text-gray-900 mb-2">Activities</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {edu.activities.map((activity, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {user.projects.map((project) => (
                <Card key={project.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.skills.slice(0, 3).map((skill, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 3 && (
                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                          +{project.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
}
