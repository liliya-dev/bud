import React, { useEffect, useState } from 'react';
import { UsersPage } from '../SmallComponents/UsersPage';
import { AddForm } from '../SmallComponents/AddForm';
import { User } from '../../interfaces';

const zeroState = {
  name: '',
  email: '',
  surname: '',
  phone: '',
  additionalPhone: '',
  additionalMail: '',
  isPhoneVisible: false,
  isMailVisible: false,
  id: '',
}

export const Third = () => {
  const [activeSection, setActiveSection] = useState('List');
  const [isEdit, setIsEdit] = useState(false);
  const [initialStates, setInitialStates] = useState(zeroState)

  const startEditing = (user: User) => {
    setActiveSection('Add');
    setIsEdit(true);
    console.log(user.phone.split('  '))
    const phones = user.phone.split('  ');
    const emails = user.email.split('  ');
    const secondPhone = phones.length === 2 ? phones[1] : '';
    const secondMail = emails.length === 2 ? emails[1] : '';
    
    setInitialStates({
      name: user.name,
      surname: user.surname,
      phone: phones[0],
      additionalMail: secondMail,
      additionalPhone: secondPhone,
      email: emails[0],
      isMailVisible: emails.length === 2,
      isPhoneVisible: phones.length === 2,
      id: user.id
    })
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
      // default:
      //   return <AddForm />;
    }
  }

  useEffect(() => {
    var db = window.openDatabase("users", "1.0", "Test DB", 1000000);
    db.transaction(function (tx) {   
      tx.executeSql('CREATE TABLE IF NOT EXISTS UserData (id, name, surname, phone, email)');
   });
    console.log(1111)
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