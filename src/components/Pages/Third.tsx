import React, { useState } from 'react';
import { UsersList } from '../SmallComponents/UsersList';
import { AddForm } from '../SmallComponents/AddForm';

export const Third = () => {
  const [activeSection, setActiveSection] = useState('Add');

  const defineComponent = () => {
    switch(activeSection) {
      case 'Add':
        return <AddForm />;
      case 'List': 
        return <UsersList />
      default:
        return <AddForm />;
    }

  }

  const content = defineComponent();

  return (
    <div className="third page">
      <div className="third__wrapper">
        <button 
          className="third__tab"
          onClick={() => setActiveSection('Add')}
        >
          Add
        </button>
        <button 
          className="third__tab"
          onClick={() => setActiveSection('List')}
        >
          List
        </button>
      </div>
      {content}
    </div>
  )
}