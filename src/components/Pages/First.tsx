import React, { useState } from 'react';
import { ModalWindow } from '../SmallComponents/ModalWindow';

interface Props {
  activeList: number[];
}

export const First: React.FC<Props> = ({ activeList }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  
  const showModal = (value: boolean) => {
    setIsVisibleModal(value)
  }
  return (
    <div className="first page">
      {
        !isVisibleModal
        ? (
          <button className="first__button" onClick={() => setIsVisibleModal(true)}>Open</button>
        )
        : (
          <ModalWindow activeList={activeList} showModal={showModal} />
        )
      }
    </div>
  )
}