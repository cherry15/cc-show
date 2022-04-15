import { rest } from 'msw'
import {
  IEmployee,
  baseUrl,
  employeesUrl,
} from '../components/employee/employee-api'
import { EmployeesData } from './employee-data'
import { v4 as uuidv4 } from 'uuid'

const url = `${baseUrl}${employeesUrl}`

export const handlers = [
  rest.get<IEmployee[]>(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(EmployeesData))
  }),

  rest.get<IEmployee>(`${url}/:employeeId`, (req, res, ctx) => {
    const { employeeId } = req.params
    if (employeeId) {
      const employeeIndex = EmployeesData.findIndex(
        (employee) => employee.id === employeeId.toString()
      )
      if (employeeIndex !== -1) {
        return res(ctx.json(EmployeesData[employeeIndex]), ctx.status(200))
      } else {
        return res(
          ctx.status(404),
          ctx.json({
            errorMessage: 'Employee not found',
          }),
        )
      }
    }
    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: 'Something went wrong',
      }),
    )
  }),

  rest.post<IEmployee>(`${url}`, (req, res, ctx) => {
    if (req.body?.name) {
      const employee: IEmployee = {
        id: uuidv4(),
        ...req.body,
      }
      EmployeesData.push(employee)
      return res(ctx.status(201), ctx.json(employee))
    }
    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: 'Something went wrong',
      }),
    )
  }),

  rest.delete(`${url}/:employeeId`, (req, res, ctx) => {
    const { employeeId } = req.params
    if (employeeId) {
      const employeeIndex = EmployeesData.findIndex(
        (employee) => employee.id === employeeId.toString()
      )
      if (employeeIndex !== -1) {
        EmployeesData.splice(employeeIndex, 1)
        return res(ctx.status(200))
      } else {
        return res(
          ctx.status(400),
          ctx.json({
            errorMessage: 'Employee not found',
          }),
        )
      }
    }
    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: 'Something went wrong',
      }),
    )
  }),

  rest.put<IEmployee>(`${url}/:employeeId`, (req, res, ctx) => {
    const { employeeId } = req.params
    if (employeeId) {
      const employeeIndex = EmployeesData.findIndex(
        (employee) => employee.id === employeeId.toString()
      )
      if (employeeIndex !== -1) {
        EmployeesData[employeeIndex] = { ...req.body }
        return res(ctx.status(200))
      } else {
        return res(
          ctx.status(400),
          ctx.json({
            errorMessage: 'Employee not found',
          }),
        )
      }
    }
    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: 'Something went wrong',
      }),
    )
  }),
]

export const getEmloyeesException = rest.get<IEmployee[]>(
  url,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ errorMessage: 'Deliberately broken request' }))
)
