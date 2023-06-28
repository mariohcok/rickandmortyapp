import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Error.module.css'

const Error = () => {
    const navigate = useNavigate();

  return (
    <div className={styles.containerWrapper}>
    <div class="background-img">
		<div className={styles.space}></div>
			<div className={styles.wrapper}>
				<div className={styles.imgWrapper}>
					<span className={styles.span}>44</span>
				</div>
				<p className={styles.p}>The page you are trying to search has been <br/> moved to another universe.</p>
				<button className={styles.btnn} onClick={() => navigate('/home')}>GET ME HOME</button>
			</div>
		</div>
    </div>
  )
}

export default Error