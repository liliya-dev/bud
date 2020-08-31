import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchLogDataWithToken } from '../../helpers/fetchData';
import { getRegisteredUser } from '../../store';
import { setAuthorization } from '../../store/autorizes';
import { setRegisteredUser } from '../../store/registeredUser';

export const Logout = () => {
  const userName = useSelector(getRegisteredUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await fetchLogDataWithToken('POST', '/logout', {}, localStorage.getItem('token'));
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(setAuthorization(false));
    dispatch(setRegisteredUser(''));
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
          {userName}
        </p>
    </li>
  </span>
  )
}