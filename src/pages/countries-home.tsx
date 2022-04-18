import React, { useState } from 'react'
import {
  ICountry,
  useCountriesQuery,
} from '../components/countries/countries-api'
import MainFeature from '../components/countries/main-feature'
import SubFeature from '../components/countries/sub-feature'
import CustomButton from '../components/custom-button/custom-button'
import Loading from '../components/loading/loading'
import listStyles from '../styles/list.module.css'
import styles from './countries-home.module.css'

const CountriesHome = () => {
  const [page, setPage] = useState(1)
  const { data: countries, isLoading } = useCountriesQuery(page)

  const previous = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const next = () => {
    if (page < countries.totalPages) {
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
      <div className={styles.buttonContainer}>
        <CustomButton
          type="button"
          value="Back"
          onClick={previous}
          disabled={page === 1}
        />
        <CustomButton
          type="button"
          value="Next"
          onClick={next}
          disabled={page >= countries.totalPages}
        />
      </div>
    </div>
  )
}

export default CountriesHome
