import React from 'react'
import { ICountry } from './countries-api'
import './country-detail.css'

export interface ICountryDetailProps {
  country: ICountry
}

const CountryDetail = ({ country }: ICountryDetailProps) => {
  const { name, imageUrl } = country

  return (
    <>
      <h1>{name}</h1>
      <picture>
        <source media="(max-width: 799px)" srcSet={`/images/480${imageUrl}`} className='image' />
        <source media="(min-width: 800px)" srcSet={`/images/800${imageUrl}`} className='image' />
        <img src={`/images/480${imageUrl}`} alt={name} className='image'/>
    </picture>
    </>
  )
}

export default CountryDetail