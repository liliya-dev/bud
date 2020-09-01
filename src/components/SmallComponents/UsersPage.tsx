import React, { useEffect, useState } from 'react';
import { User } from '../../interfaces';
import { UsersList } from './UsersList';

interface Props {
  startEditing: (user: User) => (void)
}

export const UsersPage: React.FC<Props> = ({ startEditing }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    var db = window.openDatabase("users", "1.0", "Test DB", 1000000);
    if (db) {
      db.transaction(function (tx) { 
        return tx.executeSql('SELECT * FROM UserData', [], function (tx, results) {
          if(results) {
            const usersFromDataBase = results.rows;
            const preparedUsers: User[] = Object.values(usersFromDataBase);
            setUsers(preparedUsers);
          }
        }); 
     });
    }
  }, []);

  const deleteTemp = (id: string) => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="users">
      <input 
        type="text"
        placeholder="&#128270; Search"
        value={search}
        className="users__search"
        onChange={(ev: any) => setSearch(ev.target.value)}
      />
      {
        users.length > 0 && (
          <UsersList 
            startEditing={startEditing}
            users={users.filter(user => (user.name + user.surname).includes(search))}
            deleteTemp={deleteTemp}
          />
        )
      }
    </div>
  )
}