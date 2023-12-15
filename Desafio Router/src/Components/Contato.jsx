import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'

const Contato = () => {


  return (
    <section className={styles.contato}>
      <img src={foto} alt="" />

      <div>
         <h1>Entre em contato</h1>
         <ul>
          <li>
            edupaz@gmail.com
          </li>
         </ul>
      </div>
       
    </section>
  )
}

export default Contato