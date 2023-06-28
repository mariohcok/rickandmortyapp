import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Form from './components/Form.jsx'
import About from './views/About.jsx';
import Detail from './views/Detail.jsx'
import Error from './views/Error.jsx';
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

   const { pathname } = useLocation();

   return (
      <div className='App'>
         {
            pathname !== '/' && <Nav onSearch={onSearch} random={random}/>
         }         
         <Routes>
            <Route path='/' element={<Form />}/>
            <Route path='home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail />}></Route>
            <Route path='*' element={<Error />}/>
         </Routes>
      </div>
   );
}

export default App;
