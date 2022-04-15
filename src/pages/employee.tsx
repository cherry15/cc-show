import React from 'react'
import { useParams } from 'react-router-dom'
import { useEmployeeQuery } from '../components/employee/employee-api'
import EmployeeDetail from '../components/employee/employee-detail'
import QueryResult from '../components/query-result/query-result'

const Employee = () => {
  let params = useParams()
  const { data, error, isLoading } = useEmployeeQuery(params.id)
  return (
    <div>
      <QueryResult error={error} isLoading={isLoading} data={data}>
        <EmployeeDetail employee={data} />
      </QueryResult>
    </div>
  )
}

export default Employee
