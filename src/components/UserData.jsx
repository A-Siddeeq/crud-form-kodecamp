import React, { useState, useEffect } from 'react';
import '../style.css';

const UserData = ({ selectedUser, onSave }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setAge(selectedUser.age);
      setBirthday(selectedUser.birthday);
    } else {
      setName('');
      setAge('');
      setBirthday('');
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id: selectedUser ? selectedUser.id : Date.now(), name, age, birthday });
    setName('');
    setAge('');
    setBirthday('');
  };

  return (
    <div className="container">
      <div className="box">
        <h1>USERS LIST</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Your name'
            required
          />
          <label htmlFor="age">Your age</label>
          <input 
            type="text"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder='Your age'
            required
          />
          <label htmlFor="dob">Birthday</label>
          <input 
            type="date"
            name="dob"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            placeholder='Date of birth'
            required
          />
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserData;
