import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Grades from './pages/Grades';
import Assignments from './pages/Assignments';
import Schedule from './pages/Schedule';
import Resources from './pages/Resources';
import Reports from './pages/Reports';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handle = () => {
      setIsMobile(mq.matches);
      setSidebarOpen(mq.matches ? false : true);
    };
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const closeSidebar = () => setSidebarOpen(false);
  const handleNavigate = () => { closeSidebar(); };

  return (
    <Router>
      <div className="app">
        <TopNav onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        {isMobile && sidebarOpen && (
          <div className="sidebar-overlay" onClick={closeSidebar} aria-hidden="true" />
        )}
        <Sidebar open={sidebarOpen} onNavigate={handleNavigate} />
        <main className="main-content with-topbar">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
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
