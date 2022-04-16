import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ICountry {
  id: string
  name: string
  imageUrl: string
  description: string
  latLong?: number[]
  summary: string
}

export const baseUrl = '/api'
export const countriesUrl = '/countries'
const countriesTag = 'Countries'

export const countriesApi = createApi({
  reducerPath: 'countriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: [countriesTag],

  endpoints: (builder) => ({
    countries: builder.query<ICountry[], void>({
      query: () => countriesUrl,
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

