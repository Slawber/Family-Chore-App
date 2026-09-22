import React, { useState, useEffect } from 'react';
import './index.css';
import LoginScreen from './components/LoginScreen';
import ParentDashboard from './components/ParentDashboard';
import KidDashboard from './components/KidDashboard';
import AdminSettings from './components/AdminSettings';

const defaultKids = [
    {
      id: 'jaxon',
      name: 'Jaxon',
      age: 9,
      password: 'jaxon123',
      chores: [
        { id: 1, name: 'Homework', reward: 10, days: [false, false, false, false, false, false, false] },
        { id: 2, name: 'Clean Room', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 3, name: 'Vacuum Room', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 4, name: 'Wipe Bathroom Countertops', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 5, name: 'Empty Bathroom Trash (All)', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 6, name: 'Shower Curtain Closed', reward: 10, days: [false, false, false, false, false, false, false] },
        { id: 7, name: 'Clean Coffee Table', reward: 10, days: [false, false, false, false, false, false, false] },
        { id: 8, name: 'Take Out Trash w/ Piper', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 9, name: 'Replace Kitchen Trash Bag', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 10, name: 'Fold Blankets & Rack', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 11, name: 'Hold Bag for Dog Poop', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 12, name: 'Throw Away Dog Poop', reward: 10, days: [false, false, false, false, false, false, false] },
        { id: 13, name: 'Patio & Yard Clean', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 14, name: 'Dog Food Full & Lid', reward: 10, days: [false, false, false, false, false, false, false] },
        { id: 15, name: 'Mop Tile Floors', reward: 30, days: [false, false, false, false, false, false, false] }
      ],
      deviceTimeEarned: 0,
      deviceTimeUsed: 0
    },
    {
      id: 'piper',
      name: 'Piper',
      age: 13,
      password: 'piper123',
      chores: [
        { id: 1, name: 'Homework', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 2, name: 'Clean Room', reward: 30, days: [false, false, false, false, false, false, false] },
        { id: 3, name: 'Vacuum Room', reward: 25, days: [false, false, false, false, false, false, false] },
        { id: 4, name: 'Sweep & Mop Bathroom', reward: 35, days: [false, false, false, false, false, false, false] },
        { id: 5, name: 'Vacuum Living Room', reward: 30, days: [false, false, false, false, false, false, false] },
        { id: 6, name: 'Load & Unload Dishwasher', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 7, name: 'Take Out Trash w/ Jaxon', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 8, name: 'Wipe Kitchen Counters', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 9, name: 'Sweep Tile & Office', reward: 25, days: [false, false, false, false, false, false, false] },
        { id: 10, name: 'Scoop Dog Poop', reward: 20, days: [false, false, false, false, false, false, false] },
        { id: 11, name: 'Clear Kitchen Table & Wipe', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 12, name: 'Wipe Toilet Seat/Lid', reward: 15, days: [false, false, false, false, false, false, false] },
        { id: 13, name: 'Dog Water Full', reward: 10, days: [false, false, false, false, false, false, false] },
        { id: 14, name: 'Mop Tile & Office', reward: 45, days: [false, false, false, false, false, false, false] }
      ],
      deviceTimeEarned: 0,
      deviceTimeUsed: 0
    }
  ];

