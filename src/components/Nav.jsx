import React from 'react'
import SearchBar from './SearchBar.jsx'
import styles from '../styles/Nav.module.css'
import image from '../image/rymcircle.gif'
import { Link } from 'react-router-dom'

const Nav = ({onSearch, random, logout}) => {
  return (
//     <nav className={styles.menuContainer}>
//   {/* <!-- burger menu --> */}
//   <input img type="checkbox" aria-label="Toggle menu" />
//   <span></span>
//   <span></span>
//   <span></span>

//   {/* <!-- logo --> */}
//   <a href="http://localhost:3000/" className={styles.menuLogo}>
//     <img src={image} alt="My Awesome Website"/>
//   </a>

//   {/* <!-- menu items --> */}
//   <div className={styles.menu}>
//     <ul>
//       <li>
//         <a href="#home">
//           Home
//         </a>
//       </li>
//       <li>
//         <a href="#pricing">
//           detail
//         </a>
//       </li>
//       <li>
//         <a href="#blog">
//           About
//         </a>
//       </li>
//       <li>
//         </li>
//     </ul>
//     <SearchBar onSearch={onSearch}/>
//     <ul>
//       <li>
//         <a href="#signup">
//           Sign-up
//         </a>
//       </li>
//       <li>
//         <a href="#login">
//           Login
//         </a>
//       </li>
//     </ul>
//   </div>
//   <div>
//   </div>

// </nav>

// Nav Cande
  <nav className={styles.menuContainer}>
    <img className={styles.menuLogo}
      src={image}
      alt=''
      width='20%'
    />
      <Link to={"/home"} style={{ textDecoration: 'none', color: 'white' }}>
        Home
      </Link>
      <Link to={"/About"} style={{ textDecoration: 'none', color: 'white' }}>
        About
      </Link>
      <Link style={{ textDecoration: 'none', color: 'white' }} onClick={logout}>Logout</Link>
      <SearchBar onSearch={onSearch} random={random}/>
  </nav>

  )
}

export default Nav