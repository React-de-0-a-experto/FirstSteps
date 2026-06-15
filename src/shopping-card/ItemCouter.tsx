import React, { useState, type CSSProperties } from 'react'

/* import './ItemCounter.css' */
import styles from './ItemCounter.module.css';

interface Props {
  name: string,
  quantity: number,
};

/* Si pones rafc te auto rellena la funt */
export const ItemCouter = ({ name, quantity}: Props) => {
  const [count, setCount] = useState(quantity);
  const handleAdd = () => setCount(count + 1) ;
  const handleSubtract = () => 
  {
    if (count === 1) return;
      
    
    setCount(count - 1);
  };
  const handledClick = () => { console.log(`click ${name}`) };
  return (
    <section className={styles.itemRow}>
      <span className={styles.itemText} style={{color: count === 1 ? 'red' : 'black'}}>{name}</span>
      <button onClick={handleAdd}
      >+1</button>
      <span>{count}</span>
      <button onClick={handleSubtract} >-1</button>
    </section>
  )
}
