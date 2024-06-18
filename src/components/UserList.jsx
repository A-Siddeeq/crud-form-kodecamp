import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {

    const listStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '4px 0px',
    }

    const theadStyle = {
        background: 'rgba(17, 26, 2, 0.714)',
        color: '#fff'
    }

    const tableRowStyle = {
        padding: '14px'
    }

    const tbodyStyle = {
        margin: '4px 0px',
        padding: '4px'
    }

  return (
    <div style={listStyle}>
      <table border={1}>
        <thead style={theadStyle}>
          <tr>
            <th style={tableRowStyle}>Name</th>
            <th style={tableRowStyle}>Age</th>
            <th style={tableRowStyle}>Birthday</th>
            <th style={tableRowStyle}>Edit/Del</th>
          </tr>
        </thead>
        <tbody style={tbodyStyle}>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={tableRowStyle}>{user.name}</td> 
              <td style={tableRowStyle}>{user.age}</td> 
              <td style={tableRowStyle}>{user.birthday}</td> 
              <td style={tableRowStyle}>
                <button onClick={() => onEdit(user.id)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;