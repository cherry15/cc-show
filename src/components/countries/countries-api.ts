import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ICountry {
  id: string
  name: string
  imageUrl: string
  description: string
  summary: string
  latLong?: number[]
  price?: number
  rating?: number
}

export interface PagedCountries<T> {
  page: number
  numberPerPage: number
  total: number
  totalPages: number
  data: T[]
}

export const createCountryId = (name: string): string => {
  return name.toLocaleLowerCase().replaceAll(' ', '-')
}

export const baseUrl = '/api'
export const countriesUrl = '/countries'
const countriesTag = 'Countries'

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: [countriesTag],

  endpoints: (builder) => ({
    countries: builder.query<PagedCountries<ICountry>, number | void>({
      query: (page = 1) => `${countriesUrl}?page=${page}`,
      providesTags: [countriesTag],
    }),

    country: builder.query<ICountry, string>({
      query: (id) => `${countriesUrl}/${id}`,
    }),

    addCountry: builder.mutation<void, ICountry>({
      query: (country) => ({
        url: countriesUrl,
        method: 'POST',
        body: country,
      }),
      invalidatesTags: [countriesTag],
    }),

    updateCountry: builder.mutation<void, ICountry>({
      query: ({ id, ...rest }) => ({
        url: `${countriesUrl}/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: [countriesTag],
    }),

    deleteCountry: builder.mutation<void, string>({
      query: (id) => ({
        url: `${countriesUrl}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [countriesTag],
    }),
  }),
})

export const {
  useCountriesQuery,
  useCountryQuery,
  useAddCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation,
} = countriesApi

