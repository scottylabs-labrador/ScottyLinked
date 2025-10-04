import { User, Post, Project, Experience, Education } from '@/types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Chen',
  email: 'alexchen@andrew.cmu.edu',
  profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  headline: 'Computer Science Student at CMU | Passionate about AI and Machine Learning',
  location: 'Pittsburgh, PA',
  school: 'Carnegie Mellon University',
  major: 'Computer Science',
  graduationYear: 2025,
  bio: 'I\'m a junior at CMU studying Computer Science with a focus on AI and machine learning. I love working on projects that solve real-world problems and I\'m always looking for new opportunities to learn and grow.',
  skills: ['Python', 'JavaScript', 'React', 'Node.js', 'Machine Learning', 'TensorFlow', 'PyTorch'],
  projects: [],
  connections: ['2', '3', '4'],
  experience: [
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'Google',
      location: 'Mountain View, CA',
      startDate: new Date('2023-06-01'),
      endDate: new Date('2023-08-31'),
      current: false,
      description: 'Worked on machine learning infrastructure for Google Search',
      skills: ['Python', 'TensorFlow', 'Kubernetes', 'Go']
    }
  ],
  education: [
    {
      id: '1',
      school: 'Carnegie Mellon University',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: new Date('2021-09-01'),
      endDate: new Date('2025-05-01'),
      current: true,
      gpa: 3.8,
      activities: ['ACM', 'Robotics Club', 'Hackathon Organizer']
    }
  ],
  isVerified: true,
  createdAt: new Date('2021-09-01'),
  updatedAt: new Date()
};

export const mockPosts: Post[] = [
  {
    id: '1',
    content: 'Just finished building a machine learning model that can predict student performance! Excited to share the results with my team. #MachineLearning #CMU #DataScience',
    author: mockUser,
    likes: ['2', '3', '4', '5'],
    comments: [
      {
        id: '1',
        content: 'This is amazing! Would love to learn more about your approach.',
        author: {
          ...mockUser,
          id: '2',
          name: 'Sarah Johnson',
          profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
        },
        postId: '1',
        createdAt: new Date('2024-01-15T10:30:00'),
        updatedAt: new Date('2024-01-15T10:30:00')
      }
    ],
    visibility: 'public',
    createdAt: new Date('2024-01-15T09:00:00'),
    updatedAt: new Date('2024-01-15T09:00:00'),
    type: 'text'
  },
  {
    id: '2',
    content: 'Looking for team members for a hackathon project! We\'re building a web app that helps students find study groups. Need frontend and backend developers. DM me if interested!',
    author: {
      ...mockUser,
      id: '3',
      name: 'Mike Rodriguez',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    likes: ['1', '2', '4'],
    comments: [],
    visibility: 'cmu-only',
    createdAt: new Date('2024-01-14T14:20:00'),
    updatedAt: new Date('2024-01-14T14:20:00'),
    type: 'project'
  },
  {
    id: '3',
    content: 'Just got accepted into the CMU Robotics Club! Can\'t wait to start working on some cool projects with the team. 🤖',
    author: {
      ...mockUser,
      id: '4',
      name: 'Emily Zhang',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    likes: ['1', '2', '3', '5', '6'],
    comments: [
      {
        id: '2',
        content: 'Congratulations! Welcome to the club!',
        author: mockUser,
        postId: '3',
        createdAt: new Date('2024-01-14T16:45:00'),
        updatedAt: new Date('2024-01-14T16:45:00')
      }
    ],
    visibility: 'public',
    createdAt: new Date('2024-01-14T15:30:00'),
    updatedAt: new Date('2024-01-14T15:30:00'),
    type: 'achievement'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Study Group Finder',
    description: 'A web application that helps CMU students find study groups for their courses. Features include course matching, schedule coordination, and group chat functionality.',
    skills: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    status: 'in-progress',
    lookingFor: ['Frontend Developer', 'UI/UX Designer', 'Backend Developer'],
    teamMembers: ['1', '2'],
    createdBy: '1',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15'),
    tags: ['web-development', 'education', 'social'],
    difficulty: 'intermediate',
    timeCommitment: '10-15 hours/week',
    category: 'Web Development'
  },
  {
    id: '2',
    title: 'AI-Powered Course Recommender',
    description: 'Machine learning system that recommends courses to CMU students based on their interests, academic history, and career goals.',
    skills: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    status: 'planning',
    lookingFor: ['Machine Learning Engineer', 'Data Scientist', 'Product Manager'],
    teamMembers: ['1'],
    createdBy: '1',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    tags: ['machine-learning', 'education', 'recommendation-system'],
    difficulty: 'advanced',
    timeCommitment: '15-20 hours/week',
    category: 'Machine Learning'
  },
  {
    id: '3',
    title: 'CMU Campus Navigation App',
    description: 'Mobile app with AR features to help new students navigate the CMU campus. Includes real-time directions and points of interest.',
    skills: ['React Native', 'ARCore', 'Google Maps API', 'Firebase'],
    status: 'completed',
    lookingFor: [],
    teamMembers: ['3', '4', '5'],
    createdBy: '3',
    createdAt: new Date('2023-09-01'),
    updatedAt: new Date('2023-12-15'),
    tags: ['mobile', 'ar', 'navigation', 'campus'],
    difficulty: 'intermediate',
    timeCommitment: '8-12 hours/week',
    category: 'Mobile Development'
  }
];
