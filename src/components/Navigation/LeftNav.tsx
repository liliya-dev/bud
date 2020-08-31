import React from 'react';
import { NavLink } from 'react-router-dom';

export const LeftNav = () => {
  return (
    <ul className="left-nav">
      <li className="left-nav__item">
        <NavLink to='/page1' className='left-nav__link'>Страница 1</NavLink>
      </li>
      <li className="left-nav__item">
        <NavLink to='/page2' className='left-nav__link'>Страница 2</NavLink>
      </li>
      <li className="left-nav__item">
        <NavLink to='/page3' className='left-nav__link'>Страница 3</NavLink>
      </li>
    </ul>
  )
}