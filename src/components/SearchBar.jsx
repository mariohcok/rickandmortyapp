import { useState } from 'react'
import styles from '../styles/SearchBar.module.css'


export default function SearchBar({ onSearch, random }) {
   const [id, setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value);
   };

   return (
      <div>
         {/* <form className={styles.form} onSubmit="event.preventDefault();" role="search">
            <label className={styles.label} for="search">Agregar</label>
            <input className={styles.input} id="search" type="search" placeholder="Buscar personaje" autofocus required />
            <button className={styles.button} onClick={ onSearch } type="submit">Agregar</button>    
         </form>       */}


         {/* SearchBar Cande */}
         <input className={styles.input} 
         type='search' 
         onChange={handleChange}
         value={id}
         />
         <button className={styles.button} 
         onClick={() => {onSearch(id)}}
         >Agregar</button>
         <button className={styles.button} onClick={random}>Random</button>
      </div>
   );
}

