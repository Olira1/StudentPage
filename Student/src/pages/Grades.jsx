import React, { useState } from 'react';
import './Grades.css';

const Grades = () => {
  const [selectedClass, setSelectedClass] = useState('all');

  // Mock data - replace with actual API calls
  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: 'math', name: 'Mathematics' },
    { id: 'english', name: 'English Literature' },
    { id: 'history', name: 'World History' },
    { id: 'science', name: 'Biology' }
  ];

  const gradesData = [
    {
      id: 1,
      assignment: 'Homework 5',
      subject: 'Mathematics',
      grade: 95,
      maxGrade: 100,
      dueDate: 'Apr 5',
      feedback: 'Excellent work! Clear problem-solving approach.'
    },
    {
      id: 2,
      assignment: 'Project 2',
      subject: 'English Literature',
      grade: 88,
      maxGrade: 100,
      dueDate: 'Mar 28',
      feedback: 'Good analysis, but could use more supporting evidence.'
    },
    {
      id: 3,
      assignment: 'Quiz 1',
      subject: 'World History',
      grade: 92,
      maxGrade: 100,
      dueDate: 'Mar 20',
      feedback: 'Great understanding of key historical events.'
    },
    {
      id: 4,
      assignment: 'Essay 1',
      subject: 'Biology',
      grade: 85,
      maxGrade: 100,
      dueDate: 'Mar 13',
      feedback: 'Well-researched, but conclusion could be stronger.'
    },
    {
      id: 5,
      assignment: 'Homework 4',
      subject: 'Mathematics',
      grade: 90,
      maxGrade: 100,
      dueDate: 'Mar 15',
      feedback: 'Good work on algebraic concepts.'
    }
  ];

  const filteredGrades = selectedClass === 'all' 
    ? gradesData 
    : gradesData.filter(grade => grade.subject.toLowerCase().includes(selectedClass));

  const calculateAverage = (grades) => {
    if (grades.length === 0) return 0;
    const total = grades.reduce((sum, grade) => sum + grade.grade, 0);
    return Math.round(total / grades.length);
  };

  const averageGrade = calculateAverage(filteredGrades);

  return (
    <div className="grades">
      <div className="grades-header">
        <h1>Grades</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">📊</button>
        </div>
      </div>

      {/* Class Selection */}
      <div className="class-selection">
        <div className="form-group">
          <label htmlFor="class-select" className="form-label">Select Class</label>
          <select
            id="class-select"
            className="form-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grades Table */}
      <div className="grades-table-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Course Grades</h3>
            <div className="grade-summary">
              <span className="grade-average">Average: {averageGrade}%</span>
            </div>
          </div>
          
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Assignment</th>
                  <th>Subject</th>
                  <th>Grade</th>
                  <th>Due Date</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                {filteredGrades.map((grade) => (
                  <tr key={grade.id} className="grade-row">
                    <td className="assignment-name">{grade.assignment}</td>
                    <td className="subject-name">{grade.subject}</td>
                    <td className="grade-score">
                      <span className={`grade-value ${grade.grade >= 90 ? 'excellent' : grade.grade >= 80 ? 'good' : 'needs-improvement'}`}>
                        {grade.grade}/{grade.maxGrade}
                      </span>
                    </td>
                    <td className="due-date">{grade.dueDate}</td>
                    <td className="feedback">
                      <div className="feedback-content">
                        {grade.feedback}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Grade Average Chart */}
      <div className="grade-chart-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Grade Average</h3>
          </div>
          <div className="grade-chart">
            <div className="chart-bars">
              {filteredGrades.slice(0, 5).map((grade, index) => (
                <div key={grade.id} className="chart-bar">
                  <div className="bar-label">{grade.assignment}</div>
                  <div className="bar-container">
                    <div 
                      className="bar-fill" 
                      style={{ 
                        width: `${grade.grade}%`,
                        backgroundColor: grade.grade >= 90 ? '#10b981' : grade.grade >= 80 ? '#f59e0b' : '#ef4444'
                      }}
                    ></div>
                  </div>
                  <div className="bar-value">{grade.grade}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grades;
