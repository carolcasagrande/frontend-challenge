import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Search.module.css'

import Img from './../../img/ouvindoquatro.png';

class Search extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Search' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapperBusca}>
          <h1>Aqui o show é na sua casa \o/ Encontre o seu artista favorito.</h1>
          <img src={Img} alt="Ouvindo música" />
          <div className={styles.busca}>
            <form action="">
              <input type="text" placeholder="Digite o artista que você quer ouvir" />
            </form>
            <button className={styles.btnBusca} type="submit">Procurar</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Search
