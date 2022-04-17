import React from 'react'
import { ICountry } from './countries-api'
import styles from './sub-feature.module.css'

export interface ISubFeatureProps {
  country: ICountry
}

const SubFeature = ({ country }: ISubFeatureProps) => {
  const { name, summary, imageUrl } = country

  return (
    <div className={styles.subFeatureContainer}>
      <div className={styles.subFeatureHeader}>
        <h3>{name}</h3>
        <img
          src={`/images/100/${imageUrl}`}
          alt={name}
          className={styles.thumbnail}
        />
      </div>
      <p className={styles.summary}>{summary}</p>
    </div>
  )
}

export default SubFeature
