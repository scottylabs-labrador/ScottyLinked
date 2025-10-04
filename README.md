# ScottyLinked - LinkedIn for CMU Students

A modern social networking platform designed specifically for Carnegie Mellon University students to connect, collaborate on projects, and build their professional networks.

## 🚀 Features

### Core Functionality
- **User Profiles**: Comprehensive profiles with skills, experience, education, and project history
- **Project Discovery**: Find and join projects with fellow students based on skills and interests
- **Social Feed**: Share updates, achievements, and project milestones
- **Networking**: Connect with other CMU students and build your professional network
- **Messaging**: Direct messaging system for real-time communication
- **Search & Filtering**: Advanced search capabilities for people, projects, and posts

### CMU-Specific Features
- **University Integration**: Built specifically for Carnegie Mellon University students
- **Major-Based Filtering**: Find connections and projects by academic major
- **Campus Groups**: Join and participate in CMU-specific groups and clubs
- **Academic Focus**: Emphasis on learning, skill development, and academic collaboration

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Full type safety throughout the application
- **State Management**: React hooks and context (ready for Redux/Zustand integration)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home feed
│   ├── projects/          # Project discovery
│   ├── network/           # Networking and connections
│   ├── messages/          # Messaging system
│   └── profile/           # User profiles
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Sidebar, Layout)
│   ├── features/         # Feature-specific components
│   └── ui/               # Base UI components
├── lib/                  # Utility functions and mock data
├── types/                # TypeScript type definitions
└── styles/               # Global styles and CSS variables
```

## 🎨 Design System

### Color Palette
- **Primary**: LinkedIn Blue (#0077b5)
- **Secondary**: Light Gray (#f3f2ef)
- **Accent**: CMU Orange (#ff6b35)
- **Text**: Dark Gray (#171717)
- **Muted**: Medium Gray (#666666)

### Components
- **Cards**: Consistent card design with hover effects
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Avatars**: User profile images with fallback initials
- **Forms**: Consistent form styling with focus states

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd scotty-labs
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages & Features

### Home Feed (`/`)
- Welcome section with personalized greeting
- Featured projects showcase
- Create post functionality with different post types
- Social feed with posts, likes, and comments
- Real-time activity updates

### Projects (`/projects`)
- Project discovery with advanced filtering
- Search by skills, category, and status
- Grid and list view modes
- Project details with team information
- Join project functionality

### Network (`/network`)
- Connection management
- Search and filter by major, year, and skills
- Connection statistics
- Mutual connections display
- Connect/accept/decline functionality

### Messages (`/messages`)
- Real-time messaging interface
- Conversation list with unread indicators
- Online/offline status
- Message history and search
- File and emoji support (UI ready)

### Profile (`/profile`)
- Comprehensive user profiles
- Tabbed interface (About, Experience, Education, Projects, Skills)
- Edit functionality (UI ready)
- Connection and project statistics
- Professional experience display

## 🔧 Customization

### Adding New Features
1. Create new components in `src/components/features/`
2. Add new pages in `src/app/`
3. Update types in `src/types/index.ts`
4. Add mock data in `src/lib/mockData.ts`

### Styling
- Modify CSS variables in `src/app/globals.css`
- Update component styles using Tailwind classes
- Add new design tokens as needed

## 🚧 Future Enhancements

### Planned Features
- **Authentication**: User login and registration
- **Real-time Updates**: WebSocket integration for live updates
- **File Uploads**: Profile pictures and project media
- **Notifications**: Real-time notification system
- **Mobile App**: React Native mobile application
- **API Integration**: Backend API development
- **Advanced Search**: Elasticsearch integration
- **Analytics**: User engagement and project success metrics

### Technical Improvements
- **State Management**: Redux Toolkit or Zustand integration
- **Testing**: Jest and React Testing Library
- **Performance**: Code splitting and lazy loading
- **Accessibility**: WCAG 2.1 compliance
- **SEO**: Meta tags and structured data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Carnegie Mellon University for inspiration
- LinkedIn for design patterns and UX inspiration
- The Next.js and React communities for excellent tooling
- Tailwind CSS for the utility-first CSS framework

---

**Built with ❤️ for CMU students by CMU students**