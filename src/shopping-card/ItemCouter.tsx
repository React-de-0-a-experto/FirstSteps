import React, { type CSSProperties } from 'react'

const styleButtons: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10
}
const styleTitle: CSSProperties = {
  width: 150,
}

interface Props {
  name: string,
  quantity?: number,
};



/* Si pones rafc te auto rellena la funt */
export const ItemCouter = ({ name, quantity }: Props) => {
  return (
    <section style={styleButtons}>
      <span style={styleTitle}>{name}</span>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  )
}
