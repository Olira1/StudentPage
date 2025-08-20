import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ open = true, onNavigate }) => {
  const location = useLocation();

  const navItems = [
    { path: '/grades', label: 'Grades', icon: '📚' },
    { path: '/assignments', label: 'Assignments', icon: '📝' },
    { path: '/resources', label: 'Resources', icon: '📂' },
    { path: '/schedule', label: 'Schedule', icon: '📅' },
    { path: '/reports', label: 'Reports', icon: '📑' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleClick = () => {
    if (typeof onNavigate === 'function') onNavigate();
  };

  return (
    <aside className={`sidebar ${open ? '' : 'hidden'}`} aria-hidden={!open} aria-label="Sidebar navigation">
      <div className="sidebar-header">
        <h1 className="sidebar-title">Student Portal</h1>
      </div>
      
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                onClick={handleClick}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar">👤</div>
          <div className="user-details">
            <div className="user-name">Emma</div>
            <div className="user-role">Student</div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
