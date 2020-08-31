import React from 'react';
import { User } from '../../interfaces';
import { UserItem } from './UserItem';

interface Props {
  users: User[];
  deleteTemp: (id: string) => (void);
  startEditing: (user: User) => void;
}

export const UsersList: React.FC<Props> = ({ users, deleteTemp, startEditing }) => {
  return (
    <table className="second__table">
      <thead className="second__table--head">
        <tr>
          <th className="second__column-name">
            Full Name
          </th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => (
            <UserItem 
              startEditing={startEditing}
              deleteTemp={deleteTemp} 
              key={user.id} 
              user={user} 
            />
          )
         )
        }
      </tbody>
    </table>
  )
}