import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedList } from '../../store';
import { setSelectedItem, removeSelectedItem } from '../../store/selectedList';

interface Props {
  number: number;
}

export const TableItem: React.FC<Props> = ({ number }) => {
  const activeList: number[] = useSelector(getSelectedList);
  const isChecked = activeList.includes(number);
  const dispatch = useDispatch();

  const selectItem = (ev: any) => {
    const value = ev.target.checked;
    if (value) {
      dispatch(setSelectedItem(number))
    } else {
      dispatch(removeSelectedItem(number))
    }
  }

  return (
    <tr>
      <td>
        <input 
          type="checkbox"
          checked={isChecked}
          onChange={(ev) => selectItem(ev)}
        />
      </td>
      <td>
        {number}
      </td>
      <td>
        Random Text number {number}
      </td>
    </tr>
  )
}