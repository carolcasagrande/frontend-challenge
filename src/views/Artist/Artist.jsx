import React from 'react'

import { SubHeader } from 'components'
import { SomosClient } from 'utils'

import styles from './Artist.module.css'

import Star from './../../img/ouvindoquatro.png';

import Album1 from './../../img/ouvindoquatro.png';

import Album2 from './../../img/ouvindoquatro.png';

import Album3 from './../../img/ouvindoquatro.png';

import Album4 from './../../img/ouvindoquatro.png';

class Artist extends React.Component {
  state = {}

  client = new SomosClient()

  render() {
    return (
      <React.Fragment>
        <SubHeader
          breadcrumb={[{ text: 'Artist' }]}
          heading="Somos Front-end Challange"
        />
        <div className={styles.wrapperCards}>
          <h1>Pronto! O seu artista está aqui.</h1>
          <div className={styles.infoContainer}>
              <img className={styles.imgCard} src={Star} alt="Imagem do artista" />
              <div className={styles.infoCard}>
                <h3>Nome do Artista</h3>
                <p>💜💜💜🤍🤍</p>
                <p>POP</p>
              </div>
          </div>
          <div className={styles.discContainer}>
              <h2>Discografia</h2>
              <div className={styles.discContent}>
                <div className={styles.discCard}>
                  <img className={styles.imgAlbum} src={Album1} alt="Imagem do artista" />
                  <h4>Nome título 1</h4>
                  <p>10/05/2020</p>
                </div>
                <div className={styles.discCard}>
                  <img className={styles.imgAlbum} src={Album2} alt="Imagem do artista" />
                  <h4>Nome título 2</h4>
                  <p>10/05/2020</p>
                </div>
                <div className={styles.discCard}>
                  <img className={styles.imgAlbum} src={Album3} alt="Imagem do artista" />
                  <h4>Nome título 3</h4>
                  <p>10/05/2020</p>
                </div>
                <div className={styles.discCard}>
                  <img className={styles.imgAlbum} src={Album4} alt="Imagem do artista" />
                  <h4>Nome título 4</h4>
                  <p>10/05/2020</p>
                </div>
              </div>
              

          </div>
          
          
        </div>
      </React.Fragment>
    )
  }
}

export default Artist
