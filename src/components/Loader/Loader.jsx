import React from 'react'
import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div >
    <div className={styles.container}>
      <svg className={styles.svg} viewBox="25 25 50 50">
      <circle className={styles.circle} r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  </div>
  )
}

export default Loader