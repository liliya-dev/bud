import React from 'react';
import { NavLink } from 'react-router-dom';

export const Login = () => {
  return (
    <span className="navigation__wrapper">
    <li className="navigation__item">
      <NavLink  className="navigation__link" to="/enter/" exact>
        <p className="navigation__text">
          Enter
        </p>
      </NavLink>
    </li>
    <li className="navigation__item">
      <NavLink className="navigation__link" to="/register/" exact>
        <p className="navigation__text">
          Register
        </p>
      </NavLink>
    </li>
  </span>
  )
}