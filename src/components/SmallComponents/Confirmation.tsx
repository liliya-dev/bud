import React from 'react';

interface Props {
  id: string;
  name: string
}

export const Confirmation: React.FC<Props> = ({ id, name }) => {
  return (
    <h1>confirmation</h1>
  )
}