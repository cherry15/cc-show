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
      <p>{summary}</p>
      <p>{description}</p>
    </div>
  )
}

export default CountryDetail
