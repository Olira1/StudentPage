import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.css';

const TopNav = ({ onToggleSidebar, sidebarOpen = false }) => {
  const { weekday, grade, studentName } = useMemo(() => {
    const d = new Date();
    const weekday = d.toLocaleDateString(undefined, { weekday: 'long' });
    return { weekday, grade: 'Grade9B', studentName: 'Emma' };
  }, []);

  return (
    <header className="topnav" role="navigation" aria-label="Top Navigation">
      <div className="topnav-left">
        <button
          className="icon-btn"
          aria-label="Open menu"
          aria-expanded={sidebarOpen}
          onClick={onToggleSidebar}
          title="Menu"
        >
          ☰
        </button>
        <Link to="/" className="home-link" aria-label="Go to Home">🏠 Home</Link>
      </div>
      <div className="topnav-center" />
      <div className="topnav-right" aria-label="Student context">
        <span className="nav-pill name" title="Student Name">👤 {studentName}</span>
        <span className="nav-pill day" title="Today">📅 {weekday}</span>
        <span className="nav-pill grade" title="Current Grade">🎓 {grade}</span>
      </div>
    </header>
  );
};

export default TopNav;
