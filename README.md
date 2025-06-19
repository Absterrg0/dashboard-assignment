# 🏃‍♂️ Health & Wellness Dashboard

A fun frontend-only health and wellness dashboard built with Next.js 15, featuring interactive data visualization, basic Google authentication, and idle timer logout functionality. This is a demonstration project with no backend - all data is simulated using JSON files.

![Dashboard Preview](https://img.shields.io/badge/Status-Demo-orange) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4) ![Frontend Only](https://img.shields.io/badge/Frontend-Only-red)

## 🎯 **Important Note**

**This is a frontend-only demonstration project built for fun and learning purposes.** There is no backend server, database, or real data persistence. All health data is simulated using static JSON files to showcase the UI components and interactive features.

## ✨ Features

### 🔐 **Authentication & Session Management**
- **Basic Google OAuth** - Simple sign-in with Google accounts using NextAuth
- **Idle Timer Logout** - Automatic session timeout feature with:
  - 15-minute inactivity detection
  - 10-minute warning modal with countdown
  - User choice to extend session or logout
  - Automatic logout for demonstration purposes

### 📊 **Health Tracking Dashboard** *(Simulated Data)*
- **Step Counter** - Demo step tracking visualization with:
  - Daily, weekly, and monthly views
  - Progress visualization with goal tracking (10k steps)
  - Distance calculation and averages
  - Interactive time period selection

- **Sleep Monitoring** - Sample sleep data display:
  - Sleep duration tracking
  - Sleep quality scoring (1-10 scale)
  - Historical data with averages
  - Multi-period view (24hrs, 7 days, 30 days)

- **Calorie Tracking** - Interactive calorie visualization:
  - Visual calorie deficit/surplus tracking
  - Interactive area charts with sample data
  - Weekly averages and trends
  - Net calorie calculations

- **Macro Nutrition Analysis** - Nutrition data visualization:
  - Protein, carbs, fat, sugar, and fiber tracking
  - Radial chart visualizations
  - Period-based analysis with JSON data
  - Average intake calculations

### 📝 **Productivity Features**
- **Todo List Management** - Dynamic task organization:
  - Add, complete, and manage tasks
  - Health-focused default tasks
  - Real-time task state management
  - Scrollable task view

- **Exercise Library** - Comprehensive workout database:
  - 10+ exercises with detailed information
  - Searchable and filterable exercise table
  - Drag-and-drop reordering
  - Column visibility customization
  - Calorie burn and target muscle information

### 🎨 **User Experience**
- **Modern UI Design** - Beautiful, responsive interface:
  - Custom warm orange theme
  - Dark/Light mode toggle
  - Smooth animations and transitions
  - Mobile-responsive design

- **Interactive Data Visualization** - Rich charts and graphs:
  - Recharts integration for data visualization
  - Progress bars and radial charts
  - Real-time data updates
  - Customizable time periods

- **User Profile Management** - Comprehensive profile features:
  - Profile editing with lazy-loaded dialogs
  - User avatar display
  - Account settings and preferences
  - Secure logout functionality

## 🛠️ Technology Stack

### **Frontend** *(No Backend Required)*
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React

### **Basic Authentication**
- **NextAuth**: Version 5.0 (Beta) for demo purposes
- **Provider**: Google OAuth (frontend only)
- **Session Management**: Client-side session handling

### **Data & Visualization**
- **Sample Data**: Static JSON files in `/lib` directory
- **Charts**: Recharts 2.15 for interactive visualizations
- **Progress Indicators**: Custom Radix UI components
- **Interactive Elements**: Custom chart components

### **State Management**
- **React State**: useState, useEffect hooks for demo data
- **Session State**: NextAuth client-side session
- **Idle Detection**: React Idle Timer for logout demo

### **Development Tools**
- **Package Manager**: npm
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript strict mode
- **Build Tool**: Next.js built-in bundler

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Application Structure

```
assignment/
├── app/                     # Next.js App Router
│   ├── api/auth/           # Authentication API routes
│   ├── home/               # Main dashboard pages
│   ├── signin/             # Sign-in page
│   └── layout.tsx          # Root layout
├── components/             # React components
│   ├── dashboard/          # Dashboard-specific components
│   ├── signin/             # Authentication components
│   └── ui/                 # Reusable UI components
├── lib/                    # Utility functions and data
│   ├── auth.ts            # NextAuth configuration
│   ├── data.*.json        # Sample health data
│   └── utils.ts           # Helper functions
└── public/                # Static assets
```

## 🔧 Key Components

### **Dashboard Components**
- `CalorieTracker` - Interactive calorie tracking with charts
- `StepProgress` - Step counting with progress visualization
- `SleepTracking` - Sleep quality and duration monitoring
- `MacrosChart` - Nutrition breakdown with radial charts
- `TodoListComponent` - Task management interface
- `TableStackDetails` - Exercise library with search/sort

### **Authentication Components**
- `UserProfilePopover` - User menu with profile options
- `IdleLogout` - Intelligent session timeout management
- `SignIn` - Google OAuth sign-in interface

### **UI Components**
- Custom Tailwind CSS components
- Radix UI primitives for accessibility
- Responsive design patterns

## 🎯 Usage Examples

### Sample Data Structure
The application uses static JSON files in the `lib/` directory for demonstration:
- `data.steps.json` - Sample step tracking data
- `data.sleep.json` - Sample sleep monitoring data
- `data.calories.json` - Sample calorie tracking data
- `data.macros.json` - Sample nutrition data

*Note: This is simulated data for UI demonstration only.*

### Customizing Themes
The application supports custom theming through CSS variables in `globals.css`:
```css
:root {
  --primary: #ff7e5f;        /* Warm orange primary */
  --secondary: #ffedea;      /* Light orange secondary */
  --accent: #feb47b;         /* Orange accent */
  /* ... more color variables */
}
```

### Session Configuration
Idle timeout settings can be adjusted in the `IdleLogout` component:
```typescript
<IdleLogout 
  timeout={15 * 60 * 1000}      // 15 minutes idle detection
  warningTimeout={10 * 60 * 1000} // 10 minutes warning countdown
/>
```

## 🔒 Demo Features

- **Basic Authentication**: Google OAuth integration with NextAuth
- **Idle Timer Demo**: Automatic session timeout simulation after 15 minutes
- **Session Management**: Basic NextAuth session handling
- **Environment Setup**: Google OAuth credentials configuration
- **Frontend Security**: Standard Next.js security practices

## 🎨 Design System

The application features a custom design system with:
- **Warm Orange Theme**: Professional healthcare-inspired color palette
- **Responsive Grid**: CSS Grid and Flexbox layouts
- **Typography**: Custom font stack with fallbacks
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: ARIA labels and keyboard navigation

## 🚧 Future Enhancements

The application includes a `ComingSoon` component for planned features:
- Advanced analytics dashboard
- Social sharing capabilities
- Wearable device integrations
- Advanced goal setting
- Community features

## 📄 License

This project is a personal learning demonstration.

## 🤝 About This Project

This is a fun frontend-only demo project built to explore Next.js 15, TypeScript, and modern UI libraries. It showcases various dashboard components, authentication flows, and interactive data visualizations without requiring any backend infrastructure.

---

Built with ❤️ for learning and fun using Next.js, TypeScript, and modern web technologies.
