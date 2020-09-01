import React from 'react';
import { useHistory } from 'react-router-dom';


interface Props {
  name: string;
  handleLogin: (value: boolean) => (void);
}

export const Logout: React.FC<Props> = ({ name, handleLogin }) => {
  const history = useHistory();
  const handleLogout = async () => {
    handleLogin(false);
    localStorage.removeItem('user');
    history.push('/');
  }

  return (
    <span className="navigation__wrapper">
    <li className="navigation__item">
      <button onClick={handleLogout} className="navigation__button">
          Logout
      </button>
    </li>
    <li className="navigation__item">
        <p className="navigation__text">
          {name}
        </p>
    </li>
  </span>
  )
}