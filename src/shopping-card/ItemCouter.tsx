import React, { type CSSProperties } from 'react'

const styleButtons: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10
}
const styleTitle: CSSProperties = {
  width: 150,
}
/* Si pones rafc te auto rellena la funt */
export const ItemCouter = () => {
  return (
    <section style={styleButtons}>
      <span style={styleTitle}>Nintendo Switch 2</span>
      <button>+1</button>
      <span>10</span>
      <button>-1</button>
    </section>
  )
}
