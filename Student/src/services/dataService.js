// Data Service - Handles API calls to backend
// This file demonstrates how the application would integrate with the database

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

class DataService {
  // Generic API call method
  async apiCall(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API Call Error:', error);
      throw error;
    }
  }

  // Announcements API
  async getAnnouncements() {
    return this.apiCall('/announcements');
  }

  async createAnnouncement(announcement) {
    return this.apiCall('/announcements', {
      method: 'POST',
      body: JSON.stringify(announcement),
    });
  }

  // Grades API
  async getGrades(studentId, classId = null) {
    const params = classId ? `?classId=${classId}` : '';
    return this.apiCall(`/students/${studentId}/grades${params}`);
  }

  async getGradeFeedback(gradeId) {
    return this.apiCall(`/grades/${gradeId}/feedback`);
  }

  // Assignments API
  async getAssignments(studentId, classId = null) {
    const params = classId ? `?classId=${classId}` : '';
    return this.apiCall(`/students/${studentId}/assignments${params}`);
  }

  async submitAssignment(assignmentId, file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('assignmentId', assignmentId);

    return this.apiCall(`/assignments/${assignmentId}/submit`, {
      method: 'POST',
      headers: {}, // Let browser set content-type for FormData
      body: formData,
    });
  }

  // Schedule/Classes API
  async getClassSchedule(studentId, date = null) {
    const params = date ? `?date=${date.toISOString()}` : '';
    return this.apiCall(`/students/${studentId}/schedule${params}`);
  }

  async getUpcomingEvents(studentId, limit = 10) {
    return this.apiCall(`/students/${studentId}/events?limit=${limit}`);
  }

  // Student Profile API
  async getStudentProfile(studentId) {
    return this.apiCall(`/students/${studentId}`);
  }

  async getStudentStats(studentId) {
    return this.apiCall(`/students/${studentId}/stats`);
  }

  // Classes API
  async getClasses(studentId) {
    return this.apiCall(`/students/${studentId}/classes`);
  }

  // Submissions API
  async getSubmissions(studentId, assignmentId = null) {
    const params = assignmentId ? `?assignmentId=${assignmentId}` : '';
    return this.apiCall(`/students/${studentId}/submissions${params}`);
  }

  async getSubmissionStatus(submissionId) {
    return this.apiCall(`/submissions/${submissionId}/status`);
  }
}

// Mock data for development (remove in production)
export const mockData = {
  announcements: [
    {
      id: 1,
      title: 'School guidelines updated',
      content: 'New school guidelines have been updated for the spring semester.',
      priority: 'high',
      date: '2024-03-15',
      author: 'Administration'
    },
    {
      id: 2,
      title: 'New library resources available',
      content: 'Access to new digital library resources is now available for all students.',
      priority: 'medium',
      date: '2024-03-05',
      author: 'Library Staff'
    }
  ],
  
  grades: [
    {
      id: 1,
      assignment: 'Homework 5',
      subject: 'Mathematics',
      grade: 95,
      maxGrade: 100,
      dueDate: '2024-04-05',
      feedback: 'Excellent work! Clear problem-solving approach.',
      classId: 'math101'
    }
  ],
  
  assignments: [
    {
      id: 1,
      title: 'Homework 2',
      subject: 'Mathematics',
      dueDate: '2024-04-10',
      status: 'incomplete',
      description: 'Complete problems 1-20 in Chapter 5',
      maxPoints: 100,
      classId: 'math101'
    }
  ],
  
  schedule: [
    {
      id: 1,
      subject: 'English',
      time: '10:00',
      duration: 60,
      room: 'Room 201',
      teacher: 'Ms. Johnson',
      day: 'Monday',
      type: 'lecture',
      classId: 'eng101'
    }
  ]
};

export default new DataService();
