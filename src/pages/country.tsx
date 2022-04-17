import React from 'react'
import { useParams } from 'react-router-dom'
import { useCountryQuery } from '../components/countries/countries-api'
import CountryDetail from '../components/countries/country-detail'
import QueryResult from '../components/query-result/query-result'

const Country = () => {
  let params = useParams()
  const { data, error, isLoading } = useCountryQuery(params.id)
  return (
    <QueryResult error={error} isLoading={isLoading} data={data}>
      <CountryDetail country={data} />
    </QueryResult>
  )
}

export default Country
