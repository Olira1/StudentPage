import React, { useState } from 'react';
import './Assignments.css';

const Assignments = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Mock data - replace with actual API calls
  const classes = [
    { id: 'all', name: 'All Classes' },
    { id: 'math', name: 'Mathematics' },
    { id: 'english', name: 'English Literature' },
    { id: 'history', name: 'World History' },
    { id: 'science', name: 'Biology' }
  ];

  const assignmentsData = [
    {
      id: 1,
      title: 'Homework 2',
      subject: 'Mathematics',
      dueDate: 'Apr 10',
      status: 'incomplete',
      description: 'Complete problems 1-20 in Chapter 5',
      maxPoints: 100,
      submitted: false
    },
    {
      id: 2,
      title: 'Essay 3',
      subject: 'English Literature',
      dueDate: 'Apr 3',
      status: 'complete',
      description: 'Write a 5-page essay on Shakespeare\'s themes',
      maxPoints: 150,
      submitted: true
    },
    {
      id: 3,
      title: 'Lab Report',
      subject: 'Biology',
      dueDate: 'Mar 27',
      status: 'submitted',
      description: 'Complete lab report for photosynthesis experiment',
      maxPoints: 80,
      submitted: true
    },
    {
      id: 4,
      title: 'Homework 1',
      subject: 'Mathematics',
      dueDate: 'Mar 15',
      status: 'submitted',
      description: 'Algebra problems from textbook',
      maxPoints: 100,
      submitted: true
    }
  ];

  const filteredAssignments = selectedClass === 'all' 
    ? assignmentsData 
    : assignmentsData.filter(assignment => assignment.subject.toLowerCase().includes(selectedClass));

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (assignmentId) => {
    if (!selectedFile) {
      alert('Please select a file to submit');
      return;
    }

    setSubmitting(true);
    
    // Simulate API call to Submission table
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update local state to show submission
      const updatedAssignments = assignmentsData.map(assignment => 
        assignment.id === assignmentId 
          ? { ...assignment, status: 'submitted', submitted: true }
          : assignment
      );
      
      // In real app, this would update the database
      console.log('File submitted:', selectedFile.name, 'for assignment:', assignmentId);
      
      setSelectedFile(null);
      alert('Assignment submitted successfully!');
    } catch (error) {
      alert('Error submitting assignment. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      incomplete: { label: 'Incomplete', className: 'status-incomplete' },
      complete: { label: 'Complete', className: 'status-complete' },
      submitted: { label: 'Submitted', className: 'status-submitted' }
    };
    
    const config = statusConfig[status] || statusConfig.incomplete;
    return <span className={`status ${config.className}`}>{config.label}</span>;
  };

  return (
    <div className="assignments">
      <div className="assignments-header">
        <h1>Assignments</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">📝</button>
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

      {/* Assignments List */}
      <div className="assignments-list-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Current Assignments</h3>
          </div>
          
          <div className="assignments-grid">
            {filteredAssignments.map((assignment) => (
              <div key={assignment.id} className="assignment-card">
                <div className="assignment-header">
                  <h4 className="assignment-title">{assignment.title}</h4>
                  {getStatusBadge(assignment.status)}
                </div>
                
                <div className="assignment-details">
                  <div className="detail-item">
                    <span className="detail-label">Subject:</span>
                    <span className="detail-value">{assignment.subject}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Due Date:</span>
                    <span className="detail-value">{assignment.dueDate}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Points:</span>
                    <span className="detail-value">{assignment.maxPoints}</span>
                  </div>
                </div>
                
                <div className="assignment-description">
                  {assignment.description}
                </div>
                
                {!assignment.submitted && (
                  <div className="assignment-submission">
                    <div className="file-upload">
                      <input
                        type="file"
                        id={`file-${assignment.id}`}
                        onChange={handleFileSelect}
                        accept=".pdf,.doc,.docx,.txt"
                        className="file-input"
                      />
                      <label htmlFor={`file-${assignment.id}`} className="file-label">
                        📎 Choose File
                      </label>
                      {selectedFile && (
                        <span className="selected-file">{selectedFile.name}</span>
                      )}
                    </div>
                    
                    <button
                      className="btn btn-success"
                      onClick={() => handleSubmit(assignment.id)}
                      disabled={!selectedFile || submitting}
                    >
                      {submitting ? 'Submitting...' : 'Submit Assignment'}
                    </button>
                  </div>
                )}
                
                {assignment.submitted && (
                  <div className="submission-status">
                    <span className="status status-submitted">Submitted</span>
                    <span className="submission-date">Submitted on {assignment.dueDate}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* To-Do List */}
      <div className="todo-section">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">To-Do List</h3>
          </div>
          
          <div className="todo-list">
            {filteredAssignments
              .filter(assignment => !assignment.submitted)
              .map((assignment) => (
                <div key={assignment.id} className="todo-item">
                  <input
                    type="checkbox"
                    id={`todo-${assignment.id}`}
                    className="todo-checkbox"
                  />
                  <label htmlFor={`todo-${assignment.id}`} className="todo-label">
                    <span className="todo-title">{assignment.title}</span>
                    <span className="todo-due">Due: {assignment.dueDate}</span>
                  </label>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
