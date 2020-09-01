import React from 'react';

interface Props {
  number: number;
  isChecked: boolean;
  removeSelectedItem: (number: number) => (void);
  setSelectedItem: (number: number) => (void);
}

const TableItemWithoutMemo: React.FC<Props> = ({ 
  number, isChecked, setSelectedItem, removeSelectedItem 
}) => {
  const selectItem = (ev: any) => {
    const value = ev.target.checked;
    if (value) {
      setSelectedItem(number)
    } else {
      removeSelectedItem(number)
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