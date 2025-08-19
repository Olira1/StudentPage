# Student Portal - Project Structure

## 📁 Directory Overview

```
Student/
├── public/                    # Static assets
├── src/                      # Source code
│   ├── components/           # Reusable UI components
│   ├── pages/               # Main application pages
│   ├── services/            # Data and API services
│   ├── assets/              # Images, icons, etc.
│   ├── App.jsx              # Main application component
│   ├── App.css              # Global application styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Base styles
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── README.md                # Project documentation
└── PROJECT_STRUCTURE.md     # This file
```

## 🧩 Components (`src/components/`)

### Sidebar.jsx
- **Purpose**: Main navigation component
- **Features**: 
  - Navigation links to all pages
  - User profile display
  - Active page highlighting
- **Props**: None (uses React Router hooks)
- **State**: Current location for active link styling

### Sidebar.css
- **Purpose**: Styling for the sidebar component
- **Features**:
  - Fixed positioning
  - Responsive design
  - Hover effects and transitions
  - User info styling

## 📄 Pages (`src/pages/`)

### Dashboard.jsx
- **Purpose**: Main landing page with overview information
- **Features**:
  - Greeting section
  - Overview cards (classes, grades, attendance)
  - Dynamic announcements (pulls from Announcement table)
  - Grades overview chart
- **State**: 
  - `announcements`: List of announcements
  - `loading`: Loading state for announcements
- **Data Sources**: Announcement table (mock data for now)

### Dashboard.css
- **Purpose**: Dashboard-specific styling
- **Features**:
  - Grid layouts for overview cards
  - Announcement item styling
  - Grade chart visualization
  - Responsive breakpoints

### Grades.jsx
- **Purpose**: Display and manage student grades
- **Features**:
  - Class selection dropdown
  - Grades table with feedback column
  - Grade average calculation
  - Visual grade charts
- **State**:
  - `selectedClass`: Currently selected class filter
- **Data Sources**: Grade table (mock data for now)

### Grades.css
- **Purpose**: Grades page styling
- **Features**:
  - Table styling with hover effects
  - Grade value color coding
  - Feedback display styling
  - Chart bar visualization

### Assignments.jsx
- **Purpose**: Manage and submit assignments
- **Features**:
  - Assignment list with details
  - File upload and submission
  - Status tracking
  - To-do list integration
- **State**:
  - `selectedClass`: Class filter
  - `selectedFile`: Currently selected file
  - `submitting`: Submission in progress
- **Data Sources**: Assignment table, Submission table

### Assignments.css
- **Purpose**: Assignments page styling
- **Features**:
  - Assignment card layouts
  - File upload styling
  - Status badge styling
  - To-do list styling

### Schedule.jsx
- **Purpose**: Calendar and schedule management
- **Features**:
  - Monthly calendar view
  - Day/week view toggle
  - Class schedule display
  - Upcoming events list
- **State**:
  - `currentDate`: Currently displayed month
  - `viewMode`: 'day' or 'week' view
  - `selectedDate`: Selected date for details
- **Data Sources**: Class table (mock data for now)

### Schedule.css
- **Purpose**: Schedule page styling
- **Features**:
  - Calendar grid layout
  - Day/week view styling
  - Schedule item styling
  - Toggle switch styling

## 🔧 Services (`src/services/`)

### dataService.js
- **Purpose**: Centralized data management and API integration
- **Features**:
  - Generic API call method
  - Entity-specific API methods
  - Mock data for development
  - Error handling
- **API Endpoints**:
  - `/announcements` - Announcement management
  - `/students/:id/grades` - Grade retrieval
  - `/students/:id/assignments` - Assignment management
  - `/assignments/:id/submit` - File submission
  - `/students/:id/schedule` - Schedule retrieval

## 🎨 Styling (`src/`)

### App.css
- **Purpose**: Global application styles
- **Features**:
  - CSS reset and base styles
  - Component classes (cards, buttons, forms)
  - Utility classes (grids, status indicators)
  - Responsive design utilities

### index.css
- **Purpose**: Base HTML element styling
- **Features**:
  - Body and root element styles
  - Font family definitions
  - Basic color scheme

## 📦 Configuration Files

### package.json
- **Dependencies**:
  - React 19.1.1
  - React Router DOM (for navigation)
  - Vite (build tool)
- **Scripts**:
  - `dev`: Development server
  - `build`: Production build
  - `preview`: Preview production build
  - `lint`: ESLint checking

### vite.config.js
- **Purpose**: Vite build tool configuration
- **Features**: React plugin integration

## 🚀 Key Features by Page

### Dashboard
- ✅ Dynamic announcements from database
- ✅ Overview statistics
- ✅ Grade performance visualization

### Grades
- ✅ Class-based filtering
- ✅ Feedback display
- ✅ Grade average calculation

### Assignments
- ✅ File submission to Submission table
- ✅ Status tracking
- ✅ Interactive to-do list

### Schedule
- ✅ Day/week view toggle
- ✅ Calendar navigation
- ✅ Class schedule integration

## 🔗 Data Flow

```
User Interaction → Component State → Service Layer → API/Database
     ↓
UI Update ← Component Re-render ← State Update ← Data Response
```

## 📱 Responsive Design

- **Desktop**: Full sidebar + main content
- **Tablet**: Adaptive layouts
- **Mobile**: Stacked layouts, hidden sidebar

## 🎯 Integration Points

The application is designed to integrate with these database entities:
- **Announcement**: Dynamic announcements
- **Grade**: Academic performance data
- **Assignment**: Course assignments
- **Submission**: File submissions
- **Class**: Course scheduling and management

## 🔮 Future Enhancements

- Real-time data updates
- Offline functionality
- Advanced filtering and search
- Export capabilities
- Notification system
