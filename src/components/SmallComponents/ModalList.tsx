import React from 'react';
import { ModalItem } from './ModalItem';

interface Props {
  numbers: number[];
  scrollableEl: any;
}

export const ModalList: React.FC<Props> = ({ numbers, scrollableEl }) => {
  return (
    <ul className="options" ref={scrollableEl}>
    {
      numbers.map((number) => <ModalItem number={number} key={Date.now() + number}/>)
    }
  </ul>
  )
}