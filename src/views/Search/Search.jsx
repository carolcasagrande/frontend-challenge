import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

class Search extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Home' }]}
          /* breadcrumb={[{ text: 'Encontre seu artista' }]}
          breadcrumb={[{ text: 'Artista' }]} */
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>SEARCH</h1>
          <button className={styles.btn}>ARTISTA</button>
        </div>
      </React.Fragment>
    )
  }
}

export default Search
