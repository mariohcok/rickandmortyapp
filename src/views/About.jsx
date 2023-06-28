import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
            <div className={styles.circles}></div>
            <div className={styles.detailsContainer}>
                <div className={styles.avatar}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/de64be69857115.5bef33481cc2b.png" className={styles.imgFluid} alt=""/>
                </div>
                <div className={styles.about}>
                    <div className={styles.name}>
                        <p>
                            Hola!
                        </p>
                        <h1 className={styles.h1Title}>
                            Soy Mario Cardozo
                        </h1>
                    </div>
                    <div className={styles.aboutContent}>
                    <h2>Acerca de mi</h2>
                        <p>¡Hola! Soy un programador junior apasionado por la tecnología y el aprendizaje constante. Estoy en búsqueda de mi primera oportunidad laboral en el mundo de la programación y estoy seguro de que puedo ser un gran activo para cualquier equipo.</p>
                        <p>Aunque soy un programador junior, tengo una sólida base en los lenguajes de programación como JavaScript, Python y HTML/CSS, así como experiencia práctica en el desarrollo de aplicaciones web y móviles. Estoy siempre buscando aprender nuevas tecnologías y herramientas para mejorar mis habilidades y conocimientos.</p>
                        <p>Además de mi formación técnica, soy un excelente comunicador y trabajo bien en equipo. Me gusta colaborar con otros para encontrar soluciones creativas a los problemas. Estoy comprometido con la calidad y el detalle, y siempre me esfuerzo por crear software limpio, escalable y fácil de mantener.</p>
                        <p>Si está buscando un programador junior con una gran actitud, habilidades técnicas y una gran pasión por la programación, por favor contáctame. Estoy emocionado por tener la oportunidad de trabajar en un equipo dinámico y aprender de profesionales experimentados en el campo.</p> 
                        <p>¡Gracias por tu tiempo y consideración!</p>
      
                        <button className={styles.btn}>Descargar CV</button>
                    </div>
                </div>
                <div className={styles.clear}></div>
            </div>
            <div className={styles.skillsContainer}>
                <button className={styles.btn}>
                    Reader
                </button >
                <button className={styles.btn}>
                    Coder
                </button>
                <button className={styles.btn}>
                    Designer
                </button>
            </div>
        </div> 
  )
}

export default About