import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from '../styles/Detail.module.css'


const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
      <div className={styles.container}>
        <h1>Character info</h1><br/>
        {character.name && (
          <>
            <img src={character.image} alt=""/>
            <p>Name:</p><h2>{character.name}</h2>
            <p>Status:</p><h2>{character.status}</h2>
            <p>Species:</p><h2>{character.species}</h2>
            <p>Gender:</p><h2>{character.gender}</h2>
            <p>Origin:</p><h2>{character.origin?.name}</h2>
          </>
        )}
      <button className={styles.btn} onClick={() => navigate('/home')}>Back to Home</button>
      </div>
  );
};

export default Detail;