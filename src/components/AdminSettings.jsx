import React, { useState } from 'react';

function AdminSettings({ kids, onKidsUpdate, parentPassword, onParentPasswordUpdate }) {
  const [newChoreName, setNewChoreName] = useState('');
  const [newChoreReward, setNewChoreReward] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPasswordEdit, setShowPasswordEdit] = useState(false);

  const handleAddChore = (kidId) => {
    if (!newChoreName.trim() || !newChoreReward.trim()) {
      alert('Please enter chore name and reward value');
      return;
    }

    const updatedKids = kids.map(kid => {
      if (kid.id === kidId) {
        const newId = Math.max(...kid.chores.map(c => c.id)) + 1;
        return {
          ...kid,
          chores: [
            ...kid.chores,
            {
              id: newId,
              name: newChoreName,
              reward: parseInt(newChoreReward),
              days: [false, false, false, false, false, false, false]
            }
          ]
        };
      }
      return kid;
    });

    onKidsUpdate(updatedKids);
    setNewChoreName('');
    setNewChoreReward('');
    alert('Chore added successfully!');
  };

  const handleDeleteChore = (kidId, choreId) => {
    if (!window.confirm('Delete this chore? This cannot be undone.')) return;

    const updatedKids = kids.map(kid => {
      if (kid.id === kidId) {
        return {
          ...kid,
          chores: kid.chores.filter(c => c.id !== choreId)
        };
      }
      return kid;
    });

    onKidsUpdate(updatedKids);
    alert('Chore deleted!');
  };

  const handleEditChore = (kidId, choreId, newName, newReward) => {
    if (!newName.trim() || !newReward) {
      alert('Please enter valid chore name and reward');
      return;
    }

    const updatedKids = kids.map(kid => {
      if (kid.id === kidId) {
        return {
          ...kid,
          chores: kid.chores.map(c => {
            if (c.id === choreId) {
              return { ...c, name: newName, reward: parseInt(newReward) };
            }
            return c;
          })
        };
      }
      return kid;
    });

    onKidsUpdate(updatedKids);
    alert('Chore updated!');
  };

  const handleEditPassword = (kidId, newPass) => {
    if (!newPass.trim()) {
      alert('Password cannot be empty');
      return;
    }

    const updatedKids = kids.map(kid => {
      if (kid.id === kidId) {
        return { ...kid, password: newPass };
      }
      return kid;
    });

    onKidsUpdate(updatedKids);
    alert('Password updated!');
  };

  return (
    <div className="admin-settings">
      <div className="header">
        <h1>⚙️ Admin Settings</h1>
        <p>Manage kids, chores, passwords, and rewards</p>
      </div>

      {/* Parent Password */}
      <div className="card">
        <h2>🔐 Parent Password</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ fontSize: '1.1em', fontWeight: '600' }}>Current: {parentPassword}</span>
          <button
            className="btn btn-secondary"
            onClick={() => setShowPasswordEdit(!showPasswordEdit)}
          >
            {showPasswordEdit ? 'Cancel' : 'Change'}
          </button>
        </div>

        {showPasswordEdit && (
          <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="New parent password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={{
                flex: 1,
                padding: '10px',
                border: '2px solid #ddd',
                borderRadius: '6px',
                fontSize: '1em'
              }}
            />
            <button
              className="btn btn-success"
              onClick={() => {
                onParentPasswordUpdate(newPassword);
                setNewPassword('');
                setShowPasswordEdit(false);
                alert('Parent password updated!');
              }}
            >
              Save
            </button>
          </div>
        )}
      </div>

      {/* Kids & Chores */}
      {kids.map(kid => (
        <div key={kid.id} className="card">
          <h2>👧 {kid.name} ({kid.age} years old)</h2>

          {/* Kid Password */}
          <div style={{
            background: '#f9f9f9',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>Login Password:</strong>
                <div style={{ fontSize: '1.1em', color: '#667eea', marginTop: '5px' }}>
                  {kid.password}
                </div>
              </div>
              <input
                type="text"
                placeholder="New password"
                defaultValue={kid.password}
                style={{
                  padding: '8px 12px',
                  border: '2px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '0.9em',
                  width: '200px'
                }}
                onBlur={(e) => {
                  if (e.target.value && e.target.value !== kid.password) {
                    handleEditPassword(kid.id, e.target.value);
                  }
                }}
              />
            </div>
          </div>

          {/* Add New Chore */}
          <div style={{
            background: '#e8f5e9',
            padding: '15px',
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h3 style={{ marginBottom: '15px', color: '#2e7d32' }}>➕ Add New Chore</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 150px 100px', gap: '10px' }}>
              <input
                type="text"
                placeholder="Chore name"
                value={newChoreName}
                onChange={(e) => setNewChoreName(e.target.value)}
                style={{
                  padding: '10px',
                  border: '2px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1em'
                }}
              />
              <input
                type="number"
                placeholder="Minutes reward"
                value={newChoreReward}
                onChange={(e) => setNewChoreReward(e.target.value)}
                min="1"
                style={{
                  padding: '10px',
                  border: '2px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '1em'
                }}
              />
              <button
                className="btn btn-success"
                onClick={() => handleAddChore(kid.id)}
              >
                Add Chore
              </button>
            </div>
          </div>

          {/* Edit Existing Chores */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '15px' }}>📋 Current Chores ({kid.chores.length})</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {kid.chores.map(chore => (
                <div
                  key={chore.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 100px 100px',
                    gap: '10px',
                    padding: '12px',
                    background: '#f9f9f9',
                    borderRadius: '6px',
                    alignItems: 'center'
                  }}
                >
                  <input
                    type="text"
                    defaultValue={chore.name}
                    style={{
                      padding: '8px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '0.95em'
                    }}
                    onBlur={(e) => {
                      if (e.target.value !== chore.name) {
                        handleEditChore(kid.id, chore.id, e.target.value, chore.reward);
                      }
                    }}
                  />
                  <input
                    type="number"
                    defaultValue={chore.reward}
                    min="1"
                    style={{
                      padding: '8px',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '0.95em',
                      textAlign: 'center'
                    }}
                    onBlur={(e) => {
                      if (parseInt(e.target.value) !== chore.reward) {
                        handleEditChore(kid.id, chore.id, chore.name, e.target.value);
                      }
                    }}
                  />
                  <div style={{ textAlign: 'center', fontWeight: '600', color: '#667eea' }}>
                    {chore.reward} min
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteChore(kid.id, chore.id)}
                    style={{ padding: '8px 12px', fontSize: '0.9em' }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Tips */}
      <div className="card" style={{ background: '#fff3cd', borderLeft: '4px solid #ffc107' }}>
        <h3>💡 Tips</h3>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>Click any chore name or reward value to edit immediately</li>
          <li>Changes apply instantly to the app</li>
          <li>Kids can see the updated rewards right away</li>
          <li>Delete removes a chore completely (cannot undo)</li>
          <li>Password changes take effect immediately</li>
          <li>All changes are saved in your browser</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminSettings;
