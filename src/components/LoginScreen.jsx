import React, { useState } from 'react';

function LoginScreen({ onParentLogin, onKidLogin, kids }) {
  const [selectedView, setSelectedView] = useState(null);
  const [password, setPassword] = useState('');

  const handleParentSubmit = (e) => {
    e.preventDefault();
    onParentLogin(password);
    setPassword('');
  };

  const handleKidSubmit = (e, kidId) => {
    e.preventDefault();
    onKidLogin(kidId, password);
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>🎯 Family Chore Tracker</h1>
        <p>Manage chores, track rewards, and earn device time</p>
      </div>

      {!selectedView ? (
        <div className="login-box">
          <h2>Who are you?</h2>
          <div className="login-buttons">
            <button
              className="btn btn-primary"
              onClick={() => setSelectedView('parent')}
            >
              👨‍👩‍👧‍👦 Parent Login
            </button>
            {kids.map(kid => (
              <button
                key={kid.id}
                className="btn btn-primary"
                onClick={() => setSelectedView(`kid-${kid.id}`)}
              >
                👧 {kid.name} (Age {kid.age})
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="login-box">
          <button
            className="btn btn-secondary"
            onClick={() => {
              setSelectedView(null);
              setPassword('');
            }}
            style={{ marginBottom: '20px' }}
          >
            ← Back
          </button>

          {selectedView === 'parent' ? (
            <div>
              <h2>Parent Login</h2>
              <form onSubmit={handleParentSubmit}>
                <input
                  type="password"
                  placeholder="Enter parent password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '15px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1em'
                  }}
                  autoFocus
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Login
                </button>
              </form>
              <p style={{ marginTop: '15px', fontSize: '0.85em', color: '#999' }}>
                Default: parent123
              </p>
            </div>
          ) : (
            <div>
              <h2>{kids.find(k => k.id === selectedView.split('-')[1])?.name} Login</h2>
              <form onSubmit={(e) => handleKidSubmit(e, selectedView.split('-')[1])}>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '15px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1em'
                  }}
                  autoFocus
                />
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Login
                </button>
              </form>
              <p style={{ marginTop: '15px', fontSize: '0.85em', color: '#999' }}>
                Default: {selectedView.split('-')[1]}123
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginScreen;
