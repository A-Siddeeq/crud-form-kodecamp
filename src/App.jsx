import React, { useState, useEffect } from 'react';
import UserData from './components/UserData'; 
import UserList from './components/UserList';
import './App.css'

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleSaveUser = (userData) => {
    if (selectedUser) {
      const updatedUsers = users.map(user =>
        user.id === selectedUser.id ? { ...userData, id: selectedUser.id } : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null); 
    } else {
      setUsers([...users, userData]);
    }
  };

  const handleEditUser = (userId) => {
    const userToEdit = users.find(user => user.id === userId);
    if (userToEdit) {
      setSelectedUser(userToEdit);
    } else {
      return null;
    }
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <UserData selectedUser={selectedUser} onSave={handleSaveUser} />
      <UserList users={users} onEdit={handleEditUser} onDelete={handleDeleteUser} />
    </div>
  );
}

export default App;