function App() {
  // Initialize state from localStorage or use defaults
  const [currentUser, setCurrentUser] = useState(null);
  const [kids, setKids] = useState(() => {
    const saved = localStorage.getItem('kidsData');
    return saved ? JSON.parse(saved) : defaultKids;
  });
  const [parentPassword, setParentPassword] = useState(() => {
    const saved = localStorage.getItem('parentPassword');
    return saved ? saved : 'parent123';
  });
  const [showNotification, setShowNotification] = useState(null);
  const [showAdminSettings, setShowAdminSettings] = useState(false);

  // Save kids data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('kidsData', JSON.stringify(kids));
  }, [kids]);

  // Save parent password to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('parentPassword', parentPassword);
  }, [parentPassword]);

  const handleParentLogin = (password) => {
    if (password === parentPassword) {
      setCurrentUser({ type: 'parent' });
      setShowNotification({ type: 'success', message: 'Parent login successful!' });
      setTimeout(() => setShowNotification(null), 3000);
    } else {
      setShowNotification({ type: 'error', message: 'Invalid password' });
      setTimeout(() => setShowNotification(null), 3000);
    }
  };

  const handleKidLogin = (kidId, password) => {
    const kid = kids.find(k => k.id === kidId);
    if (kid && password === kid.password) {
      setCurrentUser({ type: 'kid', kidId, name: kid.name });
      setShowNotification({ type: 'success', message: `Welcome, ${kid.name}!` });
      setTimeout(() => setShowNotification(null), 3000);
    } else {
      setShowNotification({ type: 'error', message: 'Invalid credentials' });
      setTimeout(() => setShowNotification(null), 3000);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowNotification({ type: 'success', message: 'Logged out successfully' });
    setTimeout(() => setShowNotification(null), 3000);
  };

  const handleChoreUpdate = (kidId, choreId, dayIndex) => {
    setKids(kids.map(kid => {
      if (kid.id === kidId) {
        const updatedChores = kid.chores.map(chore => {
          if (chore.id === choreId) {
            const newDays = [...chore.days];
            newDays[dayIndex] = !newDays[dayIndex];
            return { ...chore, days: newDays };
          }
          return chore;
        });

        const totalEarned = updatedChores.reduce((sum, chore) => {
          const completedDays = chore.days.filter(d => d).length;
          return sum + (chore.reward * completedDays);
        }, 0);

        return { ...kid, chores: updatedChores, deviceTimeEarned: totalEarned };
      }
      return kid;
    }));

    setShowNotification({ type: 'success', message: 'Chore updated!' });
    setTimeout(() => setShowNotification(null), 2000);
  };

  const handleDeviceTimeUpdate = (kidId, minutesUsed) => {
    setKids(kids.map(kid => {
      if (kid.id === kidId) {
        return { ...kid, deviceTimeUsed: Math.max(0, kid.deviceTimeEarned - minutesUsed) };
      }
      return kid;
    }));
  };

  const handleResetWeek = (kidId) => {
    setKids(kids.map(kid => {
      if (kid.id === kidId) {
        const resetChores = kid.chores.map(chore => ({
          ...chore,
          days: [false, false, false, false, false, false, false]
        }));
        return { ...kid, chores: resetChores, deviceTimeEarned: 0, deviceTimeUsed: 0 };
      }
      return kid;
    }));
    setShowNotification({ type: 'success', message: 'Week reset successfully!' });
    setTimeout(() => setShowNotification(null), 3000);
  };

  const handleKidsUpdate = (updatedKids) => {
    setKids(updatedKids);
  };

  const handleParentPasswordUpdate = (newPassword) => {
    setParentPassword(newPassword);
  };

  return (
    <div className="app-container">
      {!currentUser ? (
        <LoginScreen
          onParentLogin={handleParentLogin}
          onKidLogin={handleKidLogin}
          kids={kids}
        />
      ) : currentUser.type === 'parent' ? (
        <>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', padding: '10px' }}>
            <button
              className={`btn ${showAdminSettings ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setShowAdminSettings(!showAdminSettings)}
            >
              {showAdminSettings ? '👨‍👧‍👦 Dashboard' : '⚙️ Admin Settings'}
            </button>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
          {showAdminSettings ? (
            <AdminSettings
              kids={kids}
              onKidsUpdate={handleKidsUpdate}
              parentPassword={parentPassword}
              onParentPasswordUpdate={handleParentPasswordUpdate}
            />
          ) : (
            <ParentDashboard
              kids={kids}
              onChoreUpdate={handleChoreUpdate}
              onResetWeek={handleResetWeek}
            />
          )}
        </>
      ) : (
        <>
          <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <KidDashboard
            kid={kids.find(k => k.id === currentUser.kidId)}
            onChoreUpdate={handleChoreUpdate}
            onDeviceTimeUpdate={handleDeviceTimeUpdate}
          />
        </>
      )}

      {showNotification && (
        <div className={`notification ${showNotification.type}`}>
          {showNotification.message}
        </div>
      )}
    </div>
  );
}

export default App;
