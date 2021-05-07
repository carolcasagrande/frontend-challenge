import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Home.module.css'

import background from "./../../img/music.jpg"

class Home extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper} style={{ backgroundImage: `url(${background})` }}>
          <h1 className={styles.title}>Quer encontrar o seu artista favorito?</h1>
          <button className={styles.btn}>Clique aqui</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
