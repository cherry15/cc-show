import React from 'react'
import { NavLink } from 'react-router-dom'
import { ICountry } from '../countries/countries-api'
import styles from './admin-list-item.module.css'

export interface IAdminListItemProps {
  country: ICountry
}

const AdminListItem = ({ country }: IAdminListItemProps) => {
  const { name, summary, imageUrl, id } = country

  return (
    <div className={styles.adminItemContainer}>
      <div className={styles.adminItemHeader}>
        <h3>{name}</h3>
        <img
          src={`/images/100/${imageUrl}`}
          alt={name}
          className={styles.thumbnail}
        />
      </div>
      <p className={styles.summary}>{summary}</p>
      <NavLink
          to={`/countries/${id}`}
          className={styles.link}
        >More...</NavLink>
    </div>
  )
}

export default AdminListItem