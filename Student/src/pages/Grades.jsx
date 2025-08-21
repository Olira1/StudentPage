import React, { useState } from 'react'
import './Grades.css'

const Grades = () => {
  const tabs = [
    'Transcript',
    'GPA summary',
    'Grade report',
    'Assessment result',
    'Cost sharing history',
  ]
  const [activeTab, setActiveTab] = useState('Assessment result')

  const periods = [
    '2023/2024 1st Semester [ 1st Year ]',
    '2023/2024 2nd Semester [ 1st Year ]',
  ]
  const [period, setPeriod] = useState(periods[1])

  const courses = [
    {
      id: 'anth1012',
      name: 'Social Anthropology (Anth1012)',
      title: 'Social Anthropology',
      instructor: 'Moa Alemayehu Hundessa',
      academicYear: '2023/2024 2nd Semester',
    },
  ]
  const [courseId, setCourseId] = useState(courses[0].id)

  const selectedCourse = courses.find((c) => c.id === courseId) || courses[0]

  const assessments = [
    {
      sn: 1,
      name: 'Group assignment',
      type: 'continuous',
      max: 20.0,
      result: 17.0,
    },
    { sn: 2, name: 'Mid exam', type: 'continuous', max: 30.0, result: 22.0 },
    {
      sn: 3,
      name: 'Final examination',
      type: 'final',
      max: 50.0,
      result: 42.0,
    },
  ]

  const totals = assessments.reduce(
    (acc, a) => ({ max: acc.max + a.max, result: acc.result + a.result }),
    { max: 0, result: 0 }
  )

  return (
    <div className="grades">
      <div className="grades-header">
        <h1>Grades</h1>
        <div className="header-actions">
          <button className="btn btn-secondary" aria-label="Export">
            ⬇️
          </button>
        </div>
      </div>

      <div className="tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={activeTab === t}
            className={`tab ${activeTab === t ? 'active' : ''}`}
            onClick={() => setActiveTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="filters">
        <div className="select-with-clear">
          <select
            className="form-select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            {periods.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          {period && (
            <button
              className="clear-btn"
              aria-label="Clear period"
              onClick={() => setPeriod('')}
            >
              ×
            </button>
          )}
        </div>

        <div className="select-with-clear">
          <select
            className="form-select"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
          >
            {courses.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {courseId && (
            <button
              className="clear-btn"
              aria-label="Clear course"
              onClick={() => setCourseId('')}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {activeTab === 'Assessment result' && (
        <div className="two-col">
          <section className="card">
            <dl className="info-list">
              <div className="info-row">
                <dt>Course title:</dt>
                <dd>{selectedCourse.title}</dd>
              </div>
              <div className="info-row">
                <dt>Instructor:</dt>
                <dd>{selectedCourse.instructor}</dd>
              </div>
              <div className="info-row">
                <dt>Academic year:</dt>
                <dd>{selectedCourse.academicYear}</dd>
              </div>
            </dl>
          </section>

          <section className="card">
            <div className="card-header">
              <h3 className="card-title">Assessment result</h3>
            </div>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Assessment Name</th>
                    <th>Assessment Type</th>
                    <th className="text-right">Maximum Mark</th>
                    <th className="text-right">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {assessments.map((a) => (
                    <tr key={a.sn}>
                      <td>{a.sn}</td>
                      <td>{a.name}</td>
                      <td>{a.type}</td>
                      <td className="text-right">{a.max.toFixed(1)}</td>
                      <td className="text-right">{a.result.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="totals-row">
                    <td colSpan={3}>Totals</td>
                    <td className="text-right">{totals.max.toFixed(1)}</td>
                    <td className="text-right">{totals.result.toFixed(1)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'Grade report' && (
        <div className="report-card card">
          <div className="card-header">
            <h3 className="card-title">Grade Report</h3>
          </div>

          {(() => {
            const subjects = [
              { key: 'amharic', label: 'Amaariffa - Amharic' },
              { key: 'afaan_oromo', label: 'Afaan Oromoo - Afan Oromo' },
              { key: 'english', label: 'Ingiliiffa - English' },
              { key: 'mathematics', label: 'Herrega - Mathematics' },
              { key: 'science', label: 'Saayinsii - Science' },
              {
                key: 'environmental',
                label: 'Saayinsii Naannoo - Environmental Science',
              },
              {
                key: 'social_science',
                label: 'Barnoota Hawaasaa - Social Science',
              },
              {
                key: 'esthetics_pe',
                label: 'Aadaafi Jab. Qaamaa - Esthetics & Ph. Edu.',
              },
              { key: 'chemistry', label: 'Keemistirii - Chemistry' },
              { key: 'biology', label: 'Baayooloojii - Biology' },
              { key: 'physics', label: 'Fiziksii - Physics' },
              { key: 'art', label: 'Oguummaa Gaarii - Art' },
              { key: 'music', label: 'Muuziqaa - Music' },
              { key: 'civics', label: 'Siiviiksii - Civic & Ethical Edu.' },
              { key: 'pe', label: 'Barnoota Jab. Qa. - Physical Education' },
            ]

            const reportData = {
              amharic: { s1: 86, s2: 90 },
              afaan_oromo: { s1: 88, s2: 91 },
              english: { s1: 82, s2: 87 },
              mathematics: { s1: 94, s2: 96 },
              science: { s1: 89, s2: 90 },
              environmental: { s1: 85, s2: 88 },
              social_science: { s1: 84, s2: 86 },
              esthetics_pe: { s1: 92, s2: 93 },
              chemistry: { s1: 0, s2: 0 },
              biology: { s1: 0, s2: 0 },
              physics: { s1: 0, s2: 0 },
              art: { s1: 91, s2: 92 },
              music: { s1: 90, s2: 91 },
              civics: { s1: 88, s2: 90 },
              pe: { s1: 95, s2: 96 },
            }

            const rows = subjects.map((s) => {
              const s1 = reportData[s.key]?.s1 ?? 0
              const s2 = reportData[s.key]?.s2 ?? 0
              const avg = (s1 + s2) / 2
              return { ...s, s1, s2, avg }
            })

            const totals = rows.reduce(
              (acc, r) => ({
                s1: acc.s1 + r.s1,
                s2: acc.s2 + r.s2,
                avg: acc.avg + r.avg,
              }),
              { s1: 0, s2: 0, avg: 0 }
            )
            const nonZeroCount = rows.filter((r) => r.s1 || r.s2).length || 1
            const overallAverage =
              Math.round((totals.avg / nonZeroCount) * 10) / 10

            const conduct = 'Excellent'
            const absence = 0
            const rank = 1

            return (
              <div className="table-container">
                <table className="table report-table">
                  <thead>
                    <tr>
                      <th className="subjects-col">SUBJECTS</th>
                      <th className="text-center">
                        Samisteera 1ffaa
                        <br />
                        1st Semester
                      </th>
                      <th className="text-center">
                        Samisteera 2ffaa
                        <br />
                        2nd Semester
                      </th>
                      <th className="text-center">
                        Avereejii
                        <br />
                        Average
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r) => (
                      <tr key={r.key}>
                        <td>{r.label}</td>
                        <td className="text-right">
                          {r.s1 ? r.s1.toFixed(0) : ''}
                        </td>
                        <td className="text-right">
                          {r.s2 ? r.s2.toFixed(0) : ''}
                        </td>
                        <td className="text-right">
                          {r.s1 || r.s2 ? r.avg.toFixed(1) : ''}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Amala - Conduct</td>
                      <td colSpan={3}>{conduct}</td>
                    </tr>
                    <tr>
                      <td>Haftee - Absence</td>
                      <td className="text-right">{absence}</td>
                      <td className="text-right"></td>
                      <td className="text-right"></td>
                    </tr>
                    <tr>
                      <td>Dimshaashaa - Total</td>
                      <td className="text-right">{totals.s1.toFixed(0)}</td>
                      <td className="text-right">{totals.s2.toFixed(0)}</td>
                      <td className="text-right">{totals.avg.toFixed(1)}</td>
                    </tr>
                    <tr>
                      <td>Avereejii - Average</td>
                      <td className="text-right" colSpan={3}>
                        {overallAverage}
                      </td>
                    </tr>
                    <tr>
                      <td>Sadarkaa - Rank</td>
                      <td className="text-right" colSpan={3}>
                        {rank}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          })()}
        </div>
      )}

      {activeTab === 'Transcript' && (
        <div className="transcript-section">
          {(() => {
            const subjects = [
              { key: 'amharic', label: 'Amaariffa - Amharic' },
              { key: 'afaan_oromo', label: 'Afaan Oromoo - Afan Oromo' },
              { key: 'english', label: 'Ingiliiffa - English' },
              { key: 'mathematics', label: 'Herrega - Mathematics' },
              { key: 'science', label: 'Saayinsii - Science' },
              {
                key: 'environmental',
                label: 'Saayinsii Naannoo - Environmental Science',
              },
              {
                key: 'social_science',
                label: 'Barnoota Hawaasaa - Social Science',
              },
              {
                key: 'esthetics_pe',
                label: 'Aadaafi Jab. Qaamaa - Esthetics & Ph. Edu.',
              },
              { key: 'chemistry', label: 'Keemistirii - Chemistry' },
              { key: 'biology', label: 'Baayooloojii - Biology' },
              { key: 'physics', label: 'Fiziksii - Physics' },
              { key: 'art', label: 'Oguummaa Gaarii - Art' },
              { key: 'music', label: 'Muuziqaa - Music' },
              { key: 'civics', label: 'Siiviiksii - Civic & Ethical Edu.' },
              { key: 'pe', label: 'Barnoota Jab. Qa. - Physical Education' },
            ]

            const yearLabel = {
              grade9: 'Grade 9',
              grade10: 'Grade 10',
              grade11: 'Grade 11',
              grade12: 'Grade 12',
            }

            // Example mock data per grade; replace with real data source
            const dataByYear = {
              grade9: {
                amharic: { s1: 85, s2: 88 },
                afaan_oromo: { s1: 87, s2: 90 },
                english: { s1: 80, s2: 84 },
                mathematics: { s1: 92, s2: 95 },
                science: { s1: 86, s2: 88 },
                environmental: { s1: 83, s2: 86 },
                social_science: { s1: 82, s2: 85 },
                esthetics_pe: { s1: 90, s2: 92 },
                chemistry: { s1: 0, s2: 0 },
                biology: { s1: 0, s2: 0 },
                physics: { s1: 0, s2: 0 },
                art: { s1: 89, s2: 90 },
                music: { s1: 88, s2: 89 },
                civics: { s1: 86, s2: 88 },
                pe: { s1: 93, s2: 94 },
              },
              grade10: {
                amharic: { s1: 86, s2: 89 },
                afaan_oromo: { s1: 88, s2: 91 },
                english: { s1: 82, s2: 86 },
                mathematics: { s1: 93, s2: 96 },
                science: { s1: 88, s2: 89 },
                environmental: { s1: 84, s2: 87 },
                social_science: { s1: 83, s2: 86 },
                esthetics_pe: { s1: 91, s2: 92 },
                chemistry: { s1: 0, s2: 0 },
                biology: { s1: 0, s2: 0 },
                physics: { s1: 0, s2: 0 },
                art: { s1: 90, s2: 91 },
                music: { s1: 89, s2: 90 },
                civics: { s1: 87, s2: 89 },
                pe: { s1: 94, s2: 95 },
              },
              grade11: {
                amharic: { s1: 87, s2: 90 },
                afaan_oromo: { s1: 89, s2: 92 },
                english: { s1: 83, s2: 87 },
                mathematics: { s1: 94, s2: 96 },
                science: { s1: 89, s2: 90 },
                environmental: { s1: 85, s2: 88 },
                social_science: { s1: 84, s2: 87 },
                esthetics_pe: { s1: 92, s2: 93 },
                chemistry: { s1: 0, s2: 0 },
                biology: { s1: 0, s2: 0 },
                physics: { s1: 0, s2: 0 },
                art: { s1: 91, s2: 92 },
                music: { s1: 90, s2: 91 },
                civics: { s1: 88, s2: 90 },
                pe: { s1: 95, s2: 96 },
              },
              grade12: {
                amharic: { s1: 88, s2: 91 },
                afaan_oromo: { s1: 90, s2: 93 },
                english: { s1: 84, s2: 88 },
                mathematics: { s1: 95, s2: 97 },
                science: { s1: 90, s2: 91 },
                environmental: { s1: 86, s2: 89 },
                social_science: { s1: 85, s2: 88 },
                esthetics_pe: { s1: 93, s2: 94 },
                chemistry: { s1: 0, s2: 0 },
                biology: { s1: 0, s2: 0 },
                physics: { s1: 0, s2: 0 },
                art: { s1: 92, s2: 93 },
                music: { s1: 91, s2: 92 },
                civics: { s1: 89, s2: 91 },
                pe: { s1: 96, s2: 97 },
              },
            }

            const years = ['grade9', 'grade10', 'grade11', 'grade12']

            return years.map((yearKey) => {
              const yearData = dataByYear[yearKey]
              const rows = subjects.map((s) => {
                const s1 = yearData[s.key]?.s1 ?? 0
                const s2 = yearData[s.key]?.s2 ?? 0
                const avg = (s1 + s2) / 2
                return { ...s, s1, s2, avg }
              })

              const totals = rows.reduce(
                (acc, r) => ({
                  s1: acc.s1 + r.s1,
                  s2: acc.s2 + r.s2,
                  avg: acc.avg + r.avg,
                }),
                { s1: 0, s2: 0, avg: 0 }
              )
              const nonZeroCount = rows.filter((r) => r.s1 || r.s2).length || 1
              const overallAverage =
                Math.round((totals.avg / nonZeroCount) * 10) / 10

              return (
                <section key={yearKey} className="card report-card">
                  <div className="card-header">
                    <h3 className="card-title">
                      Transcript - {yearLabel[yearKey]}
                    </h3>
                  </div>
                  <div className="table-container">
                    <table className="table report-table">
                      <thead>
                        <tr>
                          <th className="subjects-col">SUBJECTS</th>
                          <th className="text-center">
                            Samisteera 1ffaa
                            <br />
                            1st Semester
                          </th>
                          <th className="text-center">
                            Samisteera 2ffaa
                            <br />
                            2nd Semester
                          </th>
                          <th className="text-center">
                            Avereejii
                            <br />
                            Average
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((r) => (
                          <tr key={r.key}>
                            <td>{r.label}</td>
                            <td className="text-right">
                              {r.s1 ? r.s1.toFixed(0) : ''}
                            </td>
                            <td className="text-right">
                              {r.s2 ? r.s2.toFixed(0) : ''}
                            </td>
                            <td className="text-right">
                              {r.s1 || r.s2 ? r.avg.toFixed(1) : ''}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="strong">Dimshaashaa - Total</td>
                          <td className="text-right">{totals.s1.toFixed(0)}</td>
                          <td className="text-right">{totals.s2.toFixed(0)}</td>
                          <td className="text-right">
                            {totals.avg.toFixed(1)}
                          </td>
                        </tr>
                        <tr>
                          <td className="strong">Avereejii - Average</td>
                          <td className="text-right" colSpan={3}>
                            {overallAverage}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              )
            })
          })()}
        </div>
      )}
    </div>
  )
}

export default Grades
