import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Grades from './pages/Grades';
import Assignments from './pages/Assignments';
import Schedule from './pages/Schedule';
import Resources from './pages/Resources';
import Reports from './pages/Reports';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* Legacy route retained */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
