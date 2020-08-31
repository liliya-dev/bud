import React, { useState } from 'react';
import { ModalWindow } from '../SmallComponents/ModalWindow';

export const First = () => {
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
          <ModalWindow showModal={showModal} />
        )
      }
    </div>
  )
}