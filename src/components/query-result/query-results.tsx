import React from 'react'
import { ICountry, PagedCountries } from '../countries/countries-api'
import Loading from '../loading/loading'

export interface IQueryResultsProps {
  isLoading: boolean
  isFetching: boolean
  error: any
  data: PagedCountries<ICountry>
  children: React.ReactNode
}

const QueryResults = ({ isLoading, error, data, children }: IQueryResultsProps) => {
  if (error) {
    return <p>{error.data.errorMessage}</p>
  }
  if (isLoading) {
    return <Loading />
  }
  if (!data) {
    return <p>Nothing to show...</p>
  }
  if (data) {
    return <>{children}</>
  }
}

export default QueryResults