import React from 'react'
import { NavLink } from 'react-router-dom'
import { ICountry } from '../countries/countries-api'
import CustomButton from '../custom-button/custom-button'
import styles from './admin-list-item.module.css'

export interface IAdminListItemProps {
  country: ICountry
}

const AdminListItem = ({ country }: IAdminListItemProps) => {
  const { name, summary, imageUrl, id } = country

  const onOpenModal = (event: React.MouseEvent, country: ICountry): void => {
    console.log('delete', country)
  }

  return (
    <div className={styles.adminListItemContainer}>
      <div className={styles.adminListItemHeader}>
        <h3 className={styles.title}>{name}</h3>
        <CustomButton type="button" buttonStyle="delete" aria="Delete country" onClick={(event) => onOpenModal(event, country)} />
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