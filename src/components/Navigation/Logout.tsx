import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogDataWithToken } from '../../helpers/fetchData';
import { getRegisteredUser } from '../../store';
import { setAuthorization } from '../../store/autorizes';
import { setRegisteredUser } from '../../store/registeredUser';

export const Logout = () => {
  const userName = useSelector(getRegisteredUser);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    console.log('1234567')
    await fetchLogDataWithToken('POST', '/logout', {}, localStorage.getItem('token'));
    console.log(1)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(setAuthorization(false));
    console.log(1)
    dispatch(setRegisteredUser(''));
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