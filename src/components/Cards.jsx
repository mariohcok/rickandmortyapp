import Card from './Card.jsx';
import styles from "../styles/Cards.module.css"


export default function Cards({ characters, onClose }) {

   return (
    <div className={styles.mainDiv}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
            origin={character.origin.name}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};