import React from 'react'
import CustomButton from '../custom-button/custom-button'
import { ICountry } from './countries-api'
import styles from './main-feature.module.css'

export interface IMainFeatureProps {
  country: ICountry
}

const MainFeature = ({ country }: IMainFeatureProps) => {
  const { name, imageUrl, summary } = country

  const openFeature = (event: React.MouseEvent<HTMLInputElement>): void => {
    event.preventDefault()
    console.log('open')
  }

  return (
    <div className={styles.mainFeatureContainer}>
      <div className={styles.mainFeature}>
        <picture>
          <source
            media="(max-width: 799px)"
            srcSet={`/images/480/${imageUrl}`}
            className="responsive-image"
          />
          <source
            media="(min-width: 800px)"
            srcSet={`/images/800/${imageUrl}`}
            className="responsive-image"
          />
          <img
            src={`/images/480/${imageUrl}`}
            alt={name}
            className="responsive-image"
          />
        </picture>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>{name}</h1>
          <h3 className={styles.summary}>{summary}</h3>
          <CustomButton
            type="button"
            value="Find out more"
            onClick={openFeature}
          />
        </div>
      </div>
      <div className={styles.mainAsideContainer}>
        <h3 className={styles.mainAside}>Duis in auctor diam?</h3>
        <h3 className={styles.mainAside}>Quisque a metus facilisis?</h3>
      </div>
    </div>
  )
}

export default MainFeature
