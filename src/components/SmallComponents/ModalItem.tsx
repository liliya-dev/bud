import React from 'react';

interface Props {
  number: number;
  activeList: number[];
}

export const ModalItem: React.FC<Props> = ({ number, activeList }) => {
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