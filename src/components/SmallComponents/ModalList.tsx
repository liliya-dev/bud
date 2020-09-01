import React from 'react';
import { ModalItem } from './ModalItem';

interface Props {
  numbers: number[];
  scrollableEl: any;
  activeList: number[];
}

export const ModalList: React.FC<Props> = ({ numbers, scrollableEl, activeList }) => {
  return (
    <ul className="options" ref={scrollableEl}>
    {
      numbers.map((number) => <ModalItem activeList={activeList} number={number} key={Date.now() + number}/>)
    }
  </ul>
  )
}