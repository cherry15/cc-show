import React from 'react'
import { ICountry } from '../countries/countries-api'
import Loading from '../loading/loading'

export interface IQueryResultProps {
  isLoading: boolean
  error: any
  data: ICountry
  children: React.ReactNode
}

const QueryResult = ({ isLoading, error, data, children }: IQueryResultProps) => {
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

export default QueryResult