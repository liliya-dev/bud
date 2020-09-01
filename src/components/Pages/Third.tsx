import React, { useEffect, useState } from 'react';
import { UsersPage } from '../SmallComponents/UsersPage';
import { AddForm } from '../SmallComponents/AddForm';
import { User } from '../../interfaces';
import { zeroState } from '../../helpers/constants';
import { handleEditing } from '../../helpers/handleEdit';

export const Third = () => {
  const [activeSection, setActiveSection] = useState('List');
  const [isEdit, setIsEdit] = useState(false);
  const [initialStates, setInitialStates] = useState(zeroState);

  const startEditing = (user: User) => {
    setActiveSection('Add');
    setIsEdit(true);
    const newStates = handleEditing(user);
    setInitialStates(newStates)
  }

  const finishEditing = () => {
    setInitialStates(zeroState);
    setActiveSection('List');
    setIsEdit(false);
  }

  const defineComponent = () => {
    switch(activeSection) {
      case 'Add':
        return <AddForm initialStates={initialStates} isEdit={isEdit} finishEditing={finishEditing}/>;
      case 'List': 
        return <UsersPage startEditing={startEditing}/>
      default:
        return <AddForm initialStates={initialStates} isEdit={isEdit} finishEditing={finishEditing}/>;
    }
  }

  useEffect(() => {
    var db = window.openDatabase("users", "1.0", "Test DB", 1000000);
    db.transaction(function (tx) {   
      tx.executeSql('CREATE TABLE IF NOT EXISTS UserData (id, name, surname, phone, email)');
   });
  }, [])
  const content = defineComponent();

  return (
    <div className="third page">
      <div className="third__wrapper">
        <button 
          className={activeSection==='Add' ? "third__tab third__tab--active" : "third__tab"}
          onClick={() => setActiveSection('Add')}
        >
          Add
        </button>
        <button 
          className={activeSection==='List' ? "third__tab third__tab--active" : "third__tab"}
          onClick={() => setActiveSection('List')}
        >
          List
        </button>
      </div>
      {content}
    </div>
  )
}