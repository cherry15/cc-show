import { rest } from 'msw'
import {
  ICountry,
  baseUrl,
  countriesUrl,
} from '../components/countries/countries-api'
import { CountriesData } from './countries-data'
import { v4 as uuidv4 } from 'uuid'

const url = `${baseUrl}${countriesUrl}`

export const handlers = [
  rest.get<ICountry[]>(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(CountriesData))
  }),

  rest.get<ICountry>(`${url}/:id`, (req, res, ctx) => {
    const { id } = req.params
    if (id) {
      const countryIndex = CountriesData.findIndex(
        (country) => country.id === id.toString()
      )
      if (countryIndex !== -1) {
        return res(ctx.json(CountriesData[countryIndex]), ctx.status(200))
      } else {
        return res(
          ctx.status(404),
          ctx.json({
            errorMessage: 'Country not found',
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

  rest.post<ICountry>(`${url}`, (req, res, ctx) => {
    if (req.body?.name) {
      const country: ICountry = {
        id: uuidv4(),
        ...req.body,
      }
      CountriesData.push(country)
      return res(ctx.status(201), ctx.json(country))
    }
    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: 'Something went wrong',
      }),
    )
  }),

  rest.delete(`${url}/:id`, (req, res, ctx) => {
    const { id } = req.params
    if (id) {
      const countryIndex = CountriesData.findIndex(
        (country) => country.id === id.toString()
      )
      if (countryIndex !== -1) {
        CountriesData.splice(countryIndex, 1)
        return res(ctx.status(200))
      } else {
        return res(
          ctx.status(400),
          ctx.json({
            errorMessage: 'Country not found',
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

  rest.put<ICountry>(`${url}/:id`, (req, res, ctx) => {
    const { id } = req.params
    if (id) {
      const countryIndex = CountriesData.findIndex(
        (country) => country.id === id.toString()
      )
      if (countryIndex !== -1) {
        CountriesData[countryIndex] = { ...req.body }
        return res(ctx.status(200))
      } else {
        return res(
          ctx.status(400),
          ctx.json({
            errorMessage: 'Country not found',
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

export const getCountriesException = rest.get<ICountry[]>(
  url,
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ errorMessage: 'Deliberately broken request' }))
)
