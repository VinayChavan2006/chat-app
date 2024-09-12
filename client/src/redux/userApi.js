
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'User',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:8000' }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
})

export const {useGetUserByIdQuery} = userApi