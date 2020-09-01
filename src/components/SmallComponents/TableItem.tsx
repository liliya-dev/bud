import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedItem, removeSelectedItem } from '../../store/selectedList';

interface Props {
  number: number;
  isChecked: boolean;
}

const TableItemWithoutMemo: React.FC<Props> = ({ number, isChecked }) => {
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

export const TableItem = React.memo(TableItemWithoutMemo);