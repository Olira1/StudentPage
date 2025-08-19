# Student Portal - React Application

A modern, responsive student portal built with React that provides a comprehensive view of academic information including dashboard, grades, assignments, and schedule.

## 🚀 Features

### Dashboard
- **Greeting Section**: Personalized welcome message
- **Overview Cards**: Quick stats for classes, grades, and attendance
- **Dynamic Announcements**: Pulls from Announcement table (currently using mock data)
- **Grades Overview**: Visual representation of academic performance

### Grades Page
- **Class Selection**: Filter grades by specific classes
- **Grades Table**: Comprehensive view with assignment details and feedback
- **Grade Average**: Calculated average with visual chart
- **Feedback Integration**: Shows teacher feedback for each assignment

### Assignments Page
- **Assignment List**: View all current assignments with details
- **Submit Button**: File upload functionality that stores in Submission table
- **Status Tracking**: Monitor assignment completion status
- **To-Do List**: Interactive checklist for pending assignments

### Schedule Page
- **Calendar View**: Monthly calendar with class indicators
- **Day/Week Filter**: Toggle between daily and weekly views
- **Class Integration**: Schedule linked to Class entities
- **Upcoming Events**: List of scheduled activities

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx          # Navigation sidebar
│   └── Sidebar.css
├── pages/
│   ├── Dashboard.jsx        # Main dashboard page
│   ├── Dashboard.css
│   ├── Grades.jsx          # Grades and feedback page
│   ├── Grades.css
│   ├── Assignments.jsx     # Assignments and submissions page
│   ├── Assignments.css
│   ├── Schedule.jsx        # Calendar and schedule page
│   └── Schedule.css
├── App.jsx                 # Main application component
├── App.css                 # Global styles
├── main.jsx               # Application entry point
└── index.css              # Base styles
```

## 🎯 Improvements Implemented

### 1. Dashboard Enhancements
- ✅ **Dynamic Announcements**: Replaced static announcements with dynamic list
- ✅ **Data Integration**: Prepared for Announcement table integration
- ✅ **Interactive Elements**: Hover effects and responsive design

### 2. Grades Page Improvements
- ✅ **Feedback Field**: Added feedback column to grades table
- ✅ **Class Filtering**: Dropdown to filter by specific classes
- ✅ **Visual Charts**: Grade average visualization
- ✅ **Responsive Design**: Mobile-friendly layout

### 3. Assignments Page Features
- ✅ **Submit Button**: File upload functionality
- ✅ **Submission Tracking**: Status management for assignments
- ✅ **File Handling**: Support for multiple file types
- ✅ **To-Do Integration**: Interactive checklist

### 4. Schedule Page Usability
- ✅ **Day/Week Filter**: Toggle between view modes
- ✅ **Class Integration**: Schedule linked to Class entities
- ✅ **Calendar Navigation**: Month navigation and date selection
- ✅ **Event Management**: Upcoming events display

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory: `cd Student`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Technical Details

### Dependencies
- **React 19.1.1** - UI framework
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server

### Architecture
- **Component-Based**: Modular React components
- **Responsive Design**: Mobile-first approach
- **CSS Modules**: Scoped styling per component
- **State Management**: React hooks for local state

### Data Integration
The application is prepared for backend integration with:
- **Announcement Table**: Dynamic announcements
- **Grade Table**: Academic performance data
- **Assignment Table**: Course assignments
- **Submission Table**: File submissions
- **Class Table**: Course scheduling

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation with detailed views
- **Tablet**: Adaptive layouts with optimized spacing
- **Mobile**: Stacked layouts with touch-friendly controls

## 🔮 Future Enhancements

- **Real-time Updates**: WebSocket integration for live data
- **Dark Mode**: Theme switching capability
- **Notifications**: Push notifications for important events
- **Offline Support**: Service worker for offline functionality
- **Accessibility**: Enhanced screen reader support

## 📄 License

This project is part of the School Design system and follows the established design patterns and requirements.
