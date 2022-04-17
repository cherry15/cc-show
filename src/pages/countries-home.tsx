import React from 'react'
import {
  ICountry,
  useCountriesQuery,
} from '../components/countries/countries-api'
import MainFeature from '../components/countries/main-feature'
import SubFeature from '../components/countries/sub-feature'
import QueryResults from '../components/query-result/query-results'
import styles from './countries-home.module.css'
import listStyles from '../styles/list.module.css'

const CountriesHome = () => {
  const { data, error, isLoading } = useCountriesQuery()
  return (
    <QueryResults error={error} isLoading={isLoading} data={data}>
      {data?.length && <MainFeature country={data[0]} />}
      <div className={listStyles.container}>
        {data?.map((country: ICountry) => {
          return (
            <div key={country.id} className={styles.countriesHome}>
              <SubFeature country={country} />
            </div>
          )
        })}
      </div>
    </QueryResults>
  )
}

export default CountriesHome
