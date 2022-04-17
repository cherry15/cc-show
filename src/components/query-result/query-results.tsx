import React from 'react'
import { ICountry } from '../countries/countries-api'

export interface IQueryResultsProps {
  isLoading: boolean
  error: any
  data: ICountry[]
  children: React.ReactNode
}

const QueryResults = ({ isLoading, error, data, children }: IQueryResultsProps) => {
  if (error) {
    return <p>{error.data.errorMessage}</p>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (!data) {
    return <p>Nothing to show...</p>
  }
  if (data) {
    return <>{children}</>
  }
}

export default QueryResults