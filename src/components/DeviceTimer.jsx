import React, { useState, useEffect } from 'react';

function DeviceTimer({ minutesAvailable, onTimeUpdate, kidId }) {
  const [secondsRemaining, setSecondsRemaining] = useState(minutesAvailable * 60);
  const [isRunning, setIsRunning] = useState(true);
  const [notified5min, setNotified5min] = useState(false);

  useEffect(() => {
    if (!isRunning || secondsRemaining <= 0) {
      setIsRunning(false);
      if (secondsRemaining <= 0) {
        setSecondsRemaining(0);
      }
      return;
    }

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        const newValue = Math.max(0, prev - 1);

        // Notify at 5 minutes
        if (newValue === 300 && !notified5min) {
          setNotified5min(true);
          if ('Notification' in window) {
            new Notification('⏰ Device Time', {
              body: '5 minutes remaining on device time!',
              icon: '⏰'
            });
          }
        }

        // Stop at 0
        if (newValue === 0) {
          setIsRunning(false);
          if ('Notification' in window) {
            new Notification('⏱️ Time\'s Up!', {
              body: 'Your device time has ended. Great job today!',
              icon: '✅'
            });
          }
        }

        return newValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, notified5min]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = (secondsRemaining / (minutesAvailable * 60)) * 100;

  return (
    <div className="timer-section">
      <div className="timer-label">Device Time Remaining</div>
      <div className="timer-display">{formatTime(secondsRemaining)}</div>

      <div style={{
        background: 'rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        height: '30px',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <div style={{
          background: progressPercent > 20 ? '#51cf66' : '#ff6b6b',
          height: '100%',
          width: `${progressPercent}%`,
          transition: 'width 0.3s ease'
        }} />
      </div>

      <div className="timer-controls">
        <button
          className={`btn ${isRunning ? 'btn-danger' : 'btn-success'}`}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Pause' : 'Resume'}
        </button>
      </div>

      {secondsRemaining === 0 && (
        <div style={{
          marginTop: '20px',
          padding: '15px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          ✅ Time's up! You did great today!
        </div>
      )}
    </div>
  );
}

export default DeviceTimer;
