import React, { useState } from 'react'
import AdminListItem from '../components/admin/admin-list-item'
import {
  ICountry,
  useCountriesQuery,
} from '../components/countries/countries-api'
import CustomButton from '../components/custom-button/custom-button'
import Loading from '../components/loading/loading'
import listStyles from '../styles/list.module.css'
import styles from './admin-home.module.css'

const AdminHome = () => {
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
      <div className={listStyles.container}>
        {countries?.data.map((country: ICountry) => {
          return (
            <div key={country.id}>
              <AdminListItem country={country} />
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

export default AdminHome
