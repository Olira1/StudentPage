import React from 'react';
import './Reports.css';

const Reports = () => {
  const kpis = [
    { label: 'Attendance (30d)', value: '94%' },
    { label: 'Average Grade', value: '89%' },
    { label: 'Completed Assignments', value: '27' },
  ];

  const bars = [72, 80, 65, 90, 84, 78, 92];
  const dist = [5, 9, 12, 8, 3];

  return (
    <div className="reports">
      <div className="page-header">
        <h1>Reports</h1>
        <div className="header-actions">
          <button className="btn btn-secondary">⭳ Download All</button>
        </div>
      </div>

      <section className="kpi-row">
        {kpis.map(k => (
          <div key={k.label} className="kpi">
            <div className="kpi-value">{k.value}</div>
            <div className="kpi-label">{k.label}</div>
          </div>
        ))}
      </section>

      <div className="grid-2 responsive">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Attendance Trend (Weekly)</h3>
          </div>
          <div className="bars">
            {bars.map((b, i) => (
              <div key={i} className="bar" style={{ height: `${b}%` }} />)
            )}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Grades Distribution</h3>
          </div>
          <div className="dist">
            {dist.map((d, i) => (
              <div key={i} className="slice">
                <div className="slice-bar" style={{ width: `${(d/12)*100}%` }} />
                <span className="slice-label">Band {i+1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="downloads card">
        <div className="card-header">
          <h3 className="card-title">Downloads</h3>
        </div>
        <div className="dl-grid">
          <div className="dl-card">
            <div className="dl-icon">📄</div>
            <div className="dl-content">
              <div className="dl-title">Grade Summary (PDF)</div>
              <div className="muted">Latest term performance overview</div>
            </div>
            <button className="btn btn-primary">Download</button>
          </div>
          <div className="dl-card">
            <div className="dl-icon">🗓️</div>
            <div className="dl-content">
              <div className="dl-title">Attendance Report (PDF)</div>
              <div className="muted">Absences and lateness by week</div>
            </div>
            <button className="btn btn-primary">Download</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reports;

