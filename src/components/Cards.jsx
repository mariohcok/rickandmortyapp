import Card from './Card';
import styles from "../styles/Cards.module.css"


export default function Cards({ characters }) {
   return (
    <div className={styles.mainDiv}>{

      characters.map(({id, name, status, species, gender, origin, image }) => {
        return(
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            onclose={() => window.alert(`Emulamos que se cierra la card: ${id}`)}
          />
        )
      })
      }
    </div>
  )
}