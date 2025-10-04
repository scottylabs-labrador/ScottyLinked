'use client';

import { useState } from 'react';
import { Search, Send, Paperclip, Smile, MoreVertical } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Avatar from '@/components/ui/Avatar';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { mockUser } from '@/lib/mockData';
import { formatRelativeTime } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: string;
  recipient: string;
  createdAt: Date;
  read: boolean;
  type: 'text' | 'image' | 'file';
}

interface Conversation {
  id: string;
  participant: {
    id: string;
    name: string;
    profileImage?: string;
    isOnline: boolean;
  };
  lastMessage: Message;
  unreadCount: number;
  updatedAt: Date;
}

const mockConversations: Conversation[] = [
  {
    id: '1',
    participant: {
      id: '2',
      name: 'Sarah Johnson',
      profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      isOnline: true
    },
    lastMessage: {
      id: '1',
      content: 'Hey! Are you still interested in working on that ML project?',
      sender: '2',
      recipient: '1',
      createdAt: new Date('2024-01-15T14:30:00'),
      read: false,
      type: 'text'
    },
    unreadCount: 2,
    updatedAt: new Date('2024-01-15T14:30:00')
  },
  {
    id: '2',
    participant: {
      id: '3',
      name: 'Mike Rodriguez',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      isOnline: false
    },
    lastMessage: {
      id: '2',
      content: 'Thanks for the connection request! Looking forward to collaborating.',
      sender: '3',
      recipient: '1',
      createdAt: new Date('2024-01-14T16:45:00'),
      read: true,
      type: 'text'
    },
    unreadCount: 0,
    updatedAt: new Date('2024-01-14T16:45:00')
  },
  {
    id: '3',
    participant: {
      id: '4',
      name: 'Emily Zhang',
      profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      isOnline: true
    },
    lastMessage: {
      id: '3',
      content: 'The robotics club meeting is tomorrow at 7 PM. Are you coming?',
      sender: '4',
      recipient: '1',
      createdAt: new Date('2024-01-15T10:15:00'),
      read: false,
      type: 'text'
    },
    unreadCount: 1,
    updatedAt: new Date('2024-01-15T10:15:00')
  }
];

const mockMessages: Message[] = [
  {
    id: '1',
    content: 'Hey! Are you still interested in working on that ML project?',
    sender: '2',
    recipient: '1',
    createdAt: new Date('2024-01-15T14:30:00'),
    read: false,
    type: 'text'
  },
  {
    id: '2',
    content: 'Yes, absolutely! I was just thinking about it. What did you have in mind?',
    sender: '1',
    recipient: '2',
    createdAt: new Date('2024-01-15T14:32:00'),
    read: true,
    type: 'text'
  },
  {
    id: '3',
    content: 'I was thinking we could build a recommendation system for course selection. What do you think?',
    sender: '2',
    recipient: '1',
    createdAt: new Date('2024-01-15T14:35:00'),
    read: false,
    type: 'text'
  }
];

export default function MessagesPage() {
  const [conversations] = useState(mockConversations);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter(conv =>
    conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentConversation = conversations.find(conv => conv.id === selectedConversation);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && selectedConversation) {
      const message: Message = {
        id: Date.now().toString(),
        content: newMessage,
        sender: mockUser.id,
        recipient: currentConversation?.participant.id || '',
        createdAt: new Date(),
        read: false,
        type: 'text'
      };
      setMessages(prev => [...prev, message]);
      setNewMessage('');
    }
  };

  return (
    <Layout user={mockUser} showSidebar={false}>
      <div className="max-w-7xl mx-auto h-[calc(100vh-4rem)]">
        <div className="flex h-full bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Conversations Sidebar */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="p-4 border-b border-gray-200">
              <h1 className="text-xl font-semibold text-gray-900 mb-4">Messages</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation.id)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${
                    selectedConversation === conversation.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar
                        src={conversation.participant.profileImage}
                        name={conversation.participant.name}
                        size="md"
                      />
                      {conversation.participant.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {conversation.participant.name}
                        </h3>
                        <span className="text-xs text-gray-500">
                          {formatRelativeTime(conversation.updatedAt)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {conversation.lastMessage.content}
                      </p>
                    </div>
                    {conversation.unreadCount > 0 && (
                      <div className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {conversation.unreadCount}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar
                      src={currentConversation?.participant.profileImage}
                      name={currentConversation?.participant.name || ''}
                      size="md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {currentConversation?.participant.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {currentConversation?.participant.isOnline ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                    <MoreVertical className="h-5 w-5" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === mockUser.id ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === mockUser.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === mockUser.id ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {formatRelativeTime(message.createdAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                    <button
                      type="button"
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                    >
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="button"
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
                    >
                      <Smile className="h-5 w-5" />
                    </button>
                    <Button type="submit" size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 mb-4">
                    <Search className="h-12 w-12 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">
                    Choose a conversation from the sidebar to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
