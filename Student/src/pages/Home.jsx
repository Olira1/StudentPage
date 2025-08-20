import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(t);
  }, []);

  const kpis = [
    { label: 'Attendance', value: '96%', tone: 'success' },
    { label: 'GPA', value: '3.7', tone: 'primary' },
    { label: 'Upcoming', value: '4', tone: 'warning' },
  ];

  const schedule = [
    { time: '08:00', subject: 'Mathematics', room: 'Room 301', teacher: 'Mr. Davis', color: 'var(--success)' },
    { time: '10:00', subject: 'English', room: 'Room 201', teacher: 'Ms. Johnson', color: 'var(--primary)' },
    { time: '14:00', subject: 'Biology Lab', room: 'Lab 105', teacher: 'Dr. Smith', color: 'var(--secondary)' },
  ];

  const announcements = [
    { id: 1, title: 'New Semester Calendar', priority: 'High', date: 'Mar 15' },
    { id: 2, title: 'Library: New Digital Resources', priority: 'Medium', date: 'Mar 12' },
    { id: 3, title: 'Sports Day Registration', priority: 'Low', date: 'Mar 10' },
  ];

  const greeting = () => {
    const h = now.getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="home">
      <div className="home-header">
        <div>
          <h1>{greeting()}, Emma</h1>
          <p className="muted">{now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">🔔</button>
          <button className="btn btn-secondary">👤</button>
        </div>
      </div>

      <section className="kpi-grid">
        {kpis.map((k) => (
          <div key={k.label} className="kpi-card">
            <div className="kpi-strip" style={{ backgroundColor: `var(--${k.tone})` }} />
            <div className="kpi-content">
              <div className="kpi-value">{k.value}</div>
              <div className="kpi-label">{k.label}</div>
            </div>
          </div>
        ))}
      </section>

      <div className="grid-2 responsive">
        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Today’s Schedule</h3>
          </div>
          <div className="timeline">
            {schedule.map((s) => (
              <div key={s.time} className="timeline-item">
                <div className="time-col">
                  <span className="time">{s.time}</span>
                </div>
                <div className="dot" style={{ backgroundColor: s.color }} />
                <div className="lesson">
                  <div className="lesson-top">
                    <span className="subject" style={{ color: s.color }}>{s.subject}</span>
                    <span className="room">📍 {s.room}</span>
                  </div>
                  <div className="teacher">👤 {s.teacher}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h3 className="card-title">Announcements</h3>
          </div>
          <div className="ann-list">
            {announcements.map((a) => (
              <div key={a.id} className="ann-item">
                <div className="ann-top">
                  <span className={`pill pill-${a.priority.toLowerCase()}`}>{a.priority}</span>
                  <span className="muted">{a.date}</span>
                </div>
                <div className="ann-title">{a.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="quick-actions card">
        <div className="card-header">
          <h3 className="card-title">Quick Actions</h3>
        </div>
        <div className="qa-grid">
          <button className="btn btn-primary">View Assignments</button>
          <button className="btn btn-primary">Check Grades</button>
          <button className="btn btn-primary">Download Report</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

