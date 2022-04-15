import React from 'react'
import { IEmployee } from './employee-api'

export interface IEmployeeDetailProps {
  employee: IEmployee
}

const EmployeeDetail = ({ employee }: IEmployeeDetailProps) => {
  const { name, imageUrl } = employee
  return (
    <>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
    </>
  )
}

export default EmployeeDetail

