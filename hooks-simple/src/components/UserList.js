import React from 'react';
import useResources from './useResources.js';

const UserList = () => {
  const users = useResources('users');
  return (
    <ul className="">
      {users.map(user => <li key={user.id}>{user.name}</li>)};
    </ul>
  );
};

export default UserList;
