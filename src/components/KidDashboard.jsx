import React, { useState } from 'react';
import DeviceTimer from './DeviceTimer';

function KidDashboard({ kid, onChoreUpdate, onDeviceTimeUpdate }) {
  const [showTimer, setShowTimer] = useState(false);
  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const today = new Date().getDay();
  const todayIndex = today === 0 ? 6 : today - 1;

  if (!kid) {
    return <div>Loading...</div>;
  }

  const completedToday = kid.chores.filter(chore => chore.days[todayIndex]).length;
  const totalChores = kid.chores.length;

  return (
    <div className="dashboard full">
      <div className="header">
        <h1>👧 {kid.name}'s Chore Dashboard</h1>
        <p>Complete chores to earn device time!</p>
      </div>

      <div className="card">
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-value">{kid.deviceTimeEarned}</div>
            <div className="stat-label">Minutes Available</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">{completedToday}/{totalChores}</div>
            <div className="stat-label">Completed Today</div>
          </div>
        </div>

        {kid.deviceTimeEarned > 0 && (
          <button
            className="btn btn-success"
            onClick={() => setShowTimer(!showTimer)}
            style={{ width: '100%', marginBottom: '20px' }}
          >
            {showTimer ? '⏹️ Stop Timer' : '▶️ Start Device Timer'}
          </button>
        )}

        {showTimer && (
          <DeviceTimer
            minutesAvailable={kid.deviceTimeEarned}
            onTimeUpdate={onDeviceTimeUpdate}
            kidId={kid.id}
          />
        )}
      </div>

      <div className="card">
        <h2>📋 Today's Chores</h2>
        <div className="chore-list">
          {kid.chores
            .filter(chore => {
              // Show today's chores (based on day of week)
              return true; // Show all for now
            })
            .map(chore => (
              <div key={chore.id} className={`chore-item ${chore.days[todayIndex] ? 'completed' : ''}`}>
                <div className="chore-header">
                  <span className="chore-name">{chore.name}</span>
                  <span className="chore-reward">+{chore.reward} min</span>
                </div>
                <button
                  className={`btn ${chore.days[todayIndex] ? 'btn-secondary' : 'btn-success'}`}
                  onClick={() => onChoreUpdate(kid.id, chore.id, todayIndex)}
                  style={{ width: '100%' }}
                >
                  {chore.days[todayIndex] ? '✓ Completed' : 'Mark Complete'}
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="card">
        <h2>📊 Weekly Progress</h2>
        <div className="chore-list">
          <div className="day-labels">
            {dayNames.map((day, idx) => (
              <div key={day} style={{ fontWeight: idx === todayIndex ? 'bold' : 'normal' }}>
                {day}
              </div>
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
                    className={`day-box ${checked ? 'checked' : ''} ${dayIndex === todayIndex ? 'today' : ''}`}
                    onClick={() => onChoreUpdate(kid.id, chore.id, dayIndex)}
                    style={{
                      borderWidth: dayIndex === todayIndex ? '3px' : '2px',
                      cursor: 'pointer'
                    }}
                  >
                    {checked ? '✓' : '·'}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KidDashboard;
