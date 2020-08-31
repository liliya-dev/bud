import React from 'react';
import { useSelector } from 'react-redux';
import { getAuthorization } from '../../store';
import { Login } from './Login';
import { Logout } from './Logout';

export const Navigation: React.FC = () => {
  const isAuthorized = useSelector(getAuthorization);

  return (
    <ul className="navigation">   
      {
        !isAuthorized 
          ? <Login/>
          : <Logout />
      }
    </ul>
  )
}