import React, { useState } from 'react';
import './Resources.css';

const allTags = ['Math', 'English', 'Biology', 'PDF', 'Slides', 'Link', 'Mr. Davis', 'Ms. Johnson'];

const initialResources = [
  { id: 1, title: 'Math Chapter 5 - Algebra', type: 'PDF', subject: 'Math', teacher: 'Mr. Davis', date: 'Mar 10' },
  { id: 2, title: 'English: Shakespeare Themes', type: 'Slides', subject: 'English', teacher: 'Ms. Johnson', date: 'Mar 12' },
  { id: 3, title: 'Biology Lab Guide', type: 'PDF', subject: 'Biology', teacher: 'Dr. Smith', date: 'Mar 14' },
  { id: 4, title: 'Math Problem Set Links', type: 'Link', subject: 'Math', teacher: 'Mr. Davis', date: 'Mar 15' },
];

const typeColor = (type) => {
  switch (type) {
    case 'PDF': return '#ef4444';
    case 'Slides': return '#a855f7';
    case 'Link': return '#0ea5e9';
    default: return 'var(--primary)';
  }
};

const Resources = () => {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (tag) => {
    setActiveTags((prev) => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]);
  };

  const filtered = initialResources.filter((r) => {
    const matchesQuery = r.title.toLowerCase().includes(query.toLowerCase());
    const matchesTags = activeTags.length === 0 || activeTags.every((t) => [r.subject, r.type, r.teacher].includes(t));
    return matchesQuery && matchesTags;
  });

  return (
    <div className="resources">
      <div className="page-header">
        <h1>Resources</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">➕ Upload</button>
        </div>
      </div>

      <div className="filters card">
        <div className="search">
          <input
            className="form-input"
            placeholder="Search resources (e.g., Math Chapter 5 PDF)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="tags">
          {allTags.map((t) => (
            <button
              key={t}
              className={`tag ${activeTags.includes(t) ? 'active' : ''}`}
              onClick={() => toggleTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="resource-grid">
        {filtered.map((r) => (
          <div key={r.id} className="resource-card">
            <div className="file-badge" style={{ backgroundColor: typeColor(r.type) }}>{r.type}</div>
            <h3 className="resource-title">{r.title}</h3>
            <div className="meta">
              <span className="chip">{r.subject}</span>
              <span className="chip">{r.teacher}</span>
              <span className="muted">{r.date}</span>
            </div>
            <div className="actions">
              <button className="btn btn-primary">Open</button>
              <button className="btn btn-secondary">Preview</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;

