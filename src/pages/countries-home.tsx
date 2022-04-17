import React from 'react'
import {
  ICountry,
  useCountriesQuery,
} from '../components/countries/countries-api'
import MainFeature from '../components/countries/main-feature'
import SubFeature from '../components/countries/sub-feature'
import QueryResults from '../components/query-result/query-results'
import styles from './countries-home.module.css'

const CountriesHome = () => {
  const { data, error, isLoading } = useCountriesQuery()
  return (
    <QueryResults error={error} isLoading={isLoading} data={data}>
      <div className={styles.countriesHomeContainer} >
      {data?.map((country: ICountry, index: number) => {
        return (
          <div key={country.id} className={styles.countriesHome}>
          { index === 0 
            ? <MainFeature country={country} />
            : <SubFeature country={country} />
          }
          </div>
        )
      })}
      </div>
    </QueryResults>
  )
}

export default CountriesHome
