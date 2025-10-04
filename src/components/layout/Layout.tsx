'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  user?: {
    name: string;
    profileImage?: string;
    headline: string;
    connections: number;
  };
}

export default function Layout({ 
  children, 
  showSidebar = true, 
  user 
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      
      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <Sidebar user={user} />
          </div>
        )}
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
