import React from 'react';
import { User } from '../../interfaces';

interface Props {
  user: User;
  deleteTemp: (id: string) => (void);
  startEditing: (user: User) => void;
}

export const UserItem: React.FC<Props> = ({ user, deleteTemp, startEditing }) => {
  const handleDelete = () => {
    let db = window.openDatabase("users", "1.0", "Test DB", 1000000);
    if (db) {
      db.transaction(function (tx) { 
        tx.executeSql(`DELETE FROM UserData WHERE id=${user.id}`); 
     });
     deleteTemp(user.id);
    }
  }
  return (
    <tr>
      <td>
        {user.name}
        &nbsp;
        {user.surname}
      </td>
      <td>
        {user.phone}
      </td>
      <td>
        <button 
          className="users__action"
          onClick={handleDelete}
        >
          &#128465;
        </button>
        <button 
          className="users__action"
          onClick={() => startEditing(user)}
        >
          &#9997;
        </button>
      </td>
    </tr>
  )
}