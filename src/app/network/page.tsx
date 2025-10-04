'use client';

import { useState } from 'react';
import { Search, UserPlus, Users, Filter, MapPin, GraduationCap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { mockUser } from '@/lib/mockData';

interface Connection {
  id: string;
  name: string;
  profileImage?: string;
  headline: string;
  major: string;
  graduationYear: number;
  location: string;
  skills: string[];
  mutualConnections: number;
  isConnected: boolean;
  isPending: boolean;
}

const mockConnections: Connection[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    headline: 'Computer Science Student | AI Enthusiast',
    major: 'Computer Science',
    graduationYear: 2025,
    location: 'Pittsburgh, PA',
    skills: ['Python', 'Machine Learning', 'React', 'Node.js'],
    mutualConnections: 12,
    isConnected: false,
    isPending: false
  },
  {
    id: '2',
    name: 'Mike Rodriguez',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    headline: 'Software Engineering Student | Full Stack Developer',
    major: 'Software Engineering',
    graduationYear: 2024,
    location: 'Pittsburgh, PA',
    skills: ['JavaScript', 'React', 'Python', 'Docker'],
    mutualConnections: 8,
    isConnected: true,
    isPending: false
  },
  {
    id: '3',
    name: 'Emily Zhang',
    profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    headline: 'Robotics Engineering Student | Hardware Enthusiast',
    major: 'Robotics Engineering',
    graduationYear: 2025,
    location: 'Pittsburgh, PA',
    skills: ['C++', 'Arduino', 'ROS', 'Python'],
    mutualConnections: 15,
    isConnected: false,
    isPending: true
  },
  {
    id: '4',
    name: 'David Kim',
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    headline: 'Data Science Student | Machine Learning Researcher',
    major: 'Data Science',
    graduationYear: 2026,
    location: 'Pittsburgh, PA',
    skills: ['Python', 'R', 'TensorFlow', 'SQL'],
    mutualConnections: 6,
    isConnected: false,
    isPending: false
  }
];

export default function NetworkPage() {
  const [connections] = useState(mockConnections);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMajor, setSelectedMajor] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const majors = ['all', 'Computer Science', 'Software Engineering', 'Robotics Engineering', 'Data Science', 'Electrical Engineering'];
  const years = ['all', '2024', '2025', '2026', '2027'];

  const filteredConnections = connections.filter(connection => {
    const matchesSearch = connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesMajor = selectedMajor === 'all' || connection.major === selectedMajor;
    const matchesYear = selectedYear === 'all' || connection.graduationYear.toString() === selectedYear;
    
    return matchesSearch && matchesMajor && matchesYear;
  });

  const handleConnect = (connectionId: string) => {
    console.log('Connecting with:', connectionId);
    // In a real app, this would make an API call
  };

  const handleAcceptConnection = (connectionId: string) => {
    console.log('Accepting connection:', connectionId);
    // In a real app, this would make an API call
  };

  return (
    <Layout user={mockUser}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Network</h1>
            <p className="text-gray-600 mt-2">
              Connect with fellow CMU students and expand your network
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{mockUser.connections.length}</div>
              <div className="text-sm text-gray-600">Connections</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, skills, or interests..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Major Filter */}
            <div className="lg:w-48">
              <select
                value={selectedMajor}
                onChange={(e) => setSelectedMajor(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {majors.map(major => (
                  <option key={major} value={major}>
                    {major === 'all' ? 'All Majors' : major}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div className="lg:w-32">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Connections</p>
                  <p className="text-2xl font-bold text-gray-900">{mockUser.connections.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <UserPlus className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending Requests</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Same Major</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Connections List */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredConnections.length} Connection{filteredConnections.length !== 1 ? 's' : ''} Found
          </h2>
          
          {filteredConnections.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConnections.map((connection) => (
                <Card key={connection.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar
                          src={connection.profileImage}
                          name={connection.name}
                          size="lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-900 truncate">
                            {connection.name}
                          </h3>
                          <p className="text-sm text-gray-600 truncate">
                            {connection.headline}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>{connection.major} • Class of {connection.graduationYear}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{connection.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{connection.mutualConnections} mutual connections</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {connection.skills.slice(0, 3).map((skill, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                        {connection.skills.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600">
                            +{connection.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      {connection.isConnected ? (
                        <Button variant="outline" size="sm" className="flex-1">
                          Message
                        </Button>
                      ) : connection.isPending ? (
                        <div className="flex space-x-2 flex-1">
                          <Button size="sm" className="flex-1" onClick={() => handleAcceptConnection(connection.id)}>
                            Accept
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            Decline
                          </Button>
                        </div>
                      ) : (
                        <Button size="sm" className="flex-1" onClick={() => handleConnect(connection.id)}>
                          Connect
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Users className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No connections found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or explore suggested connections.
              </p>
              <Button>Explore Suggestions</Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
