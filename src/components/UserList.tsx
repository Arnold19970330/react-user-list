import React from 'react'
import type { User } from '../types/UserType';

interface UserListProps {
  users: User[];
  onSelect: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onSelect  }) => {
  return (
    <ul className="space-y-4">
      {users.map(user => (
        <li
          onClick={() => onSelect(user)}
          key={user.id}
          className="p-4 bg-zinc-900 rounded-lg shadow hover:bg-zinc-800 transition duration-200 cursor-pointer"
        >
          <p className="text-xl font-semibold text-green-400">{user.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default UserList
