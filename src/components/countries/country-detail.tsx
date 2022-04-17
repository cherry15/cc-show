import React from 'react'
import { ICountry } from './countries-api'
import styles from './country-detail.module.css'

export interface ICountryDetailProps {
  country: ICountry
}

const CountryDetail = ({ country }: ICountryDetailProps) => {
  const { name, imageUrl, summary, description } = country

  return (
    <div className={styles.countryDetail}>
      <h1>{name}</h1>
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
      <h3 className={styles.summary}>{summary}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default CountryDetail
