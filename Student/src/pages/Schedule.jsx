import React, { useState } from 'react';
import './Schedule.css';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('week'); // 'day' or 'week'
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock data - replace with actual API calls
  const classSchedule = [
    {
      id: 1,
      subject: 'English',
      time: '10:00',
      duration: 60,
      room: 'Room 201',
      teacher: 'Ms. Johnson',
      day: 'Monday',
      type: 'lecture'
    },
    {
      id: 2,
      subject: 'Biology',
      time: '14:00',
      duration: 90,
      room: 'Lab 105',
      teacher: 'Dr. Smith',
      day: 'Monday',
      type: 'lab'
    },
    {
      id: 3,
      subject: 'Mathematics',
      time: '08:00',
      duration: 60,
      room: 'Room 301',
      teacher: 'Mr. Davis',
      day: 'Tuesday',
      type: 'lecture'
    },
    {
      id: 4,
      subject: 'History',
      time: '11:00',
      duration: 60,
      room: 'Room 102',
      teacher: 'Prof. Wilson',
      day: 'Wednesday',
      type: 'lecture'
    },
    {
      id: 5,
      subject: 'Mathematics',
      time: '15:00',
      duration: 60,
      room: 'Room 301',
      teacher: 'Mr. Davis',
      day: 'Thursday',
      type: 'lecture'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'English TO CU AM',
      time: '10:00',
      date: 'Apr 15',
      type: 'class'
    },
    {
      id: 2,
      title: 'Biology Room PM',
      time: '14:00',
      date: 'Apr 15',
      type: 'lab'
    },
    {
      id: 3,
      title: 'Math',
      time: '08:00',
      date: 'Apr 16',
      type: 'class'
    }
  ];

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getCurrentMonth = () => {
    return months[currentDate.getMonth()];
  };

  const getCurrentYear = () => {
    return currentDate.getFullYear();
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Add previous month's days
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({
        date: prevDate,
        isCurrentMonth: false,
        isToday: false
      });
    }
    
    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const today = new Date();
      days.push({
        date: currentDate,
        isCurrentMonth: true,
        isToday: currentDate.toDateString() === today.toDateString()
      });
    }
    
    // Add next month's days to complete the grid
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({
        date: nextDate,
        isCurrentMonth: false,
        isToday: false
      });
    }
    
    return days;
  };

  const getClassesForDay = (date) => {
    const dayName = daysOfWeek[date.getDay()];
    return classSchedule.filter(cls => cls.day === dayName);
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const formatTime = (time) => {
    return time;
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'lecture': return '📚';
      case 'lab': return '🧪';
      case 'class': return '🎓';
      default: return '📅';
    }
  };

  return (
    <div className="schedule">
      <div className="schedule-header">
        <h1>Schedule</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">⋮</button>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="view-controls">
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === 'day' ? 'active' : ''}`}
            onClick={() => setViewMode('day')}
          >
            Day
          </button>
          <button
            className={`toggle-btn ${viewMode === 'week' ? 'active' : ''}`}
            onClick={() => setViewMode('week')}
          >
            Week
          </button>
        </div>
      </div>

      {/* Calendar View */}
      <div className="calendar-section">
        <div className="card">
          <div className="calendar-header">
            <button className="nav-btn" onClick={() => navigateMonth('prev')}>
              ←
            </button>
            <h3 className="calendar-title">
              {getCurrentMonth()} {getCurrentYear()}
            </h3>
            <button className="nav-btn" onClick={() => navigateMonth('next')}>
              →
            </button>
          </div>
          
          <div className="calendar-grid">
            {/* Days of week header */}
            {daysOfWeek.map(day => (
              <div key={day} className="calendar-day-header">
                {day.slice(0, 3)}
              </div>
            ))}
            
            {/* Calendar days */}
            {getDaysInMonth(currentDate).map((day, index) => (
              <div
                key={index}
                className={`calendar-day ${!day.isCurrentMonth ? 'other-month' : ''} ${day.isToday ? 'today' : ''}`}
                onClick={() => setSelectedDate(day.date)}
              >
                <span className="day-number">{day.date.getDate()}</span>
                {day.isToday && <span className="today-indicator">Today</span>}
                
                {/* Show classes for this day */}
                {day.isCurrentMonth && getClassesForDay(day.date).map(cls => (
                  <div key={cls.id} className="day-class-indicator">
                    {cls.subject}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Details */}
      <div className="schedule-details">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">
              {viewMode === 'day' ? 'Daily Schedule' : 'Weekly Schedule'} - {daysOfWeek[selectedDate.getDay()]}
            </h3>
          </div>
          
          <div className="schedule-timeline">
            {viewMode === 'day' ? (
              // Day view
              <div className="day-schedule">
                {getClassesForDay(selectedDate).map(cls => (
                  <div key={cls.id} className="schedule-item">
                    <div className="time-slot">
                      <span className="time">{cls.time}</span>
                      <span className="duration">{cls.duration}min</span>
                    </div>
                    <div className="class-info">
                      <div className="class-header">
                        <span className="class-icon">{getEventTypeIcon(cls.type)}</span>
                        <h4 className="class-subject">{cls.subject}</h4>
                        <span className="class-type">{cls.type}</span>
                      </div>
                      <div className="class-details">
                        <span className="room">📍 {cls.room}</span>
                        <span className="teacher">👤 {cls.teacher}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Week view
              <div className="week-schedule">
                {daysOfWeek.slice(1, 6).map(day => (
                  <div key={day} className="week-day">
                    <h4 className="week-day-title">{day}</h4>
                    <div className="week-day-classes">
                      {getClassesForDay(new Date(selectedDate.getTime() + (daysOfWeek.indexOf(day) - selectedDate.getDay()) * 24 * 60 * 60 * 1000)).map(cls => (
                        <div key={cls.id} className="week-class-item">
                          <span className="week-class-time">{cls.time}</span>
                          <span className="week-class-subject">{cls.subject}</span>
                          <span className="week-class-room">{cls.room}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="upcoming-events-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Upcoming Events</h3>
          </div>
          
          <div className="events-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-item">
                <div className="event-time">{event.time}</div>
                <div className="event-content">
                  <h4 className="event-title">{event.title}</h4>
                  <span className="event-date">{event.date}</span>
                </div>
                <span className="event-type-icon">{getEventTypeIcon(event.type)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="schedule-controls">
        <div className="control-group">
          <button className="btn btn-secondary">A-</button>
          <button className="btn btn-secondary">A</button>
        </div>
        <div className="control-group">
          <label className="toggle-switch">
            <input type="checkbox" />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="control-group">
          <button className="btn btn-primary">🔌</button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
