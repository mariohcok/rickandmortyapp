import Card from './Card.jsx';
import styles from "../styles/Cards.module.css"


export default function Cards({ characters }) {

   return (
    <div className={styles.mainDiv}>
      {characters.map((character) =>
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            origin={character.origin.name}
            onClose={() => window.alert(`Emulamos que se cierra la card: ${character.id}`)}
          />
        )
      })
    </div>
  )
}