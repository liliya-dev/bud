import React, { useMemo, useRef } from 'react';
import { ModalList } from './ModalList';
import { ModalLinks } from './ModalLinks';
import { Buttons } from './Buttons';
import { setNumbers } from '../../helpers/setNumbers';

interface Props {
  showModal: (value: boolean) => (void);
}

const Modal: React.FC<Props> = ({ showModal }) => {
  console.log('modal')
  const quantity = 50;
  const numbers = useMemo(() => setNumbers(quantity), [quantity]);
  const scrollableEl = useRef(null);

  return (
    <div className="modal">
      <ModalLinks numbers={numbers} scrollableEl={scrollableEl}/>
      <ModalList numbers={numbers} scrollableEl={scrollableEl} />
      <Buttons showModal={showModal} />
    </div>
  )
}

export const ModalWindow = React.memo(Modal);