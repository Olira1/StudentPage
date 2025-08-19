import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching announcements from database
  useEffect(() => {
    // This would be replaced with actual API call to Announcement table
    const fetchAnnouncements = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock data - replace with actual API call
      const mockAnnouncements = [
        {
          id: 1,
          title: 'School guidelines updated',
          date: 'Mar 15',
          priority: 'high',
          content: 'New school guidelines have been updated for the spring semester.'
        },
        {
          id: 2,
          title: 'New library resources available',
          date: 'Mar 5',
          priority: 'medium',
          content: 'Access to new digital library resources is now available for all students.'
        },
        {
          id: 3,
          title: 'Spring break schedule',
          date: 'Mar 1',
          priority: 'low',
          content: 'Spring break will be from April 1-5. No classes during this period.'
        }
      ];
      
      setAnnouncements(mockAnnouncements);
      setLoading(false);
    };

    fetchAnnouncements();
  }, []);

  const overviewCards = [
    { title: 'Classes', value: '3', icon: '📚', color: '#3b82f6' },
    { title: 'Grades', value: '2', icon: '📊', color: '#10b981' },
    { title: 'Attendance', value: '96%', icon: '✅', color: '#f59e0b' }
  ];

  const gradeData = [
    { subject: 'Math', grade: 92, trend: 'up' },
    { subject: 'English', grade: 88, trend: 'up' },
    { subject: 'History', grade: 85, trend: 'down' },
    { subject: 'Science', grade: 90, trend: 'up' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">🔔</button>
          <button className="btn btn-secondary">👤</button>
        </div>
      </div>

      {/* Greeting Section */}
      <div className="greeting-section">
        <h2>Welcome, Emma</h2>
        <p>Here's what's happening with your studies today.</p>
      </div>

      {/* Overview Cards */}
      <div className="overview-section">
        <div className="grid grid-3">
          {overviewCards.map((card, index) => (
            <div key={index} className="overview-card" style={{ borderLeft: `4px solid ${card.color}` }}>
              <div className="overview-icon">{card.icon}</div>
              <div className="overview-content">
                <div className="overview-value">{card.value}</div>
                <div className="overview-title">{card.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Announcements */}
      <div className="announcements-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Recent Announcements</h3>
            <button className="btn btn-primary">View All</button>
          </div>
          
          {loading ? (
            <div className="loading">Loading announcements...</div>
          ) : (
            <div className="announcements-list">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="announcement-item">
                  <div className="announcement-header">
                    <span className={`announcement-priority priority-${announcement.priority}`}>
                      {announcement.priority}
                    </span>
                    <span className="announcement-date">{announcement.date}</span>
                  </div>
                  <h4 className="announcement-title">{announcement.title}</h4>
                  <p className="announcement-content">{announcement.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grades Overview */}
      <div className="grades-overview-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Grades Overview</h3>
          </div>
          <div className="grades-chart">
            {gradeData.map((item, index) => (
              <div key={index} className="grade-item">
                <div className="grade-subject">{item.subject}</div>
                <div className="grade-bar">
                  <div 
                    className="grade-fill" 
                    style={{ 
                      width: `${item.grade}%`,
                      backgroundColor: item.trend === 'up' ? '#10b981' : '#ef4444'
                    }}
                  ></div>
                </div>
                <div className="grade-value">{item.grade}%</div>
                <div className={`grade-trend ${item.trend}`}>
                  {item.trend === 'up' ? '↗' : '↘'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
