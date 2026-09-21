import React, { useState } from 'react';

function ParentDashboard({ kids, onChoreUpdate, onResetWeek }) {
  const [expandedKid, setExpandedKid] = useState(kids[0]?.id);
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="dashboard full">
      <div className="header">
        <h1>👨‍👩‍👧‍👦 Parent Dashboard</h1>
        <p>Monitor chores and manage rewards for all children</p>
      </div>

      {kids.map(kid => (
        <div key={kid.id} className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h2>
              {kid.name} ({kid.age} years old)
            </h2>
            <button
              className="btn btn-secondary"
              onClick={() => setExpandedKid(expandedKid === kid.id ? null : kid.id)}
            >
              {expandedKid === kid.id ? '▼ Hide' : '▶ Show'}
            </button>
          </div>

          {expandedKid === kid.id && (
            <>
              <div className="stats-container">
                <div className="stat-box">
                  <div className="stat-value">{kid.deviceTimeEarned}</div>
                  <div className="stat-label">Minutes Earned</div>
                </div>
                <div className="stat-box">
                  <div className="stat-value">{kid.deviceTimeUsed}</div>
                  <div className="stat-label">Minutes Used</div>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <button
                  className="btn btn-danger"
                  onClick={() => onResetWeek(kid.id)}
                  style={{ width: '100%' }}
                >
                  Reset Weekly Chores
                </button>
              </div>

              <div className="chore-list">
                <div className="day-labels">
                  {dayNames.map(day => (
                    <div key={day}>{day}</div>
                  ))}
                </div>

                {kid.chores.map(chore => (
                  <div key={chore.id} className={`chore-item ${chore.days.some(d => d) ? 'completed' : ''}`}>
                    <div className="chore-header">
                      <span className="chore-name">{chore.name}</span>
                      <span className="chore-reward">{chore.reward} min</span>
                    </div>
                    <div className="chore-days">
                      {chore.days.map((checked, dayIndex) => (
                        <div
                          key={dayIndex}
                          className={`day-box ${checked ? 'checked' : ''}`}
                          onClick={() => onChoreUpdate(kid.id, chore.id, dayIndex)}
                        >
                          {checked ? '✓' : '·'}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ParentDashboard;
