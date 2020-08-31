import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedList } from '../../store/index';

interface Props {
  number: number;
}

export const ModalItem: React.FC<Props> = ({ number }) => {
  const activeList: number[] = useSelector(getSelectedList);
  const isActive = activeList.includes(number);
  return (
    <li 
      className={!isActive ? "options__item" : "options__item options__active-item"} 
    >
      <p className="options__text">
        {number}.
      </p>
      <p className="options__text">
        Text
        &nbsp;
        {number}
      </p>
    </li>
  )
}