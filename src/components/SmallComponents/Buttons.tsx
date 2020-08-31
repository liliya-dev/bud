import React from 'react';

interface Props {
  showModal: (value: boolean) => (void);
}

export const Buttons: React.FC<Props> = ({ showModal }) => {
  return (
    <div className="modal__button-wrapper">
    <button 
      className="modal__cancel-button modal__button"
      onClick={() => showModal(false)}
    >
      Cancel
    </button>
    <button 
      className="modal__ok-button modal__button"
      onClick={() => showModal(false)}
    >
      OK
    </button>
  </div>
  )
}