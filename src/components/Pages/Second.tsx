import React, { useMemo } from 'react';
import { setNumbers } from '../../helpers/setNumbers';
import { TableItem } from '../SmallComponents/TableItem';

interface Props {
  setAll: (list: number[]) => (void);
  cancelAll: () => (void);
  activeList: number[];
  removeSelectedItem: (number: number) => (void);
  setSelectedItem: (number: number) => (void);
}

const SecondWithoutMemo: React.FC<Props> = ({ 
  setAll, cancelAll, activeList, removeSelectedItem, setSelectedItem 
}) => {
  const quantity = 2000;
  const numbers = useMemo(() => setNumbers(quantity), [quantity]);
  const isChecked = activeList.length === quantity;

  const handleSelect = (ev: any) => {
    const value = ev.target.checked;
    if (value) {
      setAll(numbers)
    } else {
      cancelAll()
    }
  }

  return (
    <div className="second page">
      <div className="second__wrapper">
        <table className="second__table">
          <thead className="second__table--head">
            <tr>
              <th className="second__column-name">
                <input 
                  id="select__all" 
                  type="checkbox" 
                  className="second__select-all"
                  checked={isChecked}
                  onChange={(ev) => handleSelect(ev)}
                />
              </th>
              <th>Id</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {
              numbers.map(number => (
                <TableItem 
                  key={number} 
                  number={number} 
                  isChecked={activeList.includes(number)}
                  setSelectedItem={setSelectedItem}
                  removeSelectedItem={removeSelectedItem}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const Second = React.memo(SecondWithoutMemo);