import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = 'Password1@';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   function logout() {
         setAccess(false);
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access,navigate]);


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
   const allowedRoutes = [ '/home', '/about', '/detail/:id'];

   return (
      <div className='App'>
         {
            allowedRoutes.includes(pathname) && <Nav onSearch={onSearch} random={random} logout={logout}/>
         }         
         <Routes>
            <Route path='/' element={<Form  login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;
