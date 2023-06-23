import { useState } from 'react';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import './App.css';



function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      if (id === '') return;
      if (id > 826) {
         window.alert('¡No existe personaje con ese ID!');
         return;
      }

      const repeat = characters.find(
         (character) => character.id === Number(id)
      );
      if (repeat) return;

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         setCharacters((oldChars) => [data,...oldChars]);
         } 
      );
   };

   const random = () =>{
      const randomId = Math.ceil(Math.random() * 826);
      onSearch(randomId);
   }


   const onClose = (id) =>{
      // const filtered = characters.filter((character) => character.id !== id)
      setCharacters(characters.filter((character) => character.id !== Number(id)))
   };

   return (
      <div className='App'>
         <Nav onSearch={onSearch} random={random}/>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
