import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ICountry, useDeleteCountryMutation } from '../countries/countries-api'
import CustomButton from '../custom-button/custom-button'
import styles from './admin-list-item.module.css'
import { Modal } from '../modal/modal'
import { CountriesMessages } from '../countries/countries-messages'

export interface IAdminListItemProps {
  country: ICountry
}

const AdminListItem = ({ country }: IAdminListItemProps) => {
  const { name, summary, imageUrl, id } = country
  const [showModal, setShowModal] = useState(false)
  const [deleteCountry] = useDeleteCountryMutation()

  const openModal = (event: React.MouseEvent): void => {
    event.preventDefault()
    setShowModal(true)
  }

  const closeModal = (event: React.MouseEvent): void => {
    event.preventDefault()
    setShowModal(false)
  }

  const delCountry = async (event: React.MouseEvent<HTMLInputElement>): Promise<void> => {
    event.preventDefault()
    setShowModal(false)
    await deleteCountry(id)
  }

  return (
    <>
    {showModal && <Modal modalTitle={CountriesMessages.delete} onCancel={closeModal} onOK={delCountry} >
    {`${CountriesMessages.confirmDelete} ${name}?`}
    </Modal>}
    <div className={styles.adminListItemContainer}>
      <h3 className={styles.title}>{name}</h3>
      <CustomButton
        type="button"
        buttonStyle="delete"
        aria="Delete country"
        onClick={(event) => openModal(event)}
      />
      <img
        src={`/images/100/${imageUrl}`}
        alt={name}
        className={styles.thumbnail}
      />
      <p className={styles.summary}>{summary}</p>
      <NavLink to={`/countries/${id}`} className={styles.link}>
        More...
      </NavLink>
    </div>
  </>
  )
}

export default AdminListItem
