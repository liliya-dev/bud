import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNumbers } from '../../helpers/setNumbers';
import { getSelectedList } from '../../store';
import { TableItem } from '../SmallComponents/TableItem';
import { cancelAll, selectAll } from '../../store/selectedList';

const SecondWithoutMemo = () => {
  const quantity = 2000;
  const numbers = useMemo(() => setNumbers(quantity), [quantity]);
  const activeList: number[] = useSelector(getSelectedList);
  const isChecked = activeList.length === quantity;
  const dispatch = useDispatch();

  const handleSelect = (ev: any) => {
    const value = ev.target.checked;
    if (value) {
      dispatch(selectAll(numbers))
    } else {
      dispatch(cancelAll())
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
              numbers.map(number => <TableItem key={number} number={number} isChecked={activeList.includes(number)}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const Second = React.memo(SecondWithoutMemo);