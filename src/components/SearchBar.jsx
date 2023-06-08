import styles from '../styles/SearchBar.module.css'


export default function SearchBar({ onSearch }) {
   return (
      <div>
         <form className={styles.form} onsubmit="event.preventDefault();" role="search">
            <label className={styles.label} for="search">Agregar</label>
            <input className={styles.input} id="search" type="search" placeholder="Buscar personaje" autofocus required />
            <button className={styles.button} onClick={ onSearch } type="submit">Agregar</button>    
         </form>
      </div>
   );
}

