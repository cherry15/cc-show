import React, { useState } from 'react'
import { ICountry, useCountriesQuery } from '../countries/countries-api'
import MainFeature from '../countries/main-feature'
import SubFeature from '../countries/sub-feature'
import listStyles from '../../styles/list.module.css'
import styles from '../../pages/countries-home.module.css'
import Loading from '../loading/loading'

const CountriesManager = () => {
  const [page, setPage] = useState(1)
  const { data: countries, isLoading } = useCountriesQuery(page)

  const previous = () => {
    if(page > 1) {
      setPage(page - 1)
    }
  }

  const next = () => {
    if(page < countries.totalPages) {
      setPage(page + 1)
    }
  }

  if (isLoading) {
    return <Loading />
  }

  if (!countries?.data) {
    return <h2> Sorry there are no countries to display :(</h2>
  }

  return (
    <div>
      {countries?.data.length && <MainFeature country={countries?.data[0]} />}
      <div className={listStyles.container}>
        {countries?.data.map((country: ICountry) => {
          return (
            <div key={country.id} className={styles.countriesHome}>
              <SubFeature country={country} />
            </div>
          )
        })}
      </div>
      <button onClick={previous} disabled={page === 1}>Previous</button>
      <button onClick={next} disabled={page >= countries.totalPages }>Next</button>
    </div>
  )
}

export default CountriesManager
