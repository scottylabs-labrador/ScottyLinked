export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  headline: string;
  location: string;
  school: 'Carnegie Mellon University';
  major: string;
  graduationYear: number;
  bio: string;
  skills: string[];
  projects: Project[];
  connections: string[];
  experience: Experience[];
  education: Education[];
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  skills: string[];
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  lookingFor: string[];
  teamMembers: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeCommitment: string;
  category: string;
}

export interface Post {
  id: string;
  content: string;
  author: User;
  images?: string[];
  likes: string[];
  comments: Comment[];
  visibility: 'public' | 'connections' | 'cmu-only';
  createdAt: Date;
  updatedAt: Date;
  type: 'text' | 'project' | 'achievement' | 'job' | 'event';
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  postId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  skills: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  gpa?: number;
  activities: string[];
}

export interface Message {
  id: string;
  content: string;
  sender: string;
  recipient: string;
  createdAt: Date;
  read: boolean;
  type: 'text' | 'image' | 'file';
}

export interface Connection {
  id: string;
  user1: string;
  user2: string;
  status: 'pending' | 'accepted' | 'blocked';
  createdAt: Date;
  updatedAt: Date;
}

export interface Notification {
  id: string;
  type: 'connection_request' | 'connection_accepted' | 'project_invite' | 'post_like' | 'post_comment' | 'message';
  title: string;
  message: string;
  userId: string;
  read: boolean;
  createdAt: Date;
  data?: any;
}
