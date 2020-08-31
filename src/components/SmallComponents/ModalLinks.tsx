import React from 'react';
import { useSelector } from 'react-redux';
import { getSelectedList } from '../../store';

interface Props {
  numbers: number[];
  scrollableEl: any;
}

function scrollTo(index: number, container: any) {
  container.scrollTop = index * 55;
}

export const ModalLinks: React.FC<Props> = ({ numbers, scrollableEl }) => {
  const activeList: number[] = useSelector(getSelectedList);
   
  return (
    <ul className="modal__pages">
        {
          numbers.map((number, index) => {
            return (
              <li className="modal__item" key={Date.now() + number}>
                <button 
                  className={
                    activeList.includes(number) 
                    ? "modal__page-button--active" 
                    : "modal__page-button" 
                  } 
                  onClick={() => scrollTo(index, scrollableEl.current)}
                >
                  {number}
                </button>
              </li>
            )
          })
        }
      </ul>
  )
}