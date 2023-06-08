import styles from '../styles/Card.module.css'
export default function Card({id, name, status, species, gender, origin, image, onclose}) {

   return (

<div key={id} className={styles.flipCardContainer} >
  <div className={styles.flipCard}>

    <div className={styles.cardFront}>
    <button className={styles.btn} onClick={onclose}>X</button>
      <figure>
        <div className={styles.imgBg}></div>
        <img src={image} alt="character"/>
        <figcaption>{name}</figcaption>
      </figure>

      <ul>
        <li>{status}</li>
        <li>{species}</li>
        <li>{gender}</li>
        <li>{origin.name}</li>
        <li>{}</li>
      </ul>
    </div>

    <div className={styles.cardBack}>
    <button className={styles.btn} onClick={onclose}>X</button>
      <figure>
        <div className={styles.imgBg}></div>
        <img src={image} alt="character"/>
      </figure>

      <button>Detalle</button>

      <div className={styles.designContainer}>
        <span className={styles.designUno}></span>
        <span className={styles.designDos}></span>
        <span className={styles.designTres}></span>
        <span className={styles.designCuatro}></span>
        <span className={styles.designCinco}></span>
        <span className={styles.designSeis}></span>
        <span className={styles.designSiete}></span>
        <span className={styles.designOcho}></span>
      </div>
    </div>

  </div>
</div>





      // <div key={id} className={styles.card}>
      //    <button onClick={onclose}>X</button>
      //    <h2>{name}</h2>
      //    <h2>{status}</h2>
      //    <h2>{species}</h2>
      //    <h2>{gender}</h2>
      //    <h2>{origin.name}</h2>
      //    <img src={image} alt='character' />
      // </div>
   );
}