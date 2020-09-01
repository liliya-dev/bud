import React from 'react';
// import { useSelector } from 'react-redux';
// import { getAuthorization } from '../../store';
import { Login } from './Login';
import { Logout } from './Logout';

interface Props {
  isAuthorized: boolean;
  name: string;
  handleLogin: (value: boolean) => (void);
}

export const Navigation: React.FC<Props> = ({ isAuthorized, name, handleLogin }) => {
  // const isAuthorized = useSelector(getAuthorization);

  return (
    <ul className="navigation">   
      {
        !isAuthorized 
          ? <Login/>
          : <Logout handleLogin={handleLogin} name={name} />
      }
    </ul>
  )
}